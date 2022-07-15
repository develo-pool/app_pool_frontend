import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from './types';
import MainContainer from '../components/MainContainer';
import ScreenBottomButton from '../components/ScreenBottomButton';
import Title from '../components/Title';
import {InputTitle} from '../components/LoginComponents';

function LoginScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [form, setForm] = useState({
    phoneNum: '',
    password: '',
  });

  const createChangeTextHandler = (name: string) => (value: string) => {
    setForm({...form, [name]: value});
  };

  const passwordRef = useRef<TextInput | null>(null);

  return (
    <>
      <MainContainer>
        <View style={styles.block}>
          <Title title="로그인" />
          <InputTitle title="휴대전화" />
          <TextInput
            style={styles.input}
            value={form.phoneNum}
            placeholder="'-'빼고 입력"
            onChangeText={createChangeTextHandler('phoneNum')}
            onSubmitEditing={() => passwordRef.current?.focus()}
            returnKeyType="next"
          />
          <InputTitle title="비밀번호" />
          <TextInput
            style={styles.input}
            value={form.password}
            placeholder="비밀번호 입력"
            onChangeText={createChangeTextHandler('password')}
            ref={passwordRef}
          />
          <View style={styles.wrapper}>
            <Pressable
              onPress={() => navigation.navigate('SignUp', {current: 0})}>
              <Text>회원가입</Text>
            </Pressable>
            <Text> | </Text>
            <Pressable>
              <Text>비밀번호 찾기</Text>
            </Pressable>
          </View>
        </View>
      </MainContainer>
      <ScreenBottomButton
        name="로그인"
        onPress={() => navigation.navigate('SignUp', {current: 0})}
        enabled={Boolean(form.phoneNum) && Boolean(form.password)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, justifyContent: 'space-around'},
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  input: {
    borderWidth: 1,
    borderColor: '#BABABA',
    backgroundColor: 'white',
    marginBottom: 30,
    paddingHorizontal: 12,
  },
});

export default LoginScreen;
