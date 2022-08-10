import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import theme from '../../assets/theme';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../screens/types';

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
      style={[styles.SendButton, disabled && styles.buttonDisabled]}>
      <Text style={styles.Send}>{text}</Text>
    </Pressable>
  );
}

export function PreviewButton({
  text,
  disabled,
}: {
  text: string;
  disabled: boolean;
}) {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <Pressable onPress={() => navigation.navigate('Preview')}>
      <Text style={[styles.Preview, disabled && styles.previewDisabled]}>
        {text}
      </Text>
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
  previewDisabled: {
    color: theme.colors.Grey30,
  },
  buttonDisabled: {
    backgroundColor: theme.colors.Grey30,
  },
});
