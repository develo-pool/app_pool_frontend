import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import MainContainer from '../components/MainContainer';
import ScreenBottomButton from '../components/ScreenBottomButton';
import Title from '../components/Title';
import {RootStackNavigationProp} from './RootStack';
import {InputTitle} from '../components/LoginComponents';

function LoginScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [id, setId] = useState<string>('');

  return (
    <>
      <MainContainer>
        <View style={styles.block}>
          <Title title="로그인" />
          <View>
            <InputTitle title="로그인" />
            <TextInput
              style={styles.borderedInput}
              placeholder="닉네임 입력"
              value={id}
              onChangeText={setId}
            />
          </View>
          <View>
            <InputTitle title="비밀번호" />
            <TextInput
              style={styles.borderedInput}
              placeholder="비밀번호 입력"
            />
          </View>
          <View style={styles.wrapper}>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
              <Text>회원가입</Text>
            </Pressable>
            <Text> | </Text>
            <Pressable>
              <Text>비밀번호 찾기</Text>
            </Pressable>
          </View>
        </View>
      </MainContainer>
      <ScreenBottomButton
        name="로그인"
        onPress={() => navigation.navigate('SignUp')}
        enabled={true}
      />
    </>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, justifyContent: 'space-around'},
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
