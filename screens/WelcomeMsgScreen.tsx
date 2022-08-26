import React, {useCallback, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../assets/theme';
import Title from '../components/Title';
import {
  PreviewButton,
  SendButton,
} from '../components/create/CreateMessageComponents';
import {useNavigation} from '@react-navigation/native';
import {MainTabNatigationProp} from './types';
import {useQuery, useMutation} from 'react-query';
import {getBrand} from '../api/brand';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import {createWelcomeMessage} from '../api/message';

export interface WelcomeMessageProps {
  messageBody: string;
  messageLink?: string;
  messageImage?: Asset | undefined;
}

function WelcomeMessageScreen() {
  const navigation = useNavigation<MainTabNatigationProp>();
  const [form, setForm] = useState<WelcomeMessageProps>({
    messageBody: '',
    messageLink: '',
    messageImage: undefined,
  });
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
        if (res.assets) {
          setForm({
            ...form,
            messageImage: {
              uri: res.assets[0].uri,
              type: res.assets[0].type,
              fileName: res.assets[0].fileName,
            },
          });
        }
      },
    );
  };
  const {data: brandData} = useQuery('getBrand', () => getBrand(''), {
    refetchOnMount: 'always',
  });
  const {mutate: create} = useMutation(createWelcomeMessage, {
    onSuccess: () => {
      navigation.goBack();
    },
  });
  const onSubmit = useCallback(() => {
    const formData = new FormData();
    formData.append('body', form.messageBody);
    formData.append('messageLink', form.messageLink as string);
    formData.append('multipartFiles', form.messageImage as Blob);
    create(formData);
  }, [create, form]);

  const onChangeText = (prop: string) => (value: string) => {
    setForm({
      ...form,
      [prop]: value,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.UpperArea}>
        <View style={styles.TitleArea}>
          <Title title="웰컴메시지 설정" isSmall={true} />
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="clear" size={24} color={theme.colors.Black} />
          </Pressable>
        </View>
        <View style={styles.Info}>
          <View style={styles.BrandInfo}>
            <Image
              style={styles.ImgSource}
              source={{uri: brandData?.brandProfileImage}}
            />
            <Text style={styles.BrandName}>{brandData?.brandUsername}</Text>
          </View>
          <PreviewButton
            text="미리보기"
            isDisabled={form.messageBody.length < 20}
            formBody={form.messageBody}
          />
        </View>
        <TextInput
          style={styles.InputMessage}
          value={form.messageBody}
          onChangeText={onChangeText('messageBody')}
          placeholder="20자 이상 입력"
          maxLength={1000}
          multiline={true}
          placeholderTextColor={'rgba(0, 0, 0, 0.2)'}
        />
        {form.messageImage && (
          <Image
            style={styles.UploadImage}
            source={{uri: form.messageImage?.uri}}
          />
        )}
        {form.messageLink && (
          <Icon name="insert-link" size={26} style={styles.Link} />
        )}
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
            <SendButton
              text="설정하기"
              isDisabled={form.messageBody.length < 20}
              onPress={() => onSubmit()}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    fontWeight: theme.fontWeight.Bold,
    marginLeft: 8,
  },
  InputMessage: {
    paddingHorizontal: 4,
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
    color: theme.colors.Grey60,
    fontWeight: theme.fontWeight.Light,
  },
  UploadImage: {
    width: 340,
    height: 252,
    borderRadius: 5,
  },
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
    color: theme.colors.Grey50,
  },
  Link: {
    color: theme.colors.Grey50,
  },
});

export default WelcomeMessageScreen;
