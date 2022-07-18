import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

interface Props {
  title: string;
}

function SetArticle({title}: Props) {
  return (
    <View>
      <Pressable>
        <View style={styles.SetArticle}>
          <Text style={styles.NotiText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  SetArticle: {
    height: 60,
    marginTop: 8,
    paddingHorizontal: 24,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  NotiText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default SetArticle;
