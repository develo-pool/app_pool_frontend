import React from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import MainContainer from '../components/MainContainer';
import Title from '../components/Title';

function LoginScreen() {
  return (
    <MainContainer>
      <View style={styles.block}>
        <Title title="로그인" />
        <View>
          <Text style={styles.inputTitle}>로그인</Text>
          <TextInput style={styles.borderedInput} placeholder="닉네임 입력" />
        </View>
        <View>
          <Text style={styles.inputTitle}>비밀번호</Text>
          <TextInput style={styles.borderedInput} placeholder="비밀번호 입력" />
        </View>
        <View style={styles.wrapper}>
          <Pressable>
            <Text>회원가입</Text>
          </Pressable>
          <Text> | </Text>
          <Pressable>
            <Text>비밀번호 찾기</Text>
          </Pressable>
        </View>
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, justifyContent: 'space-around'},
  inputTitle: {
    fontSize: 12,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  borderedInput: {
    backgroundColor: 'white',
  },
});

export default LoginScreen;
