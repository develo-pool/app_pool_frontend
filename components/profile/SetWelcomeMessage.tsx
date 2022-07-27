import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import theme from '../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

function SetWelcomeMsg() {
  return (
    <Pressable style={styles.SetWelcomeMessage}>
      <Text style={styles.SetWelcomeText}>웰컴메시지를 설정해주세요</Text>
      <Icon name="arrow-forward-ios" size={12} style={styles.RightArrow} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  SetWelcomeMessage: {
    height: 50,
    backgroundColor: theme.colors.White,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  SetWelcomeText: {
    color: theme.colors.Grey50,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
  },
  RightArrow: {
    marginLeft: 6,
    color: theme.colors.Grey80,
  },
});

export default SetWelcomeMsg;
