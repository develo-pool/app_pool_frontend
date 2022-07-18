import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function JoinBrandContainer() {
  return (
    <View style={styles.JoinBrandContainer}>
      <View style={styles.JoinImgContainer}>
        <View //Image로 바꿔줘야함!!
          style={styles.JoinBrandImg}
          // source={require('../assets/Pool.png')}
        />
      </View>
      <View style={styles.JoinInfoContainer}>
        <View style={styles.JoinTitleContainer}>
          <Text style={styles.JoinBrandTitle}>브랜드 등록 신청하기</Text>
        </View>
        <View style={styles.JoinIntroContainer}>
          <Text style={styles.JoinBrandIntro}>
            누구나 브랜드로 등록하면 메시지를 보낼 수 있어요!
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  JoinBrandContainer: {
    flexDirection: 'row',
    marginTop: 44,
  },
  JoinImgContainer: {
    flex: 1,
  },
  JoinInfoContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  JoinBrandImg: {
    height: 52,
    width: 52,
    borderRadius: 26,
    resizeMode: 'contain',
    backgroundColor: '#C7C7C7',
  },
  JoinTitleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  JoinIntroContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  JoinBrandTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  JoinBrandIntro: {
    fontSize: 12,
    fontWeight: '400',
  },
});

export default JoinBrandContainer;
