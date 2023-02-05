import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../../assets/theme';

interface Props {
  searchCount?: number;
}
function SearchResultSubTitle({searchCount}: Props) {
  return (
    <View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>검색결과</Text>
        <Text style={styles.subTitle}>{searchCount}</Text>
      </View>
      <View style={styles.bottomBorderLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    fontSize: theme.fontSize.P2,
    color: theme.colors.Poolgreen,
    fontWeight: theme.fontWeight.Bold,
    marginRight: 4,
  },
  subTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: theme.colors.White,
    paddingVertical: 16,
  },
  bottomBorderLine: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.Grey20,
  },
});

export default SearchResultSubTitle;
