import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  messageLink: string;
}

function MessageLink({messageLink}: Props) {
  return (
    // 댓글 작성 여부에 따라 메시지스크린 -> 입력창 포커스를 잡아주는 컴포넌트
    <TouchableOpacity>
      <Text style={styles.messageLink}>{messageLink}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  messageLink: {
    color: 'blue',
  },
});

export default MessageLink;
