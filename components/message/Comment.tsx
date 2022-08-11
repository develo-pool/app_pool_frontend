import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

// 사용 시에는 user 프롭스를 아래에 넣어주세용
function Comment({text, userName, userProfileImg, writenCommentTime}) {
  return (
    <View>
      <View style={styles.commentUser}>
        <View style={styles.align}>
          <Image
            style={styles.commentProfileImg}
            source={{uri: `${userProfileImg}`}}
          />
          <Text>{userName}</Text>
        </View>
        {/* <Text style={styles.align}>{comments[0]}</Text> */}
      </View>

      <View style={styles.commentText}>
        <Text>{text}</Text>
        <Text>{writenCommentTime}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commentBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentProfileImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginVertical: 10,
    marginRight: 5,
  },
  commentUser: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  commentText: {
    marginHorizontal: 20,
  },
  align: {flexDirection: 'row', alignItems: 'center'},
});

export default Comment;
