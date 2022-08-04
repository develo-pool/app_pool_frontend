import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BrandAssignParams} from '../../api/types';
import theme from '../../assets/theme';
import Title from '../Title';

function BrandAssignTerm({
  form,
  onPress,
}: {
  form: BrandAssignParams;
  onPress: any;
}) {
  return (
    <ScrollView style={styles.block} showsVerticalScrollIndicator={false}>
      <Title title="서비스 가이드를 읽고" alignCenter={true} />
      <Title title="동의해주세요." alignCenter={true} />
      <Text style={styles.subtitle}>제 1조</Text>
      <Text style={styles.text}>
        {`이제야 목적지를 정했지만 가려한 날 막아서네 난 갈 길이 먼데 새빨간 얼굴로 화를 냈던 친구가 생각나네

이미 난 발걸음을 떼었지만 가려한 날 재촉하네 걷기도 힘든데 새파랗게 겁에 질려 도망간 친구가 뇌에 맴도네

건반처럼 생긴 도로 위 수많은 동그라미들 모두가 멈췄다 굴렀다 말은 잘 들어 그건 나도 문제가 아냐

붉은색 푸른색 그 사이 3초 그 짧은 시간 노란색 빛을 내는 저기 저 신호등이 내 머릿속을 텅 비워버려 내가 빠른 지도 느린지도 모르겠어 그저 눈앞이 샛노랄 뿐이야
      `}
      </Text>
      <Pressable
        onPress={() => onPress('brandAgreement')(!form.brandAgreement)}
        style={styles.container}>
        {form.brandAgreement ? (
          <View style={styles.check}>
            <Icon name="check" size={15} color="white" />
          </View>
        ) : (
          <View style={styles.empty} />
        )}
        <Text style={styles.checkText}>동의합니다.</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  block: {
    paddingTop: 40,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 100,
  },
  text: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
    color: theme.colors.Grey50,
    lineHeight: 24,
  },
  subtitle: {
    marginTop: 24,
    marginBottom: 8,
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.H5,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey50,
  },
  empty: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: theme.colors.Grey30,
  },
  check: {
    width: 20,
    height: 20,
    borderRadius: 2,
    backgroundColor: theme.colors.Poolgreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P2,
    color: theme.colors.Grey70,
    marginLeft: 10,
  },
});

export default BrandAssignTerm;
