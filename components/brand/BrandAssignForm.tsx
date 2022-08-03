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
import {BrandAssignParams} from '../../api/types';

function BrandAssignForm({
  form,
  onChangeText,
}: {
  form: BrandAssignParams;
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
        onChangeText('brandProfileImage')(res);
      },
    );
  };
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
              ? {uri: form.brandProfileImage.assets[0]?.uri}
              : require('../../assets/empty/EmptyProfile.png')
          }
          resizeMode="contain"
        />
        <View style={styles.edit}>
          <Icon name="edit" size={18} color="white" />
        </View>
      </Pressable>
      <Text style={styles.subtitle}>프로필 이미지</Text>
      <InputTitle title="브랜드명" />
      <View style={styles.row}>
        <TextInputs
          value={form.brandUsername}
          onChangeText={onChangeText('brandUsername')}
          placeholder="브랜드명 입력"
        />
        <AuthButton text="중복확인" disabled={!form.brandUsername} />
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
