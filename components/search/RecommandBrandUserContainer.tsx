import React from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
import theme from '../../assets/theme';
import FollowButton from '../profile/FollowButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../screens/types';

interface Props {
  brandUsername: string;
  brandInfo: string;
  brandProfileImage: string;
  follow: boolean;
  userFollowerCount: number;
  brandUserId: number;
  changeFollowing?: any;
  isLoginUser?: boolean;
  poolUserId: number;
}

function RecommandBrandUserContainer({
  brandUsername,
  brandInfo,
  brandProfileImage,
  follow,
  userFollowerCount,
  brandUserId,
  isLoginUser,
  poolUserId,
}: Props) {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <Pressable
      style={styles.brandUserContainer}
      onPress={() =>
        navigation.navigate('BrandProfile', {
          brandUserId: brandUserId,
          poolUserId: poolUserId,
        })
      }>
      <View style={styles.brandUserHorizontal}>
        <Image
          style={styles.searchBrandUserProfileImg}
          source={{
            uri: brandProfileImage,
          }}
        />
        <View style={styles.spacebetween}>
          <View style={styles.brandUserTextContainer}>
            <Text style={styles.brandUsername}>{brandUsername}</Text>
            <View style={styles.brandUserFollowerContainer}>
              <Text style={styles.followerText}>팔로워</Text>
              <Text style={styles.followerCount}>{userFollowerCount}</Text>
            </View>
          </View>
          {isLoginUser === true ? (
            ''
          ) : (
            <View>
              <FollowButton isFollowed={follow} poolUserId={poolUserId} />
            </View>
          )}
        </View>
      </View>
      <View style={styles.brandUserIntroContainer}>
        <Text style={styles.brandUserIntro}>{brandInfo}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  brandUserContainer: {
    backgroundColor: theme.colors.White,
    borderRadius: 4,
    marginHorizontal: 16,
    marginBottom: 12,
    flex: 1,
    padding: 12,
  },
  brandUserHorizontal: {
    flexDirection: 'row',
    flex: 1,
  },
  searchBrandUserProfileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  spacebetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  brandUserTextContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 3,
  },
  brandUserFollowerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    // marginBottom: 4,
  },
  followerText: {
    color: theme.colors.Grey40,
    fontSize: theme.fontSize.P3,
    fontFamily: theme.fontFamily.Pretendard,
    fontWeight: theme.fontWeight.Light,
    marginRight: 4,
  },
  followerCount: {
    color: theme.colors.Grey80,
    fontSize: theme.fontSize.P3,
    fontFamily: theme.fontFamily.Pretendard,
    fontWeight: theme.fontWeight.Bold,
  },
  brandUserTexts: {
    padding: 10,
  },
  brandUsername: {
    fontWeight: theme.fontWeight.Bold,
    fontSize: theme.fontSize.P2,
    color: theme.colors.Grey80,
  },
  brandUserIntro: {
    color: theme.colors.Grey60,
    fontSize: theme.fontSize.P3,
    fontFamily: theme.fontFamily.Pretendard,
    fontWeight: theme.fontWeight.Light,
  },
  brandUserIntroContainer: {
    marginTop: 12,
  },
});

export default RecommandBrandUserContainer;
