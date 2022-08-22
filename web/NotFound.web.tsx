import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function NotFound() {
  return (
    <View style={styles.block}>
      <Text style={styles.alert}>프로필 URL이 올바르지 않습니다.</Text>
      <Text style={styles.alert}>
        앱으로 접속하시거나, 브랜드에 문의해 주세요.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  alert: {},
});

export default NotFound;
