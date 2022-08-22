import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardTypeOptions,
} from 'react-native';
import theme from '../assets/theme';
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
  secureTextEntry?: boolean;
  onFocus?: any;
  onBlur?: any;
}

function TextInputs({
  type,
  placeholder,
  onChangeText,
  value,
  alert,
  keyboardType = undefined,
  maxLength,
  secureTextEntry,
  onFocus,
  onBlur,
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
          editable={!(type === 'disable')}
          secureTextEntry={secureTextEntry}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholderTextColor={'rgba(0, 0, 0, 0.2)'}
          autoCapitalize={'none'}
          autoComplete={'off'}
        />
        <TouchableOpacity onPress={() => onChangeText('')}>
          {value && type !== 'disable' && (
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
    height: 46,
  },
  Textinput: {
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
    minHeight: 46,
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
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    paddingLeft: 6,
  },
});

TextInputs.defaultProps = {
  type: 'default',
};

export default TextInputs;
