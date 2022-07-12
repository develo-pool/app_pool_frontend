import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

function MessageScreen() {
  // const [msgImgHeight, setmsgImgHeight] = useState(0);
  // const { width } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.authorProfile}>
          <Image
            style={styles.authorProfileImg}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          />
          <View style={styles.msgHeader}>
            <Text>황순범범범</Text>
            <Text style={styles.msgDate}>1일 전</Text>
          </View>
        </View>

        <View style={styles.msg}>
          <Text style={styles.msgText}>우우 다인쌤 무서워요 우우</Text>
          <Image
            style={styles.msgImg}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            resizeMode="cover"
          />
        </View>

        <View style={styles.line}></View>

        <View style={styles.commentBar}>
          <Text>Comment</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>📮</Text>
            <Text>999</Text>
          </View>
        </View>

        <View style={styles.commentUser}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.commentProfileImg}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Text>최다인인인</Text>
          </View>
          <Text style={{alignItems: 'center'}}>1일 전</Text>
        </View>

        <View style={styles.commentText}>
          <Text>
            asjdlfk;sdgfjl;kadfgㅁㄴㅇㄹㅁㄴㅇㄹㅎㅁ넝하;ㅣㅇ러환ㅇ;ㅣ로ㅓㄴㅇ;ㅣㅏ로ㅓㄴ;ㅇ리ㅏ허j;l
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 20,
  },
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
  line: {
    backgroundColor: '#c4c4c4',
    height: 1,
    width: '100%',
    marginVertical: 10,
  },
  commentBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commentBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commentProfileImg: {
    width: 30,
    height: 30,
    // backgroundColor: '#000000',
    borderRadius: 15,
    marginVertical: 10,
    marginRight: 5,
  },
  commentUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  commentText: {
    marginHorizontal: 20,
  },
});

export default MessageScreen;
