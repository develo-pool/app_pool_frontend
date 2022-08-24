import React from 'react';
import {Image, Text, Pressable, View, StyleSheet} from 'react-native';
// import FollowButton from '../profile/FollowButton';
import theme from '../../assets/theme';

interface Props {
  followers: number;
  brandName: string;
  onPress?: any;
}

function FollowingList({brandName, followers}: Props) {
  return (
    <>
      <Pressable style={styles.FollowingsContainer}>
        <Image
          style={styles.BrandProfileImage}
          source={require('../../assets/ProfileImage.png')}
        />
        <View style={styles.NameandFollowers}>
          <Text style={styles.BrandName}>{brandName}</Text>
          <View style={styles.FollowerContainer}>
            <Text style={styles.Follower}>팔로워</Text>
            <Text style={styles.Followers}>{followers}</Text>
          </View>
        </View>
        {/* <FollowButton isFollowed={true} /> */}
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  FollowingsContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: theme.colors.White,
    marginTop: 1,
  },
  BrandProfileImage: {
    width: 46,
    height: 46,
    borderRadius: 23,
    resizeMode: 'contain',
  },
  NameandFollowers: {
    marginHorizontal: 12,
    width: 192,
    justifyContent: 'center',
  },
  BrandName: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P2,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey80,
  },
  FollowerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Follower: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey40,
  },
  Followers: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey80,
    marginLeft: 4,
  },
});

export default FollowingList;
