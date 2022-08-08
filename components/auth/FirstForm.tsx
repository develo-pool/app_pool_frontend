import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SignUpScreenProps} from '../../screens/SignUpScreen';
import Title from '../Title';
import PhoneAuthForm from './PhoneAuthForm';

function FirstForm({
  onChangeText,
  form,
  setForm,
}: {
  onChangeText: any;
  form: SignUpScreenProps;
  setForm: any;
}) {
  return (
    <View style={styles.block}>
      <Title title="휴대폰 번호를" />
      <Title title="인증해 주세요." hasMargin={true} />
      <PhoneAuthForm
        form={form}
        onChangeForm={onChangeText}
        setForm={setForm}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 32,
  },
});

export default FirstForm;
