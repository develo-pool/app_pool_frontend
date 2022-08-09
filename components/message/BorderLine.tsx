import React from 'react';
import {StyleSheet, View} from 'react-native';
import theme from '../../assets/theme';

function BorderLine() {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: theme.colors.Grey20,
    height: 1,
    width: '100%',
    marginVertical: 10,
  },
});

export default BorderLine;
