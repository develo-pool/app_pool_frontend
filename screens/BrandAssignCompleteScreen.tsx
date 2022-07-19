import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import MainContainer from '../components/MainContainer';
import ScreenBottomButton from '../components/ScreenBottomButton';
import Title from '../components/Title';
import {RootStackNavigationProp} from './types';

const data = {
  userName: '마라가 좋아',
  infoText:
    '붉은색 푸른색 그 사이 3초 그 짧은 시간 노란색 빛을 내는 저기 저 신호등이 내 머릿속을 텅 비워버려 내가 빠른 지도 느린지도 모르겠어 그저 눈앞이 샛노랄 뿐이야',
  category: ['#카테고리1', '#카테고리2', '#카테고리3'],
  profileImg:
    'file:///data/user/0/com.app_pool_frontend/cache/rn_image_picker_lib_temp_0e072fc9-b664-4a5a-b3de-8a50c64ec30c.png',
};

function BrandAssignCompleteScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <View style={styles.block}>
      <MainContainer>
        <Title title="브랜드 등록 요청을" />
        <Title title="완료했습니다!" />
        <Text>심사 영업일 기준 2~3일 후 심사가 완료됩니다.</Text>
        <Text>브랜드 등록 전까지 수정 가능합니다</Text>
        <View style={styles.box}>
          <View style={styles.circle}>
            <Image style={styles.circle} source={{uri: data.profileImg}} />
          </View>
          <Text>{data.userName}</Text>
          <Text>{data.infoText}</Text>
          <View style={styles.row}>
            {data.category.map(i => (
              <View key={i} style={styles.category}>
                <Text>{i}</Text>
              </View>
            ))}
          </View>
        </View>
      </MainContainer>
      <ScreenBottomButton
        name="대기하면서 피드 구경하기"
        onPress={() => navigation.push('MainTab')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    flex: 1,
  },
  box: {
    backgroundColor: '#F3F3F3',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  circle: {
    borderRadius: 70,
    backgroundColor: '#D9D9D9',
    width: 70,
    height: 70,
  },
  row: {
    flexDirection: 'row',
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
