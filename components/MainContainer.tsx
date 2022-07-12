import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  children: React.ReactNode;
}

function MainContainer({children}: Props) {
  return <View style={styles.block}>{children}</View>;
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    marginHorizontal: 24,
  },
});

export default MainContainer;
