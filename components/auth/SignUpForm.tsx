import React from 'react';
import {ScrollView} from 'react-native';
import {SignUpScreenProps} from '../../screens/SignUpScreen';
import Category from '../category/Category';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import ThirdForm from './ThirdForm';

const SignUpForm = ({
  current,
  createChangeTextHandler,
  checkedItemHandler,
  form,
  setForm,
}: {
  current: number;
  createChangeTextHandler: any;
  checkedItemHandler: any;
  form: SignUpScreenProps;
  setForm: any;
}) => {
  switch (current) {
    case 0:
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <FirstForm
            onChangeText={createChangeTextHandler}
            form={form}
            setForm={setForm}
          />
        </ScrollView>
      );
    case 1:
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <SecondForm onChangeText={createChangeTextHandler} form={form} />
        </ScrollView>
      );
    case 2:
      return (
        <ThirdForm
          onChangeText={createChangeTextHandler}
          form={form}
          setForm={setForm}
        />
      );
    default:
      return (
        <Category
          checkedItems={form.category}
          checkedItemHandler={checkedItemHandler}
        />
      );
  }
};

export default SignUpForm;
