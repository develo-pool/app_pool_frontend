import React, {useEffect, useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {RootStackNavigationProp} from './types';
import {RootStackParamList} from './types';
import MainContainer from '../components/MainContainer';
import ScreenBottomButton from '../components/ScreenBottomButton';
import Title from '../components/Title';
import ProcessBar from '../components/ProcessBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {FirstForm, SecondForm} from '../components/SignUpComponents';

const TOTAL = 2;

type SignUpScreenRouteProp = RouteProp<RootStackParamList, 'SignUp'>;

function SignUpScreen() {
  const route = useRoute<SignUpScreenRouteProp>();
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
              ? () => navigation.navigate('SignUp', {current: 0})
              : () => navigation.goBack()
          }>
          <Icon name="keyboard-arrow-left" size={30} />
        </TouchableOpacity>
      ),
    });
  }, [current, navigation]);

  const [form, setForm] = useState({
    phoneNum: '',
    gender: '',
    birthday: '',
    nickname: '',
    password: '',
    confirmPassword: '',
  });

  const createChangeTextHandler = (name: string) => (value: string) => {
    setForm({...form, [name]: value});
  };

  return (
    <>
      <MainContainer>
        <Title title={current ? '가입정보' : '기본정보'} subTitle="회원가입" />
        {current ? (
          <SecondForm onChangeText={createChangeTextHandler} form={form} />
        ) : (
          <FirstForm onChangeText={createChangeTextHandler} form={form} />
        )}
      </MainContainer>
      {current ? (
        <ScreenBottomButton
          name="가입완료"
          onPress={() => {
            navigation.navigate('Guide');
          }}
          enabled={true}
        />
      ) : (
        <ScreenBottomButton
          name="다음"
          onPress={() => {
            navigation.navigate('SignUp', {current: 1});
          }}
        />
      )}
    </>
  );
}

export default SignUpScreen;
