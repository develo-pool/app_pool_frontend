import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../assets/theme';

export function InputTitle({title}: {title: string}) {
  return <Text style={styles.text}>{title}</Text>;
}

export function AuthButton({
  text,
  disabled,
  onPress,
}: {
  text: string;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
}) {
  return (
    <View style={styles.block}>
      <Pressable
        onPress={onPress}
        style={[styles.checkButton, disabled && styles.disabled]}
        android_ripple={{color: 'rgba(255,255,255,0.1)'}}>
        <Text style={styles.innerText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export function RadioButton({
  text,
  value,
  disabled,
  marginLeft,
  onPress,
}: {
  text: string;
  value: string;
  disabled?: boolean;
  marginLeft?: boolean;
  onPress: any;
}) {
  return (
    <Pressable
      onPress={() => onPress(value)}
      style={[
        styles.RadioButton,
        disabled && styles.unchecked,
        marginLeft && styles.marginLeft,
      ]}>
      <Text style={disabled ? styles.uncheckedText : styles.innerText}>
        {text}
      </Text>
    </Pressable>
  );
}

export function CheckBox({
  title,
  state,
  onPress,
  onPressText,
}: {
  title: string;
  state: boolean;
  onPress: any;
  onPressText: any;
}) {
  return (
    <Pressable style={styles.terms} onPress={() => onPress(!state)}>
      <View style={styles.checkBoxContainer}>
        {state ? (
          <Icon name="check-box" size={20} color={theme.colors.Grey30} />
        ) : (
          <View style={styles.empty} />
        )}
      </View>
      <Pressable onPress={onPressText}>
        <Text style={styles.termText}>{title}</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  text: {
    fontSize: 12,
    marginBottom: 4,
    fontFamily: theme.fontFamily.Pretendard,
  },
  checkButton: {
    height: 48,
    paddingHorizontal: 20,
    marginLeft: 8,
    borderRadius: 4,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RadioButton: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginLeft: {
    marginLeft: 8,
  },
  innerText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontWeight: theme.fontWeight.Bold,
    color: 'white',
  },
  disabled: {
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  unchecked: {
    backgroundColor: 'white',
    borderColor: theme.colors.Grey40,
    borderWidth: 1,
  },
  uncheckedText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontWeight: theme.fontWeight.Bold,
    color: 'black',
  },
  terms: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  empty: {
    width: 14,
    height: 14,
    borderColor: theme.colors.Grey30,
    borderWidth: 1,
    margin: 3,
  },
  termText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P2,
    color: theme.colors.Grey70,
  },
  checkBoxContainer: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
