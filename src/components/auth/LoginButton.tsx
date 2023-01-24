import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import theme from '../../../assets/theme';

function LoginButton({
  text,
  disable,
  onPress,
}: {
  text: string;
  disable?: boolean;
  onPress?: any;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.default, disable && styles.disable]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  default: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.Black,
    borderRadius: 6,
  },
  text: {
    color: theme.colors.White,
    fontSize: theme.fontSize.H5,
    fontWeight: theme.fontWeight.Bold,
  },
  disable: {backgroundColor: theme.colors.Grey30},
});

export default LoginButton;
