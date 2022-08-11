import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import theme from '../../assets/theme';

// 사용 시에는 user 프롭스를 아래에 넣어주세용
function Comment({text, userName, userProfileImg, writenCommentTime}) {
  return (
    <View style={styles.commentBox}>
      <View style={styles.commentArea}>
        <View style={styles.align}>
          <Image
            style={styles.commentProfileImg}
            source={{uri: `${userProfileImg}`}}
          />
          <View>
            <Text style={styles.username}>{userName}</Text>
            <Text style={styles.commentText}>{text}</Text>
          </View>
        </View>
        {/* <Text style={styles.align}>{comments[0]}</Text> */}
      </View>

      <View style={styles.commentText}>
        <Text style={styles.commentTime}>{writenCommentTime}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commentBox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 16,
    maxWidth: 250,
  },
  commentProfileImg: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  commentArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: theme.colors.White,
    borderRadius: 8,
    padding: 8,
    alignSelf: 'auto',
  },

  align: {flexDirection: 'row', alignItems: 'flex-start'},
  username: {
    marginBottom: 2,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey60,
  },
  commentText: {
    fontSize: theme.fontSize.P2,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey60,
  },
  commentTime: {
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey60,
    marginRight: 8,
  },
});

export default Comment;
