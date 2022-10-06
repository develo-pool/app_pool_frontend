import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import theme from '../../assets/theme';
import openStoreByOS from '../hooks/openStoreByOS';
// import {MdCheckCircle} from 'react-icons/md';

function FollowButton() {
  return (
    <View style={styles.FollowButton}>
      <TouchableOpacity
        style={styles.ButtonFrame}
        onPress={() => {
          openStoreByOS();
        }}>
        <Text style={styles.FollowText}>팔로우</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  FollowButton: {
    justifyContent: 'center',
  },
  ButtonFrame: {
    backgroundColor: theme.colors.Poolgreen,
    width: 64,
    height: 32,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  FollowText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.White,
  },
});

export default FollowButton;
