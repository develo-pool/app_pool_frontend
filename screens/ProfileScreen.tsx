import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useQuery} from 'react-query';
import {RootStackNavigationProp} from './types';
import theme from '../assets/theme';
import SetWelcomeMsg from '../components/profile/SetWelcomeMessage';
import ProfileImageContainer from '../components/profile/ProfileImageContainer';
import {getUser} from '../api/auth';
import {getBrand} from '../api/brand';
import {SafeAreaView} from 'react-native-safe-area-context';
import MessageContainer from '../components/profile/MessageContainer';
import {getAllMessage} from '../api/message';
import ShareButton from '../components/profile/ShareButton';

function ProfileScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const {data: userData} = useQuery('getUserResult', () => getUser(), {
    refetchOnMount: 'always',
  });
  const {data: brandData} = useQuery('getBrand', () => getBrand(''), {
    refetchOnMount: 'always',
  });
  const {data: brandMessages} = useQuery(
    'getAllMessage',
    () => getAllMessage(),
    {enabled: false},
  );
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.ProfileSection}>
            {brandData && userData ? (
              <>
                <View style={styles.ProfileLayout}>
                  <View style={styles.ProfileContainer}>
                    <ProfileImageContainer isEditable={true} />
                    <View style={styles.BrandInfo}>
                      <Text style={styles.BrandName}>
                        {brandData.brandUsername}
                      </Text>
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
          <SetWelcomeMsg />
          <View style={styles.Message}>
            {brandMessages?.length === 0 ? (
              <Text style={styles.MessageNull}>등록된 메시지가 없습니다.</Text>
            ) : (
              <MessageContainer
                brandProfileImage={brandData?.brandProfileImage}
                brandUserName={brandData?.brandUsername as string}
              />
            )}
            <MessageContainer
              brandProfileImage={brandData?.brandProfileImage}
              brandUserName={brandData?.brandUsername as string}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.createButtonLayout}>
        <TouchableOpacity
          style={styles.CreateMessageButton}
          onPress={() => navigation.navigate('CreateMessage')}>
          <Icon name="border-color" size={24} style={styles.CreateMessage} />
        </TouchableOpacity>
      </View>
    </>
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
  }, // 프로필 내 브랜드 정보가 담긴 영역
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
  },
  IntroText: {
    fontSize: theme.fontSize.P2,
    color: theme.colors.Grey50,
    fontWeight: theme.fontWeight.Light,
    paddingTop: 4,
  },
  Message: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  MessageNull: {
    marginTop: 32,
    fontSize: theme.fontSize.P1,
    fontWeight: theme.fontWeight.Light,
  }, //동록한 메시지가 없습니다.
  createButtonLayout: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
  CreateMessageButton: {
    height: 68,
    width: 68,
    borderRadius: 34,
    backgroundColor: theme.colors.Black,
    justifyContent: 'center',
    alignItems: 'center',
  }, //새 메시지 작성 버튼
  CreateMessage: {
    color: theme.colors.White,
  },
});

export default ProfileScreen;
