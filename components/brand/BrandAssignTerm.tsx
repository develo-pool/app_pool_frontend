import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BrandAssignParams} from '../../api/brand/types';
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
      <Title title="브랜드 가이드를 읽고" alignCenter={true} />
      <Title title="동의해주세요." alignCenter={true} hasMargin={true} />
      <Text style={styles.text}>
        {`POOL은 브랜드와 팔로워의 소중한 만남이 이루어지는 공간입니다. 브랜드 등록정보가 가이드에 부합하지 않거나, 등록 이후 서비스 정책에 위배 되는 활동이 확인되는 경우 예고 없이 이용 제재될 수 있습니다. 유명 브랜드나 유명인을 사칭하는 경우, 일반명사, 음란/욕설 등의 단어가 포함된 이름 및 사진을 게시한 브랜드 사용자는 제재될 수있습니다.

한국 인터넷 진흥원에서 배포한 불법 스팸 방지를 위한 정보통신망법 안내서의 관련 법률을 반드시 준수해야 합니다. 메시지가 사회적 이슈가 될 가능성이 있거나 이용자의 항의가 있는 경우 메시지 발송이 제한될 수 있습니다. 광고성 내용이 포함된 메시지 맨 앞에 (광고)를 표시해야 합니다.`}
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
    marginBottom: 24,
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
