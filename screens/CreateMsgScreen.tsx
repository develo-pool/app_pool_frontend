import React, {useState, useCallback} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  Platform,
  SafeAreaView,
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
import {MainTabNavigationProp} from './types';
import {useQuery, useMutation} from 'react-query';
import {getBrand} from '../api/brand';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import {createMessage} from '../api/message';

export interface CreateMessageProps {
  messageBody: string;
  messageLink?: string;
  messageImage?: Asset | undefined;
}

function CreateMessageScreen() {
  const navigation = useNavigation<MainTabNavigationProp>();
  const [form, setForm] = useState<CreateMessageProps>({
    messageBody: '',
    messageLink: '',
    messageImage: undefined,
  });
  const [linkState, setLinkState] = useState(false);

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

  const {mutate: create} = useMutation(createMessage, {
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
          <Title title="메시지 작성" isSmall={true} />
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
          <View style={styles.previewContainer}>
            <Text style={styles.CounterText}>{form.messageBody.length}/20</Text>
            <PreviewButton
              text="미리보기"
              isDisabled={form.messageBody.length < 20}
              formBody={form.messageBody}
            />
          </View>
        </View>

        <TextInput
          style={styles.InputMessage}
          value={form.messageBody}
          onChangeText={onChangeText('messageBody')}
          placeholder="20자 이상,  1000자 이내로 입력"
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

        {linkState && (
          <View style={styles.linkContainer}>
            <Icon name="insert-link" size={24} style={styles.linkIcon} />
            <TextInput
              style={styles.linkInput}
              placeholder="https://www.link.com"
              onChangeText={onChangeText('messageLink')}
              value={form.messageLink}
              placeholderTextColor={'rgba(0, 0, 0, 0.2)'}
            />
          </View>
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
              <Pressable onPress={() => setLinkState(!linkState)}>
                <Icon name="insert-link" size={26} style={styles.Link} />
              </Pressable>
            </View>
            <SendButton
              text="발송하기"
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
    backgroundColor: theme.colors.White,
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
  previewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  CounterText: {
    fontFamily: theme.fontFamily.Pretendard,
    color: theme.colors.Grey30,
    fontSize: theme.fontSize.P2,
    marginRight: 8,
  },
  InputMessage: {
    paddingHorizontal: 4,
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
    color: theme.colors.Grey60,
    fontWeight: theme.fontWeight.Light,
  },
  UploadImage: {
    maxWidth: '100%',
    height: 252,
    borderRadius: 5,
    resizeMode: 'cover',
    marginBottom: 8,
  },
  linkContainer: {
    flexDirection: 'row',
    height: 40,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: theme.colors.Grey60,
    alignItems: 'center',
  },
  linkIcon: {
    marginHorizontal: 8,
    width: 24,
  },
  linkInput: {
    height: 40,
    width: 300,
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

export default CreateMessageScreen;
