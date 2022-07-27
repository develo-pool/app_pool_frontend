import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../theme';

interface Props {
  title: string;
  alignCenter?: boolean;
  subTitle?: string;
  hasMargin?: boolean;
  titleSize: 'H1' | 'H2' | 'H3' | 'H4' | 'H5';
}

function Title({
  title,
  alignCenter = false,
  subTitle,
  hasMargin,
  titleSize,
}: Props) {
  return (
    <View style={[alignCenter && styles.center, hasMargin && styles.margin]}>
      <Text style={[{fontSize: theme.fontSize[titleSize]}, styles.title]}>
        {title}
      </Text>
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: theme.fontFamily.Pretendard,
    fontWeight: '700',
    color: 'black',
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
    opacity: 0.4,
  },
  center: {
    alignItems: 'center',
  },
  margin: {
    marginBottom: 40,
  },
});

export default Title;
