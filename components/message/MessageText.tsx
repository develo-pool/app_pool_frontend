import React from 'react';
import {StyleSheet, Text} from 'react-native';
import theme from '../../assets/theme';

interface Props {
  messageText: string;
}

function MessageText({messageText}: Props) {
  return <Text style={styles.messageText}>{messageText}</Text>;
}

const styles = StyleSheet.create({
  messageText: {
    marginBottom: 12,
    fontSize: theme.fontSize.P1,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey60,
    fontFamily: theme.fontFamily.Pretendard,
  },
});

export default MessageText;
