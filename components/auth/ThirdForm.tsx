import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SignUpParams} from '../../api/auth';
import theme from '../../theme';
import TextInputs from '../TextInputs';
import Title from '../Title';
import {AuthButton, CheckBox, InputTitle} from './AuthComponents';
import {CheckPassword} from './Validation';

function ThirdForm({
  onChangeText,
  form,
  temp,
  setTemp,
}: {
  onChangeText: any;
  form: SignUpParams;
  temp: {
    password: string;
    confirm: string;
    passwordValid: {
      first: boolean;
      second: boolean;
    };
  };
  setTemp: any;
}) {
  const [passwordGuideVisible, setPasswordGuideVisible] = useState(false);
  const changePasswordHandler = (value: string) => {
    setTemp({
      ...temp,
      password: value,
      passwordValid: {first: value.length >= 8, second: CheckPassword(value)},
    });
    onChangeText('password')('');
  };
  const changeConfirmHandler = (value: string) => {
    setTemp({
      ...temp,
      confirm: value,
    });
    if (
      temp.password === value &&
      temp.passwordValid.first &&
      temp.passwordValid.second
    ) {
      onChangeText('password')(temp.password);
    } else {
      onChangeText('password')('');
    }
  };
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
      <View style={styles.column}>
        <TextInputs
          type={
            !passwordGuideVisible &&
            !(temp.passwordValid.first && temp.passwordValid.second)
              ? 'error'
              : 'default'
          }
          placeholder="비밀번호를 입력해 주세요"
          value={temp.password}
          onChangeText={changePasswordHandler}
          secureTextEntry={true}
          onFocus={() => setPasswordGuideVisible(true)}
          onBlur={() => setPasswordGuideVisible(false)}
          alert={
            !passwordGuideVisible &&
            !(temp.passwordValid.first && temp.passwordValid.second)
              ? {
                  type: 'Error',
                  text: '비밀번호 양식에 맞게 입력해 주세요.',
                }
              : undefined
          }
        />
        {passwordGuideVisible && (
          <>
            <View style={styles.guideContainer}>
              <View
                style={[
                  styles.check,
                  (!temp.passwordValid.first || !temp.password) &&
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
                  (!temp.passwordValid.second || !temp.password) &&
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
      <View style={styles.row}>
        <TextInputs
          type={
            !temp.confirm || temp.confirm === temp.password
              ? 'default'
              : 'error'
          }
          placeholder="비밀번호를 다시 입력해 주세요"
          onChangeText={changeConfirmHandler}
          secureTextEntry={true}
          value={temp.confirm}
          alert={
            !temp.confirm || temp.confirm === temp.password
              ? undefined
              : {type: 'Error', text: '비밀번호가 일치하지 않습니다.'}
          }
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
  column: {
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
  guideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
    paddingLeft: 6,
  },
  guide: {
    fontSize: 12,
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

export default ThirdForm;
