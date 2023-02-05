import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
} from 'react-native';
import theme from '../../assets/theme';
import ScreenBottomButton from '../components/ScreenBottomButton';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackNavigationProp, RootStackParamList} from './types';
import {useQuery} from 'react-query';
import {getBrand} from '../api/brand';

type PreviewScreenRouteProp = RouteProp<RootStackParamList, 'Preview'>;

function PreviewScreen() {
  const {data: brandData} = useQuery('getBrand', () => getBrand(''), {
    refetchOnMount: 'always',
  });

  const navigation = useNavigation<RootStackNavigationProp>();
  const route = useRoute<PreviewScreenRouteProp>();
  const messageBody = route.params.messageBody;

  const isImageExist = true;

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/PreviewBackGround.jpg')}
        resizeMode="cover"
        style={styles.backgroundImg}>
        <View style={styles.alarmContainer}>
          <View style={styles.flexDirection}>
            <View style={styles.imgContainer}>
              <Image
                style={styles.profileImg}
                source={{uri: brandData?.brandProfileImage}}
              />
              <Image
                style={styles.poolLogo}
                source={require('../../assets/PoolLogo.png')}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>{brandData?.brandUsername}</Text>
              <Text style={styles.bodyText} numberOfLines={2}>
                {messageBody}
              </Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.nowText}>지금</Text>
            {isImageExist ? (
              <Image
                style={styles.uploadedImg}
                source={require('../../assets/PoolLogo.png')}
                // 이미지 첨부 링크 넣어야함
              />
            ) : (
              <View style={styles.dummyContainer} />
            )}
          </View>
        </View>
      </ImageBackground>
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
  backgroundImg: {
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
    justifyContent: 'space-between',
  },
  flexDirection: {
    flexDirection: 'row',
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
  dummyContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
  },
});

export default PreviewScreen;
