import React from 'react';
import {StyleSheet, View} from 'react-native';
import theme from '../theme';

export const PADDING = 24;

interface Props {
  children: React.ReactNode;
  type?: 'auth';
  background?: 'white' | 'grey';
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
  auth: {
    paddingTop: 130,
  },
  white: {
    backgroundColor: theme.colors.White,
  },
  grey: {
    backgroundColor: theme.colors.Grey10,
  },
});

export default MainContainer;
