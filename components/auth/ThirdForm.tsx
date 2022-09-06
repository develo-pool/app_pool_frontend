import React from 'react';
import {Linking, StyleSheet, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import {nickNameExist, usernameExist} from '../../api/auth';
import theme from '../../assets/theme';
import {SignUpScreenProps} from '../../screens/SignUpScreen';
import TextInputs from '../TextInputs';
import Title from '../Title';
import {AuthButton, CheckBox, InputTitle} from './AuthComponents';
import PasswordForm from './PasswordForm';
import {CheckNickName, CheckUserName, ReplaceKorean} from './Validation';

function ThirdForm({
  onChangeText,
  form,
  setForm,
}: {
  onChangeText: any;
  form: SignUpScreenProps;
  setForm: any;
}) {
  const {refetch: refetchUsername, isLoading: usernameLoading} = useQuery(
    ['usernameExist', form.username],
    () => {
      usernameExist(form.username).then((value: boolean) => {
        onChangeText('usernameChecked')(!value);
      });
    },
    {
      enabled: false,
    },
  );
  const {refetch: refetchNickname, isLoading: nickNameLoading} = useQuery(
    ['nickNameExist', form.nickName],
    () => {
      nickNameExist(form.nickName).then((value: boolean) => {
        onChangeText('nickNameChecked')(!value);
      });
    },
    {
      enabled: false,
    },
  );
  return (
    <View style={styles.block}>
      <Title title="아이디 및 비밀번호를" />
      <Title title="설정해 주세요." hasMargin={true} />
      <InputTitle title="아이디" />
      <View style={[styles.row, !form.username && styles.noMargin]}>
        <TextInputs
          type={
            (CheckUserName(form.username) || !form.username) &&
            form.usernameChecked !== false
              ? 'default'
              : 'error'
          }
          placeholder="아이디를 입력해 주세요"
          value={form.username}
          onChangeText={(value: string) => {
            setForm({
              ...form,
              username: ReplaceKorean(value),
              usernameChecked: undefined,
            });
          }}
          maxLength={20}
          alert={
            CheckUserName(form.username) || !form.username
              ? form.usernameChecked === true
                ? {type: 'Correct', text: '사용 가능한 아이디입니다.'}
                : form.usernameChecked === undefined
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
            !CheckUserName(form.username) || form.usernameChecked !== undefined
          }
          onPress={() => {
            refetchUsername();
          }}
          isLoading={usernameLoading}
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
            form.nickNameChecked !== false
              ? 'default'
              : 'error'
          }
          placeholder="한글 및 영문으로 입력"
          value={form.nickName}
          onChangeText={(value: string) => {
            setForm({...form, nickName: value, nickNameChecked: undefined});
          }}
          alert={
            CheckNickName(form.nickName) || !form.nickName
              ? form.nickNameChecked === true
                ? {type: 'Correct', text: '사용 가능한 닉네임입니다.'}
                : form.nickNameChecked === undefined
                ? undefined
                : {type: 'Error', text: '중복된 닉네임입니다.'}
              : form.nickName.length < 3
              ? {type: 'Error', text: '3자 이상 입력해주세요.'}
              : {type: 'Error', text: "특수문자는 '_'만 가능합니다."}
          }
        />
        <AuthButton
          text="중복확인"
          disabled={
            !CheckNickName(form.nickName) || form.nickNameChecked !== undefined
          }
          onPress={() => refetchNickname()}
          isLoading={nickNameLoading}
        />
      </View>
      <PasswordForm form={form} onChangeForm={onChangeText} setForm={setForm} />
      <CheckBox
        title="이용약관 동의 (필수)"
        state={form.termAgreement}
        onPress={onChangeText('termAgreement')}
        onPressText={() =>
          Linking.openURL(
            'https://bypool.notion.site/46307ef08b8a471a8b5f4f38a6add44b',
          )
        }
      />
      <CheckBox
        title="개인정보처리방침 동의 (필수)"
        state={form.privacyAgreement}
        onPress={onChangeText('privacyAgreement')}
        onPressText={() =>
          Linking.openURL(
            'https://bypool.notion.site/50c7bb1b42fe491cbaa8bc694f7c5ca1',
          )
        }
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
    marginBottom: 32,
  },
  secondRow: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  noMargin: {
    marginBottom: 2,
  },
  alert: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    marginBottom: 30,
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

export default ThirdForm;
