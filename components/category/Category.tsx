import React from 'react';
import {ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';
import {PADDING} from '../MainContainer';
import Title from '../Title';
import CategoryItem, {BETWEEN, CategoryItemProps} from './CategoryItem';
import categoryList from './categoryList';

function Category({
  checkedItems,
  checkedItemHandler,
}: {
  checkedItems: string[];
  checkedItemHandler: any;
}) {
  const dimensions = useWindowDimensions();
  const size = Math.floor((dimensions.width - (PADDING + BETWEEN) * 2) / 3);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.block}>
      <Title title="관심 카테고리를" />
      <Title title="최소 3개 선택해 주세요." hasMargin={true} />
      <View style={styles.list}>
        {categoryList.map((item: CategoryItemProps) => (
          <CategoryItem
            item={item}
            key={item.id}
            checkedItemHandler={checkedItemHandler}
            checkedItems={checkedItems}
            size={size}
          />
        ))}
        <View style={{width: size}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, paddingTop: 40},
  list: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default Category;
