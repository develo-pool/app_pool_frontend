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
      <Icon name="link" size={24} color={theme.colors.Grey80}/>
      <Text style={styles.messageLink}>{messageLink}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linkContainer: {
    width: 301,
    height: 40,
    backgroundColor: theme.colors.White,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.Grey20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  messageLink: {
    color: 'blue',
  },
});

export default MessageLink;
