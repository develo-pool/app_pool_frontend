import React from 'react';
import {StyleSheet, View} from 'react-native';

export const MARGIN = 24;

interface Props {
  children: React.ReactNode;
}

function MainContainer({children}: Props) {
  return <View style={styles.block}>{children}</View>;
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    marginHorizontal: MARGIN,
  },
});

export default MainContainer;
