import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  commentCount: number;
}

function CommentBar({commentCount}: Props) {
  return (
    <View style={styles.commentBar}>
      <Text style={styles.commentBarText}>Comment</Text>
      <View style={styles.commentCountContainer}>
        <Text style={styles.commentBarSmallText}>📮</Text>
        <Text style={styles.commentBarSmallText}>{commentCount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commentBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commentBarText: {
    fontSize: 28,
    fontWeight: '700',
  },
  commentBarSmallText: {
    fontSize: 20,
    textAlignVertical: 'center',
    fontWeight: '500',
  },
  commentCountContainer: {
    flexDirection: 'row',
  },
});

export default CommentBar;
