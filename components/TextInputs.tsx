import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import theme from '../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  type: 'default' | 'disable' | 'focus' | 'correct' | 'error';
}

function TextInputs({type}: Props) {
  const [text, setText] = useState('');

  const onPress = () => {
    setText('');
  };

  return (
    <View style={[styles.Textinput, types[type]]}>
      <TextInput
        style={styles.InputStyle}
        placeholder="Text"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity onPress={onPress}>
        {text ? (
          <Icon name="clear" size={20} />
        ) : (
          <Icon name="clear" size={20} style={styles.isEmpty} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Textinput: {
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    height: 46,
    width: 324,
  },
  Default: {
    borderColor: theme.colors.Grey30,
    backgroundColor: theme.colors.White,
  },
  Disable: {
    borderColor: theme.colors.Grey30,
    backgroundColor: theme.colors.Grey10,
  },
  Focus: {
    borderColor: theme.colors.Black,
    backgroundColor: theme.colors.White,
  },
  Correct: {
    borderColor: theme.colors.Grey30,
  },
  Error: {
    borderColor: theme.colors.Error,
  },
  InputStyle: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
    marginLeft: 4,
    width: 292,
  },
  isEmpty: {
    display: 'none',
  },
});

const types = {
  default: styles.Default,
  disable: styles.Disable,
  focus: styles.Focus,
  correct: styles.Correct,
  error: styles.Error,
};

TextInputs.defaultProps = {
  type: 'default',
};

export default TextInputs;
