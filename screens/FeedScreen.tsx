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
  isComment?: boolean;
  isImg?: boolean;
  isLink?: boolean;
}

// 유저 예시를 위한 doha 객체
const doha: User = {
  name: '이이이도도도하하하',
  profileImg: 'https://reactnative.dev/img/tiny_logo.png',
};
// 메시지 예시를 위한 test 객체
const test: Message = {
  user: doha,
  isComment: false,
  isImg: true,
  isLink: false,
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
        <Feed user={doha} message={test} isProfile={false} />
        <Feed user={doha} message={test} isProfile={false} />
        <Feed user={doha} message={test} isProfile={false} />
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
