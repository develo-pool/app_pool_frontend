import {useNavigation} from '@react-navigation/native';
import React from 'react';
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
  const SecondFormValid = CheckBirthday(form.birthDay) && !!form.gender;
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
        <ScreenBottomButton
          name="다음"
          onPress={() => {
            navigation.navigate('SignUp', {current: current + 1});
          }}
          enabled={FirstFormValid}
        />
      );
    case 1:
      return (
        <ScreenBottomButton
          name="다음"
          onPress={() => {
            navigation.navigate('SignUp', {current: current + 1});
          }}
          enabled={SecondFormValid}
        />
      );
    case 2:
      return (
        <ScreenBottomButton
          name="다음"
          onPress={() => {
            navigation.navigate('SignUp', {current: current + 1});
          }}
          enabled={ThirdFormValid}
        />
      );
    default:
      return (
        <ScreenBottomButton
          name="가입완료"
          onPress={() => {
            onPress();
          }}
          isLoading={signUpLoading}
          enabled={form.category.length > 2 && !signUpLoading}
        />
      );
  }
}

export default SignUpScreenBottomButton;
