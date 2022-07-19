// 이후에 hooks로 옮겨서 작업 마무리 할 예정입니다 ^_^

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function BrandUserCategory() {
  return (
    <View style={styles.categoryContainer}>
      <TouchableOpacity style={styles.category}>
        <Text style={styles.categoryText}>#카테고리명</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.category}>
        <Text style={styles.categoryText}>#카테고리명</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
  },
  category: {
    backgroundColor: '#666666',
    borderRadius: 10,
    margin: 3,
    padding: 2,
  },
  categoryText: {},
});

export default BrandUserCategory;
