import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, Pressable, View, StyleSheet} from 'react-native';
// import FollowButton from '../profile/FollowButton';
import theme from '../../assets/theme';
import {RootStackNavigationProp} from '../../screens/types';
import FollowingButton from './FollowingButton';

interface Props {
  followers: number;
  brandName: string;
  source: string;
  brandUserId: number;
  poolUserId: number;
}

function FollowingList({
  brandName,
  followers,
  source,
  brandUserId,
  poolUserId,
}: Props) {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <>
      <Pressable
        style={styles.FollowingsContainer}
        onPress={() =>
          navigation.navigate('BrandProfile', {
            brandUserId: brandUserId,
            poolUserId: poolUserId,
          })
        }>
        <Image
          style={styles.BrandProfileImage}
          source={
            source ? {uri: source} : require('../../assets/ProfileImage.png')
          }
          resizeMode="cover"
        />
        <View style={styles.NameandFollowers}>
          <Text style={styles.BrandName}>{brandName}</Text>
          <View style={styles.FollowerContainer}>
            <Text style={styles.Follower}>팔로워</Text>
            <Text style={styles.Followers}>{followers}</Text>
          </View>
        </View>
        <View style={styles.ButtonContainer}>
          <FollowingButton poolUserId={poolUserId} />
        </View>
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
  ButtonContainer: {
    width: 83,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default FollowingList;
