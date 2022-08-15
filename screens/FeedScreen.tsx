import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import Feed from '../components/feed/Feed';
import theme from '../assets/theme';
import NowDate from '../components/feed/NowDate';
import Hello from '../components/feed/Hello';
import {getUser} from '../api/auth';
// get방식 -> useQuery
import {useQuery} from 'react-query';

interface User {
  name: string;
  profileImg: string;
}
interface Message {
  user: User | undefined;
  msgText?: string;
  msgImg?: string;
  msgLink?: string;
  msgDate: string;
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
  const {data: userData} = useQuery('getUserResult', () => getUser(), {
    refetchOnMount: 'always',
  });
  console.log(userData?.nickName);
  const today = new Date();
  const yy = today.getFullYear().toString().substring(2, 4);
  const mm = today.getMonth();
  const dd = today.getDay();
  const yymmdd = yy + '년 ' + mm + '월 ' + dd + '일';

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <Pressable onPress={() => refetchGetUser()}>
          <Text>요청</Text>
        </Pressable> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <Hello name={userData?.nickName} />
          <NowDate msgDate={yymmdd} />
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
