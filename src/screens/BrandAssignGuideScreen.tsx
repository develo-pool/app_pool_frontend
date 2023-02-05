import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../assets/theme';
import MainContainer from '../components/MainContainer';
import ScreenBottomButton from '../components/ScreenBottomButton';
import {RootStackNavigationProp} from './types';

function BrandAssignGuideScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={styles.header}>브랜드 등록</Text>,
      headerBackVisible: false,
      headerShadowVisible: false,
      headerTransparent: true,
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <>
      <MainContainer>
        <View style={styles.container}>
          <Text style={styles.title}>브랜드 등록하기</Text>
          <Text style={styles.text}>
            {`누구나 브랜드로 등록해서
메시지로 팔로워에게 찾아갈 수 있어요.
보여지지 않았던 이야기를 전해주세요!

팔로워는 브랜드명을 검색할 수 있어요.
외우기 쉽고 특별한 브랜드 이름을 지어보세요.`}
          </Text>
        </View>
      </MainContainer>
      <ScreenBottomButton
        name="시작하기"
        onPress={() => navigation.push('BrandAssign', {current: 0})}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.H5,
    color: theme.colors.Black,
    fontWeight: theme.fontWeight.Bold,
  },
  title: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.H3,
    color: theme.colors.Poolblue,
    fontWeight: theme.fontWeight.Bold,
    paddingVertical: 16,
  },
  text: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
    color: theme.colors.Grey50,
    lineHeight: 24,
  },
  container: {
    marginTop: 140,
  },
});

export default BrandAssignGuideScreen;
