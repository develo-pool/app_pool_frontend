import React from 'react';
import {StyleSheet, Text} from 'react-native';

export function InputTitle({title}: {title: string}) {
  return <Text style={styles.text}>{title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  },
});
