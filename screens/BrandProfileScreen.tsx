import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import theme from '../assets/theme';
import FollowButton from '../components/profile/FollowButton';
import BrandProfileImageContainer from '../components/profile/BrandProfileImageContainer';
import {RootStackNavigationProp} from './types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getBrandProfile} from '../api/profile';
import {useQuery} from 'react-query';

function BrandProfileScreen(poolUserId: string) {
  const navigation = useNavigation<RootStackNavigationProp>();
  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      headerShadowVisible: false,
      headerTitle: '',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity>
          {/* 외부 연결되는 링크 복사해주는 모달띄우기 */}
          <Icon name="logout" size={24} color="black" style={styles.rotate} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const {data} = useQuery(
    'getBrandProfile',
    () => getBrandProfile(poolUserId),
    {
      refetchOnMount: true,
    },
  );
  console.log(poolUserId);
  return (
    <SafeAreaView>
      <View style={styles.ProfileSection}>
        <View style={styles.ProfileLayout}>
          <View style={styles.ProfileContainer}>
            <BrandProfileImageContainer
              isEditable={false}
              poolUserId={poolUserId}
            />
            <View style={styles.BrandInfo}>
              <Text style={styles.BrandName}>
                {data?.writerDto.brandUserInfoDto.brandUsername}
              </Text>
              <View style={styles.FollowerContainer}>
                <Text style={styles.Follower}>팔로워</Text>
                <Text style={styles.FollowerCount}>
                  {data?.writerDto.userFolloerCount}
                </Text>
              </View>
            </View>
          </View>
          <FollowButton isFollowed={false} />
        </View>
        <View style={styles.IntroContainer}>
          <Text style={styles.IntroText}>
            {data?.writerDto.brandUserInfoDto.brandInfo}
          </Text>
        </View>
      </View>
      <View style={styles.Message}>
        <Text style={styles.MessageNull}>등록된 메시지가 없습니다.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rotate: {
    transform: [{rotate: '270deg'}],
  },
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
    // alignItems: 'center',
    justifyContent: 'center',
  }, //프로필 내 소개글이 담긴 영역
  IntroText: {
    fontSize: theme.fontSize.P2,
    color: theme.colors.Grey50,
    fontWeight: theme.fontWeight.Light,
    paddingTop: 4,
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
