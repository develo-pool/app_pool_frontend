import React from 'react';
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';
import ProfileImageContainer from './ProfileImageContainer';
import ShareButton from './ShareButton';
import theme from '../../assets/theme';
import {useQuery} from 'react-query';
import {getUser} from '../../api/auth';
import {getBrand} from '../../api/brand';

function ProfileHeader() {
  const {data: userData} = useQuery('getUserResult', () => getUser(), {
    refetchOnMount: 'always',
  });
  const {data: brandData} = useQuery('getBrand', () => getBrand(''), {
    refetchOnMount: 'always',
  });

  return (
    <View style={styles.ProfileSection}>
      {brandData && userData ? (
        <>
          <View style={styles.ProfileLayout}>
            <View style={styles.ProfileContainer}>
              <ProfileImageContainer isEditable={true} />
              <View style={styles.BrandInfo}>
                <Text style={styles.BrandName}>{brandData.brandUsername}</Text>
                <View style={styles.FollowerContainer}>
                  <Text style={styles.Follower}>팔로워</Text>
                  <Text style={styles.FollowerCount}>
                    {userData.userFollowerCount}
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
    height: 180,
    backgroundColor: theme.colors.White,
    paddingHorizontal: 16,
  }, //프로필 영역
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
  },
  IntroText: {
    fontSize: theme.fontSize.P2,
    color: theme.colors.Grey50,
    fontWeight: theme.fontWeight.Light,
    paddingTop: 4,
  },
});

export default ProfileHeader;
