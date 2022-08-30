import React from 'react';
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';
import ProfileImageContainer from './ProfileImageContainer';
import ShareButton from './ShareButton';
import theme from '../../assets/theme';
import {useQuery} from 'react-query';
import {getMyBrandProfile} from '../../api/brand';
import SetWelcomeMsg from './SetWelcomeMessage';

function ProfileHeader() {
  const {data: brandData} = useQuery('getBrand', () => getMyBrandProfile(''), {
    refetchOnMount: 'always',
  });

  return (
    <View style={styles.ProfileSection}>
      {brandData ? (
        <>
          <View style={styles.ProfileLayout}>
            <View style={styles.ProfileContainer}>
              <ProfileImageContainer isEditable={true} />
              <View style={styles.BrandInfo}>
                <Text style={styles.BrandName}>{brandData.brandUsername}</Text>
                <View style={styles.FollowerContainer}>
                  <Text style={styles.Follower}>팔로워</Text>
                  <Text style={styles.FollowerCount}>
                    {brandData.userInfoDto.userFollowerCount}
                  </Text>
                </View>
              </View>
            </View>
            <ShareButton
              brandUserName={brandData.brandUsername}
              brandId={brandData.brandUserId}
            />
          </View>
          <View style={styles.IntroContainer}>
            <Text style={styles.IntroText}>{brandData.brandInfo}</Text>
          </View>
          <SetWelcomeMsg />
        </>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  ProfileSection: {
    paddingTop: 24,
    height: 220,
    backgroundColor: theme.colors.White,
    paddingHorizontal: 16,
  },
  ProfileLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ProfileContainer: {
    height: 120,
    flexDirection: 'row',
  },
  BrandInfo: {
    justifyContent: 'center',
    marginLeft: 16,
  },
  BrandName: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey80,
    marginBottom: 2,
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
  FollowerCount: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey80,
    marginLeft: 4,
  },
  IntroContainer: {
    justifyContent: 'center',
    height: 24,
  },
  IntroText: {
    fontSize: theme.fontSize.P2,
    color: theme.colors.Grey50,
    fontWeight: theme.fontWeight.Light,
  },
});

export default ProfileHeader;
