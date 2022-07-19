import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BrandAssignForm from '../components/brand/BrandAssignForm';
import BrandAssignTerm from '../components/brand/BrandAssignTerm';
import Category from '../components/Category';
import MainContainer from '../components/MainContainer';
import ProcessBar from '../components/ProcessBar';
import ScreenBottomButton from '../components/ScreenBottomButton';
import {RootStackNavigationProp, RootStackParamList} from './types';

const TOTAL = 3;
type BrandAssignScreenRouteProp = RouteProp<RootStackParamList, 'BrandAssign'>;

const CurrentPage = ({current}: {current: number}) => {
  switch (current) {
    case 0:
      return <BrandAssignForm />;
    case 1:
      return <Category />;
    case 2:
      return <BrandAssignTerm />;
    default:
      return <Text>Out of Index</Text>;
  }
};

function BrandAssignScreen() {
  const route = useRoute<BrandAssignScreenRouteProp>();
  const current = route.params.current;
  const navigation = useNavigation<RootStackNavigationProp>();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <ProcessBar total={TOTAL} current={current} />,
      headerTitleAlign: 'center',
      headerBackVisible: false,
      headerLeft: () => (
        <TouchableOpacity
          onPress={
            current
              ? () => navigation.navigate('BrandAssign', {current: current - 1})
              : () => navigation.goBack()
          }>
          <Icon name="keyboard-arrow-left" size={30} />
        </TouchableOpacity>
      ),
    });
  }, [current, navigation]);
  return (
    <>
      <MainContainer>{CurrentPage({current})}</MainContainer>
      <ScreenBottomButton
        name="다음"
        onPress={() => {
          current === 2
            ? navigation.navigate('BrandAssignComplete')
            : navigation.navigate('BrandAssign', {current: current + 1});
        }}
      />
    </>
  );
}

export default BrandAssignScreen;
