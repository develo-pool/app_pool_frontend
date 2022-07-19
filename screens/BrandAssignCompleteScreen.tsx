import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import MainContainer from '../components/MainContainer';
import ScreenBottomButton from '../components/ScreenBottomButton';
import Title from '../components/Title';
import {RootStackNavigationProp} from './types';

function BrandAssignCompleteScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <>
      <MainContainer>
        <Title title="브랜드 등록 요청을" />
        <Title title="완료했습니다!" />
        <Text>심사 영업일 기준 2~3일 후 심사가 완료됩니다.</Text>
        <Text>브랜드 등록 전까지 수정 가능합니다</Text>
      </MainContainer>
      <ScreenBottomButton
        name="대기하면서 피드 구경하기"
        onPress={() => navigation.push('MainTab')}
      />
    </>
  );
}

export default BrandAssignCompleteScreen;
