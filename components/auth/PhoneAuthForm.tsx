import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import TextInputs from '../TextInputs';
import {AuthButton, InputTitle} from './AuthComponents';
import {CheckPhoneNumber} from './Validation';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

interface PhoneAuthProps {
  phoneNumber: string;
  authNumber: string;
  state: 'default' | 'request' | 'confirm';
  authNumberError: boolean;
  idError?: boolean;
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
  const [confirmation, setConfirmation] =
    useState<FirebaseAuthTypes.ConfirmationResult>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const changePhoneNumberHandler = (value: string) => {
    setForm({...form, state: 'default', authNumber: '', phoneNumber: value});
    setPhoneNumberValid(CheckPhoneNumber(value));
  };
  const authLen = form.authNumber.length;
  const requestAuthNumber = async () => {
    setIsLoading(true);
    const response = await auth().signInWithPhoneNumber(
      `+82${form.phoneNumber.substring(1)}`,
    );
    setIsLoading(false);
    setConfirmation(response);
    onChangeForm('state')('request');
  };
  const verifyAuthNumber = async () => {
    try {
      setIsLoading(true);
      const data = await confirmation?.confirm(form.authNumber);
      setIsLoading(false);
      if (data !== undefined) {
        onChangeForm('state')('confirm');
      }
    } catch (error) {
      onChangeForm('authNumberError')(true);
    } finally {
      await auth().currentUser?.delete();
    }
  };

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
          isLoading={isLoading}
          onPress={() => {
            requestAuthNumber();
          }}
        />
      </View>
      {form.state !== 'default' && (
        <View style={form.state !== 'confirm' && styles.margin}>
          <InputTitle title="인증번호" />
          <View style={styles.row}>
            <TextInputs
              type={
                (authLen !== 6 && authLen !== 0) || form.authNumberError
                  ? 'error'
                  : form.state === 'confirm'
                  ? 'disable'
                  : 'default'
              }
              placeholder="인증번호 입력"
              value={form.authNumber}
              onChangeText={(value: string) => {
                setForm({...form, authNumber: value, authNumberError: false});
              }}
              keyboardType="number-pad"
              maxLength={6}
              alert={
                form.state === 'confirm'
                  ? {type: 'Correct', text: '인증되었습니다.'}
                  : authLen === 6 || authLen === 0
                  ? form.authNumberError
                    ? {
                        type: 'Error',
                        text: '인증에 실패했습니다. 다시 시도해 주세요.',
                      }
                    : undefined
                  : {type: 'Error', text: '인증번호 6자리를 입력해 주세요.'}
              }
            />
            <AuthButton
              text="인증하기"
              disabled={authLen !== 6 || form.state === 'confirm'}
              isLoading={isLoading}
              onPress={() => {
                verifyAuthNumber();
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
