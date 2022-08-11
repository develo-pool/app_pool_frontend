import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import theme from '../../assets/theme';

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
    <TouchableOpacity style={styles.messageHeader}>
      {isDetailMessage ? (
        <View style={styles.detailHeader}>
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
            <View style={styles.usernameContainer}>
              <Text style={styles.feedOwnerUsername}>{user.name}</Text>
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  messageHeader: {
    flex: 0.5,
  },
  feedHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  feedOwner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    //   justifyContent: 'center',
  },
  feedOwnerProfileImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
    resizeMode: 'contain',
    marginRight: 12,
  },
  feedOwnerUsername: {
    fontSize: theme.fontSize.P2,
    fontWeight: theme.fontWeight.Bold,
  },
  usernameContainer: {
    height: 21,
    justifyContent: 'center',
  },

  detailHeader: {
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
