import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  isSearching: boolean;
  searchCount?: number;
}
function SubTitle({isSearching = false, searchCount}: Props) {
  return (
    <View>
      {isSearching ? (
        <Text style={styles.subTitle}>추천 브랜드</Text>
      ) : (
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>브랜드</Text>
          <Text style={styles.subTitle}>{searchCount}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 16,
    color: 'black',
    opacity: 0.7,
    margin: 3,
  },
  subTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SubTitle;
