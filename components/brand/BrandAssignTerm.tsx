import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Title from '../Title';

function BrandAssignTerm() {
  return (
    <>
      <Title title="서비스 가이드를 읽고" alignCenter={true} />
      <Title title="동의해주세요." alignCenter={true} />
      <Text>
        {`
이제야 목적지를 정했지만 가려한 날 막아서네 난 갈 길이 먼데 새빨간 얼굴로 화를 냈던 친구가 생각나네

이미 난 발걸음을 떼었지만 가려한 날 재촉하네 걷기도 힘든데 새파랗게 겁에 질려 도망간 친구가 뇌에 맴도네

건반처럼 생긴 도로 위 수많은 동그라미들 모두가 멈췄다 굴렀다 말은 잘 들어 그건 나도 문제가 아냐

붉은색 푸른색 그 사이 3초 그 짧은 시간 노란색 빛을 내는 저기 저 신호등이 내 머릿속을 텅 비워버려 내가 빠른 지도 느린지도 모르겠어 그저 눈앞이 샛노랄 뿐이야
      `}
      </Text>
      <Pressable>
        {0 ? (
          <Icon name="check-box" size={20} />
        ) : (
          <View style={styles.empty} />
        )}
        <Text>동의합니다.</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  empty: {
    width: 15,
    height: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default BrandAssignTerm;
