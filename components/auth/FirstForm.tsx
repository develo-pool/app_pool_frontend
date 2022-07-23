import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextInputs from '../TextInputs';
import Title from '../Title';
import {AuthButton, InputTitle} from './AuthComponents';

function FirstForm({
  onChangeText,
  temp,
  setTemp,
}: {
  onChangeText: any;
  temp: {
    state: 'default' | 'request' | 'confirm';
    phoneNumber: string;
    authNumber: string;
  };
  setTemp: any;
}) {
  return (
    <View style={styles.block}>
      <Title title="휴대폰 번호를" />
      <Title title="인증해 주세요." hasMargin={true} />
      <InputTitle title="휴대전화" />
      <View style={styles.row}>
        <TextInputs
          type="default"
          placeholder="예. 01012345678"
          value={temp.phoneNumber}
          onChangeText={(value: string) =>
            setTemp({...temp, phoneNumber: value})
          }
          keyboardType="number-pad"
          maxLength={11}
          alert={
            temp.state !== 'default'
              ? {type: 'Correct', text: '인증번호가 전송되었습니다.'}
              : undefined
          }
        />
        <AuthButton
          text={temp.state !== 'default' ? '재전송' : '인증하기'}
          disabled={!temp.phoneNumber}
          onPress={() => {
            setTemp({...temp, state: 'request'});
          }}
        />
      </View>
      {temp.state !== 'default' && (
        <>
          <InputTitle title="인증번호" />
          <View style={styles.row}>
            <TextInputs
              type="default"
              placeholder="인증번호 입력"
              value={temp.authNumber}
              onChangeText={(value: string) =>
                setTemp({...temp, authNumber: value})
              }
              keyboardType="number-pad"
              maxLength={6}
              alert={
                temp.state === 'confirm'
                  ? {type: 'Correct', text: '인증되었습니다.'}
                  : undefined
              }
            />
            <AuthButton
              text="인증하기"
              disabled={!temp.authNumber}
              onPress={() => {
                setTemp({...temp, state: 'confirm'});
                onChangeText('phoneNumber')(temp.phoneNumber);
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
