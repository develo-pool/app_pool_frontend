import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import theme from '../../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  title: string;
  onPress?: any;
}

function SetArticle({title, onPress}: Props) {
  return (
    <Pressable style={styles.article} onPress={onPress}>
      <Text style={styles.setText}>{title}</Text>
      <Icon name="arrow-forward-ios" size={14} style={styles.rightArrow} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  article: {
    backgroundColor: theme.colors.White,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    marginTop: 2,
    paddingHorizontal: 24,
  },
  setText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P2,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey60,
  },
  rightArrow: {
    color: theme.colors.Black,
  },
});

export default SetArticle;
