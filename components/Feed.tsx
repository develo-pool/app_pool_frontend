import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import CommentFocusButton from './feed/CommentFocusButton';
import MessageLink from './feed/MessageLink';
import MessageImg from './feed/MessageImg';
import MessageHeader from './feed/MessageHeader';
import MessageText from './feed/MessageText';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../screens/types';

// 프롭스로는 유저, 메시지, 현재스크린을 넣어줍니다.
interface Props {
  user: User;
  message: Message;
  isFeedScreen?: boolean;
}

// !!아래의 인터페이스와 객체들은 향후에 hook으로 분리할 듯 합니당 나중에 프롭스만 전달해주는걸로!!
// 얘네는 유저들 !
interface User {
  name: string;
  profileImg: string;
}
// 얘네는 메시지 !
interface Message {
  user: User | undefined;
  msgText?: string;
  msgImg?: string;
  msgLink?: string;
  msgDate: number;
  isComment: boolean;
}

// 유저 예시를 위한 doha 객체
const doha: User = {
  name: '엄지렐라',
  profileImg:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpX76CrHxujOncRrHo9XMHks7UTYRpIbM_Mw&usqp=CAU',
};
// 메시지 예시를 위한 test 객체
const test: Message = {
  user: doha,
  isComment: false,
  msgImg:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAKct50NCsVyvNuADQHKbmPKvN4vwU_kabkg&usqp=CAU',
  msgLink: 'www.example.com',
  msgText:
    '00님 엄지렐라 팔로우 해주셔서 감사합니다. 잘부탁드립니다. 앞으로도 엄지렐라 많이 아껴주시고,',
  msgDate: Date.now(),
};

// 사용 시에는 user 프롭스를 아래에 넣어주세용
function Feed({user = doha, message = test, isFeedScreen = true}: Props) {
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
        </View>
        <Text style={styles.msgDate}>{message.msgDate}</Text>
      </TouchableOpacity>
      {/* 답장을 보냈는지 체크 */}
      {/* 요친구는 나중에 인풋박스 포커스까지 씌워줄거에요 */}
      <CommentFocusButton isComment={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  feedContainer: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
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
    padding: 10,
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
    fontSize: 12,
    color: '#C4C4C4',
  },
});

export default Feed;
