import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useMutation} from 'react-query';
import {useDispatch} from 'react-redux';
import {refresh} from '../api/auth';
import {alertBrandAssign, createBrand} from '../api/brand';
import {AuthResult} from '../api/auth/types';
import BrandAssignForm from '../components/brand/BrandAssignForm';
import BrandAssignTerm from '../components/brand/BrandAssignTerm';
import Category from '../components/category/Category';
import MainContainer from '../components/MainContainer';
import ProcessBar from '../components/ProcessBar';
import ScreenBottomButton from '../components/ScreenBottomButton';
import {authorize} from '../slices/auth';
import authStorage from '../storages/authStorage';
import {RootStackNavigationProp, RootStackParamList} from './types';
import {createAlert, deleteAlert} from '../slices/alert';
import {ImgAsset} from '../api/message/types';
import {useSelector} from 'react-redux';
import {RootState} from '../slices';

const TOTAL = 3;
type BrandAssignScreenRouteProp = RouteProp<RootStackParamList, 'BrandAssign'>;

const CurrentPage = ({
  current,
  form,
  createChangeTextHandler,
  checkedItemHandler,
}: {
  current: number;
  form: BrandAssignProps;
  createChangeTextHandler: any;
  checkedItemHandler: any;
}) => {
  switch (current) {
    case 0:
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.contentContainer}>
          <MainContainer>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.inner}>
                <BrandAssignForm
                  form={form}
                  onChangeText={createChangeTextHandler}
                />
              </View>
            </TouchableWithoutFeedback>
          </MainContainer>
        </ScrollView>
      );
    case 1:
      return (
        <MainContainer>
          <Category
            checkedItems={form.brandCategory}
            checkedItemHandler={checkedItemHandler}
            isBrandAssign={true}
          />
        </MainContainer>
      );
    case 2:
      return (
        <MainContainer>
          <BrandAssignTerm form={form} onPress={createChangeTextHandler} />
        </MainContainer>
      );
    default:
      return <Text>Out of Index</Text>;
  }
};

export interface BrandAssignProps {
  brandUsername: string;
  brandInfo: string;
  brandAgreement: boolean;
  brandCategory: string[];
  brandProfileImage: ImgAsset | undefined;
  isExist: boolean | undefined;
}

function BrandAssignScreen() {
  const route = useRoute<BrandAssignScreenRouteProp>();
  const current = route.params.current;
  const navigation = useNavigation<RootStackNavigationProp>();
  const [form, setForm] = useState<BrandAssignProps>({
    brandUsername: '',
    brandInfo: '',
    brandProfileImage: undefined,
    brandCategory: [],
    brandAgreement: false,
    isExist: undefined,
  });
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const {mutate: alert} = useMutation(alertBrandAssign);
  const {mutate: assign} = useMutation(createBrand, {
    onSuccess: async () => {
      const alertFormData = new FormData();
      if (user) {
        alertFormData.append('username', user.username);
        alert(alertFormData);
      }
      const auth = await authStorage.get();
      if (auth) {
        console.log('refresh');
        await refresh(auth).then((value: AuthResult) => {
          dispatch(authorize(value.accessToken));
          authStorage.set(value);
          console.log('refresh done');
        });
      }
      navigation.reset({routes: [{name: 'BrandAssignComplete'}]});
    },
    onError: () => {
      dispatch(
        createAlert({
          type: 'Error',
          text: '오류가 발생했습니다. 다시 시도해 주세요.',
        }),
      );
      setTimeout(() => dispatch(deleteAlert()), 3500);
      navigation.reset({routes: [{name: 'SettingStack'}]});
    },
  });
  const onSubmit = useCallback(() => {
    const formData = new FormData();
    formData.append('brandUsername', form.brandUsername);
    formData.append('brandInfo', form.brandInfo);
    formData.append('multipartFile', form.brandProfileImage as Blob);
    formData.append('brandCategory', JSON.stringify(form.brandCategory));
    formData.append('brandAgreement', JSON.stringify(form.brandAgreement));
    assign(formData);
  }, [assign, form]);

  const createChangeTextHandler = (name: string) => (value: string) => {
    if (name === 'brandUsername') {
      setForm({...form, [name]: value, isExist: undefined});
    } else {
      setForm({...form, [name]: value});
    }
  };

  const checkedItemHandler = (name: string, isChecked: boolean) => {
    if (isChecked) {
      setForm({...form, brandCategory: [...form.brandCategory, name]});
    } else if (!isChecked && form.brandCategory.find(i => i === name)) {
      const nextCheckedItems = form.brandCategory.filter(i => i !== name);
      setForm({...form, brandCategory: nextCheckedItems});
    }
  };

  const enabled = (value: number) => {
    switch (value) {
      case 0:
        return (
          form.brandUsername !== '' &&
          form.brandInfo !== '' &&
          form.brandProfileImage !== undefined &&
          form.isExist === false
        );
      case 1:
        return form.brandCategory.length > 2;
      case 2:
        return form.brandAgreement;
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <ProcessBar total={TOTAL} current={current} />,
      headerTitleAlign: 'center',
      headerBackVisible: false,
      headerShadowVisible: false,
      headerLeft: () => (
        <TouchableOpacity
          onPress={
            current
              ? () => navigation.navigate('BrandAssign', {current: current - 1})
              : () => navigation.goBack()
          }>
          <Icon name="keyboard-arrow-left" size={30} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.pop(2)}>
          <Icon name="close" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [current, navigation]);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}>
        {CurrentPage({
          current,
          form,
          createChangeTextHandler,
          checkedItemHandler,
        })}
        <ScreenBottomButton
          name={current === 2 ? '등록 요청하기' : '다음'}
          onPress={() => {
            current === 2
              ? onSubmit()
              : navigation.navigate('BrandAssign', {current: current + 1});
          }}
          enabled={enabled(current)}
        />
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default BrandAssignScreen;