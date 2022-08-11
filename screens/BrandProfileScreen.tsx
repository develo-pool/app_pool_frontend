import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {RootStackNavigationProp} from './types';
import theme from '../assets/theme';
import FollowButton from './../components/profile/FollowButton';
import ProfileImageContainer from '../components/profile/ProfileImageContainer';

function BrandProfileScreen() {
  // const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <>
      <View style={styles.ProfileSection}>
        <View style={styles.ProfileLayout}>
          <View style={styles.ProfileContainer}>
            <ProfileImageContainer isEditable={false} />
            <View style={styles.BrandInfo}>
              <Text style={styles.BrandName}>김자네</Text>
              <View style={styles.FollowerContainer}>
                <Text style={styles.Follower}>팔로워</Text>
                <Text style={styles.FollowerCount}>1.8k</Text>
              </View>
            </View>
          </View>
          <FollowButton isFollowed={false} />
        </View>
        <View style={styles.IntroContainer}>
          <Text style={styles.IntroText}>
            더푸르입니다. 소개글이 들어갑니다. 소개글이 들어갑니다. 소개글이
            들어갑니다. 소개글이 들어갑니다.
          </Text>
        </View>
      </View>
      <View style={styles.Message}>
        <Text style={styles.MessageNull}>등록된 메시지가 없습니다.</Text>
      </View>
    </>
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
    alignItems: 'center',
    justifyContent: 'center',
  }, //프로필 내 소개글이 담긴 영역
  IntroText: {
    fontSize: theme.fontSize.P2,
    color: theme.colors.Grey50,
    fontWeight: theme.fontWeight.Light,
    paddingHorizontal: 4,
  }, //소개글 텍스트
  Message: {
    alignItems: 'center',
    paddingHorizontal: 16,
  }, //프로필 아래 메시지가 쌓이는 메시지 영역
  MessageNull: {
    marginTop: 32,
    fontSize: theme.fontSize.P1,
    fontWeight: theme.fontWeight.Light,
  }, //동록한 메시지가 없습니다.
});

export default BrandProfileScreen;
