import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import Title from '../components/Title';
import Feed from '../components/Feed';

interface Props {
  user: User | undefined;
  commentText: string;
  commentDate: number;
}
// 얘네는 코멘트를 작성한 유저들 !
interface User {
  name: string;
  profileImg: string;
}
// 유저 예시를 위한 dain 객체
const beom: User = {
  name: '다인님 제발',
  profileImg: 'https://reactnative.dev/img/tiny_logo.png',
};

function FeedScreen() {
  return (
    <View>
      <ScrollView>
        <Title title="피드" />
        <View>
          <Text>2</Text>
          <Text>팔로잉</Text>
        </View>
        <Feed/>

        {/* <View style={styles.feedContainer}>
          <View style={styles.feedOwner}>
            <View>
              <Image
                style={styles.feedOwnerProfileImg}
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
              />
              <Text style={styles.feedOwnerUsername}>이이이도도도하하하</Text>
            </View>
            <Text style={styles.feedDate}>방금 전</Text>
          </View>
          <View style={styles.feed}>
            <Text style={styles.feedText}>이거슨 피드본문</Text>
            <Image
              style={styles.feedImg}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Text style={styles.feedLink}>이거슨 피드링크</Text>
          </View>
          <View>
            <Text>💚</Text>
            <Text>답장완료</Text>
            <Text>답장하기</Text>
          </View>
        </View> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  feedContainer: {},
  feedOwner: {},
  feedOwnerProfileImg: {},
  feedOwnerUsername: {},
  feedDate: {},
  feed: {},
  feedText: {},
  feedImg: {},
  feedLink: {},
});

export default FeedScreen;
