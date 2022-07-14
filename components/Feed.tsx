import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

interface Props {
  user: User | undefined;
  commentText: string;
  commentDate: number;
}
// 얘네는 코멘트를 작성한 유저들 !
interface User {
  name: string;
  profileImg: string;
}
// 유저 예시를 위한 dain 객체
const beom: User = {
  name: '다인님 제발',
  profileImg: 'https://reactnative.dev/img/tiny_logo.png',
};

// 사용 시에는 user 프롭스를 아래에 넣어주세용
function Feed() {
  const [height, setHeight] = useState(0);
  const {width} = Dimensions.get('window');
  Image.getSize(beom.profileImg, (w, h) => {
    setHeight(h * (width / w));
  });
  return (
    <View style={styles.feedContainer}>
      <View style={styles.feedHeader}>
        <View style={styles.feedOwner}>
          <Image
            style={styles.feedOwnerProfileImg}
            source={{uri: `${beom.profileImg}`, height}}
            resizeMode='cover'
          />
          <Text style={styles.feedOwnerUsername}>이이이도도도하하하</Text>
        </View>
        <Text style={styles.feedDate}>방금 전</Text>
      </View>
      <View style={styles.feed}>
        <Text style={styles.feedText}>이거슨 피드본문</Text>
        <View>
        <Image
          style={
            //   styles.feedImg
            {width:'100%', height:"100%"}
            }
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          resizeMode='contain'
        />
        </View>
        <Text style={styles.feedLink}>이거슨 피드링크</Text>
      </View>
      <View style={styles.isComment}>
        <Text>💚</Text>
        <Text>답장완료</Text>
        <Text>답장하기</Text>
      </View>
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
//   feedImg: {
//     width: '100%',
//   },
  feedLink: {},
  isComment: {flexDirection: 'row'},
});

export default Feed;
