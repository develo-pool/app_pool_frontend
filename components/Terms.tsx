import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../theme';
import Title from './Title';

function Terms({type}: {type: 'term' | 'privacy' | undefined}) {
  switch (type) {
    case 'term':
      return (
        <View style={styles.block}>
          <Title title="이용약관" />
          <Text style={styles.text}>
            이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트
            이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트
            이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트
            이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트
            이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트
            이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트
            이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트
            이용약관 텍스트 이용약관 텍스트 이용약관 텍스트 이용약관 텍스트
            이용약관 텍스트
          </Text>
        </View>
      );
    case 'privacy':
      return (
        <View style={styles.block}>
          <Title title="개인정보 처리방침" />
          <Text style={styles.text}>
            개인정보 처리 방침 텍스트 개인정보 처리 방침 텍스트 개인정보 처리
            방침 텍스트 개인정보 처리 방침 텍스트 개인정보 처리 방침 텍스트
            개인정보 처리 방침 텍스트 개인정보 처리 방침 텍스트 개인정보 처리
            방침 텍스트 개인정보 처리 방침 텍스트 개인정보 처리 방침 텍스트
            개인정보 처리 방침 텍스트 개인정보 처리 방침 텍스트 개인정보 처리
            방침 텍스트 개인정보 처리 방침 텍스트 처리 방침 텍스트 처리 방침
            텍스트 처리 방침 텍스트 처리 방침 텍스트 처리 방침 텍스트
          </Text>
        </View>
      );
    default:
      return <></>;
  }
}

const styles = StyleSheet.create({
  block: {
    marginTop: 40,
  },
  text: {
    color: theme.colors.Grey50,
    marginTop: 24,
  },
});

export default Terms;
