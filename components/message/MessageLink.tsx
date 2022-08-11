import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import theme from '../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  messageLink: string;
}

function MessageLink({messageLink}: Props) {
  return (
    // 댓글 작성 여부에 따라 메시지스크린 -> 입력창 포커스를 잡아주는 컴포넌트
    <TouchableOpacity style={styles.linkContainer}>
      <Icon
        name="link"
        size={24}
        color={theme.colors.Poolblue}
        style={styles.icon}
      />
      <Text style={styles.messageLink}>{messageLink}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linkContainer: {
    height: 40,
    backgroundColor: theme.colors.White,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.Grey20,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 18,
  },
  icon: {
    marginHorizontal: 8,
  },
  messageLink: {
    color: theme.colors.Poolblue,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Light,
    fontFamily: theme.fontFamily.Pretendard,
  },
});

export default MessageLink;
