import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface Props {
  isComment: boolean;
}

function CommentFocusButton({isComment}: Props) {
  return (
    // 댓글 작성 여부에 따라 메시지스크린 -> 입력창 포커스를 잡아주는 컴포넌트
    <View style={styles.isComment}>
      {isComment ? (
        <Text>🖤답장완료</Text>
      ) : (
        <TouchableOpacity>
          <Text>💚답장하기</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  isComment: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
});

export default CommentFocusButton;
