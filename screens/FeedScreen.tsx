import {View, StyleSheet, ScrollView, SafeAreaView, Image} from 'react-native';
import React, {useEffect} from 'react';
import Feed from '../components/feed/Feed';
import theme from '../assets/theme';
import NowDate from '../components/feed/NowDate';
import Hello from '../components/feed/Hello';
import {getUser} from '../api/auth';
import {useQuery, useMutation} from 'react-query';
import {getAllMessage} from '../api/message/index';
import messaging from '@react-native-firebase/messaging';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {sendFCMToken} from '../api/fcm';

function FeedScreen() {
  const {data: userData} = useQuery('getUserResult', () => getUser(), {
    refetchOnMount: 'always',
  });
  const {data: allMessageData, refetch} = useQuery(
    'getAllMessage',
    () => getAllMessage(),
    {enabled: false},
  );
  const {mutate: sendToken} = useMutation(sendFCMToken, {
    onSuccess: () => {
      console.log('Success!');
    },
  });

  useEffect(() => {
    if (userData?.userFollowingCount !== 0) {
      refetch();
    }
  }, [userData, refetch]);
  const {getItem: getFcmItem, setItem: setFcmItem} =
    useAsyncStorage('fcmToken');

  const getFcmToken = async () => {
    const fcmFS = await getFcmItem();
    const fcmToken = await messaging().getToken();
    if (fcmFS !== fcmToken) {
      setFcmItem(fcmToken); // 회원가입, 로그인할 때 활용
    }
    console.log('🚒fcm token', fcmToken);
    sendToken(fcmToken);
  };

  useEffect(() => {
    messaging().requestPermission();
    messaging().registerDeviceForRemoteMessages();
    getFcmToken();
  }, []);

  const nowYear = new Date().getFullYear();
  const nowMonth = new Date().getMonth() + 1;
  const nowDate = new Date().getDate();
  const yymmdd = nowYear + '년 ' + nowMonth + '월 ' + nowDate + '일';
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
        </ScrollView>
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
