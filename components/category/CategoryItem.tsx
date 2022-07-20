import React from 'react';
import {Text, View} from 'react-native';

export interface CategoryItemProps {
  id: string;
  name: string;
}

function CategoryItem({item}: {item: CategoryItemProps}) {
  return (
    <View key={item.id}>
      <Text>{item.name}</Text>
    </View>
  );
}

export default CategoryItem;
