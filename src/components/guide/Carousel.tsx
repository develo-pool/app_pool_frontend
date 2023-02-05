import React, {useRef} from 'react';
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
import theme from '../../../assets/theme';
import DATA from './Contents';

const Indicator = ({focused}: {focused: boolean}) => {
  return <View style={[styles.indicator, focused && styles.focused]} />;
};

const margin = 55;
const offset = Dimensions.get('screen').width - margin * 2;
const cardSize = {
  width: offset,
  height: 200,
};

function Carousel({index, setIndex}: {index: number; setIndex: any}) {
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
    <View style={styles.block}>
      <View>
        <Text style={styles.title}>{DATA[index].title}</Text>
        <View style={styles.row}>
          <Pressable onPress={() => onClick('left')} disabled={index === 0}>
            <Icon
              name="keyboard-arrow-left"
              size={40}
              color={index === 0 ? theme.colors.Grey30 : 'black'}
            />
          </Pressable>
          <FlatList
            data={DATA}
            horizontal
            renderItem={({item}) => (
              <View style={styles.card}>
                <Image
                  source={item.img}
                  style={styles.img}
                  resizeMode="contain"
                />
              </View>
            )}
            keyExtractor={item => item.id.toString()}
            snapToInterval={offset}
            snapToAlignment="start"
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            ref={flatListRef}
          />
          <Pressable onPress={() => onClick('right')} disabled={index === 3}>
            <Icon
              name="keyboard-arrow-right"
              size={40}
              color={index === 3 ? theme.colors.Grey30 : 'black'}
            />
          </Pressable>
        </View>
        <View style={styles.wrapper}>
          {Array.from({length: DATA.length}, (_, i) => i).map(i => (
            <Indicator key={i} focused={index === i} />
          ))}
        </View>
        <Text style={styles.text}>{DATA[index].text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: theme.colors.White,
    paddingHorizontal: 15,
  },
  card: {
    width: cardSize.width,
    height: cardSize.height,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    flex: 1,
    maxWidth: undefined,
    maxHeight: undefined,
  },
  title: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.H2,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Black,
    textAlign: 'center',
    marginBottom: 56,
    marginTop: 100,
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: 50,
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey60,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 158,
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
