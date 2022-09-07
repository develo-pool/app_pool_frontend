import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ActivityIndicator,
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

function FeedScreen() {
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
        if (data.length < LENGTH) {
          setNoMorePost(true);
        }
        if (data.length !== 0) {
          setMessages(Messages.concat(data));
        }
        if (cursor === 0) {
          setMessages(Messages.concat(data));
        }
        setCursor(data[data.length - 1]?.postId);
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

  const onEndReached = () => {
    feedRefetch();
  };

  // 새로고침 실행
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    // queryClient.invalidateQueries('getAllMessage')
    // setCursor(0);
    feedRefetch();
  }, [feedRefetch]);

  useEffect(() => {
    if (isFocused) {
      onRefresh();
    }
    setRefreshing(true);
    feedRefetch();
  }, [isFocused, feedRefetch, onRefresh]);

  // 스크롤이 끝에 인접하면 실행

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
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
