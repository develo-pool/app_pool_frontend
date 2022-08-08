import {Text, View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Title from '../components/Title';
import Feed from '../components/Feed';

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
    <View>
      <ScrollView>
        <View style={styles.feedScreenHeader}>
          <Title title="피드" />
          <View style={styles.followingCount}>
            <Text style={styles.followingCountText}>2</Text>
            <Text style={styles.followingCountText}>팔로잉</Text>
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
  feedScreenHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  followingCount: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  followingCountText: {
    fontSize: 18,
  },
});

export default FeedScreen;
