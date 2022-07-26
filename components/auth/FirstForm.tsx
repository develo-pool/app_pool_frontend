import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SignUpParams} from '../../api/auth';
import {TempProps} from '../../screens/SignUpScreen';
import TextInputs from '../TextInputs';
import Title from '../Title';
import {AuthButton, InputTitle} from './AuthComponents';
import {CheckPhoneNumber} from './Validation';

function FirstForm({
  onChangeText,
  form,
  temp,
  setTemp,
}: {
  onChangeText: any;
  form: SignUpParams;
  temp: TempProps;
  setTemp: any;
}) {
  const [phoneNumberValid, setPhoneNumberValid] = useState<boolean>(true);
  const changePhoneNumberHandler = (value: string) => {
    onChangeText('phoneNumber')(value);
    setTemp({...temp, firstState: 'default', authNumber: ''});
    setPhoneNumberValid(CheckPhoneNumber(value));
  };

  const authLen = temp.authNumber.length;

  return (
    <View style={styles.block}>
      <Title title="휴대폰 번호를" />
      <Title title="인증해 주세요." hasMargin={true} />
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
            temp.firstState === 'request'
              ? {type: 'Correct', text: '인증번호가 전송되었습니다.'}
              : phoneNumberValid || form.phoneNumber.length === 0
              ? undefined
              : {type: 'Error', text: '번호양식에 맞게 입력해 주세요.'}
          }
        />
        <AuthButton
          text={'인증하기'}
          disabled={
            !(
              form.phoneNumber &&
              phoneNumberValid &&
              temp.firstState === 'default'
            )
          }
          onPress={() => {
            onChangeText('firstState')('request');
          }}
        />
      </View>
      {temp.firstState !== 'default' && (
        <>
          <InputTitle title="인증번호" />
          <View style={styles.row}>
            <TextInputs
              type={
                authLen !== 6 && authLen !== 0
                  ? 'error'
                  : temp.firstState === 'confirm'
                  ? 'disable'
                  : 'default'
              }
              placeholder="인증번호 입력"
              value={temp.authNumber}
              onChangeText={onChangeText('authNumber')}
              keyboardType="number-pad"
              maxLength={6}
              alert={
                temp.firstState === 'confirm'
                  ? {type: 'Correct', text: '인증되었습니다.'}
                  : authLen === 6 || authLen === 0
                  ? undefined
                  : {type: 'Error', text: '인증번호 6자리를 입력해 주세요.'}
              }
            />
            <AuthButton
              text="인증하기"
              disabled={authLen !== 6 || temp.firstState === 'confirm'}
              onPress={() => {
                onChangeText('firstState')('confirm');
              }}
            />
          </View>
        </>
      )}
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
