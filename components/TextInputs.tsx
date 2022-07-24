import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardTypeOptions,
} from 'react-native';
import theme from '../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  type: 'default' | 'disable' | 'focus' | 'error';
  placeholder: string;
  value?: string;
  onChangeText?: any;
  alert?: {
    type: 'Correct' | 'Error';
    text: string;
  };
  keyboardType?: KeyboardTypeOptions | undefined;
  maxLength?: number;
}

function TextInputs({
  type,
  placeholder,
  onChangeText,
  value,
  alert,
  keyboardType = undefined,
  maxLength,
}: Props) {
  return (
    <View style={[styles.block]}>
      <View style={[styles.Textinput, styles[type]]}>
        <TextInput
          value={value}
          style={styles.inputStyle}
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          maxLength={maxLength}
        />
        <TouchableOpacity onPress={() => onChangeText('')}>
          {value && (
            <Icon name="cancel" size={16} color={theme.colors.Grey30} />
          )}
        </TouchableOpacity>
      </View>
      {alert && (
        <View style={styles.textContainer}>
          <Text style={[{color: theme.colors[alert.type]}, styles.text]}>
            {alert.text}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: 'column',
  },
  Textinput: {
    height: 46,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: theme.colors.Grey30,
  },
  inputStyle: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
  },
  default: {
    backgroundColor: theme.colors.White,
  },
  disable: {
    backgroundColor: theme.colors.Grey10,
  },
  focus: {
    borderColor: theme.colors.Black,
  },
  error: {
    borderColor: theme.colors.Error,
  },
  textContainer: {
    marginTop: 4,
  },
  text: {
    fontSize: 12,
    paddingLeft: 6,
  },
});

TextInputs.defaultProps = {
  type: 'default',
};

export default TextInputs;
