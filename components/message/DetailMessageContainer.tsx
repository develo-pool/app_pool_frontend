import React from 'react';
import {StyleSheet, View} from 'react-native';
import MessageHeader from '../feed/MessageHeader';
import MessageImg from '../feed/MessageImg';
import MessageLink from '../feed/MessageLink';
import MessageText from '../feed/MessageText';

interface Props {
  user: User | undefined;
  message: Message | undefined;
  isFeedScreen?: boolean;
}
// 얘네는 코멘트를 작성한 유저들 !
interface User {
  name: string;
  profileImg: string;
}
interface Message {
  user: User | undefined;
  msgText?: string;
  msgImg?: string;
  msgLink?: string;
  msgDate: number;
  isComment: boolean;
}
// 유저 예시를 위한 dain 객체
const beom: User = {
  name: '엄지렐라',
  profileImg:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpX76CrHxujOncRrHo9XMHks7UTYRpIbM_Mw&usqp=CAU',
};
const test: Message = {
  user: beom,
  isComment: false,
  msgImg:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAKct50NCsVyvNuADQHKbmPKvN4vwU_kabkg&usqp=CAU',
  msgLink: 'www.example.com',
  msgText:
    '00님 엄지렐라 팔로우 해주셔서 감사합니다. 잘부탁드립니다. 앞으로도 엄지렐라 많이 아껴주시고,',
  msgDate: Date.now(),
};
// 사용 시에는 user와 message 프롭스를 아래에 넣어주세용
function DetailMessageContainer({message = test}: Props) {
  return (
    <View>
      {/* <View style={styles.authorProfile}>
        <Image
          style={styles.authorProfileImg}
          source={{uri: `${beom.profileImg}`}}
        />
        <View style={styles.msgHeader}>
          <Text style={styles.msgSmallText}>{beom.name}</Text>
          <Text style={styles.msgDate}>{firstMsg.msgDate}</Text>
        </View>
      </View> */}
      <MessageHeader
        user={beom}
        isDetailMessage={false}
        msgDate={test.msgDate}
      />

      <View style={styles.msg}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  msgHeader: {
    // backgroundColor: '#555555',
  },
  authorProfile: {
    // backgroundColor: '#333333',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:"space-between",
  },
  authorProfileImg: {
    width: 50,
    height: 50,
    // backgroundColor: '#000000',
    borderRadius: 25,
    marginVertical: 10,
    marginRight: 10,
  },
  msgSmallText: {
    fontSize: 20,
    textAlignVertical: 'center',
    fontWeight: '500',
  },
  msgText: {
    backgroundColor: '#FFFFFF',
  },
  msgImg: {
    flex: 1,
    height: 300,
    width: '100%',
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  msgDate: {
    fontSize: 12,
    color: '#C4C4C4',
  },
  msg: {
    flex: 5,
    //   flexDirection:'row',
  },
});

export default DetailMessageContainer;
