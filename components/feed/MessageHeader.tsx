import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

interface Props {
  user: User;
  isDetailMessage: boolean;
  msgDate: number;
}

interface User {
  name: string;
  profileImg: string;
}

function MessageHeader({user, isDetailMessage, msgDate}: Props) {
  return (
    // 댓글 작성 여부에 따라 메시지스크린 -> 입력창 포커스를 잡아주는 컴포넌트
    <TouchableOpacity>
      {isDetailMessage ? (
        <View style={styles.authorProfile}>
          <Image
            style={styles.authorProfileImg}
            source={{uri: `${user.profileImg}`}}
          />
          <View style={styles.msgHeader}>
            <Text style={styles.msgSmallText}>{user.name}</Text>
            <Text style={styles.msgDate}>{msgDate}</Text>
          </View>
        </View>
      ) : (
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
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
  msgDate: {
    fontSize: 12,
    color: '#C4C4C4',
  },
  msgSmallText: {
    fontSize: 20,
    textAlignVertical: 'center',
    fontWeight: '500',
  },
  msgHeader: {
    // backgroundColor: '#555555',
  },
});

export default MessageHeader;
