import React from 'react';
import {ScrollView} from 'react-native';
import {SignUpParams} from '../../api/auth';
import {TempProps} from '../../screens/SignUpScreen';
import Category from '../category/Category';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import ThirdForm from './ThirdForm';

const SignUpForm = ({
  current,
  createChangeTextHandler,
  checkedItemHandler,
  form,
  temp,
  setTemp,
}: {
  current: number;
  createChangeTextHandler: any;
  checkedItemHandler: any;
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
    case 2:
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
    default:
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Category
            checkedItems={form.category}
            checkedItemHandler={checkedItemHandler}
          />
        </ScrollView>
      );
  }
};

export default SignUpForm;
