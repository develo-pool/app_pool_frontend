import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import theme from '../../assets/theme';

function Footer() {
  return (
    <View style={styles.Footer}>
      <Text style={styles.FooterText}>주식회사 더풀네트워크</Text>
      <Text style={styles.FooterText}>대표자 송진태</Text>
      <Text style={styles.FooterText}>
        서울 종로구 종로 6 광화문 우체국 5층 스타트업빌리지
      </Text>
      <Text style={styles.FooterText}>사업자등록번호 701-86-02478</Text>
      <Text style={styles.FooterText}>대표 이메일 info@thepool.network</Text>
      <Text style={styles.FooterText}>
        개인정보관리책임자 송진태 ttao@thepool.network
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Footer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'center',
  },
  FooterText: {
    fontFamily: theme.fontFamily.Pretendard,
    color: theme.colors.Grey40,
    fontSize: theme.fontSize.P3,
    fontWeight: '400',
  },
});

export default Footer;
