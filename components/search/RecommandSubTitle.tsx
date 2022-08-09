import React from 'react';
import {StyleSheet, Text} from 'react-native';
import theme from '../../assets/theme';

function RecommandSubTitle() {
  return <Text style={styles.subTitle}>추천 브랜드</Text>;
}

const styles = StyleSheet.create({
  subTitle: {
    marginTop: 16,
    fontSize: theme.fontSize.P2,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey50,
    marginLeft: 16,
    marginBottom: 12, 
  },
});

export default RecommandSubTitle;
