import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import theme from '../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  title: string;
  onPress?: any;
}

function SetArticle({title, onPress}: Props) {
  return (
    <Pressable style={styles.Article} onPress={onPress}>
      <Text style={styles.SetText}>{title}</Text>
      <Icon name="arrow-forward-ios" size={14} style={styles.RightArrow} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  Article: {
    backgroundColor: theme.colors.White,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 1,
    paddingLeft: 24,
    paddingRight: 20,
  },
  SetText: {
    fontFamily: theme.fontFamily.Pretendard,
    color: theme.colors.Grey60,
    fontSize: theme.fontSize.P2,
    fontWeight: '700',
  },
  RightArrow: {
    color: theme.colors.Black,
  },
});

export default SetArticle;
