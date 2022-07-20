import React, {useEffect, useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {MARGIN} from '../MainContainer';

export interface CategoryItemProps {
  id: string;
  name: string;
}

const BETWEEN = 40;

function CategoryItem({
  item,
  checkedItemHandler,
  checkedItems,
}: {
  item: CategoryItemProps;
  checkedItemHandler: any;
  checkedItems: string[];
}) {
  const dimensions = useWindowDimensions();
  const size = (dimensions.width - (MARGIN + BETWEEN) * 2) / 3;
  const id = parseInt(item.id, 10);
  const notLast = id % 3 !== 2;
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
      style={[{width: size}, styles.container, notLast && styles.margin]}
      onPress={onCheck}>
      <View
        style={[styles.circle, {height: size}, isChecked && styles.checked]}
      />
      {isChecked && (
        <View style={styles.tag}>
          <Icon name="check" color="white" size={15} />
        </View>
      )}
      <Text style={styles.name}>{item.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 30},
  circle: {
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
  },
  margin: {
    marginRight: BETWEEN,
  },
  name: {
    marginTop: 10,
    textAlign: 'center',
  },
  checked: {
    borderWidth: 3,
    borderColor: 'black',
  },
  tag: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    position: 'absolute',
    borderRadius: 10,
    width: 20,
    height: 20,
    top: 2,
    right: 2,
  },
});

export default CategoryItem;
