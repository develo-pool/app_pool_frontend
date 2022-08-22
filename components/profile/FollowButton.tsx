import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import theme from '../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {follow, unfollow} from '../../api/follow';
import {useMutation} from 'react-query';

interface Props {
  isFollowed: boolean;
}

function FollowButton({isFollowed}: Props) {
  const {mutate: onPressFollow} = useMutation(follow, {
    onSuccess: () => {
      isFollowed == !isFollowed;
      console.log(isFollowed);
    },
  });
  const {mutate: onPressUnfollow} = useMutation(unfollow, {
    onSuccess: () => {
      isFollowed == !isFollowed;
      console.log(isFollowed);
    },
  });

  return (
    <View style={styles.FollowButton}>
      <TouchableOpacity
        style={[styles.ButtonFrame, isFollowed && styles.Unfollowed]}
        onPress={() => (isFollowed ? onPressFollow : onPressUnfollow)}>
        <Text style={[styles.FollowText, isFollowed && styles.UnfollowedText]}>
          {isFollowed ? '팔로잉' : '팔로우'}
        </Text>
        {isFollowed && (
          <Icon name="check-circle" size={12} style={styles.Checked} />
        )}
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
  Unfollowed: {
    width: 80,
    backgroundColor: theme.colors.White,
    borderColor: theme.colors.Poolgreen,
    borderWidth: 1.5,
  },
  FollowText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.White,
  },
  UnfollowedText: {
    color: theme.colors.Poolgreen,
  },
  Checked: {
    marginLeft: 5,
    color: theme.colors.Poolgreen,
  },
});

export default FollowButton;
