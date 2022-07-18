import {useNavigation} from '@react-navigation/native';
import React from 'react';
import ScreenBottomButton from '../components/ScreenBottomButton';
import {RootStackNavigationProp} from './types';

function GuideScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <ScreenBottomButton
      name="건너뛰기"
      onPress={() => navigation.navigate('MainTab')}
    />
  );
}

export default GuideScreen;
