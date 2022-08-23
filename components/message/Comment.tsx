import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import theme from '../../assets/theme';

interface Props {
  text?: string;
  userName?: string;
  userProfileImg?: string;
  writenCommentTime?: string;
}
// 사용 시에는 user 프롭스를 아래에 넣어주세용
function Comment({text, userName, userProfileImg, writenCommentTime}: Props) {
  return (
    <View style={styles.commentBox}>
      <View style={styles.commentArea}>
        <View style={styles.align}>
          <Image
            style={styles.commentProfileImg}
            source={{uri: `${userProfileImg}`}}
          />
          <View>
            <View style={styles.usernameContainer}>
              <Text style={styles.username}>{userName}</Text>
            </View>
            <View style={styles.commentContainer}>
              <Text style={styles.commentText}>{text}</Text>
            </View>
          </View>
        </View>
        {/* <Text style={styles.align}>{comments[0]}</Text> */}
      </View>

      <View style={styles.commentTimeContainer}>
        <Text style={styles.commentTime}>{writenCommentTime}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commentBox: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 8,
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
    paddingRight: 16,
    alignSelf: 'auto',
  },

  align: {flexDirection: 'row', alignItems: 'flex-start'},
  username: {
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
  commentTimeContainer: {
    height: 18,
    justifyContent: 'center',
  },
  usernameContainer: {
    height: 18,
    justifyContent: 'center',
    marginBottom: 2,
  },
  commentContainer: {
    height: 21,
    justifyContent: 'center',
  },
});

export default Comment;
