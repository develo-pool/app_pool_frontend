import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import MainContainer from '../components/MainContainer';
import ScreenBottomButton from '../components/ScreenBottomButton';
import {RootStackNavigationProp, RootStackParamList} from './types';

type BrandAssignScreenRouteProp = RouteProp<RootStackParamList, 'BrandAssign'>;

function BrandAssignScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const route = useRoute<BrandAssignScreenRouteProp>();
  const current = route.params.current;
  return (
    <>
      <MainContainer>
        <Text>{current}</Text>
      </MainContainer>
      <ScreenBottomButton
        name="다음"
        onPress={() =>
          navigation.navigate('BrandAssign', {current: current + 1})
        }
      />
    </>
  );
}

export default BrandAssignScreen;
