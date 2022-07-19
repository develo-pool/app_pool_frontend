import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {AuthButton, InputTitle} from '../auth/AuthComponents';
import Title from '../Title';
import {launchImageLibrary} from 'react-native-image-picker';

interface Props {
  brandUserName: string;
  infoText: string;
  profileImg: any;
  category: string[];
  terms: boolean;
}

function BrandAssignForm({
  form,
  onChangeText,
}: {
  form: Props;
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
        onChangeText('profileImg')(res);
      },
    );
  };
  return (
    <>
      <Title title="브랜드에 대해" alignCenter={true} />
      <Title title="알려주세요." alignCenter={true} />
      <Pressable
        style={[styles.container, styles.circle]}
        onPress={onSelectImage}>
        <Image
          style={styles.circle}
          source={
            form.profileImg
              ? {uri: form.profileImg.assets[0]?.uri}
              : require('../../assets/guide2.png')
          }
          resizeMode="contain"
        />
      </Pressable>
      <InputTitle title="브랜드명" />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={form.brandUserName}
          onChangeText={onChangeText('brandUserName')}
          placeholder="브랜드명 입력"
        />
        <AuthButton text="중복확인" disabled={!form.brandUserName} />
      </View>
      <InputTitle title="소개문구" />
      <View style={styles.row}>
        <TextInput
          style={[styles.input, styles.info]}
          value={form.infoText}
          onChangeText={onChangeText('infoText')}
          placeholder="브랜드를 소개해주세요."
          maxLength={100}
          multiline={true}
        />
      </View>
      <Text>{form.infoText.length} / 100자</Text>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 30,
    minHeight: 48,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#BABABA',
    backgroundColor: 'white',
    paddingHorizontal: 12,
  },
  info: {
    textAlignVertical: 'top',
    minHeight: 100,
  },
  container: {
    alignSelf: 'center',
    width: 140,
    height: 140,
  },
  circle: {
    borderRadius: 70,
    backgroundColor: '#D9D9D9',
    width: 140,
    height: 140,
  },
});

export default BrandAssignForm;
