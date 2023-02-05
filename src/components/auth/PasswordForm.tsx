import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextInputs from '../TextInputs';
import {InputTitle} from './AuthComponents';
import {CheckPassword} from './Validation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../../assets/theme';

interface PasswordFormProps {
  password: string;
  passwordValid: {first: boolean; second: boolean};
  confirm: string;
}

function PasswordForm({
  form,
  onChangeForm,
  setForm,
}: {
  form: PasswordFormProps;
  onChangeForm: any;
  setForm: any;
}) {
  const [passwordGuideVisible, setPasswordGuideVisible] =
    useState<boolean>(false);
  const changePasswordHandler = (value: string) => {
    setForm({
      ...form,
      password: value,
      passwordValid: {first: value.length >= 8, second: CheckPassword(value)},
    });
  };
  const isSame = form.confirm === form.password;
  return (
    <>
      <InputTitle title="비밀번호" />
      <View style={styles.column}>
        <View style={styles.row}>
          <TextInputs
            type={
              !!form.password &&
              !passwordGuideVisible &&
              !(form.passwordValid.first && form.passwordValid.second)
                ? 'error'
                : 'default'
            }
            placeholder="비밀번호를 입력해 주세요"
            value={form.password}
            onChangeText={changePasswordHandler}
            secureTextEntry={true}
            onFocus={() => setPasswordGuideVisible(true)}
            onBlur={() => setPasswordGuideVisible(false)}
            alert={
              !!form.password &&
              !passwordGuideVisible &&
              !(form.passwordValid.first && form.passwordValid.second)
                ? {
                    type: 'Error',
                    text: '비밀번호 양식에 맞게 입력해 주세요.',
                  }
                : undefined
            }
          />
        </View>
        {passwordGuideVisible && (
          <>
            <View style={styles.guideContainer}>
              <View
                style={[
                  styles.check,
                  (!form.passwordValid.first || !form.password) &&
                    styles.uncheck,
                ]}>
                <Icon name="check" size={14} color="white" />
              </View>
              <Text style={styles.guide}>최소 8자 이상</Text>
            </View>
            <View style={styles.guideContainer}>
              <View
                style={[
                  styles.check,
                  (!form.passwordValid.second || !form.password) &&
                    styles.uncheck,
                ]}>
                <Icon name="check" size={14} color="white" />
              </View>
              <Text style={styles.guide}>
                영문, 숫자, 특수문자 각 1개 이상 사용
              </Text>
            </View>
          </>
        )}
      </View>
      <InputTitle title="비밀번호 확인" />
      <View style={styles.column}>
        <TextInputs
          type={!form.confirm || isSame ? 'default' : 'error'}
          placeholder="비밀번호를 다시 입력해 주세요"
          onChangeText={onChangeForm('confirm')}
          secureTextEntry={true}
          value={form.confirm}
          alert={
            !form.confirm || isSame
              ? undefined
              : {type: 'Error', text: '비밀번호가 일치하지 않습니다.'}
          }
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    marginBottom: 30,
    minHeight: 48,
  },
  guideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
    paddingLeft: 6,
  },
  guide: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
  },
  check: {
    width: 18,
    height: 18,
    borderRadius: 9,
    border: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.Poolgreen,
    marginRight: 9,
  },
  uncheck: {
    borderWidth: 1,
    borderColor: theme.colors.Grey30,
    backgroundColor: 'white',
  },
});

export default PasswordForm;
