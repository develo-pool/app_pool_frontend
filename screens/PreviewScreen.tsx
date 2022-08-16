import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
} from 'react-native';
import theme from '../assets/theme';
import ScreenBottomButton from '../components/ScreenBottomButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from './types';

function PreviewScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.alarmContainer}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.profileImg}
              source={require('../assets/Pool.png')}
            />
            <Image
              style={styles.poolLogo}
              source={require('../assets/PoolLogo.png')}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>더푸르</Text>
            <Text style={styles.bodyText} numberOfLines={2}>
              오늘은 샐러드 먹었어요 여러분은 뭘 드셨나요? 오늘은 샐러드
              먹었어요 여러분은 뭘 드셨나요?
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.nowText}>지금</Text>
            <Image
              style={styles.uploadedImg}
              source={require('../assets/Salad.png')}
            />
          </View>
        </View>
      </View>
      <ScreenBottomButton
        name="미리보기 종료"
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: theme.colors.Grey30,
    paddingTop: 212,
  },
  alarmContainer: {
    flexDirection: 'row',
    marginHorizontal: 8,
    paddingLeft: 8,
    paddingRight: 12,
    height: 80,
    backgroundColor: theme.colors.White,
    borderRadius: 16,
    opacity: 0.9,
  },
  imgContainer: {
    justifyContent: 'center',
    width: 48,
  },
  profileImg: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  poolLogo: {
    width: 16,
    height: 16,
    borderRadius: 4,
    marginTop: -12,
    marginLeft: 26,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 250,
  },
  titleText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: 15,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Black,
  },
  bodyText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: 15,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey50,
    flexShrink: 1,
    maxWidth: 248,
    marginBottom: 2,
  },
  infoContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: 8,
  },
  nowText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    fontWeight: '500',
    color: theme.colors.Grey40,
    marginBottom: 6,
  },
  uploadedImg: {
    width: 32,
    height: 32,
    borderRadius: 8,
  },
});

export default PreviewScreen;
