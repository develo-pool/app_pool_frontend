import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../assets/theme';
import PoolLogo from '../assets/PoolLogo.png';
import {useQuery} from 'react-query';
import {getBrandWebProfile} from '../api/web';
import {useNavigate} from 'react-router-dom';

function Profile({id}: {id: number}) {
  const navigation = useNavigate();

  const {data, isLoading} = useQuery(
    'getBrandWebProfile',
    () => getBrandWebProfile(id),
    {
      onError: () => {
        navigation('/none');
      },
      refetchOnMount: true,
    },
  );
  return (
    <View style={styles.ProfileSection}>
      {!isLoading && data ? (
        <>
          <View style={styles.ProfileLayout}>
            <View style={styles.ProfileContainer}>
              <View style={styles.ProfileImgContainer}>
                <Image
                  style={styles.ImgSource}
                  source={
                    data.brandProfileImage
                      ? {uri: data.brandProfileImage}
                      : PoolLogo
                  }
                />
              </View>
              <View style={styles.BrandInfo}>
                <Text style={styles.BrandName}>{data.brandUsername}</Text>
                <View style={styles.FollowerContainer}>
                  <Text style={styles.Follower}>팔로워</Text>
                  <Text style={styles.FollowerCount}>
                    {data.userInfoDto.userFollowerCount}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.FollowButton}>
              <TouchableOpacity style={[styles.ButtonFrame]} onPress={() => {}}>
                <Text style={styles.FollowText}>팔로우</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.IntroContainer}>
            <Text style={styles.IntroText}>{data.brandInfo}</Text>
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
  }, // 프로필 내 브랜드 정보가 담긴 영역
  BrandInfo: {
    justifyContent: 'center',
    marginLeft: 16,
  },
  BrandName: {
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
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey40,
  },
  FollowerCount: {
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey80,
    marginLeft: 4,
  },
  IntroContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  }, //프로필 내 소개글이 담긴 영역
  IntroText: {
    fontSize: theme.fontSize.P2,
    color: theme.colors.Grey50,
    fontWeight: theme.fontWeight.Light,
    paddingHorizontal: 4,
  }, //소개글 텍스트
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
  FollowText: {
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.White,
  },
});

export default Profile;
