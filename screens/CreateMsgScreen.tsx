import React, {useState, useCallback} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../assets/theme';
import Title from '../components/Title';
import {
  PreviewButton,
  SendButton,
} from '../components/create/CreateMessageComponents';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {MainTabNatigationProp} from './types';

function CreateMessageScreen() {
  const navigation = useNavigation<MainTabNatigationProp>();
  const [text, setText] = useState('');

  // const onSubmit = useCallback(() => {
  //   const formData = new FormData();
  //   formData.append('', form.imgNewMessage);
  //   assign(formData);
  // }, [assign, form]);

  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 384,
        includeBase64: Platform.OS === 'android',
      },
      res => {
        if (res.didCancel) {
          return;
        }
      },
    );
  };

  return (
    <>
      <View style={styles.UpperArea}>
        <View style={styles.TitleArea}>
          <Title title="메시지 작성" isSmall={true} />
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="clear" size={24} color={theme.colors.Black} />
          </Pressable>
        </View>
        <View style={styles.Info}>
          <View style={styles.BrandInfo}>
            <Image
              style={styles.ImgSource}
              source={require('../assets/ProfileImage.png')}
            />
            <Text style={styles.BrandName}>더푸르</Text>
          </View>
          <PreviewButton text="미리보기" disabled={text.length < 20} />
        </View>
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.InputMessage}
          placeholder="20자 이상,  1000자 이내로 입력"
        />
        {/* <Image
          style={styles.UploadImage}
          source={{uri: response?.assets[0]?.uri}}
        /> */}
      </View>
      <View style={styles.BottomArea}>
        <View style={styles.Line} />
        <View style={styles.BottomBar}>
          <View style={styles.ElementsContainer}>
            <Pressable onPress={onSelectImage}>
              <Icon name="photo-camera" size={24} style={styles.Camera} />
            </Pressable>
            <Pressable>
              <Icon name="insert-link" size={26} style={styles.Link} />
            </Pressable>
          </View>
          <SendButton text="발송하기" disabled={text.length < 20} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  UpperArea: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: theme.colors.White,
  },
  BottomArea: {
    backgroundColor: theme.colors.White,
  },
  TitleArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Info: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    justifyContent: 'space-between',
    marginTop: 16,
  },
  BrandInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImgSource: {
    height: 24,
    width: 24,
    borderRadius: 12,
    resizeMode: 'contain',
  },
  BrandName: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    color: theme.colors.Grey80,
    fontWeight: '700',
    marginLeft: 8,
  },
  InputMessage: {
    paddingHorizontal: 4,
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
    fontWeight: '400',
  },
  UploadImage: {},
  Line: {
    height: 1,
    backgroundColor: '#E8E8E8',
  },
  BottomBar: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
  },
  ElementsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 6,
  },
  Camera: {
    marginRight: 10,
  },
  Link: {},
  // Clock: {},
});

export default CreateMessageScreen;
