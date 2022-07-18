import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DATA from './Contents';

const Indicator = ({focused}: {focused: boolean}) => {
  return <View style={[styles.indicator, focused && styles.focused]} />;
};

const margin = 76;
const offset = Dimensions.get('screen').width;
const cardSize = {
  width: offset - margin * 2,
  height: 222,
};

function Carousel() {
  const [index, setIndex] = useState(0);
  const onScroll = (e: any) => {
    const newIndex = Math.round(e.nativeEvent.contentOffset.x / offset);
    setIndex(newIndex);
  };
  const flatListRef = useRef<FlatList>(null);
  const onClick = () => {
    if (index < 3) {
      flatListRef.current?.scrollToOffset({
        offset: offset * (index + 1),
        animated: true,
      });
    } else {
      flatListRef.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };
  return (
    <View>
      <FlatList
        data={DATA}
        horizontal
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image source={item.img} style={styles.img} />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        snapToInterval={offset}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        ref={flatListRef}
      />
      <View style={styles.wrapper}>
        {Array.from({length: DATA.length}, (_, i) => i).map(i => (
          <Indicator key={i} focused={index === i} />
        ))}
      </View>
      <Text style={styles.text}>{DATA[index].text}</Text>
      <Pressable onPress={onClick} style={styles.button}>
        <Icon name="keyboard-arrow-right" size={50} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: cardSize.width,
    height: cardSize.height,
    marginHorizontal: margin,
  },
  img: {
    maxWidth: cardSize.width,
    maxHeight: cardSize.height,
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: 50,
  },
  button: {
    position: 'absolute',
    right: 0,
    top: cardSize.height / 2 - 30,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 170,
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  focused: {
    backgroundColor: 'black',
  },
});

export default Carousel;
