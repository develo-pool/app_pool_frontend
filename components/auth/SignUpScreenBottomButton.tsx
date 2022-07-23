import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SignUpParams} from '../../api/auth';
import {RootStackNavigationProp} from '../../screens/types';
import ScreenBottomButton from '../ScreenBottomButton';

function SignUpScreenBottomButton({
  current,
  form,
  onPress,
}: {
  current: number;
  form: SignUpParams;
  onPress: () => void;
}) {
  const navigation = useNavigation<RootStackNavigationProp>();

  switch (current) {
    case 0:
      return (
        <ScreenBottomButton
          name="다음"
          onPress={() => {
            navigation.navigate('SignUp', {current: current + 1});
          }}
          enabled={!!form.phoneNumber}
        />
      );
    case 1:
      return (
        <ScreenBottomButton
          name="다음"
          onPress={() => {
            navigation.navigate('SignUp', {current: current + 1});
          }}
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
          enabled={false}
        />
      );
  }
}

export default SignUpScreenBottomButton;
