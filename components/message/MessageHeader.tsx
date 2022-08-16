import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import theme from '../../assets/theme';

interface Props {
  brandUsername: string;
  brandProfileImage: string;
  create_date: string;
}

function MessageHeader(message:Props) {
  return (
    // 댓글 작성 여부에 따라 메시지스크린 -> 입력창 포커스를 잡아주는 컴포넌트
    <TouchableOpacity style={styles.messageHeader}>
      <View style={styles.detailHeader}>
        <Image
          style={styles.authorProfileImg}
          source={{uri: `${message.brandProfileImage}`}}
        />
        <View style={styles.msgHeader}>
          <View style={styles.verticalCenter}>
            <Text style={styles.msgSmallText}>{message.brandUsername}</Text>
          </View>
          <View style={styles.smallVerticalCenter}>
            <Text style={styles.msgDate}>{message.create_date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  messageHeader: {
    marginBottom: 24,
    marginTop: 8,
  },
  usernameContainer: {
    height: 21,
    justifyContent: 'center',
  },
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorProfileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'cover',
    marginRight: 12,
  },
  msgDate: {
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey40,
  },
  msgSmallText: {
    fontSize: theme.fontSize.P2,
    fontWeight: theme.fontWeight.Bold,
  },
  msgHeader: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  verticalCenter: {
    height: 21,
    justifyContent: 'center',
  },
  smallVerticalCenter: {
    height: 18,
    justifyContent: 'center',
  },
});

export default MessageHeader;
