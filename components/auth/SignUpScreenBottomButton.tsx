import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {SignUpScreenProps} from '../../screens/SignUpScreen';
import {RootStackNavigationProp} from '../../screens/types';
import ScreenBottomButton from '../ScreenBottomButton';
import {CheckBirthday} from './Validation';

function SignUpScreenBottomButton({
  current,
  form,
  onPress,
  signUpLoading,
}: {
  current: number;
  form: SignUpScreenProps;
  onPress: () => void;
  signUpLoading: boolean;
}) {
  const navigation = useNavigation<RootStackNavigationProp>();

  const FirstFormValid = !!form.phoneNumber && form.state === 'confirm';
  const SecondFormValid = CheckBirthday(form.birthday) && !!form.gender;
  const ThirdFormValid = !!(
    form.usernameChecked &&
    form.nickNameChecked &&
    form.nickName &&
    form.passwordValid.first &&
    form.passwordValid.second &&
    form.password === form.confirm &&
    form.privacyAgreement &&
    form.termAgreement
  );
  switch (current) {
    case 0:
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScreenBottomButton
            name="다음"
            onPress={() => {
              navigation.navigate('SignUp', {current: current + 1});
            }}
            enabled={FirstFormValid}
          />
        </KeyboardAvoidingView>
      );
    case 1:
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScreenBottomButton
            name="다음"
            onPress={() => {
              navigation.navigate('SignUp', {current: current + 1});
            }}
            enabled={SecondFormValid}
          />
        </KeyboardAvoidingView>
      );
    case 2:
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScreenBottomButton
            name="다음"
            onPress={() => {
              navigation.navigate('SignUp', {current: current + 1});
            }}
            enabled={ThirdFormValid}
          />
        </KeyboardAvoidingView>
      );
    default:
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScreenBottomButton
            name="가입완료"
            onPress={() => {
              onPress();
            }}
            isLoading={signUpLoading}
            enabled={form.category.length > 2 && !signUpLoading}
          />
        </KeyboardAvoidingView>
      );
  }
}

export default SignUpScreenBottomButton;
