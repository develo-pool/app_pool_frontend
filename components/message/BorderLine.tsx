import React from 'react';
import {StyleSheet, View} from 'react-native';

function BorderLine() {
  return <View style={styles.line} />;
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: '#c4c4c4',
    height: 1,
    width: '100%',
    marginVertical: 10,
  },
});

export default BorderLine;
