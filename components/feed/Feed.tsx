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

// 프롭스로는 유저, 메시지, 현재스크린을 넣어줍니다.
interface Props {
  postId : number;
  body : string;
  messageLink: string;
  filePath: string;
  writeDto: object;
}

// !!아래의 인터페이스와 객체들은 향후에 hook으로 분리할 듯 합니당 나중에 프롭스만 전달해주는걸로!!
// 얘네는 유저들 !
// interface User {
//   name: string;
//   profileImg: string;
// }
// // 얘네는 메시지 !
// interface Message {
//   user: User | undefined;
//   msgText?: string;
//   msgImg?: string;
//   msgLink?: string;
//   msgDate: number;
//   isComment: boolean;
// }

// // 유저 예시를 위한 doha 객체
// const doha: User = {
//   name: '엄지렐라',
//   profileImg:
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpX76CrHxujOncRrHo9XMHks7UTYRpIbM_Mw&usqp=CAU',
// };
// // 메시지 예시를 위한 test 객체
// const test: Message = {
//   user: doha,
//   isComment: false,
//   msgImg:
//     'data:image/jpeg;base64,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',
//   msgLink: 'www.naver.com',
//   msgText:
//     '00님 엄지렐라 팔로우 해주셔서 감사합니다. 잘부탁드립니다. 앞으로도 엄지렐라 많이 아껴주시고,',
//   msgDate: Date.now(),
// };

// 사용 시에는 user 프롭스를 아래에 넣어주세용
function Feed({user = doha, message = test, isFeedScreen = true}: Props) {
  function Feed({}: Props) {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <View style={styles.feedContainer}>
      {/* 메시지헤더는 메시지 MessageScreen에 한해 다른 UI를 출력합니다 */}
      <TouchableOpacity>
        <MessageHeader
          user={user}
          isDetailMessage={!isFeedScreen}
          msgDate={test.msgDate}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Message')}>
        <View style={styles.feed}>
          {/* 메시지의 구성에 따라 각각 다른 UI를 출력 */}
          {message.msgText === undefined ? (
            ''
          ) : (
            <MessageText messageText={`${test.msgText}`} />
          )}
          {message.msgImg === undefined ? (
            ''
          ) : (
            <MessageImg messageImg={`${test.msgImg}`} />
          )}
          {message.msgLink === undefined ? (
            ''
          ) : (
            <MessageLink messageLink={`${test.msgLink}`} />
          )}
          <View style={styles.feedBottom}>
            <Text style={styles.msgDate}>{message.msgDate}</Text>
            <CommentFocusButton isComment={true} />
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
