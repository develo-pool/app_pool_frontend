import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {SignUpParams} from '../../api/auth';
import Title from '../Title';
import {AuthButton, InputTitle} from './AuthComponents';

function FirstForm({
  onChangeText,
  form,
}: {
  onChangeText: any;
  form: SignUpParams;
}) {
  return (
    <View>
      <Title title="휴대폰 번호를" />
      <Title title="인증해 주세요." />
      <InputTitle title="휴대전화" />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="01012345678"
          value={form.phoneNumber}
          onChangeText={onChangeText('phoneNumber')}
        />
        <AuthButton text="재전송" />
      </View>
      <InputTitle title="인증번호" />
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="인증번호 입력" />
        <AuthButton text="인증하기" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 30,
    minHeight: 48,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#BABABA',
    backgroundColor: 'white',
    paddingHorizontal: 12,
  },
});

export default FirstForm;
