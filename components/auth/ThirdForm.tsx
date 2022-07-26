import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useQuery} from 'react-query';
import {nickNameExist, SignUpParams, usernameExist} from '../../api/auth';
import {TempProps} from '../../screens/SignUpScreen';
import theme from '../../theme';
import TextInputs from '../TextInputs';
import Title from '../Title';
import {AuthButton, CheckBox, InputTitle} from './AuthComponents';
import {
  CheckNickName,
  CheckPassword,
  CheckUserName,
  ReplaceKorean,
} from './Validation';

function ThirdForm({
  onChangeText,
  form,
  temp,
}: {
  onChangeText: any;
  form: SignUpParams;
  temp: TempProps;
}) {
  const {refetch: refetchUsername} = useQuery(
    'usernameExist',
    () => {
      usernameExist(form.username).then((value: boolean) => {
        onChangeText('usernameChecked')(!value);
      });
    },
    {
      enabled: false,
    },
  );
  const {refetch: refetchNickname} = useQuery(
    'nickNameExist',
    () => {
      nickNameExist(form.nickName).then((value: boolean) => {
        onChangeText('nickNameChecked')(!value);
      });
    },
    {
      enabled: false,
    },
  );
  const [passwordGuideVisible, setPasswordGuideVisible] = useState(false);
  const changePasswordHandler = (value: string) => {
    onChangeText('password')(value);
    onChangeText('passwordValid')({
      first: value.length >= 8,
      second: CheckPassword(value),
    });
  };
  const isSame = temp.confirm === form.password;
  return (
    <View style={styles.block}>
      <Title title="아이디 및 비밀번호를" />
      <Title title="설정해 주세요." hasMargin={true} />
      <InputTitle title="아이디" />
      <View style={[styles.row, !form.username && styles.noMargin]}>
        <TextInputs
          type={
            (CheckUserName(form.username) || !form.username) &&
            temp.usernameChecked !== false
              ? 'default'
              : 'error'
          }
          placeholder="아이디를 입력해 주세요"
          value={form.username}
          onChangeText={(value: string) => {
            onChangeText('username')(ReplaceKorean(value));
            onChangeText('usernameChecked')(undefined);
          }}
          maxLength={20}
          alert={
            CheckUserName(form.username) || !form.username
              ? temp.usernameChecked === true
                ? {type: 'Correct', text: '사용 가능한 닉네임입니다.'}
                : temp.usernameChecked === undefined
                ? undefined
                : {type: 'Error', text: '중복된 아이디입니다.'}
              : form.username.length < 3
              ? {type: 'Error', text: '3자 이상 입력해주세요.'}
              : {type: 'Error', text: '특수문자는 사용 불가능합니다.'}
          }
        />
        <AuthButton
          text="중복확인"
          disabled={
            !CheckUserName(form.username) || temp.usernameChecked !== undefined
          }
          onPress={() => {
            refetchUsername();
          }}
        />
      </View>
      {!form.username && (
        <Text style={styles.alert}>
          최소 3자 ~ 20자, 영문 소문자로 입력해 주세요.
        </Text>
      )}

      <InputTitle title="닉네임" />
      <View style={styles.row}>
        <TextInputs
          type={
            (CheckNickName(form.nickName) || !form.nickName) &&
            temp.nickNameChecked !== false
              ? 'default'
              : 'error'
          }
          placeholder="한글 및 영문으로 입력"
          value={form.nickName}
          onChangeText={(value: string) => {
            onChangeText('nickName')(value);
            onChangeText('nickNameChecked')(undefined);
          }}
          alert={
            CheckNickName(form.nickName) || !form.nickName
              ? temp.nickNameChecked === true
                ? {type: 'Correct', text: '사용 가능한 닉네임입니다.'}
                : temp.nickNameChecked === undefined
                ? undefined
                : {type: 'Error', text: '중복된 닉네임입니다.'}
              : {type: 'Error', text: "특수문자는 '_'만 가능합니다."}
          }
        />
        <AuthButton
          text="중복확인"
          disabled={
            !CheckNickName(form.nickName) || temp.nickNameChecked !== undefined
          }
          onPress={() => refetchNickname()}
        />
      </View>
      <InputTitle title="비밀번호" />
      <View style={styles.column}>
        <TextInputs
          type={
            !!form.password &&
            !passwordGuideVisible &&
            !(temp.passwordValid.first && temp.passwordValid.second)
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
                  (!temp.passwordValid.first || !form.password) &&
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
                  (!temp.passwordValid.second || !form.password) &&
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
          type={!temp.confirm || isSame ? 'default' : 'error'}
          placeholder="비밀번호를 다시 입력해 주세요"
          onChangeText={onChangeText('confirm')}
          secureTextEntry={true}
          value={temp.confirm}
          alert={
            !temp.confirm || isSame
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
    paddingTop: 60,
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
    marginBottom: 2,
  },
  alert: {
    marginBottom: 30,
    fontSize: 12,
    marginLeft: 6,
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
