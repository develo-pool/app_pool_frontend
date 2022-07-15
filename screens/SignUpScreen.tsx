import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {RootStackNavigationProp} from './RootStack';
import MainContainer from '../components/MainContainer';
import ScreenBottomButton from '../components/ScreenBottomButton';
import Title from '../components/Title';
import {InputTitle} from '../components/LoginComponents';
import ProcessBar from '../components/ProcessBar';

function SignUpScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [process, setProcess] = useState({
    total: 2,
    current: 1,
  });

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <ProcessBar total={process.total} current={process.current} />
      ),
      headerTitleAlign: 'center',
    });
  }, [process, navigation]);

  const [form, setForm] = useState({
    phoneNum: '',
    password: '',
    birthday: '',
  });

  const createChangeTextHandler = (name: string) => (value: string) => {
    setForm({...form, [name]: value});
  };
  return (
    <>
      <MainContainer>
        <Title title="기본정보" subTitle="회원가입" />
        <InputTitle title="휴대폰 번호" />
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="01012345678"
            value={form.phoneNum}
            onChangeText={createChangeTextHandler('phoneNum')}
          />
          <Pressable>
            <Text>중복확인</Text>
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
          onChangeText={createChangeTextHandler('phoneNum')}
        />
      </MainContainer>
      <ScreenBottomButton
        name="다음"
        onPress={() => {
          setProcess({...process, current: process.current + 1});
        }}
        enabled={true}
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

export default SignUpScreen;
