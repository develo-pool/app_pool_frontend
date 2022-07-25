import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackNavigationProp, RootStackParamList} from './types';
import MainContainer from '../components/MainContainer';
import ProcessBar from '../components/ProcessBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignUpForm from '../components/auth/SignUpForm';
import useSignUp from '../hooks/useSignUp';
import {SignUpParams} from '../api/auth';
import SignUpScreenBottomButton from '../components/auth/SignUpScreenBottomButton';

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
      headerShadowVisible: false,
      // headerTransparent: true,
      headerLeft: () => (
        <TouchableOpacity
          onPress={
            current
              ? () => navigation.navigate('SignUp', {current: current - 1})
              : () => navigation.goBack()
          }>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={24} color="black" />
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

  // console.log(form);

  const createChangeTextHandler = (name: string) => (value: string) => {
    setForm({...form, [name]: value});
  };

  const onPress = () => {
    if (signUpLoading) {
      return;
    }
    signUp(form);
  };

  return (
    <>
      <MainContainer type={current !== 2 ? 'wide' : undefined}>
        <SignUpForm
          current={current}
          createChangeTextHandler={createChangeTextHandler}
          form={form}
        />
      </MainContainer>
      <SignUpScreenBottomButton
        current={current}
        form={form}
        onPress={onPress}
      />
    </>
  );
}

export default SignUpScreen;
