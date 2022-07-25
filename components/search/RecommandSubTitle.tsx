import React from 'react';
import {StyleSheet, Text} from 'react-native';

function RecommandSubTitle() {
  return <Text style={styles.subTitle}>추천 브랜드</Text>;
}

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 16,
    color: 'black',
    opacity: 0.7,
    margin: 3,
  },
});

export default RecommandSubTitle;
