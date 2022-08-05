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
        <FirstForm
          onChangeText={createChangeTextHandler}
          form={form}
          setForm={setForm}
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
            form={form}
            setForm={setForm}
          />
        </ScrollView>
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
