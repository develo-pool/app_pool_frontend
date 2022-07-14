import React from 'react';
import MainContainer from '../components/MainContainer';
import ScreenBottomButton from '../components/ScreenBottomButton';
import Title from '../components/Title';

function SignUpScreen() {
  return (
    <>
      <MainContainer>
        <Title title="기본정보" subTitle="회원가입" />
      </MainContainer>
      <ScreenBottomButton name="다음" onPress={() => {}} enabled={true} />
    </>
  );
}

export default SignUpScreen;
