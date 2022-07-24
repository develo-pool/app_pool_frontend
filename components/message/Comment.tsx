import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

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
  name: '김제인',
  profileImg: 'https://reactnative.dev/img/tiny_logo.png',
};
// 사용 시에는 user 프롭스를 아래에 넣어주세용
function Comment({commentText, commentDate}: Props) {
  return (
    <View>
      <View style={styles.commentUser}>
        <View style={styles.align}>
          <Image
            style={styles.commentProfileImg}
            source={{uri: `${beom.profileImg}`}}
          />
          <Text>{beom.name}</Text>
        </View>
        <Text style={styles.align}>{commentDate}</Text>
      </View>

      <View style={styles.commentText}>
        <Text>{commentText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commentBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commentProfileImg: {
    width: 30,
    height: 30,
    // backgroundColor: '#000000',
    borderRadius: 15,
    marginVertical: 10,
    marginRight: 5,
  },
  commentUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  commentText: {
    marginHorizontal: 20,
  },
  align: {flexDirection: 'row', alignItems: 'center'},
});

export default Comment;
