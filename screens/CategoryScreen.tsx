import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import Category from '../components/category/Category';
import MainContainer from '../components/MainContainer';
import ScreenBottomButton from '../components/ScreenBottomButton';
import {RootStackNavigationProp} from './types';

function CategoryScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const checkedItemHandler = (name: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, name]);
    } else if (!isChecked && checkedItems.find(i => i === name)) {
      const nextCheckedItems = checkedItems.filter(i => i !== name);
      setCheckedItems(nextCheckedItems);
    }
  };

  return (
    <>
      <MainContainer>
        <Category
          checkedItems={checkedItems}
          checkedItemHandler={checkedItemHandler}
        />
      </MainContainer>
      <ScreenBottomButton
        name="시작하기"
        onPress={() => navigation.navigate('MainTab')}
        enabled={checkedItems.length > 2}
      />
      {/* TODO MainTab의 SearchScreen 으로 이동 */}
    </>
  );
}

export default CategoryScreen;
