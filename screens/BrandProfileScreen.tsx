import React, {useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import theme from '../assets/theme';
import FollowButton from '../components/profile/FollowButton';
import BrandProfileImageContainer from '../components/profile/BrandProfileImageContainer';
import {RootStackNavigationProp, RootStackParamList} from './types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getBrandProfile} from '../api/brand';
import {useQuery} from 'react-query';
import ShareButton from '../components/profile/ShareButton';

type BrandProfileScreenRouteProp = RouteProp<
  RootStackParamList,
  'BrandProfile'
>;

function BrandProfileScreen() {
  const route = useRoute<BrandProfileScreenRouteProp>();
  const brandUserId = route.params.brandUserId;
  const poolUserId = route.params.poolUserId;
  const navigation = useNavigation<RootStackNavigationProp>();

  const {data: brandData, refetch} = useQuery(
    'getBrandProfile',
    () => getBrandProfile(brandUserId),
    {
      refetchOnMount: 'always',
    },
  );

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

      headerRight: () =>
        brandData && (
          <ShareButton
            brandUserName={brandData?.brandUsername}
            brandId={brandUserId}
          />
        ),
    });
  }, [navigation, brandUserId, brandData]);

  return (
    <SafeAreaView>
      <View style={styles.ProfileSection}>
        <View style={styles.ProfileLayout}>
          <View style={styles.ProfileContainer}>
            <BrandProfileImageContainer
              isEditable={false}
              imgSource={{uri: brandData?.brandProfileImage}}
            />
            <View style={styles.BrandInfo}>
              <Text style={styles.BrandName}>{brandData?.brandUsername}</Text>
              <View style={styles.FollowerContainer}>
                <Text style={styles.Follower}>팔로워</Text>
                <Text style={styles.FollowerCount}>
                  {brandData?.userInfoDto.userFollowerCount}
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
          <Text style={styles.IntroText}>{brandData?.brandInfo}</Text>
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
