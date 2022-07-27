import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import theme from '../../theme';

export function SendButton({
  text,
  disabled,
  onPress,
}: {
  text: string;
  disabled: boolean;
  onPress?: undefined;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.SendButton, disabled && styles.disabled]}>
      <Text style={styles.Send}>{text}</Text>
    </Pressable>
  );
}

export function PreviewButton({
  text,
  disabled,
  onPress,
}: {
  text: string;
  disabled: boolean;
  onPress?: undefined;
}) {
  return (
    <Pressable onPress={onPress}>
      <Text style={[styles.Preview, disabled && styles.disabled]}> {text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  SendButton: {
    backgroundColor: theme.colors.Black,
    width: 74,
    height: 38,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Send: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    fontWeight: '700',
    color: theme.colors.White,
  },
  Preview: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P2,
    fontWeight: '700',
    color: theme.colors.Poolblue,
  },
  disabled: {
    backgroundColor: theme.colors.Grey30,
  },
});
