import React, {useState} from 'react';
import {View, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import theme from '../assets/theme';
import {InputTitle} from '../components/auth/AuthComponents';
import TextInputs from '../components/TextInputs';
import {AuthButton} from '../components/auth/AuthComponents';
import Title from '../components/Title';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {SettingStackNavigationProp} from './types';
import {getUser, nickNameExist, updateNickname} from '../api/auth';
import {useMutation, useQuery} from 'react-query';
import {CheckNickName} from '../components/auth/Validation';
import ScreenBottomButton from './../components/ScreenBottomButton';

export interface EditUserProps {
  username: string;
  nickName: string;
  nickNameChecked: boolean | undefined;
}

function EditUserScreen() {
  const [form, setForm] = useState<EditUserProps>({
    username: '',
    nickName: '',
    nickNameChecked: undefined,
  });

  const {data: userData} = useQuery('getUserResult', () => getUser(), {
    refetchOnMount: 'always',
  });
  const {refetch: refetchNickname, isLoading: nickNameLoading} = useQuery(
    ['nickNameExist', form.nickName],
    () => {
      nickNameExist(form.nickName).then((value: boolean) => {
        setForm({...form, nickNameChecked: !value});
      });
    },
    {
      enabled: false,
    },
  );

  const {mutate: updateNickName} = useMutation(updateNickname, {
    onSuccess: () => {
      console.log('Success!!');
      console.log(form.nickName);
      navigation.goBack();
    },
  });

  const navigation = useNavigation<SettingStackNavigationProp>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.titleArea}>
          <Title title="회원정보 수정" isSmall={true} />
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="clear" size={24} color={theme.colors.Black} />
          </Pressable>
        </View>
        <View style={styles.inputArea}>
          <InputTitle title="아이디" />
          <View style={styles.row}>
            <TextInputs
              type="disable"
              placeholder={userData?.username as string}
            />
          </View>
          <InputTitle title="닉네임" />
          <View style={styles.row}>
            <TextInputs
              type={
                (CheckNickName(form.nickName) || !form.nickName) &&
                form.nickNameChecked !== false
                  ? 'default'
                  : 'error'
              }
              placeholder={userData?.nickName as string}
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
                  : {type: 'Error', text: "특수문자는 '_'만 가능합니다."}
              }
            />
            <AuthButton
              text="중복확인"
              disabled={
                !CheckNickName(form.nickName) ||
                form.nickNameChecked !== undefined
              }
              onPress={() => refetchNickname()}
              isLoading={nickNameLoading}
            />
          </View>
        </View>
      </View>
      <ScreenBottomButton
        name="저장"
        onPress={() => updateNickName({nickName: form.nickName})}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.White,
  },
  titleArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  inputArea: {
    marginTop: 52,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 32,
  },
});
export default EditUserScreen;
