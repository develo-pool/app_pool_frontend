import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SignUpParams} from '../../api/auth';
import TextInputs from '../TextInputs';
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
    <View style={styles.block}>
      <Title title="휴대폰 번호를" />
      <Title title="인증해 주세요." hasMargin={true} />
      <InputTitle title="휴대전화" />
      <View style={styles.row}>
        <TextInputs
          type="default"
          placeholder="예. 01012345678"
          value={form.phoneNumber}
          onChangeText={onChangeText('phoneNumber')}
          alert={{type: 'Correct', text: '인증번호가 전송되었습니다.'}}
        />
        <AuthButton text="재전송" />
      </View>
      <InputTitle title="인증번호" />
      <View style={styles.row}>
        <TextInputs type="default" placeholder="인증번호 입력" />
        <AuthButton text="인증하기" />
      </View>
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
