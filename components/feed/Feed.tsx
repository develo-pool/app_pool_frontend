import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import CommentFocusButton from './CommentFocusButton';
import MessageLink from './MessageLink';
import MessageImg from './MessageImg';
import MessageHeader from './MessageHeader';
import MessageText from './MessageText';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../screens/types';
import theme from '../../assets/theme';
import {Message} from '../../api/message/types';

// 사용 시에는 user 프롭스를 아래에 넣어주세용
function Feed(message: Message) {
  const navigation = useNavigation<RootStackNavigationProp>();
  const create_date = message.create_date.toString();
  const Month = parseInt(create_date.substring(5, 7), 10);
  const Day = parseInt(create_date.substring(8, 10), 10);
  const Hour = parseInt(create_date.substring(11, 13), 10);
  const Minute = parseInt(create_date.substring(14, 16), 10);
  const Second = parseInt(create_date.substring(17, 19), 10);

  const nowDay = new Date().getDate();
  const nowHour = new Date().getHours();
  const nowMinute = new Date().getMinutes();
  const nowSecond = new Date().getSeconds();

  const Ago = () => {
    if (nowDay - Day !== 0) {
      // console.log(Month + '월 ' + Day + '일');
      return (
        <Text style={styles.msgDate}>
          {Month}월 {Day}일
        </Text>
      );
    } else if (nowHour - Hour !== 0) {
      // console.log(nowHour - parseInt(Hour));
      return (
        <Text style={styles.msgDate}>{Math.abs(nowHour - Hour)}시간 전</Text>
      );
    } else if (nowMinute - Minute !== 0) {
      // console.log(nowMinute - parseInt(Minute));
      return (
        <Text style={styles.msgDate}>{Math.abs(nowMinute - Minute)}분 전</Text>
      );
    } else if (nowSecond - Second !== 0) {
      // console.log(nowSecond - parseInt(Second));
      return <Text style={styles.msgDate}>방금 전</Text>;
    }
  };

  return (
    <View style={styles.feedContainer}>
      {/* 메시지헤더는 메시지 MessageScreen에 한해 다른 UI를 출력합니다 */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BrandProfile', {
            poolUserId: message.writerDto.poolUserId,
            brandUserId: message.writerDto.brandUserInfoDto.brandUserId,
          });
        }}>
        <MessageHeader
          username={message?.writerDto?.brandUserInfoDto?.brandUsername}
          profileImg={message?.writerDto?.brandUserInfoDto?.brandProfileImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={
          () => navigation.navigate('Message', {detail: message.postId})
          // navigation.reset({
          //   routes: [
          //     {
          //       name: 'Message',
          //       params: {
          //         detail: message.postId,
          //       },
          //     },
          //   ],
          // })
        }>
        <View style={styles.feed}>
          {/* 메시지의 구성에 따라 각각 다른 UI를 출력 */}
          {message.body === null ? (
            ''
          ) : (
            <MessageText messageText={`${message.body}`} />
          )}
          {message.filePath === null ? (
            ''
          ) : (
            <MessageImg messageImg={`${message.filePath}`} />
          )}
          {message.messageLink === '' ? (
            ''
          ) : (
            <MessageLink messageLink={`${message.messageLink}`} />
          )}
          <View style={styles.feedBottom}>
            {Ago()}
            <CommentFocusButton
              isComment={message.commentAble}
              postId={message.postId}
            />
          </View>
        </View>
      </TouchableOpacity>
      {/* 답장을 보냈는지 체크 */}
      {/* 요친구는 나중에 인풋박스 포커스까지 씌워줄거에요 */}
    </View>
  );
}

const styles = StyleSheet.create({
  feedContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    marginBottom: 32,
  },
  feedHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  feedOwner: {
    flexDirection: 'row',
    alignItems: 'center',
    //   justifyContent: 'center',
  },
  feedOwnerProfileImg: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  feedOwnerUsername: {
    fontSize: 15,
    fontWeight: '600',
  },
  feedDate: {
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
    opacity: 0.4,
  },
  feed: {
    paddingLeft: 42,
  },
  feedText: {},
  feedImg: {
    width: '100%',
  },
  feedLink: {},
  isComment: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  msgDate: {
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey40,
    fontFamily: theme.fontFamily.Pretendard,
  },
  feedBottom: {
    flexDirection: 'row',
    height: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Feed;
