import React from 'react';
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SignUpScreenProps} from '../../screens/SignUpScreen';
import Category from '../category/Category';
import MainContainer from '../MainContainer';
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
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.contentContainer}>
          <MainContainer type="wide">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.inner}>
                <FirstForm
                  onChangeText={createChangeTextHandler}
                  form={form}
                  setForm={setForm}
                />
              </View>
            </TouchableWithoutFeedback>
          </MainContainer>
        </ScrollView>
      );
    case 1:
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.contentContainer}>
          <MainContainer type="wide">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.inner}>
                <SecondForm
                  onChangeText={createChangeTextHandler}
                  form={form}
                />
              </View>
            </TouchableWithoutFeedback>
          </MainContainer>
        </ScrollView>
      );
    case 2:
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.contentContainer}>
          <MainContainer>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.inner}>
                <ThirdForm
                  onChangeText={createChangeTextHandler}
                  form={form}
                  setForm={setForm}
                />
              </View>
            </TouchableWithoutFeedback>
          </MainContainer>
        </ScrollView>
      );
    default:
      return (
        <MainContainer>
          <Category
            checkedItems={form.category}
            checkedItemHandler={checkedItemHandler}
          />
        </MainContainer>
      );
  }
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default SignUpForm;
