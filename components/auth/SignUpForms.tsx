import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {AuthButton, CheckBox, InputTitle, RadioButton} from './AuthComponents';

interface Props {
  phoneNum: string;
  gender: string;
  birthday: string;
  nickname: string;
  password: string;
  confirmPassword: string;
  terms: {
    service: boolean;
    privacy: boolean;
  };
}

export function FirstForm({
  onChangeText,
  form,
}: {
  onChangeText: any;
  form: Props;
}) {
  return (
    <View>
      <InputTitle title="휴대폰 번호" />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="01012345678"
          value={form.phoneNum}
          onChangeText={onChangeText('phoneNum')}
        />
        <AuthButton text="재발송" />
      </View>
      <InputTitle title="인증번호" />
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="인증번호 입력" />
        <AuthButton text="인증하기" />
      </View>
      <InputTitle title="성별" />
      <View style={styles.row}>
        <RadioButton
          text="여자"
          value="female"
          disabled={form.gender !== 'female'}
          onPress={onChangeText('gender')}
        />
        <RadioButton
          text="남자"
          value="male"
          disabled={form.gender !== 'male'}
          marginLeft={true}
          onPress={onChangeText('gender')}
        />
      </View>
      <InputTitle title="생년월일" />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="예. 990101"
          value={form.birthday}
          onChangeText={onChangeText('birthday')}
        />
      </View>
    </View>
  );
}

export function SecondForm({
  onChangeText,
  form,
}: {
  onChangeText: any;
  form: Props;
}) {
  return (
    <View>
      <InputTitle title="닉네임" />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="닉네임 입력"
          value={form.nickname}
          onChangeText={onChangeText('nickname')}
        />
        <AuthButton text="중복확인" />
      </View>
      <InputTitle title="비밀번호" />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="비밀번호 입력"
          value={form.password}
          onChangeText={onChangeText('password')}
        />
      </View>
      <InputTitle title="비밀번호 확인" />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="비밀번호 재입력"
          value={form.confirmPassword}
          onChangeText={onChangeText('confirmPassword')}
        />
      </View>
      <CheckBox
        title="이용약관 동의 (필수)"
        value="service"
        onPress={onChangeText('terms')}
        terms={form.terms}
      />
      <CheckBox
        title="개인정보 처리방침 (필수)"
        value="privacy"
        onPress={onChangeText('terms')}
        terms={form.terms}
      />
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
