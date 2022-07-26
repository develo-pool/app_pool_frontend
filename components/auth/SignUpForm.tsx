import React from 'react';
import {ScrollView} from 'react-native';
import {SignUpParams} from '../../api/auth';
import {TempProps} from '../../screens/SignUpScreen';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import ThirdForm from './ThirdForm';

const SignUpForm = ({
  current,
  createChangeTextHandler,
  form,
  temp,
  setTemp,
}: {
  current: number;
  createChangeTextHandler: any;
  form: SignUpParams;
  temp: TempProps;
  setTemp: any;
}) => {
  switch (current) {
    case 0:
      return (
        <FirstForm
          onChangeText={createChangeTextHandler}
          form={form}
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
          />
        </ScrollView>
      );
  }
};

export default SignUpForm;
