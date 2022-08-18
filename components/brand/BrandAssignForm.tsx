import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {AuthButton, InputTitle} from '../auth/AuthComponents';
import Title from '../Title';
import {launchImageLibrary} from 'react-native-image-picker';
import TextInputs from '../TextInputs';
import theme from '../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useQuery} from 'react-query';
import {brandNameExist} from '../../api/brand';
import {BrandAssignProps} from '../../screens/BrandAssignScreen';
import {CheckNickName} from '../auth/Validation';

function BrandAssignForm({
  form,
  onChangeText,
}: {
  form: BrandAssignProps;
  onChangeText: any;
}) {
  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === 'android',
      },
      res => {
        if (res.didCancel) {
          return;
        }
        if (res.assets) {
          onChangeText('brandProfileImage')({
            uri: res.assets[0].uri,
            type: res.assets[0].type,
            name: res.assets[0].fileName,
          });
        }
      },
    );
  };
  const {refetch: refetchBrandname, isLoading: brandnameLoading} = useQuery(
    ['usernameExist', form.brandUsername],
    () => {
      brandNameExist(form.brandUsername).then((value: boolean) => {
        onChangeText('isExist')(value);
      });
    },
    {
      enabled: false,
    },
  );
  return (
    <ScrollView style={styles.block} showsVerticalScrollIndicator={false}>
      <Title title="브랜드에 대해" alignCenter={true} />
      <Title title="알려주세요." alignCenter={true} hasMargin={true} />
      <Pressable
        style={[styles.container, styles.circle]}
        onPress={onSelectImage}>
        <Image
          style={styles.circle}
          source={
            form.brandProfileImage
              ? {uri: form.brandProfileImage.uri}
              : require('../../assets/empty/EmptyProfile.png')
          }
          resizeMode="cover"
        />
        <View style={styles.edit}>
          <Icon name="edit" size={18} color="white" />
        </View>
      </Pressable>
      <Text style={styles.subtitle}>프로필 이미지</Text>
      <InputTitle title="브랜드명" />
      <View style={styles.row}>
        <TextInputs
          type={
            (CheckNickName(form.brandUsername) || !form.brandUsername) &&
            form.isExist !== true
              ? 'default'
              : 'error'
          }
          value={form.brandUsername}
          onChangeText={onChangeText('brandUsername')}
          placeholder="브랜드명 입력"
          alert={
            CheckNickName(form.brandUsername) || !form.brandUsername
              ? form.isExist === false
                ? {type: 'Correct', text: '사용 가능한 닉네임입니다.'}
                : form.isExist === undefined
                ? undefined
                : {type: 'Error', text: '중복된 아이디입니다.'}
              : form.brandUsername.length < 3
              ? {type: 'Error', text: '3자 이상 입력해주세요.'}
              : {type: 'Error', text: "특수문자는 '_'만 가능합니다."}
          }
        />
        <AuthButton
          text="중복확인"
          onPress={() => refetchBrandname()}
          disabled={!form.brandUsername}
          isLoading={brandnameLoading}
        />
      </View>
      <InputTitle title="소개문구" />
      <TextInput
        style={styles.info}
        value={form.brandInfo}
        onChangeText={onChangeText('brandInfo')}
        placeholder="브랜드를 소개해주세요."
        maxLength={200}
        multiline={true}
        placeholderTextColor={'rgba(0, 0, 0, 0.2)'}
      />
      <Text style={styles.counter}>{form.brandInfo.length}/200</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  block: {
    paddingTop: 40,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  info: {
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 100,
    borderColor: theme.colors.Grey30,
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
    textAlignVertical: 'top',
  },
  container: {
    alignSelf: 'center',
    width: 90,
    height: 90,
  },
  circle: {
    borderRadius: 45,
    backgroundColor: theme.colors.Grey10,
    width: 90,
    height: 90,
  },
  counter: {
    fontFamily: theme.fontFamily.Pretendard,
    color: theme.colors.Grey30,
    fontSize: theme.fontSize.P2,
    marginTop: 8,
    alignSelf: 'flex-end',
  },
  edit: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontFamily: theme.fontFamily.Pretendard,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey60,
    fontSize: theme.fontSize.P2,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 40,
  },
});

export default BrandAssignForm;
