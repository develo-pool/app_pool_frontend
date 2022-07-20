import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Title from '../Title';
import CategoryItem, {CategoryItemProps} from './CategoryItem';
import categoryList from './categoryList';

function Category() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const checkedItemHandler = (name: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, name]);
    } else if (!isChecked && checkedItems.find(i => i === name)) {
      const nextCheckedItems = checkedItems.filter(i => i !== name);
      setCheckedItems(nextCheckedItems);
    }
  };

  const renderItem = ({item}: {item: CategoryItemProps}) => (
    <CategoryItem
      item={item}
      checkedItemHandler={checkedItemHandler}
      checkedItems={checkedItems}
    />
  );

  return (
    <>
      <Title title="콘텐츠 카테고리" alignCenter={true} />
      <Title title="최소 3개 이상 선택해 주세요." alignCenter={true} />
      <FlatList
        style={styles.block}
        data={categoryList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
});

export default Category;
