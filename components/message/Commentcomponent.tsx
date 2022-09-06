import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import WrappedText from 'react-native-wrapped-text';
import theme from '../../assets/theme';

interface Props {
  text: string;
  userName: string;
  userProfileImg: string;
  writenCommentTime: string;
}
// 사용 시에는 user 프롭스를 아래에 넣어주세용
function Comment({text, userName, userProfileImg, writenCommentTime}: Props) {
  const Month = parseInt(writenCommentTime.substring(5, 7), 10);
  const Day = parseInt(writenCommentTime.substring(8, 10), 10);
  const Hour = parseInt(writenCommentTime.substring(11, 13), 10);
  const Minute = parseInt(writenCommentTime.substring(14, 16), 10);
  const Second = parseInt(writenCommentTime.substring(17, 19), 10);

  const nowDay = new Date().getDate();
  const nowHour = new Date().getHours();
  const nowMinute = new Date().getMinutes();
  const nowSecond = new Date().getSeconds();

  return (
    <View style={styles.commentBox}>
      <View style={styles.commentArea}>
        <View style={styles.align}>
          {/* {ProfileImg()} */}
          <Image
            style={styles.commentProfileImg}
            source={
              // userProfileImg !== null
              //   ? {uri: userProfileImg}
              //   : require('../../assets/Pool.png')
                require('../../assets/Pool.png')
            }
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
        <Text style={styles.commentTime}>
          {nowDay - Day !== 0
            ? `${Month}월 ${Day}일`
            : nowHour - Hour !== 0
            ? `${Math.abs(nowHour - Hour)}시간 전`
            : nowMinute - Minute !== 0
            ? `${Math.abs(nowMinute - Minute)}분 전`
            : nowSecond - Second !== 0
            ? '방금 전'
            : ''}
        </Text>
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
    maxWidth: 200,
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
    // height: 21,
    justifyContent: 'center',
  },
});

export default Comment;
