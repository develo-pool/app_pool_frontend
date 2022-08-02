import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
  form: any;
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
          checkedItems={form.category}
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

  interface Props {
    brandUserName: string;
    infoText: string;
    profileImg: string;
    category: string[];
    terms: boolean;
  }

  const [form, setForm] = useState<Props>({
    brandUserName: '',
    infoText: '',
    profileImg: '',
    category: [],
    terms: false,
  });

  const createChangeTextHandler = (name: string) => (value: string) => {
    setForm({...form, [name]: value});
  };

  const checkedItemHandler = (name: string, isChecked: boolean) => {
    if (isChecked) {
      setForm({...form, category: [...form.category, name]});
    } else if (!isChecked && form.category.find(i => i === name)) {
      const nextCheckedItems = form.category.filter(i => i !== name);
      setForm({...form, category: nextCheckedItems});
    }
  };

  const enabled = () => {
    switch (current) {
      case 0:
        return (
          form.brandUserName !== '' &&
          form.infoText !== '' &&
          form.profileImg !== ''
        );
      case 1:
        return form.category.length > 2;
      case 2:
        return form.terms;
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
            ? navigation.navigate('BrandAssignComplete')
            : navigation.navigate('BrandAssign', {current: current + 1});
        }}
        enabled={enabled()}
      />
    </>
  );
}

export default BrandAssignScreen;
