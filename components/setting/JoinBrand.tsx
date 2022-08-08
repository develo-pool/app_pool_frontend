import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import theme from '../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

function JoinBrandContainer({onPress}: {onPress?: any}) {
  return (
    <Pressable style={styles.JoinBrandContainer} onPress={onPress}>
      <View style={styles.JoinInfoContainer}>
        <View style={styles.JoinTitleContainer}>
          <Text style={styles.JoinBrandTitle}>브랜드 등록하기</Text>
        </View>
        <View style={styles.JoinIntroContainer}>
          <Text style={styles.JoinBrandIntro}>
            브랜드 유저로 등록하고 메시지를 보내보세요!
          </Text>
        </View>
      </View>

      <Icon name="arrow-forward-ios" size={16} style={styles.RightArrow} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  JoinBrandContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 75,
    paddingHorizontal: 24,
    backgroundColor: theme.colors.Skyblue,
    alignItems: 'center',
  },
  JoinInfoContainer: {
    justifyContent: 'center',
    width: 320,
  },
  JoinTitleContainer: {
    justifyContent: 'center',
    marginBottom: 4,
  },
  JoinIntroContainer: {
    justifyContent: 'center',
  },
  JoinBrandTitle: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.Poolblue,
  },
  JoinBrandIntro: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: 12,
    fontWeight: '400',
    color: theme.colors.Deepblue,
  },
  RightArrow: {
    color: theme.colors.Poolblue,
  },
});

export default JoinBrandContainer;
