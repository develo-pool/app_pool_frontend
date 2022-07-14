import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

function BrandUserHorizontal() {
  return (
    <View>
      <TextInput
        //   value={text}
        //   onChangeText={onChangeText}
        //   onSubmitEditing={addToDo}
        returnKeyType="done"
        placeholder={'채팅은 1회만 발송할 수 있습니다. 신중히 작성해주세요.'}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#666666',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
    color: 'FFFFFF',
  },
});

export default BrandUserHorizontal;
