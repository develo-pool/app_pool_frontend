import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import theme from '../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TextInputs() {
  const [text, setText] = useState('');

  return (
    <View style={[styles.Textinput, styles.Default]}>
      <TextInput
        style={styles.InputStyle}
        placeholder="Text"
        value={text}
        onChangeText={value => setText(value)}
      />
      <TouchableOpacity onPress={() => setText('')}>
        <Icon name="clear" size={20} />
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
});

export default TextInputs;
