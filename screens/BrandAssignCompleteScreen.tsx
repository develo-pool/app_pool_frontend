import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import theme from '../assets/theme';
import MainContainer from '../components/MainContainer';
import ScreenBottomButton from '../components/ScreenBottomButton';
import Title from '../components/Title';
import {RootStackNavigationProp} from './types';

const data = {
  userName: '더푸르',
  infoText: '더푸르입니다.',
  profileImg:
    'file:///data/user/0/com.app_pool_frontend/cache/rn_image_picker_lib_temp_0e072fc9-b664-4a5a-b3de-8a50c64ec30c.png',
};

function BrandAssignCompleteScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <>
      <MainContainer>
        <View style={styles.block}>
          <Title title="브랜드 등록 요청이" alignCenter={true} />
          <Title title="완료되었습니다!" alignCenter={true} />
          <Text
            style={
              styles.guide
            }>{`브랜드 등록이 완료되면 따로 알림을 드리겠습니다.\n등등 관련 안내문구 제공`}</Text>
          <View style={styles.circle}>
            <Image style={styles.circle} source={{uri: data.profileImg}} />
          </View>
          <Text style={styles.name}>{data.userName}</Text>
          <View style={styles.box}>
            <Text style={styles.infoText}>{data.infoText}</Text>
          </View>
        </View>
      </MainContainer>
      <ScreenBottomButton
        name="대기하면서 피드 구경하기"
        onPress={() => navigation.push('MainTab')}
      />
    </>
  );
}

const styles = StyleSheet.create({
  block: {marginTop: 100, alignItems: 'center'},
  guide: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
    color: theme.colors.Grey50,
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 24,
    marginBottom: 28,
  },
  name: {
    fontFamily: theme.fontFamily.Pretendard,
    fontWeight: theme.fontWeight.Bold,
    fontSize: theme.fontSize.P1,
    color: theme.colors.Grey60,
    marginTop: 10,
  },
  box: {
    backgroundColor: theme.colors.Grey10,
    padding: 16,
    marginTop: 16,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  infoText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
    color: theme.colors.Grey60,
  },
  circle: {
    borderRadius: 86,
    backgroundColor: '#D9D9D9',
    width: 86,
    height: 86,
  },
  category: {
    backgroundColor: '#DADADA',
    padding: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 100,
  },
});

export default BrandAssignCompleteScreen;
