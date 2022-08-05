import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

// 요걸로다가 firebase의 auth를 사용할 예정...!
import auth from '@react-native-firebase/auth';

function FirebasePhoneAuth() {
  // confirm이 비어있다면, SMS가 가지 않은 상태
  // 참고로 SMS는 시간당 4건만 가능하다.
  const [confirm, setConfirm] = useState(null);
  // 인증코드 입력값
  const [code, setCode] = useState('');
  // 전화번호 입력값(+82 xx-xxxx-xxxx 입력 형태여야만 작동, '-'는 제거해도 ㄱㅊ)
  const [pnumber, setPNumber] = useState('');
  // 인증을 했는지 안했는지 boolean

  // 사실 당장에는 필요없는데...!
  // hoxy 추후에 비밀번호 찾기에서 어려움을 겪게 된다면,
  // 파이어베이스 게정 삭제 안하고,
  // 휴대폰 인증 - 파이어 베이스 uid 출력 - 우리가 갖고 있는 uid 비교 - 비밀번호 초기화 발급
  // 으로 사용할 수 있을까 싶어서 남겨둡니다.
  //   const [uid, setUid] = useState('');

  // 근데 이거 사용하면, 아래의 isNewUser 대신에 다른 boolean을 생성해서 상태관리를 해야한다는거...!
  // 그게 바로 아래에 있는 authCheck 되시겠다.
  //   const [authCheck, setAuthCheck] = useState(false);

  // 요게 휴대전화 textInput 옆의 인증하기에 들어갈 이벤트
  async function signInWithPhoneNumber(phoneNumber: string) {
    const confirmation = await await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }
  // 요게 인증번호 textInput 옆에 들어갈 이벤트
  async function confirmCode() {
    // 일단 코드가 맞는지 확인
    try {
      let data = await confirm.confirm(code);

      // 이게 기본적으로 우리가 인증을 했나 안했나를 판단하게 될 boolean
      // 인증이 완료된 이후에 새로운 계정이 생성되었는지, 안되었는지를 나타내는 boolean
      // 우리는 새로운 계정이 성공적으로 만들어지는 경우를 인증이 완료된 것으로 간주한다.
      console.log(data.additionalUserInfo.isNewUser);
      // 위에서 주석처리한 uid 사용을 확인해주세요.
      //   setUid(data.user.uid);

      // 요게 우리가 uid를 사용하게 된다면, 인증을 했냐 안했냐를 판단하게 될 boolean값
      //   setAuthCheck(true);

      // 에러가 난다면
    } catch (error) {
      //   setAuthCheck(false);
      console.log('error' + error);
      // 계정을 삭제하기 위한 finally
    } finally {
      await auth().currentUser?.delete();
      console.log('삭제~!');
    }
  }
  // 문자를 보냈는지, 안보냈는지애 따른 스크린 출력 예시
  if (!confirm) {
    return (
      <View style={styles.Container}>
        <TextInput
          style={styles.InputBox}
          value={pnumber}
          onChangeText={number => setPNumber(number)}
        />
        <Button
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber(pnumber)}
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
