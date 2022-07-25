import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {SignUpParams} from '../../api/auth';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import ThirdForm from './ThirdForm';

const SignUpForm = ({
  current,
  createChangeTextHandler,
  form,
}: {
  current: number;
  createChangeTextHandler: any;
  form: SignUpParams;
}) => {
  interface Props {
    state: 'default' | 'request' | 'confirm';
    phoneNumber: string;
    authNumber: string;
    password: '';
    confirm: string;
    passwordValid: {first: boolean; second: boolean};
  }
  const [temp, setTemp] = useState<Props>({
    state: 'default',
    phoneNumber: '',
    authNumber: '',
    password: '',
    confirm: '',
    passwordValid: {first: true, second: true},
  });

  switch (current) {
    case 0:
      return (
        <FirstForm
          onChangeText={createChangeTextHandler}
          temp={temp}
          setTemp={setTemp}
        />
      );
    case 1:
      return <SecondForm onChangeText={createChangeTextHandler} form={form} />;
    default:
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <ThirdForm
            onChangeText={createChangeTextHandler}
            temp={temp}
            form={form}
            setTemp={setTemp}
          />
        </ScrollView>
      );
  }
};

export default SignUpForm;
