import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SignUpParams} from '../../api/auth';
import TextInputs from '../TextInputs';
import Title from '../Title';
import {AuthButton, CheckBox, InputTitle} from './AuthComponents';

function ThirdForm({
  onChangeText,
  form,
}: {
  onChangeText: any;
  form: SignUpParams;
}) {
  return (
    <View style={styles.block}>
      <Title title="아이디 및 비밀번호를" />
      <Title title="설정해 주세요." hasMargin={true} />
      <InputTitle title="아이디" />
      <View style={[styles.row, styles.noMargin]}>
        <TextInputs
          type="default"
          placeholder="아이디를 입력해 주세요"
          value={form.username}
          onChangeText={onChangeText('username')}
        />
        <AuthButton text="중복확인" />
      </View>

      <Text style={styles.alert}>
        최소 3자 ~ 20자, 영문 소문자로 입력해 주세요.
      </Text>
      <InputTitle title="닉네임" />
      <View style={styles.row}>
        <TextInputs
          type="default"
          placeholder="한글 및 영문으로 입력"
          value={form.nickName}
          onChangeText={onChangeText('nickName')}
        />
        <AuthButton text="중복확인" />
      </View>
      <InputTitle title="비밀번호" />
      <View style={styles.row}>
        <TextInputs
          type="default"
          placeholder="비밀번호를 입력해 주세요"
          value={form.password}
          onChangeText={onChangeText('password')}
        />
      </View>
      <InputTitle title="비밀번호 확인" />
      <View style={styles.row}>
        <TextInputs
          type="default"
          placeholder="비밀번호를 다시 입력해 주세요"
        />
      </View>
      <CheckBox
        title="이용약관 동의 (필수)"
        state={form.termAgreement}
        onPress={onChangeText('termAgreement')}
      />
      <CheckBox
        title="개인정보 처리방침 (필수)"
        state={form.privacyAgreement}
        onPress={onChangeText('privacyAgreement')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    paddingTop: 130,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 30,
    minHeight: 48,
  },
  noMargin: {
    marginBottom: 4,
  },
  alert: {
    marginBottom: 25,
    fontSize: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#BABABA',
    backgroundColor: 'white',
    paddingHorizontal: 12,
  },
});

export default ThirdForm;
