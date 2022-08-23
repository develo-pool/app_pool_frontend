import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../assets/theme';
import Footer from '../components/setting/footer';

function NotFound() {
  return (
    <>
      <View style={styles.block}>
        <Text>프로필 URL이 올바르지 않습니다.</Text>
        <Text>앱으로 접속하시거나, 브랜드에 문의해 주세요.</Text>
      </View>
      <View style={styles.Ivory}>
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Ivory: {
    backgroundColor: theme.colors.Ivory,
  },
});

export default NotFound;
