import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  title: string;
  alignCenter?: boolean;
  subTitle?: string;
}

function Title({title, alignCenter = false, subTitle}: Props) {
  return (
    <View style={alignCenter && styles.center}>
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
    opacity: 0.4,
  },
  center: {
    alignItems: 'center',
  },
});

export default Title;
