import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../assets/theme';

interface Props {
  title: string;
  alignCenter?: boolean;
  subTitle?: string;
  hasMargin?: boolean;
  isSmall?: boolean;
}

function Title({
  title,
  alignCenter = false,
  subTitle,
  hasMargin,
  isSmall,
}: Props) {
  return (
    <View style={[alignCenter && styles.center, hasMargin && styles.margin]}>
      <Text style={[styles.title, isSmall && styles.small]}>{title}</Text>
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.H2,
    fontWeight: theme.fontWeight.Bold,
    color: 'black',
  },
  subTitle: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey40,
  },
  center: {
    alignItems: 'center',
  },
  margin: {
    marginBottom: 40,
  },
  small: {
    fontSize: theme.fontSize.H5,
  },
});

export default Title;
