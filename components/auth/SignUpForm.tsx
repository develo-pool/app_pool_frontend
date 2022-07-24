import React, {useState} from 'react';
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
  }
  const [temp, setTemp] = useState<Props>({
    state: 'default',
    phoneNumber: '',
    authNumber: '',
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
      return <ThirdForm onChangeText={createChangeTextHandler} form={form} />;
  }
};

export default SignUpForm;
