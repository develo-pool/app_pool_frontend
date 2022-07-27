import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

function InputCommentContainer({
  commentText,
  onChangeText,
  isComment,
  addComments,
}) {
  return (
    <View>
      <TextInput
        value={commentText}
        onChangeText={onChangeText}
        onSubmitEditing={addComments}
        returnKeyType="done"
        placeholder={
          isComment
            ? '이미 작성한 메시지입니다.'
            : '채팅은 1회만 발송할 수 있습니다.'
        }
        style={styles.input}
        editable={!isComment}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#666666',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
    color: 'FFFFFF',
  },
});

export default InputCommentContainer;
