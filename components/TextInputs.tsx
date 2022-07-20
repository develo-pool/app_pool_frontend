import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import theme from '../theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TextInputs() {
  const [text, setText] = useState('');

  return (
    <View style={styles.Textinput}>
      <TextInput
        style={styles.InputStyle}
        placeholder="Text"
        value={text}
        onChangeText={value => setText(value)}
      />
      <TouchableOpacity style={styles.Clearbutton} onPress={() => setText('')}>
        <Icon name="clear" size={20} style={styles.Clear} />
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
  InputStyle: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
  },
  Clearbutton: {},
  Clear: {},
});

export default TextInputs;
