import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface Props {
  messageText: string;
}

function MessageText({messageText}: Props) {
  return <Text style={styles.messageText}>{messageText}</Text>;
}

const styles = StyleSheet.create({
  messageText: {
    
  },
});

export default MessageText;
