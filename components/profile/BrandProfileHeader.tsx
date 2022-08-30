import React from 'react';
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';
import theme from '../../assets/theme';
import BrandProfileImageContainer from './BrandProfileImageContainer';
import FollowButton from './FollowButton';
import {useQuery} from 'react-query';
import {getBrandProfile} from '../../api/brand';

interface Props {
  brandUserId: number;
  poolUserId: number;
}

function BrandProfileHeader({brandUserId, poolUserId}: Props) {
  const {data: brandData, refetch} = useQuery(
    'getBrand',
    () => getBrandProfile(brandUserId),
    {
      refetchOnMount: 'always',
    },
  );

  return (
    <View style={styles.ProfileSection}>
      {brandData ? (
        <>
          <View style={styles.ProfileLayout}>
            <View style={styles.ProfileContainer}>
              <BrandProfileImageContainer
                imgSource={{uri: brandData.brandProfileImage}}
              />
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
            <FollowButton
              isFollowed={brandData?.userInfoDto.follow as boolean}
              poolUserId={poolUserId}
              refetch={refetch}
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
    height: 164,
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
  }, // 프로필 내 브랜드 정보가 담긴 영역
  ProfileImgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }, //프로필 사진 영역
  ImgSource: {
    height: 90,
    width: 90,
    borderRadius: 45,
    resizeMode: 'contain',
  }, //프로필 사진
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
    // alignItems: 'center',
    justifyContent: 'center',
  }, //프로필 내 소개글이 담긴 영역
  IntroText: {
    fontSize: theme.fontSize.P2,
    color: theme.colors.Grey50,
    fontWeight: theme.fontWeight.Light,
    paddingTop: 4,
  }, //소개글 텍스트
});

export default BrandProfileHeader;
