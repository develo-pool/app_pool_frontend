import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useMutation} from 'react-query';
import {createBrand} from '../api/brand';
import {BrandAssignParams} from '../api/types';
import BrandAssignForm from '../components/brand/BrandAssignForm';
import BrandAssignTerm from '../components/brand/BrandAssignTerm';
import Category from '../components/category/Category';
import MainContainer from '../components/MainContainer';
import ProcessBar from '../components/ProcessBar';
import ScreenBottomButton from '../components/ScreenBottomButton';
import {RootStackNavigationProp, RootStackParamList} from './types';

const TOTAL = 3;
type BrandAssignScreenRouteProp = RouteProp<RootStackParamList, 'BrandAssign'>;

const CurrentPage = ({
  current,
  form,
  createChangeTextHandler,
  checkedItemHandler,
}: {
  current: number;
  form: BrandAssignParams;
  setForm: any;
  createChangeTextHandler: any;
  checkedItemHandler: any;
}) => {
  switch (current) {
    case 0:
      return (
        <BrandAssignForm form={form} onChangeText={createChangeTextHandler} />
      );
    case 1:
      return (
        <Category
          checkedItems={form.brandCategory}
          checkedItemHandler={checkedItemHandler}
        />
      );
    case 2:
      return <BrandAssignTerm form={form} onPress={createChangeTextHandler} />;
    default:
      return <Text>Out of Index</Text>;
  }
};

function BrandAssignScreen() {
  const route = useRoute<BrandAssignScreenRouteProp>();
  const current = route.params.current;
  const navigation = useNavigation<RootStackNavigationProp>();
  const [form, setForm] = useState<BrandAssignParams>({
    brandUsername: '',
    brandInfo: '',
    brandProfileImage: '',
    brandCategory: [],
    brandAgreement: false,
  });

  const {mutate: assign} = useMutation(createBrand, {
    onSuccess: () => {
      navigation.navigate('BrandAssignComplete');
    },
  });
  const onSubmit = useCallback(() => {
    assign(form);
  }, [assign, form]);

  const createChangeTextHandler = (name: string) => (value: string) => {
    setForm({...form, [name]: value});
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
          form.brandProfileImage !== ''
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
      <MainContainer>
        {CurrentPage({
          current,
          form,
          setForm,
          createChangeTextHandler,
          checkedItemHandler,
        })}
      </MainContainer>
      <ScreenBottomButton
        name="다음"
        onPress={() => {
          current === 2
            ? onSubmit()
            : navigation.navigate('BrandAssign', {current: current + 1});
        }}
        enabled={enabled(current)}
      />
    </>
  );
}

export default BrandAssignScreen;
