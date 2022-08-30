import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {
  useCallback,
  useEffect,
  // useCallback,
  useState,
} from 'react';
// import {useIsFocused} from '@react-navigation/native';
import Feed from '../components/feed/Feed';
import theme from '../assets/theme';
import NowDate from '../components/feed/NowDate';
import Hello from '../components/feed/Hello';
import {getUser} from '../api/auth';
import {
  useQuery,
  // , useMutation
} from 'react-query';
import {getAllMessage} from '../api/message/index';
// import messaging from '@react-native-firebase/messaging';
// import {useAsyncStorage} from '@react-native-async-storage/async-storage';
// import {sendFCMToken} from '../api/fcm';
import {Message} from '../api/message/types';
import {useIsFocused} from '@react-navigation/native';

const LENGTH = 10;

function FeedScreen() {
  const [cursor, setCursor] = useState<number>(0);
  const [Messages, setMessages] = useState<Message[]>([]);
  const [noMorePost, setNoMorePost] = useState<boolean>(false);
  const isFocused = useIsFocused();
  const {isLoading: isMessageLoading, refetch: feedRefetch} = useQuery(
    'getAllMessage',
    () => getAllMessage(cursor),
    {
      refetchOnMount: 'always',
      onSuccess: data => {
        if (data.length < LENGTH) {
          setNoMorePost(true);
        }
        if (cursor === 0) {
          setMessages(data);
        } else if (data.length !== 0) {
          setMessages(Messages.concat(data));
          setCursor(data[data.length - 1].postId);
        }
        setRefreshing(false);
      },
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
  // const {mutate: sendToken} = useMutation(sendFCMToken, {
  //   onSuccess: () => {
  //     console.log('Success!');
  //   },
  // });

  // const {getItem: getFcmItem, setItem: setFcmItem} =
  //   useAsyncStorage('fcmToken');

  // const getFcmToken = useCallback(async () => {
  //   const fcmFS = await getFcmItem();
  //   const fcmToken = await messaging().getToken();
  //   if (fcmFS !== fcmToken) {
  //     setFcmItem(fcmToken); // 회원가입, 로그인할 때 활용
  //   }
  //   console.log('🚒fcm token', fcmToken);
  //   sendToken(fcmToken);
  // }, [getFcmItem, setFcmItem, sendToken]);
  // useEffect(() => {
  //   messaging().requestPermission();
  //   messaging().registerDeviceForRemoteMessages();
  //   getFcmToken();
  // }, [getFcmToken]);

  const nowYear = new Date().getFullYear();
  const nowMonth = new Date().getMonth() + 1;
  const nowDate = new Date().getDate();
  const yymmdd = nowYear + '년 ' + nowMonth + '월 ' + nowDate + '일';
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (isFocused) {
      feedRefetch();
    }
  }, [isFocused, feedRefetch]);

  // 스크롤이 끝에 인접하면 실행
  const onEndReached = () => {
    feedRefetch();
  };

  // 새로고침 실행
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setCursor(0);
    feedRefetch();
  }, [feedRefetch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {isMessageLoading ? (
          <ActivityIndicator />
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
            onEndReachedThreshold={0.5}
            onRefresh={onRefresh}
            refreshing={refreshing}
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
