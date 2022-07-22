import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import theme from '../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  type: 'default' | 'disable' | 'focus' | 'correct' | 'error';
  placeholder: string;
  value?: string;
  onChangeText?: any;
}

function TextInputs({type, placeholder, onChangeText, value}: Props) {
  return (
    <View style={[styles.Textinput, styles[type]]}>
      <TextInput
        style={styles.inputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={() => onChangeText('')}>
        {value && <Icon name="clear" size={20} />}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Textinput: {
    flex: 1,
    height: 46,
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  default: {
    borderColor: theme.colors.Grey30,
    backgroundColor: theme.colors.White,
  },
  disable: {
    borderColor: theme.colors.Grey30,
    backgroundColor: theme.colors.Grey10,
  },
  focus: {
    borderColor: theme.colors.Black,
    backgroundColor: theme.colors.White,
  },
  correct: {
    borderColor: theme.colors.Grey30,
  },
  error: {
    borderColor: theme.colors.Error,
  },
  inputStyle: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
    marginLeft: 4,
    width: 292,
  },
});

TextInputs.defaultProps = {
  type: 'default',
};

export default TextInputs;
