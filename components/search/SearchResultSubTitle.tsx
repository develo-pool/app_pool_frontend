import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
    fontSize: 16,
    color: 'black',
    opacity: 0.7,
    marginTop: 3,
  },
  subTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  bottomBorderLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#c5c5c5',
  },
});

export default SearchResultSubTitle;
