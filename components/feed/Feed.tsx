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
  // function Feed({}: Props) {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <View style={styles.feedContainer}>
      {/* 메시지헤더는 메시지 MessageScreen에 한해 다른 UI를 출력합니다 */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('BrandProfile', {
            poolUserId: message.writerDto.poolUserId,
          });
        }}>
        <MessageHeader
          username={message?.writerDto?.brandUserInfoDto?.brandUsername}
          profileImg={message?.writerDto?.brandUserInfoDto?.brandProfileImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Message', {detail: message.postId})
        }>
        <View style={styles.feed}>
          {/* 메시지의 구성에 따라 각각 다른 UI를 출력 */}
          {message.body === undefined ? (
            ''
          ) : (
            <MessageText messageText={`${message.body}`} />
          )}
          {message.filePath === undefined ? (
            ''
          ) : (
            <MessageImg messageImg={`${message.filePath}`} />
          )}
          {message.messageLink === undefined ? (
            ''
          ) : (
            <MessageLink messageLink={`${message.messageLink}`} />
          )}
          <View style={styles.feedBottom}>
            <Text style={styles.msgDate}>{message.create_date}</Text>
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
