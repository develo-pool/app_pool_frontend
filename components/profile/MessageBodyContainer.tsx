import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../assets/theme';

interface Props {
  messageText: string;
}

function MessageBodyContainer({messageText}: Props) {
  return (
    <View>
      <Text style={styles.messageText}>{messageText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageText: {
    fontSize: theme.fontSize.P2,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey60,
    fontFamily: theme.fontFamily.Pretendard,
    marginVertical: 12,
  },
});

export default MessageBodyContainer;
