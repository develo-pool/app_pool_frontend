import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Category from '../components/category/Category';
import MainContainer from '../components/MainContainer';
import ScreenBottomButton from '../components/ScreenBottomButton';
import {RootStackNavigationProp} from './types';

function CategoryScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <>
      <MainContainer>
        <Category />
      </MainContainer>
      <ScreenBottomButton
        name="시작하기"
        onPress={() => navigation.navigate('MainTab')}
      />
      {/* TODO MainTab의 SearchScreen 으로 이동 */}
    </>
  );
}

export default CategoryScreen;
