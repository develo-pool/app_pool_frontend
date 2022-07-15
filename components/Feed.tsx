import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

interface Props {
  user: User;
  message: Message;
  isProfile?: boolean;
}

// !!아래의 인터페이스와 객체들은 향후에 hook으로 분리할 듯 합니당 나중에 프롭스만 전달해주는걸로!!
// 얘네는 유저들 !
interface User {
  name: string;
  profileImg: string;
}
interface Message {
  user: User | undefined;
  isComment?: boolean;
  isImg?: boolean;
  isLink?: boolean;
}

// 유저 예시를 위한 doha 객체
// const doha: User = {
//   name: '이이이도도도하하하',
//   profileImg: 'https://reactnative.dev/img/tiny_logo.png',
// };
// // 메시지 예시를 위한 test 객체
// const test: Message = {
//   user: doha,
//   isComment: false,
//   isImg: true,
//   isLink: false,
// };

// 사용 시에는 user 프롭스를 아래에 넣어주세용
function Feed({user, message, isProfile = false}: Props) {
  // 높이를 정해주기 위한 height useState와 Dimensions 사용
  const [height, setHeight] = useState(0);
  const {width} = Dimensions.get('window');
  // 아래는 이미지의 가로 세로를 가져와 setHeight로 높이 설정해주는..!
  Image.getSize(user.profileImg, (w, h) => {
    setHeight(h * (width / w));
  });
  return (
    <View style={styles.feedContainer}>
      <View style={styles.feedHeader}>
        <View style={styles.feedOwner}>
          <Image
            style={styles.feedOwnerProfileImg}
            source={{uri: `${user.profileImg}`}}
            resizeMode="cover"
          />
          <Text style={styles.feedOwnerUsername}>{user.name}</Text>
        </View>
        <Text style={styles.feedDate}>방금 전</Text>
      </View>
      <View style={styles.feed}>
        <Text style={styles.feedText}>이거슨 피드본문</Text>
        {message.isImg ? (
          <Image
            style={styles.feedImg}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png', height}}
            resizeMode="contain"
          />
        ) : (
          ''
        )}
        {message.isLink ? (
          <Text style={styles.feedLink}>이거슨 피드링크</Text>
        ) : (
          ''
        )}
      </View>
      {isProfile ? (
        ''
      ) : (
        <View style={styles.isComment}>
          {message.isComment ? (
            <Text>🖤답장완료</Text>
          ) : (
            <Text>💚답장하기</Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  feedContainer: {
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 10,
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
});

export default Feed;
