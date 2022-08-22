import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import theme from '../assets/theme';
import AlertBox from '../components/AlertBox';
import {AuthButton} from '../components/auth/AuthComponents';
import MainContainer from '../components/MainContainer';
import Title from '../components/Title';
import {RootStackNavigationProp} from './types';

function WelcomeScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <MainContainer>
      <SafeAreaView style={styles.alert}>
        <View>
          <AlertBox />
        </View>
      </SafeAreaView>
      <View style={styles.block}>
        <Image
          source={require('../assets/logo/Logo.png')}
          style={styles.logo}
        />
        <View>
          <Title title="최애 브랜드의" alignCenter={true} />
          <Title title="POOL에 빠지다" alignCenter={true} />
        </View>
        <Text style={styles.mainText}>
          {'POOL을 통해 사랑하는 브랜드를 팔로우하고\n1:1 소통을 즐겨보세요!'}
        </Text>
        <AuthButton
          text="POOL 가입하기"
          onPress={() => navigation.push('SignUp', {current: 0})}
          welcome={true}
        />
        <View style={styles.container}>
          <Text style={styles.subText}>이미 회원이신가요?</Text>
          <Pressable onPress={() => navigation.push('Login')}>
            <Text style={[styles.subText, styles.bold]}>로그인</Text>
          </Pressable>
        </View>
      </View>
    </MainContainer>
  );
}
const styles = StyleSheet.create({
  alert: {
    zIndex: 10,
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 25,
  },
  block: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingVertical: 200,
  },
  mainText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
    color: theme.colors.Grey50,
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 16,
    marginBottom: 60,
  },
  subText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P2,
  },
  bold: {
    marginLeft: 8,
    fontWeight: theme.fontWeight.Bold,
  },
  container: {
    marginTop: 13,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default WelcomeScreen;
