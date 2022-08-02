import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import theme from '../assets/theme';
import {useState} from 'react';

import ProfileImageContainer from './../components/profile/ProfileImageContainer';

function EditBrandProfile() {
  const [count, setCount] = useState('');

  return (
    <View style={styles.Container}>
      <View style={styles.UpperContainer}>
        <ProfileImageContainer isEditable={false} />
      </View>
      <TextInput
        style={styles.InputContainer}
        placeholder="소개 문구를 입력해주세요."
        maxLength={200}
        onChangeText={setCount}
      />
      <View style={styles.InputTextCounter}>
        <Text style={styles.CounterText}>{count.length}/200</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.colors.White,
  },
  UpperContainer: {
    marginTop: 44,
  },
  InputContainer: {
    marginTop: 52,
    paddingHorizontal: 16,
    fontFamily: theme.fontFamily.Pretendard,
    color: theme.colors.Grey30,
    fontSize: theme.fontSize.P2,
  },
  InputTextCounter: {
    paddingHorizontal: 16,
    alignItems: 'flex-end',
    marginTop: 16,
  },
  CounterText: {
    fontFamily: theme.fontFamily.Pretendard,
    color: theme.colors.Grey30,
    fontSize: theme.fontSize.P2,
  },
});
export default EditBrandProfile;
