import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

interface Props {
  user: User | undefined;
  message: Msg | undefined;
}
// 얘네는 코멘트를 작성한 유저들 !
interface User {
  name: string;
  profileImg: string;
}
interface Msg {
  msgText: string;
  msgImg?: string;
  msgLink?: string;
  msgDate: number;
}
// 유저 예시를 위한 dain 객체
const beom: User = {
  name: '범범범',
  profileImg: 'https://reactnative.dev/img/tiny_logo.png',
};
const firstMsg: Msg = {
  msgText: '흐하하하하하 여기도 끝인건가? 드디어 끝이 보이는건가!?',
  msgImg: 'https://reactnative.dev/img/tiny_logo.png',
  msgDate: Date.now(),
};
// 사용 시에는 user와 message 프롭스를 아래에 넣어주세용
function DetailMessageContainer({}: Props) {
  return (
    <View>
      <View style={styles.authorProfile}>
        <Image
          style={styles.authorProfileImg}
          source={{uri: `${beom.profileImg}`}}
        />
        <View style={styles.msgHeader}>
          <Text style={styles.msgSmallText}>{beom.name}</Text>
          <Text style={styles.msgDate}>{firstMsg.msgDate}</Text>
        </View>
      </View>

      <View style={styles.msg}>
        <Text style={styles.msgText}>{firstMsg.msgText}</Text>
        <Image
          style={styles.msgImg}
          source={{uri: `${firstMsg.msgImg}`}}
          resizeMode="cover"
        />
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
    resizeMode: 'cover',
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
