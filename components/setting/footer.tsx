import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import theme from '../../assets/theme';

function Footer() {
  return (
    <View style={styles.Footer}>
      <Text style={styles.FooterText}>
        주식회사 더풀네트워크{'\n'}
        대표자 송진태{'\n'}
        서울 종로구 종로 6 광화문 우체국 5층 스타트업빌리지{'\n'}
        사업자등록번호 701-86-02478{'\n'}
        대표 이메일 info@thepool.network{'\n'}
        개인정보관리책임자 송진태 ttao@thepool.network
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Footer: {
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginVertical: 16,
  },
  FooterText: {
    fontFamily: theme.fontFamily.Pretendard,
    color: theme.colors.Grey40,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Light,
    lineHeight: 18,
  },
});

export default Footer;
