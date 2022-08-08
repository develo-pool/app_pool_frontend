import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import TextInputs from '../TextInputs';
import {AuthButton, InputTitle} from './AuthComponents';
import {CheckPhoneNumber} from './Validation';

interface PhoneAuthProps {
  phoneNumber: string;
  authNumber: string;
  state: 'default' | 'request' | 'confirm';
}

function PhoneAuthForm({
  form,
  onChangeForm,
  setForm,
}: {
  form: PhoneAuthProps;
  onChangeForm: any;
  setForm: any;
}) {
  const [phoneNumberValid, setPhoneNumberValid] = useState<boolean>(true);
  const changePhoneNumberHandler = (value: string) => {
    setForm({...form, state: 'default', authNumber: '', phoneNumber: value});
    setPhoneNumberValid(CheckPhoneNumber(value));
  };
  const authLen = form.authNumber.length;
  return (
    <>
      <InputTitle title="휴대전화" />
      <View style={styles.row}>
        <TextInputs
          type={
            phoneNumberValid || form.phoneNumber.length === 0
              ? 'default'
              : 'error'
          }
          placeholder="예.01012345678"
          value={form.phoneNumber}
          onChangeText={changePhoneNumberHandler}
          keyboardType="number-pad"
          maxLength={11}
          alert={
            form.state === 'request'
              ? {type: 'Correct', text: '인증번호가 전송되었습니다.'}
              : phoneNumberValid || form.phoneNumber.length === 0
              ? undefined
              : {type: 'Error', text: '번호양식에 맞게 입력해 주세요.'}
          }
        />
        <AuthButton
          text={'인증하기'}
          disabled={
            !(form.phoneNumber && phoneNumberValid && form.state === 'default')
          }
          onPress={() => {
            onChangeForm('state')('request');
          }}
        />
      </View>
      {form.state !== 'default' && (
        <View style={form.state !== 'confirm' && styles.margin}>
          <InputTitle title="인증번호" />
          <View style={styles.row}>
            <TextInputs
              type={
                authLen !== 6 && authLen !== 0
                  ? 'error'
                  : form.state === 'confirm'
                  ? 'disable'
                  : 'default'
              }
              placeholder="인증번호 입력"
              value={form.authNumber}
              onChangeText={onChangeForm('authNumber')}
              keyboardType="number-pad"
              maxLength={6}
              alert={
                form.state === 'confirm'
                  ? {type: 'Correct', text: '인증되었습니다.'}
                  : authLen === 6 || authLen === 0
                  ? undefined
                  : {type: 'Error', text: '인증번호 6자리를 입력해 주세요.'}
              }
            />
            <AuthButton
              text="인증하기"
              disabled={authLen !== 6 || form.state === 'confirm'}
              onPress={() => {
                onChangeForm('state')('confirm');
              }}
            />
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  margin: {
    marginTop: 18,
  },
});

export default PhoneAuthForm;
