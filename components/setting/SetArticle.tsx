import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import theme from './../../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  title: string;
  onPress?: any;
}

function SetArticle({title, onPress}: Props) {
  return (
    <Pressable style={styles.Article} onPress={onPress}>
      <View style={styles.ArticleText}>
        <Text style={styles.SetText}>{title}</Text>
      </View>
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
    marginTop: 1,
    paddingHorizontal: 24,
  },
  ArticleText: {
    width: 320,
  },
  SetText: {
    color: theme.colors.Grey60,
    fontSize: 14,
    fontWeight: '700',
  },
  RightArrow: {
    color: theme.colors.Black,
  },
});

export default SetArticle;
