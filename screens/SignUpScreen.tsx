import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackNavigationProp, RootStackParamList} from './types';
import MainContainer from '../components/MainContainer';
import ProcessBar from '../components/ProcessBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignUpForm from '../components/auth/SignUpForm';
import useSignUp from '../hooks/useSignUp';
import SignUpScreenBottomButton from '../components/auth/SignUpScreenBottomButton';

const TOTAL = 4;

type SignUpScreenRouteProp = RouteProp<RootStackParamList, 'SignUp'>;

export interface SignUpScreenProps {
  username: string;
  password: string;
  nickName: string;
  phoneNumber: string;
  gender: 'male' | 'female' | '';
  birthDay: string;
  termAgreement: boolean;
  privacyAgreement: boolean;
  category: string[];
  state: 'default' | 'request' | 'confirm';
  authNumber: string;
  confirm: string;
  usernameChecked: boolean | undefined;
  nickNameChecked: boolean | undefined;
  passwordValid: {first: boolean; second: boolean};
  authNumberError: boolean;
}

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
      headerLeft: () =>
        current === 0 ? undefined : (
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
  const [form, setForm] = useState<SignUpScreenProps>({
    username: '',
    password: '',
    nickName: '',
    phoneNumber: '',
    gender: '',
    birthDay: '',
    termAgreement: false,
    privacyAgreement: false,
    category: [],
    state: 'default',
    authNumber: '',
    confirm: '',
    passwordValid: {first: false, second: false},
    usernameChecked: undefined,
    nickNameChecked: undefined,
    authNumberError: false,
  });
  const createChangeTextHandler =
    (name: string) => (value: string | string[]) => {
      setForm({...form, [name]: value});
    };

  const checkedItemHandler = (name: string, isChecked: boolean) => {
    if (isChecked) {
      createChangeTextHandler('category')([...form.category, name]);
    } else if (!isChecked && form.category.find(i => i === name)) {
      const nextCheckedItems = form.category.filter(i => i !== name);
      createChangeTextHandler('category')(nextCheckedItems);
    }
  };

  const onPress = () => {
    if (signUpLoading) {
      return;
    }
    signUp({
      username: form.username,
      password: form.password,
      nickName: form.nickName,
      phoneNumber: form.phoneNumber,
      gender: form.gender,
      birthDay: form.birthDay,
      termAgreement: form.termAgreement,
      privacyAgreement: form.privacyAgreement,
      category: form.category,
    });
  };

  return (
    <>
      <MainContainer type={current < 2 ? 'wide' : undefined}>
        <SignUpForm
          current={current}
          createChangeTextHandler={createChangeTextHandler}
          checkedItemHandler={checkedItemHandler}
          form={form}
          setForm={setForm}
        />
      </MainContainer>
      <SignUpScreenBottomButton
        current={current}
        form={form}
        onPress={onPress}
        signUpLoading={signUpLoading}
      />
    </>
  );
}

export default SignUpScreen;
