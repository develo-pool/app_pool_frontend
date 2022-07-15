import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {InputTitle} from '../components/LoginComponents';

interface Props {
  phoneNum: string;
  gender: string;
  birthday: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

export function FirstForm({
  onChangeText,
  form,
}: {
  onChangeText: any;
  form: Props;
}) {
  return (
    <>
      <InputTitle title="휴대폰 번호" />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="01012345678"
          value={form.phoneNum}
          onChangeText={onChangeText('phoneNum')}
        />
        <Pressable>
          <Text>중복확인</Text>
        </Pressable>
      </View>
      <InputTitle title="인증번호" />
      <View style={styles.row}>
        <TextInput style={styles.input} placeholder="인증번호 입력" />
        <Pressable>
          <Text>인증하기</Text>
        </Pressable>
      </View>
      <InputTitle title="성별" />
      <View style={[styles.row, styles.margin]}>
        <Pressable>
          <Text>여자</Text>
        </Pressable>
        <Pressable>
          <Text>남자</Text>
        </Pressable>
      </View>
      <InputTitle title="생년월일" />
      <TextInput
        style={styles.input}
        placeholder="예. 990101"
        value={form.birthday}
        onChangeText={onChangeText('birthday')}
      />
    </>
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
    <>
      <InputTitle title="닉네임" />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="닉네임 입력"
          value={form.nickname}
          onChangeText={onChangeText('nickname')}
        />
        <Pressable>
          <Text>중복확인</Text>
        </Pressable>
      </View>
      <InputTitle title="비밀번호" />
      <TextInput
        style={styles.input}
        placeholder="비밀번호 입력"
        value={form.password}
        onChangeText={onChangeText('password')}
      />
      <InputTitle title="비밀번호 확인" />
      <TextInput
        style={styles.input}
        placeholder="비밀번호 재입력"
        value={form.confirmPassword}
        onChangeText={onChangeText('confirmPassword')}
      />
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  margin: {
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#BABABA',
    backgroundColor: 'white',
    marginBottom: 30,
    paddingHorizontal: 12,
  },
});
