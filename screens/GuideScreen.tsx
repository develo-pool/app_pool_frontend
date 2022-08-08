import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import theme from '../assets/theme';
import Carousel from '../components/guide/Carousel';
import ScreenBottomButton from '../components/ScreenBottomButton';
import {RootStackNavigationProp} from './types';

function GuideScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [index, setIndex] = useState<number>(0);
  return (
    <>
      <Carousel index={index} setIndex={setIndex} />
      {index === 3 ? (
        <ScreenBottomButton
          name="시작하기"
          onPress={() => navigation.navigate('MainTab')}
        />
      ) : (
        <View style={styles.skipContainer}>
          <Pressable onPress={() => navigation.navigate('MainTab')}>
            <Text style={styles.skip}>사용법 건너뛰기</Text>
          </Pressable>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  skipContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.White,
  },
  skip: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P2,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Poolgreen,
  },
});

export default GuideScreen;
