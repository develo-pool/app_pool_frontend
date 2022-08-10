import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Feed from '../components/feed/Feed';
import {usernameExist} from '../api/auth';
import theme from '../assets/theme';

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
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.feedScreenHeader}>
          <View>
            <View style={styles.centerAlign}>
              <Text style={styles.welcome}>안녕하세요</Text>
              <Text style={styles.welcomeUsername}>{doha.name}</Text>
              <Text style={styles.welcome}>님 :)</Text>
            </View>
            <View style={styles.centerAlign}>
              <Text style={styles.welcome}>오늘의 메시지를 확인해 보세요</Text>
            </View>
          </View>
          <View style={styles.date}>
            <Text style={styles.today}>Today</Text>
            <Text style={styles.dateNow}>{Date.now()}</Text>
          </View>
        </View>
        <Feed user={doha} message={test} />
        <Feed user={doha} message={test} />
        <Feed user={doha} message={test} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: theme.colors.White,
  },
  feedScreenHeader: {
  },
  followingCount: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  followingCountText: {
    fontSize: 18,
  },
  centerAlign: {
    height: 26,
    alignItems: 'center',
    flexDirection: 'row',
  },
  welcome: {
    fontSize: theme.fontSize.H4,
    fontWeight: theme.fontWeight.Bold,
    fontFamily: theme.fontFamily.Pretendard,
  },
  welcomeUsername: {
    fontSize: theme.fontSize.H4,
    fontWeight: theme.fontWeight.Bold,
    fontFamily: theme.fontFamily.Pretendard,
    color: theme.colors.Poolgreen,
    marginLeft: 4,
  },
  date: {
    height: 26,
    width: 131,
    backgroundColor: theme.colors.Skyblue,
    borderRadius: 13,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 40,
  },
  today: {
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    marginLeft: 10,
  },
  dateNow: {
    fontSize: theme.fontSize.P3,
    marginRight: 10,
    marginLeft: 6,
  },
});

export default FeedScreen;
