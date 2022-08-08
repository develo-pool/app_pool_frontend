import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {InputTitle} from '../components/auth/AuthComponents';
import PasswordForm from '../components/auth/PasswordForm';
import PhoneAuthForm from '../components/auth/PhoneAuthForm';
import {ReplaceKorean} from '../components/auth/Validation';
import MainContainer from '../components/MainContainer';
import ProcessBar from '../components/ProcessBar';
import ScreenBottomButton from '../components/ScreenBottomButton';
import TextInputs from '../components/TextInputs';
import Title from '../components/Title';
import {RootStackNavigationProp, RootStackParamList} from './types';

const TOTAL = 2;

interface PasswordScreenProps {
  username: string;
  phoneNumber: string;
  authNumber: string;
  state: 'default' | 'request' | 'confirm';
  password: string;
  confirm: string;
  passwordValid: {first: boolean; second: boolean};
  usernameChecked: boolean | undefined;
}

type PasswordScreenRouteProp = RouteProp<RootStackParamList, 'Password'>;

function PasswordScreen() {
  const route = useRoute<PasswordScreenRouteProp>();
  const current = route.params.current;
  const navigation = useNavigation<RootStackNavigationProp>();
  const [form, setForm] = useState<PasswordScreenProps>({
    username: '',
    phoneNumber: '',
    authNumber: '',
    state: 'default',
    password: '',
    confirm: '',
    passwordValid: {first: false, second: false},
    usernameChecked: undefined,
  });
  const createChangeFormHandler =
    (name: string) => (value: string | undefined) => {
      setForm({...form, [name]: value});
    };
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <ProcessBar total={TOTAL} current={current} />,
      headerTitleAlign: 'center',
      headerBackVisible: false,
      headerShadowVisible: false,
      headerLeft: () =>
        current === 0 ? undefined : (
          <TouchableOpacity
            onPress={
              current
                ? () => navigation.navigate('Password', {current: current - 1})
                : () => navigation.goBack()
            }>
            <Icon name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [current, navigation]);

  return (
    <>
      <MainContainer>
        {current ? (
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            <View style={styles.block}>
              <Title title="비밀번호를" />
              <Title title="재설정해 주세요." hasMargin={true} />
              <PasswordForm
                form={form}
                onChangeForm={createChangeFormHandler}
                setForm={setForm}
              />
            </View>
          </ScrollView>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            <View style={styles.block}>
              <Title title="본인인증을" />
              <Title title="진행해주세요." hasMargin={true} />
              <InputTitle title="아이디" />
              <View style={styles.row}>
                <TextInputs
                  type={
                    form.username.length > 2 || !form.username
                      ? 'default'
                      : 'error'
                  }
                  placeholder="아이디를 입력해 주세요"
                  value={form.username}
                  onChangeText={(value: string) =>
                    setForm({
                      ...form,
                      username: ReplaceKorean(value),
                      usernameChecked: undefined,
                    })
                  }
                  maxLength={20}
                  alert={
                    form.username.length > 2 || !form.username
                      ? undefined
                      : {type: 'Error', text: '3자 이상 입력해주세요.'}
                  }
                />
              </View>
              <PhoneAuthForm
                form={form}
                onChangeForm={createChangeFormHandler}
                setForm={setForm}
              />
            </View>
          </ScrollView>
        )}
      </MainContainer>
      {current ? (
        <ScreenBottomButton
          name="재설정 완료"
          onPress={
            current
              ? () => {}
              : () => {
                  navigation.navigate('Password', {current: 1});
                }
          }
          enabled={
            form.confirm === form.password &&
            form.passwordValid.first &&
            form.passwordValid.second
          }
        />
      ) : (
        <ScreenBottomButton
          name="비밀번호 재설정하기"
          onPress={
            current
              ? () => {}
              : () => {
                  navigation.navigate('Password', {current: 1});
                }
          }
          enabled={form.state === 'confirm' && form.username.length > 2}
        />
      )}
    </>
  );
}
const styles = StyleSheet.create({
  block: {
    flex: 1,
    marginTop: 60,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  noMargin: {
    marginBottom: 2,
  },
});

export default PasswordScreen;
