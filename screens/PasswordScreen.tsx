import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useMutation, useQuery} from 'react-query';
import {useDispatch, useSelector} from 'react-redux';
import {checkMember, updatePassword} from '../api/auth';
import AlertBox from '../components/AlertBox';
import {InputTitle} from '../components/auth/AuthComponents';
import PasswordForm from '../components/auth/PasswordForm';
import PhoneAuthForm from '../components/auth/PhoneAuthForm';
import {ReplaceKorean} from '../components/auth/Validation';
import MainContainer from '../components/MainContainer';
import ProcessBar from '../components/ProcessBar';
import ScreenBottomButton from '../components/ScreenBottomButton';
import TextInputs from '../components/TextInputs';
import Title from '../components/Title';
import {RootState} from '../slices';
import {createAlert, deleteAlert} from '../slices/alert';
import {RootStackNavigationProp, RootStackParamList} from './types';

const TOTAL = 2;

const headerHeight =
  Dimensions.get('screen').height - Dimensions.get('window').height;

interface PasswordScreenProps {
  username: string;
  phoneNumber: string;
  authNumber: string;
  state: 'default' | 'request' | 'confirm';
  password: string;
  confirm: string;
  passwordValid: {first: boolean; second: boolean};
  usernameChecked: boolean | undefined;
  authNumberError: boolean;
}

type PasswordScreenRouteProp = RouteProp<RootStackParamList, 'Password'>;

function PasswordScreen() {
  const dispatch = useDispatch();
  const isVisible = useSelector((state: RootState) => state.alert.isVisible);
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
    authNumberError: false,
  });
  const createChangeFormHandler =
    (name: string) => (value: string | undefined) => {
      setForm({...form, [name]: value});
    };
  const {refetch: refetchUserExist, isLoading: userExistLoading} = useQuery(
    ['userExist', form.username, form.phoneNumber],
    () => {
      checkMember({
        username: form.username,
        phoneNumber: form.phoneNumber,
      }).then(value => {
        if (value.data) {
          navigation.navigate('Password', {current: 1});
        } else {
          navigation.setOptions({headerShown: false});
          dispatch(
            createAlert({
              type: 'Error',
              text: '일치하는 회원정보가 없습니다. 다시 입력해 주세요.',
            }),
          );
          setTimeout(() => {
            dispatch(deleteAlert());
            navigation.setOptions({headerShown: true});
          }, 3500);
        }
      });
    },
    {
      enabled: false,
    },
  );
  const {mutate} = useMutation(updatePassword, {
    onSuccess: () => {
      dispatch(
        createAlert({type: 'Complete', text: '비밀번호가 재설정되었습니다.'}),
      );
      setTimeout(() => dispatch(deleteAlert()), 3500);
      navigation.reset({routes: [{name: 'Login'}]});
    },
    onError: () => {
      dispatch(
        createAlert({
          type: 'Error',
          text: '오류가 발생했습니다. 다시 시도해 주세요.',
        }),
      );
      setTimeout(() => dispatch(deleteAlert()), 3500);
      navigation.reset({routes: [{name: 'Login'}]});
    },
  });
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
        <SafeAreaView style={styles.front}>
          <View>
            <AlertBox />
          </View>
        </SafeAreaView>
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
            <View style={[styles.block, isVisible && styles.alert]}>
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
                mode="CHANGE_PASSWORD"
              />
            </View>
          </ScrollView>
        )}
      </MainContainer>
      {current ? (
        <ScreenBottomButton
          name="재설정 완료"
          onPress={() => {
            mutate({username: form.username, toBePassword: form.password});
          }}
          enabled={
            form.confirm === form.password &&
            form.passwordValid.first &&
            form.passwordValid.second
          }
        />
      ) : (
        <ScreenBottomButton
          name="비밀번호 재설정하기"
          onPress={() => {
            refetchUserExist();
          }}
          enabled={form.state === 'confirm' && form.username.length > 2}
          isLoading={userExistLoading}
        />
      )}
    </>
  );
}
const styles = StyleSheet.create({
  front: {
    zIndex: 10,
  },
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
  alert: {
    marginTop: 92 + headerHeight,
  },
});

export default PasswordScreen;
