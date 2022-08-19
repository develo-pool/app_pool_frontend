import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from './types';
import MainContainer from '../components/MainContainer';
import Title from '../components/Title';
import {AuthButton, InputTitle} from '../components/auth/AuthComponents';
import TextInputs from '../components/TextInputs';
import theme from '../assets/theme';
import useLogin from '../hooks/useLogin';
import AlertBox from '../components/AlertBox';

function LoginScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const createChangeTextHandler = (name: string) => (value: string) => {
    setForm({...form, [name]: value});
  };

  const {mutate: login, isLoading: loginLoading} = useLogin();

  const onPress = () => {
    if (loginLoading) {
      return;
    }
    login({username: form.username, password: form.password});
  };

  return (
    <MainContainer>
      <SafeAreaView style={styles.alert}>
        <View>
          <AlertBox />
        </View>
      </SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.block}>
            <View style={styles.title}>
              <Title title="환영합니다!" subTitle="소통의 POOL에 빠져보세요" />
            </View>
            <InputTitle title="아이디" />
            <View style={[styles.row, styles.margin]}>
              <TextInputs
                value={form.username}
                placeholder="아이디 입력"
                onChangeText={createChangeTextHandler('username')}
              />
            </View>
            <InputTitle title="비밀번호" />
            <View style={styles.row}>
              <TextInputs
                type={
                  form.password.length > 7 || !form.password
                    ? 'default'
                    : 'error'
                }
                alert={
                  form.password.length > 7 || !form.password
                    ? undefined
                    : {type: 'Error', text: '최소 8자 이상 입력해주세요.'}
                }
                value={form.password}
                placeholder="비밀번호 입력"
                onChangeText={createChangeTextHandler('password')}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.passwordContainer}>
              <Pressable
                onPress={() => navigation.push('Password', {current: 0})}>
                <Text style={[styles.subText, styles.bold]}>비밀번호 찾기</Text>
              </Pressable>
            </View>
            <AuthButton
              text="로그인"
              welcome={true}
              disabled={!(form.username && form.password.length > 7)}
              onPress={onPress}
            />
            <View style={styles.container}>
              <Text style={styles.subText}>아직 회원이 아니신가요?</Text>
              <Pressable
                onPress={() => navigation.push('SignUp', {current: 0})}>
                <Text style={[styles.subText, styles.bold]}>회원가입</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  alert: {
    zIndex: 10,
  },
  block: {
    flex: 1,
  },
  title: {
    marginTop: 120,
    marginBottom: 60,
  },
  subText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P2,
  },
  bold: {
    marginLeft: 8,
    fontWeight: theme.fontWeight.Bold,
  },
  container: {
    marginTop: 13,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  passwordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
    minHeight: 48,
  },
  margin: {
    marginBottom: 32,
  },
});

export default LoginScreen;
