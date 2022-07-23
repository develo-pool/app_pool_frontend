import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../theme';

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
  onPress,
  value,
  state,
}: {
  title: string;
  onPress: any;
  value: string;
  state: boolean;
}) {
  return (
    <>
      {value === 'termAgreement' ? (
        <Pressable style={styles.terms} onPress={() => onPress(!state)}>
          {state ? (
            <Icon name="check-box" size={20} />
          ) : (
            <View style={styles.empty} />
          )}
          <Text>{title}</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.terms} onPress={() => onPress(!state)}>
          {state ? (
            <Icon name="check-box" size={20} />
          ) : (
            <View style={styles.empty} />
          )}
          <Text>{title}</Text>
        </Pressable>
      )}
    </>
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
    color: 'black',
  },
  terms: {
    flexDirection: 'row',
  },
  empty: {
    width: 15,
    height: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});
