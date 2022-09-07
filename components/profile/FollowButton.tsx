import React, {
  // useEffect,
  // useRef,
  useState,
} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import theme from '../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {follow, unfollow} from '../../api/follow';
// import {sendSingleAlarm} from '../../api/fcm';
import {
  useMutation,
  // useQueryClient
} from 'react-query';

interface Props {
  isFollowed?: boolean;
  poolUserId: number;
  refetch: any;
}

function FollowButton({isFollowed, poolUserId, refetch}: Props) {
  // const isFollow = useRef(isFollowed);
  const [isFollow, setIsFollow] = useState(isFollowed);
  // const queryClient = useQueryClient();
  // const {mutate: sendWelcomeMessage} = useMutation(sendSingleAlarm);

  const {mutate: onPressFollow} = useMutation(follow, {
    onSuccess: () => {
      // queryClient.invalidateQueries('follow')
      // isFollow.current = true;
      setIsFollow(true);
      // refetch();
    },
    onError: () => {},
    onMutate: () => {},
    onSettled: () => {},
  });
  const {mutate: onPressUnfollow} = useMutation(unfollow, {
    onSuccess: () => {
      // queryClient.invalidateQueries('unfollow')
      // isFollow.current = false;
      setIsFollow(false);
      // refetch();
    },
    // onSettled: () => {
    //   setIsFollow(isFollowed)
    // },
  });

  return (
    <View style={styles.FollowButton}>
      <TouchableOpacity
        style={[
          styles.ButtonFrame,
          // isFollow.current
          isFollow && styles.Unfollowed,
        ]}
        onPress={
          () =>
            // isFollow.current
            isFollow ? onPressUnfollow(poolUserId) : onPressFollow(poolUserId)
          // sendWelcomeMessage({pool_user_id: poolUserId, brand_id: 1}))
        }>
        <Text
          style={[
            styles.FollowText,
            // isFollow.current
            isFollow && styles.UnfollowedText,
          ]}>
          {
            // isFollow.current
            isFollow ? '팔로잉' : '팔로우'
          }
        </Text>
        {
          // isFollow.current
          isFollow && (
            <Icon name="check-circle" size={12} style={styles.Checked} />
          )
        }
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
