// 이후에 hooks로 옮겨서 작업 마무리 할 예정입니다 ^_^

import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

interface Props {
  isFollow: boolean;
  isVertical: boolean;
  // 아래 두 개는 userId가 될수도...
  username: string;
  brandUsername: string;
}
function FollowBtn({
  isFollow = false,
  isVertical = false,
}: //   username,
//   brandUsername,
Props) {
  return (
    <View style={styles.container}>
      {isVertical ? (
        <TouchableOpacity
          onPress={() => undefined}
          style={styles.verticalFollowBtnContainer}>
          {isFollow ? (
            <Text style={styles.followBtn}>팔로우</Text>
          ) : (
            <Text style={styles.followBtn}>언팔로우</Text>
          )}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => undefined}
          style={styles.horizontalFollowBtnContainer}>
          {isFollow ? (
            <Text style={styles.followBtn}>팔로우</Text>
          ) : (
            <Text style={styles.followBtn}>언팔로우</Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#666666',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
    color: 'FFFFFF',
  },
  verticalFollowBtnContainer: {},
  horizontalFollowBtnContainer: {},
  followBtn: {},
});

export default FollowBtn;
