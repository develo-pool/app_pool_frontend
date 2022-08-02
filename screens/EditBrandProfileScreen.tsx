import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import theme from '../assets/theme';

import ProfileImageContainer from './../components/profile/ProfileImageContainer';

function EditBrandProfile() {
  return (
    <View style={styles.Container}>
      <View style={styles.UpperContainer}>
        <ProfileImageContainer />
      </View>
      <TextInput
        style={styles.InputContainer}
        placeholder="소개 문구를 입력해주세요."
      />
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
});
export default EditBrandProfile;
