// import React, {useEffect, useRef} from 'react';
import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import theme from '../../assets/theme';

const WIDTH = 167;
const HEIGHT = 4;

function ProcessBar({total, current}: {total: number; current: number}) {
  const currentSize = WIDTH / total;
  const animation = useRef<Animated.Value>(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: current * currentSize,
      useNativeDriver: true,
    }).start();
  }, [animation, current, currentSize]);

  return (
    <View style={styles.total}>
      <Animated.View
        style={[
          styles.current,
          {width: currentSize, transform: [{translateX: animation}]},
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  total: {
    backgroundColor: theme.colors.Grey10,
    width: WIDTH,
    height: HEIGHT,
    zIndex: 0,
  },
  current: {
    position: 'absolute',
    backgroundColor: theme.colors.Poolgreen,
    width: WIDTH / 2,
    height: HEIGHT,
    zIndex: 5,
  },
});

export default ProcessBar;
