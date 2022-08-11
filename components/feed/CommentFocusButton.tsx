import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../assets/theme';

interface Props {
  isComment: boolean;
}

function CommentFocusButton({isComment}: Props) {
  return (
    // 댓글 작성 여부에 따라 메시지스크린 -> 입력창 포커스를 잡아주는 컴포넌트
    <View style={styles.isComment}>
      <Icon
        name="comment"
        size={20}
        color={isComment ? theme.colors.Grey30 : theme.colors.Grey60}
        style={styles.commentIcon}
      />
      {isComment ? (
        <Text style={styles.completeWord}>답장완료</Text>
      ) : (
        <TouchableOpacity>
          <Text style={styles.goToCommentWord}>답장하기</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  isComment: {
    flexDirection: 'row',
    height: 24,
    alignItems: 'center',
  },
  completeWord: {
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey40,
    fontFamily: theme.fontFamily.Pretendard,
  },
  goToCommentWord: {
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey60,
    fontFamily: theme.fontFamily.Pretendard,
  },
  commentIcon: {
    marginRight: 6,
  },
});

export default CommentFocusButton;
