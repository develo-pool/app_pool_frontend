import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Carousel from '../components/guide/Carousel';
import MainContainer from '../components/MainContainer';
import ScreenBottomButton from '../components/ScreenBottomButton';
import Title from '../components/Title';
import {RootStackNavigationProp} from './types';

function GuideScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={styles.background}>
      <Title title="POOL 사용법" alignCenter={true} />
      <Carousel />
      <MainContainer>{}</MainContainer>
      <ScreenBottomButton
        name="건너뛰기"
        onPress={() => navigation.navigate('MainTab')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  center: {
    textAlign: 'center',
  },
});

export default GuideScreen;
