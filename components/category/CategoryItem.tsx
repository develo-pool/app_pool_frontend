import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../theme';

export interface CategoryItemProps {
  id: string;
  name: string;
}

export const BETWEEN = 40;

function CategoryItem({
  item,
  checkedItemHandler,
  checkedItems,
  size,
}: {
  item: CategoryItemProps;
  checkedItemHandler: any;
  checkedItems: string[];
  size: number;
}) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(checkedItems.includes(item.id));
  }, [checkedItems, item]);

  const onCheck = () => {
    checkedItemHandler(item.id, !isChecked);
  };

  return (
    <Pressable
      key={item.id}
      style={[{width: size}, styles.container]}
      onPress={onCheck}>
      <View
        style={[styles.circle, {height: size}, isChecked && styles.checked]}
      />
      {isChecked && (
        <View style={styles.tag}>
          <Icon name="check" color="white" size={15} />
        </View>
      )}
      <Text style={[styles.name, isChecked && styles.checkedName]}>
        {item.name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 30},
  circle: {
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
  },
  name: {
    marginTop: 10,
    textAlign: 'center',
    fontFamily: theme.fontFamily.Pretendard,
  },
  checked: {
    borderWidth: 3,
    borderColor: theme.colors.Poolgreen,
  },
  checkedName: {
    color: theme.colors.Poolgreen,
  },
  tag: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.Poolgreen,
    position: 'absolute',
    borderRadius: 10,
    width: 20,
    height: 20,
    top: 2,
    right: 2,
  },
});

export default CategoryItem;
