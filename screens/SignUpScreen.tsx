import React, {useEffect, useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {RootStackNavigationProp, RootStackParamList} from './types';
import MainContainer from '../components/MainContainer';
import ScreenBottomButton from '../components/ScreenBottomButton';
import ProcessBar from '../components/ProcessBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignUpForm from '../components/auth/SignUpForm';
import useSignUp from '../hooks/useSignUp';
import {SignUpParams} from '../api/auth';

const TOTAL = 3;

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
      headerTransparent: true,
      headerLeft: () => (
        <TouchableOpacity
          onPress={
            current
              ? () => navigation.navigate('SignUp', {current: current - 1})
              : () => navigation.goBack()
          }>
          <Icon name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={28} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [current, navigation]);

  const {mutate: signUp, isLoading: signUpLoading} = useSignUp();
  const [form, setForm] = useState<SignUpParams>({
    username: '',
    password: '',
    nickName: '',
    phoneNumber: '',
    gender: '',
    birthDay: '',
    termAgreement: false,
    privacyAgreement: false,
  });

  const createChangeTextHandler = (name: string) => (value: string) => {
    setForm({...form, [name]: value});
  };

  const onPress = () => {
    if (signUpLoading) {
      return;
    }

    signUp(form);
  };

  console.log(form);

  return (
    <>
      <MainContainer type="wide">
        <SignUpForm
          current={current}
          createChangeTextHandler={createChangeTextHandler}
          form={form}
        />
      </MainContainer>
      {current === 2 ? (
        <ScreenBottomButton
          name="가입완료"
          onPress={() => {
            onPress();
            // navigation.navigate('Guide');
          }}
          enabled={!signUpLoading}
        />
      ) : (
        <ScreenBottomButton
          name="다음"
          onPress={() => {
            navigation.navigate('SignUp', {current: current + 1});
          }}
        />
      )}
    </>
  );
}

export default SignUpScreen;
