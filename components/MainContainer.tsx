import React from 'react';
import {StyleSheet, View} from 'react-native';
import theme from '../theme';

export const PADDING = 24;

interface Props {
  children: React.ReactNode;
  type?: 'wide' | undefined;
  background?: 'white' | 'gray';
}

function MainContainer({children, type, background = 'white'}: Props) {
  return (
    <View style={[styles.block, type && styles[type], styles[background]]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    paddingHorizontal: PADDING,
  },
  wide: {
    paddingTop: 60,
  },
  white: {
    backgroundColor: theme.colors.White,
  },
  gray: {
    backgroundColor: theme.colors.Grey10,
  },
});

export default MainContainer;
