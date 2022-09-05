import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Pressable,
  Image,
} from 'react-native';
import theme from '../assets/theme';
import ScreenBottomButton from './../components/ScreenBottomButton';
import {CommonActions, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useQuery, useMutation} from 'react-query';
import {getBrand} from '../api/brand';
import {updateBrandInfo} from '../api/brand';
import {launchImageLibrary} from 'react-native-image-picker';
import {ImgAsset} from '../api/message/types';

export interface BrandUpdateProps {
  brandUserUpdate: string;
  multipartFile: ImgAsset | undefined;
}

function EditProfile() {
  const navigation = useNavigation();
  const [form, setForm] = useState<BrandUpdateProps>({
    brandUserUpdate: '',
    multipartFile: undefined,
  });

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
          setForm({
            ...form,
            multipartFile: {
              uri: res.assets[0].uri,
              type: res.assets[0].type,
              name: res.assets[0].fileName,
            },
          });
        }
      },
    );
  };

  const {data: brandData} = useQuery('getBrand', () => getBrand(''), {
    refetchOnMount: 'always',
  });
  const {mutate: update} = useMutation(updateBrandInfo, {
    onSettled: () => {
      console.log(form);
    },
    onSuccess: () => {
      navigation.dispatch(CommonActions.goBack());
    },
  });

  const onSubmit = useCallback(() => {
    const formData = new FormData();
    formData.append('brandUserUpdate', form.brandUserUpdate as string);
    formData.append('multipartFile', form.multipartFile as Blob);
    update(formData);
  }, [update, form]);

  const onChangeText = (prop: string) => (value: string) => {
    setForm({
      ...form,
      [prop]: value,
    });
  };

  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      headerShadowVisible: false,
      headerTitle: '',
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.goBack())}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.UpperContainer}>
          <Pressable onPress={onSelectImage} style={styles.ProfileImgContainer}>
            <Image
              style={styles.ImgSource}
              source={
                form.multipartFile
                  ? {uri: form.multipartFile.uri}
                  : {uri: brandData?.brandProfileImage}
              }
            />
            <TouchableOpacity style={styles.EditProfile}>
              <Icon name="edit" size={18} style={styles.EditButton} />
            </TouchableOpacity>
          </Pressable>
        </View>
        <TextInput
          style={styles.InputContainer}
          placeholder="소개 문구를 입력해주세요."
          autoFocus={true}
          maxLength={200}
          defaultValue={brandData?.brandInfo}
          onChangeText={onChangeText('brandUserUpdate')}
        />
        <View style={styles.InputTextCounter}>
          <Text style={styles.CounterText}>
            {form.brandUserUpdate.length}/200
          </Text>
        </View>
      </View>
      <ScreenBottomButton name="저장" onPress={() => onSubmit()} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.White,
  },
  UpperContainer: {
    marginTop: 44,
  },
  ProfileImgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }, //프로필 사진 영역
  ImgSource: {
    height: 90,
    width: 90,
    borderRadius: 45,
    resizeMode: 'cover',
  }, //프로필 사진
  EditProfile: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.Grey50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -32,
    marginTop: 58,
  }, //수정 버튼
  EditButton: {
    color: theme.colors.White,
  },
  InputContainer: {
    marginTop: 52,
    paddingHorizontal: 16,
    fontFamily: theme.fontFamily.Pretendard,
    color: theme.colors.Grey60,
    fontSize: theme.fontSize.P2,
  },
  InputTextCounter: {
    paddingHorizontal: 16,
    alignItems: 'flex-end',
    marginTop: 16,
  },
  CounterText: {
    fontFamily: theme.fontFamily.Pretendard,
    color: theme.colors.Grey30,
    fontSize: theme.fontSize.P2,
  },
});
export default EditProfile;
