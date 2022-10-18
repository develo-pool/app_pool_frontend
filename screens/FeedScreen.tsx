import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import Feed from '../components/feed/Feed';
import theme from '../assets/theme';
import NowDate from '../components/feed/NowDate';
import Hello from '../components/feed/Hello';
import {getUser} from '../api/auth';
import {
  useQuery,
  // useQueryClient,
} from 'react-query';
import {getAllMessage} from '../api/message/index';
import {Message} from '../api/message/types';
import {useIsFocused} from '@react-navigation/native';

const LENGTH = 10;

// const supportedURL = 'pool://searchscreen';

// const unsupportedURL = 'slack://open?team=123456';

// const OpenURLButton = ({url, children}) => {
//   const handlePress = useCallback(async () => {
//     // Checking if the link is supported for links with custom URL scheme.
//     const supported = await Linking.canOpenURL(url);

//     if (supported) {
//       // Opening the link with some app, if the URL scheme is "http" the web link should be opened
//       // by some browser in the mobile
//       await Linking.openURL(url);
//     } else {
//       Alert.alert(`Don't know how to open this URL: ${url}`);
//     }
//   }, [url]);

//   return <Button title={children} onPress={handlePress} />;
// };

// const useMount = (func : any) => useEffect(() => func(), []);

// const useInitialURL = () => {
//   const [url, setUrl] = useState(null);
//   const [processing, setProcessing] = useState(true);

//   useMount(() => {
//     const getUrlAsync = async () => {
//       // Get the deep link used to open the app
//       const initialUrl = await Linking.getInitialURL();

//       // The setTimeout is just for testing purpose
//       setTimeout(() => {
//         setUrl(initialUrl);
//         setProcessing(false);
//       }, 1000);
//     };

//     getUrlAsync();
//   });

//   return { url, processing };
// };

function FeedScreen() {
  // const { url: initialUrl, processing } = useInitialURL();

  const [cursor, setCursor] = useState<number>(0);
  const [Messages, setMessages] = useState<Message[]>([]);
  const [noMorePost, setNoMorePost] = useState<boolean>(false);
  const isFocused = useIsFocused();
  // const queryClient = useQueryClient();
  const {isLoading: isMessageLoading, refetch: feedRefetch} = useQuery(
    'getAllMessage',
    () => getAllMessage(cursor),
    {
      onSuccess: data => {
        // console.log(Messages);
        if (noMorePost) {
          setRefreshing(false);
          return '';
        }
        if (cursor === 0) {
          setMessages(Messages.concat(data));
        }
        if (data.length < LENGTH) {
          setNoMorePost(true);
        }
        if (data.length !== 0) {
          setMessages(Messages.concat(data));
          setCursor(data[data.length - 1]?.postId);
        }
        setRefreshing(false);
      },
      refetchOnMount: 'always',
    },
  );
  const RenderItem = ({item}) => {
    return (
      <Feed
        key={item.postId}
        postId={item.postId}
        body={item.body}
        messageLink={item.messageLink}
        filePath={item.filePath}
        writerDto={item.writerDto}
        commentAble={item.commentAble}
        isWriter={item.isWriter}
        create_date={item.create_date}
        commentCount={item.commentCount}
      />
    );
  };

  const {data: userData} = useQuery('getUserResult', () => getUser(), {
    refetchOnMount: 'always',
  });

  const nowYear = new Date().getFullYear();
  const nowMonth = new Date().getMonth() + 1;
  const nowDate = new Date().getDate();
  const yymmdd = nowYear + '년 ' + nowMonth + '월 ' + nowDate + '일';
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (isFocused) {
      setRefreshing(true);
      feedRefetch();
    }
  }, [isFocused, feedRefetch]);

  // 스크롤이 끝에 인접하면 실행
  const onEndReached = () => {
    feedRefetch();
  };

  // 새로고침 실행
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    // queryClient.invalidateQueries('getAllMessage')
    setCursor(0);
    feedRefetch();
  }, [feedRefetch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
        <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
        <Text>
        {processing
          ? `Processing the initial url from a deep link`
          : `The deep link is: ${initialUrl || "None"}`}
      </Text> */}
        {isMessageLoading ? (
          <ActivityIndicator style={styles.indicator} />
        ) : Messages.length === 0 ? (
          <>
            <View>
              <Hello name={userData?.nickName} />
              <NowDate msgDate={yymmdd} />
            </View>
            <View
              style={
                Messages?.length === 0
                  ? styles.noMessageContainer
                  : styles.isMessageContainer
              }>
              <Image
                style={styles.noMessage}
                source={require('../assets/NoMessage.png')}
                resizeMode="contain"
              />
            </View>
          </>
        ) : (
          <FlatList
            data={Messages}
            renderItem={RenderItem}
            showsVerticalScrollIndicator={false}
            onEndReached={() => {
              if (!noMorePost) {
                onEndReached();
              }
            }}
            onEndReachedThreshold={0.6}
            onRefresh={onRefresh}
            refreshing={refreshing}
            refreshControl={
              <RefreshControl onRefresh={feedRefetch} refreshing={refreshing} />
            }
            ListHeaderComponent={
              <View>
                <Hello name={userData?.nickName} />
                <NowDate msgDate={yymmdd} />
              </View>
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.colors.White,
  },
  indicator: {
    marginTop: 32,
  },
  container: {
    paddingHorizontal: 16,
    backgroundColor: theme.colors.White,
    // paddingTop: 30,
    height: '100%',
  },
  noMessage: {
    width: 151,
    height: 96,
  },
  noMessageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
  isMessageContainer: {
    width: 0,
    height: 0,
    opacity: 0,
  },
});

export default FeedScreen;
