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
import theme from '../../assets/theme';
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
  const onClick = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      flatListRef.current?.scrollToOffset({
        offset: offset * (index - 1),
        animated: true,
      });
    } else if (direction === 'right') {
      flatListRef.current?.scrollToOffset({
        offset: offset * (index + 1),
        animated: true,
      });
    }
  };
  return (
    <View>
      <Text style={styles.title}>{DATA[index].title}</Text>
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
      <Pressable
        onPress={() => onClick('left')}
        style={styles.left}
        disabled={index === 0}>
        <Icon
          name="keyboard-arrow-left"
          size={50}
          color={index === 0 ? theme.colors.Grey30 : 'black'}
        />
      </Pressable>
      <Pressable
        onPress={() => onClick('right')}
        style={styles.right}
        disabled={index === 3}>
        <Icon
          name="keyboard-arrow-right"
          size={50}
          color={index === 3 ? theme.colors.Grey30 : 'black'}
        />
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
  title: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.H2,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Black,
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: 50,
  },
  left: {
    position: 'absolute',
    left: 0,
    top: cardSize.height / 2 - 30,
  },
  right: {
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
    backgroundColor: theme.colors.Grey20,
  },
  focused: {
    backgroundColor: theme.colors.Poolgreen,
  },
});

export default Carousel;
