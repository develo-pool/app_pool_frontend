import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../assets/theme';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../screens/types';

interface Props {
  isComment: boolean;
  postId: number;
}

function CommentFocusButton({isComment, postId}: Props) {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    // 댓글 작성 여부에 따라 메시지스크린 -> 입력창 포커스를 잡아주는 컴포넌트
    <View style={styles.isComment}>
      <Icon
        name="messenger-outline"
        size={18}
        color={isComment ? theme.colors.Grey60 : theme.colors.Grey30}
        style={styles.commentIcon}
      />
      {isComment ? (
        <TouchableOpacity
          onPress={() => navigation.navigate('Message', {detail: postId})}>
          <Text style={styles.goToCommentWord}>답장하기</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.completeWord}>답장완료</Text>
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
    marginRight: 4,
  },
});

export default CommentFocusButton;
