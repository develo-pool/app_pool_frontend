import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import theme from '../../assets/theme';

interface Props {
  commentText?: string;
  onChangeText?: any;
  commentAble?: boolean;
  addComments?: any;
}

function InputCommentContainer({
  commentText,
  onChangeText,
  commentAble,
  addComments,
}: Props) {
  return (
    <View style={styles.commentInputContainer}>
      <TextInput
        value={commentText}
        onChangeText={onChangeText}
        onSubmitEditing={addComments}
        returnKeyType="done"
        placeholder={
          commentAble
            ? '채팅은 1회만 발송할 수 있습니다.'
            : '이미 작성한 메시지입니다.'
        }
        placeholderTextColor={'rgba(0, 0, 0, 0.2)'}
        style={commentAble ? styles.input : styles.inputX}
        editable={commentAble}
        autoCapitalize={'none'}
        autoComplete={'off'}
        multiline={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  commentInputContainer: {
    backgroundColor: theme.colors.White,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 22,
    maxHeight: 44,
    borderWidth: 1,
    borderColor: theme.colors.Grey30,
    zIndex: 1,
  },
  inputX: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 22,
    maxHeight: 44,
    borderWidth: 1,
    borderColor: theme.colors.Grey30,
    backgroundColor: theme.colors.Grey10,
  },
});

export default InputCommentContainer;
