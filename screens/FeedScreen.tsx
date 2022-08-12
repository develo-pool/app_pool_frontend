import {View, StyleSheet, ScrollView, SafeAreaView, Pressable, Text} from 'react-native';
import React from 'react';
import Feed from '../components/feed/Feed';
import {usernameExist} from '../api/auth';
import theme from '../assets/theme';
import NowDate from '../components/feed/NowDate';
import Hello from '../components/feed/Hello';
import {getUser} from '../api/auth';
import {useQuery} from 'react-query';
import {RefreshToken} from '../api/auth/types';
import jwtDecode from 'jwt-decode';
import client from '../api/client';
import authStorage from '../storages/authStorage';

interface User {
  name: string;
  profileImg: string;
}
interface Message {
  user: User | undefined;
  msgText?: string;
  msgImg?: string;
  msgLink?: string;
  msgDate: number;
  isComment: boolean;
}

// 유저 예시를 위한 doha 객체
const doha: User = {
  name: '엄지렐라',
  profileImg:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpX76CrHxujOncRrHo9XMHks7UTYRpIbM_Mw&usqp=CAU',
};
// 메시지 예시를 위한 test 객체
const test: Message = {
  user: doha,
  isComment: false,
  msgImg: 'https://reactnative.dev/img/tiny_logo.png',
  msgLink: 'www.blank.com',
  msgText: '흐하하하핳하하하하하핳 이도하 어서 API를 내놔라',
  msgDate: Date.now(),
};

function FeedScreen() {
  const auth = authStorage.get();
  const {refetch: refetchGetUser} = useQuery(
    'getUser',
    () => {
      console.log('request!');
      console.log(auth);
      const decodedRefreshToken: RefreshToken = jwtDecode(
        String(client.defaults.headers.common.Authorization),
      );
      // console.log(decodedRefreshToken.exp * 1000);
      const date = new Date();
      // console.log(date.getTime());
      getUser().then(value => {
        console.log(value);
      });
    },
    {
      enabled: false,
    },
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable onPress={() => refetchGetUser()}>
          <Text>요청</Text>
        </Pressable>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Hello name={doha.name} />
          <NowDate msgDate={Date.now()} />
          <Feed user={doha} message={test} />
          <Feed user={doha} message={test} />
          <Feed user={doha} message={test} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: theme.colors.White,
    paddingTop: 30,
  },
});

export default FeedScreen;
