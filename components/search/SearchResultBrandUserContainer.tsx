import React from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
import FollowButton from '../profile/FollowButton';
import theme from '../../assets/theme';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../screens/types';

interface Props {
  brandUsername: string;
  brandProfileImage: string;
  follow: boolean;
  userFollowerCount: number;
  // poolUserId: number;
  changeFollowing?: any;
  isLoginUser?: boolean;
}

function SearchResultBrandUserContainer({
  brandUsername,
  brandProfileImage,
  follow,
  userFollowerCount,
  // poolUserId,
  changeFollowing,
  isLoginUser,
}: Props) {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <View>
      <Pressable
        style={styles.brandUserContainer}
        onPress={() => navigation.navigate('BrandProfile')}>
        <View style={styles.brandUserHorizontal}>
          <View style={styles.spacebetween}>
            <View style={styles.align}>
              <Image
                style={styles.searchBrandUserProfileImg}
                source={{
                  uri: brandProfileImage,
                }}
              />
              <View style={styles.brandUserTextContainer}>
                <Text style={styles.brandUsername}>{brandUsername}</Text>
                <View style={styles.brandUserFollowerContainer}>
                  <Text style={styles.followerText}>팔로워</Text>
                  <Text style={styles.followerCount}>{userFollowerCount}</Text>
                </View>
              </View>
            </View>
            {isLoginUser === true ? (
              ''
            ) : (
              <View>
                <FollowButton isFollowed={follow} onPress={changeFollowing} />
              </View>
            )}
          </View>
        </View>
      </Pressable>
      <View style={styles.bottomBorderLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  brandUserContainer: {
    backgroundColor: theme.colors.White,
    flex: 1,
    padding: 10,
  },
  brandUserHorizontal: {
    flexDirection: 'row',
    flex: 1,
  },
  searchBrandUserProfileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginVertical: 5,
    marginRight: 5,
  },
  spacebetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 5,
    width: '100%',
  },
  brandUserTextContainer: {
    justifyContent: 'center',
    // alignItems: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    margin: 3,
    paddingLeft: 5,
  },
  brandUserFollowerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
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
  brandUserIntroContainer: {
    paddingVertical: 10,
  },
  bottomBorderLine: {
    width: '100%',
    height: 1,
    backgroundColor: theme.colors.Grey20,
  },
  align: {
    flexDirection: 'row',
  },
});

export default SearchResultBrandUserContainer;
