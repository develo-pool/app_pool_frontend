import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import auth from '@react-native-firebase/auth';

function FirebasePhoneAuth() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [number, setNumber] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      let data = await confirm.confirm(code);
      console.log(data.additionalUserInfo.isNewUser);
    } catch (error) {
      console.log('error' + error);
    }
  }

  if (!confirm) {
    return (
      <View style={styles.Container}>
        <TextInput
          style={styles.InputBox}
          value={number}
          onChangeText={number => setNumber(number)}
        />
        <Button
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber(number)}
        />
      </View>
    );
  }

  return (
    <View style={styles.Container}>
      <TextInput
        style={styles.InputBox}
        value={code}
        onChangeText={text => setCode(text)}
      />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 30,
    margin: 30,
  },
  InputBox: {
    backgroundColor: 'grey',
  },
});

export default FirebasePhoneAuth;
