import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';

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

function FeedScreen() {
  const [cursor, setCorsur] = useState(0);
  const [allMessage, setAllMessage] = useState([]);
  const {data: userData} = useQuery('getUserResult', () => getUser(), {
    refetchOnMount: 'always',
  });
  const {data: allMessageData, refetch} = useQuery(
    'getAllMessage',
    () => getAllMessage(cursor),
    {enabled: false},
  );

  // const {mutate: sendToken} = useMutation(sendFCMToken, {
  //   onSuccess: () => {
  //     console.log('Success!');
  //   },
  // });

  useEffect(() => {
    if (userData?.userFollowingCount !== 0) {
      refetch();
      if (allMessageData !== undefined) {
        setCorsur(allMessageData.length);
      }
    }
  }, [userData, refetch, allMessageData, cursor]);

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
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const getData = async () => {
    if (allMessageData !== undefined && allMessageData.length >= 10) {
      setLoading(true);
      await getAllMessage(cursor);
      setLoading(false);
    }
  };
  const onEndReached = () => {
    if (!loading) {
      getData();
    }
  };
  const getRefreshData = async () => {
    setRefreshing(true);
    await getAllMessage(cursor);
    setRefreshing(false);
  };

  const onRefresh = () => {
    if (!refreshing) {
      getRefreshData();
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={allMessageData}
          style={styles.container}
          showsVerticalScrollIndicator={false}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.8}
          onRefresh={onRefresh}
          refreshing={refreshing}
          ListHeaderComponent={
            <View>
              <Hello name={userData?.nickName} />
              <NowDate msgDate={yymmdd} />
            </View>
          }
          ListFooterComponent={
            <View
              style={
                allMessageData?.length === 0
                  ? styles.noMessageContainer
                  : styles.isMessageContainer
              }>
              <Image
                style={styles.noMessage}
                source={require('../assets/NoMessage.png')}
                resizeMode="contain"
              />
            </View>
          }
          renderItem={({item}) => {
            const {
              postId,
              body,
              messageLink,
              filePath,
              writerDto,
              commentAble,
              isWriter,
              create_date,
            } = item;
            return (
              <Feed
                key={postId}
                postId={postId}
                body={body}
                messageLink={messageLink}
                filePath={filePath}
                writerDto={writerDto}
                commentAble={commentAble}
                isWriter={isWriter}
                create_date={create_date}
              />
            );
          }}></FlatList>
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          <Hello name={userData?.nickName} />
          <NowDate msgDate={yymmdd} />
          {allMessageData?.map(messages => {
            return (
              <Feed
                key={messages.postId}
                postId={messages.postId}
                body={messages.body}
                messageLink={messages.messageLink}
                filePath={messages.filePath}
                writerDto={messages.writerDto}
                commentAble={messages.commentAble}
                isWriter={messages.isWriter}
                create_date={messages.create_date}
              />
            );
          })}

          <View
            style={
              allMessageData?.length === 0
                ? styles.noMessageContainer
                : styles.isMessageContainer
            }>
            <Image
              style={styles.noMessage}
              source={require('../assets/NoMessage.png')}
              resizeMode="contain"
            />
          </View>
        </ScrollView> */}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
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
