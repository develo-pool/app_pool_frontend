import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import theme from '../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {follow, unfollow} from '../../api/follow';
import {useMutation} from 'react-query';
// import {sendSingleAlarm} from '../../api/fcm';

interface Props {
  isFollowed?: boolean;
  poolUserId: number;
  refetch: any;
}

function FollowButton({isFollowed, poolUserId, refetch}: Props) {
  // const [isFollow, setIsFollow] = useState(isFollowed);
  // const {mutate: sendWelcomeMessage} = useMutation(sendSingleAlarm);
  const {mutate: onPressFollow} = useMutation(follow, {
    onSuccess: () => {
      // setIsFollow(true);
      refetch();
    },
    onError: () => {},
    onMutate: () => {},
    onSettled: () => {},
  });
  const {mutate: onPressUnfollow} = useMutation(unfollow, {
    onSuccess: () => {
      // setIsFollow(false);
      refetch();
    },
  });

  return (
    <View style={styles.FollowButton}>
      <TouchableOpacity
        style={[styles.ButtonFrame, isFollowed && styles.Unfollowed]}
        onPress={
          () =>
            isFollowed ? onPressUnfollow(poolUserId) : onPressFollow(poolUserId)
          // sendWelcomeMessage({pool_user_id: poolUserId, brand_id: 1})
        }>
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
