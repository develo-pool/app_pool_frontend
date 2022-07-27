import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Title from '../Title';
import CategoryItem, {CategoryItemProps} from './CategoryItem';
import categoryList from './categoryList';

function Category({
  checkedItems,
  checkedItemHandler,
}: {
  checkedItems: string[];
  checkedItemHandler: any;
}) {
  const renderItem = ({item}: {item: CategoryItemProps}) => (
    <CategoryItem
      item={item}
      checkedItemHandler={checkedItemHandler}
      checkedItems={checkedItems}
    />
  );

  return (
    <View style={styles.block}>
      <Title title="관심 카테고리를" />
      <Title title="최소 3개 선택해 주세요." hasMargin={true} />
      <FlatList
        style={styles.list}
        data={categoryList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, marginTop: 60},
  list: {flex: 1},
});

export default Category;
