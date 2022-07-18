import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

export function InputTitle({title}: {title: string}) {
  return <Text style={styles.text}>{title}</Text>;
}

export function CheckButton({
  text,
  disabled,
}: {
  text: string;
  disabled?: boolean;
}) {
  return (
    <Pressable style={[styles.checkButton, disabled && styles.disabled]}>
      <Text style={styles.innerText}>{text}</Text>
    </Pressable>
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

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  },
  checkButton: {
    width: 92,
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
    color: 'white',
  },
  disabled: {
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  unchecked: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },
  uncheckedText: {
    color: 'black',
  },
});
