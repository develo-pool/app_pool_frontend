import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import theme from '../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

function JoinBrandContainer({onPress}: {onPress?: any}) {
  return (
    <Pressable style={styles.JoinBrandContainer} onPress={onPress}>
      <View style={styles.JoinInfoContainer}>
        <Text style={styles.JoinBrandTitle}>브랜드 등록하기</Text>
        <Text style={styles.JoinBrandIntro}>
          브랜드 유저로 등록하고 메시지를 보내보세요!
        </Text>
      </View>
      <Icon name="arrow-forward-ios" size={16} style={styles.RightArrow} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  JoinBrandContainer: {
    flexDirection: 'row',
    height: 75,
    paddingLeft: 24,
    paddingRight: 20,
    backgroundColor: theme.colors.Skyblue,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  JoinInfoContainer: {
    justifyContent: 'center',
  },
  JoinBrandTitle: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P2,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Poolblue,
    marginBottom: 4,
  },
  JoinBrandIntro: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Deepblue,
  },
  RightArrow: {
    color: theme.colors.Poolblue,
  },
});

export default JoinBrandContainer;
