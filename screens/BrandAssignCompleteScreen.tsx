import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import {getBrand} from '../api/brand';
import theme from '../assets/theme';
import MainContainer from '../components/MainContainer';
import ScreenBottomButton from '../components/ScreenBottomButton';
import Title from '../components/Title';
import {RootStackNavigationProp} from './types';

function BrandAssignCompleteScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const id = '';
  const {data, isLoading} = useQuery('getBrand', () => getBrand(id), {
    refetchOnMount: 'always',
  });
  return (
    <>
      <MainContainer>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator
              size={'large'}
              color={theme.colors.Grey20}
              style={styles.loading}
            />
          </View>
        ) : (
          <View style={styles.block}>
            <Title title="브랜드 등록 요청이" alignCenter={true} />
            <Title title="완료되었습니다!" alignCenter={true} />
            <Text
              style={
                styles.guide
              }>{`브랜드 등록이 완료되면 알림을 드리겠습니다.${'\n'}*요청일 기준 3영업일 내 완료.`}</Text>
            <View style={styles.circle}>
              <Image
                style={styles.circle}
                source={{uri: data?.brandProfileImage}}
              />
            </View>
            <Text style={styles.name}>{data?.brandUsername}</Text>
            <View style={styles.box}>
              <Text style={styles.infoText}>{data?.brandInfo}</Text>
            </View>
          </View>
        )}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  loading: {
    alignSelf: 'center',
  },
});

export default BrandAssignCompleteScreen;
