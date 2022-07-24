import React from 'react';
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
  switch (current) {
    case 0:
      return <FirstForm onChangeText={createChangeTextHandler} form={form} />;
    case 1:
      return <SecondForm onChangeText={createChangeTextHandler} form={form} />;
    default:
      return <ThirdForm onChangeText={createChangeTextHandler} form={form} />;
  }
};

export default SignUpForm;
