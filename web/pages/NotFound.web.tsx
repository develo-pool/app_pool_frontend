import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import theme from '../../assets/theme';
import Footer from '../../components/setting/footer';

function NotFound() {
  return (
    <>
      <View style={styles.block}>
        <Text
          style={
            styles.text
          }>{`프로필 URL이 올바르지 않습니다.${'\n'}앱으로 접속하시거나, 브랜드에 문의해 주세요.`}</Text>
      </View>
      <View style={styles.ivory}>
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
  ivory: {
    backgroundColor: theme.colors.Ivory,
  },
  text: {
    color: theme.colors.Grey50,
    textAlign: 'center',
  },
});

export default NotFound;
