import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SignUpParams} from '../../api/auth';
import {TempProps} from '../../screens/SignUpScreen';
import {RootStackNavigationProp} from '../../screens/types';
import ScreenBottomButton from '../ScreenBottomButton';
import {CheckBirthday} from './Validation';

function SignUpScreenBottomButton({
  current,
  form,
  temp,
  onPress,
}: {
  current: number;
  form: SignUpParams;
  temp: TempProps;
  onPress: () => void;
}) {
  const navigation = useNavigation<RootStackNavigationProp>();

  const FirstFormValid = !!form.phoneNumber && temp.firstState === 'confirm';
  const SecondFormValid = CheckBirthday(form.birthDay) && !!form.gender;
  const ThirdFormValid =
    !!(
      temp.usernameChecked
      // &&
      // form.nickName &&
      // temp.passwordValid.first &&
      // temp.passwordValid.second &&
      // form.password === temp.confirm &&
      // form.privacyAgreement &&
      // form.termAgreement
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
    default:
      return (
        <ScreenBottomButton
          name="가입완료"
          onPress={() => {
            onPress();
            // navigation.navigate('Guide');
          }}
          enabled={ThirdFormValid}
        />
      );
  }
}

export default SignUpScreenBottomButton;
