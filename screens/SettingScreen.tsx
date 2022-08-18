import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  Switch,
  ScrollView,
  SafeAreaView,
  Linking,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useQuery} from 'react-query';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../assets/theme';
import {RootStackNavigationProp} from './types';
import JoinBrandContainer from '../components/setting/JoinBrand';
import SetArticle from './../components/setting/SetArticle';
import {PADDING} from '../components/MainContainer';
import AlertBox from '../components/AlertBox';
import Footer from '../components/setting/footer';
import {RootState} from '../slices';
import {logout} from '../slices/auth';
import authStorage from '../storages/authStorage';
import {getUser} from '../api/auth';
import {getBrand} from '../api/brand';

function SettingScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation<RootStackNavigationProp>();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const {data: userData} = useQuery('getUserResult', () => getUser(), {
    refetchOnMount: 'always',
  });
  const id = '';
  const {data: brandData, refetch} = useQuery('getBrand', () => getBrand(id), {
    enabled: false,
  });
  const onLogout = () => {
    authStorage.clear();
    dispatch(logout());
    navigation.reset({routes: [{name: 'Welcome'}]});
  };
  useEffect(() => {
    {
      user?.role === 'BRAND_USER' && refetch();
    }
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <SafeAreaView>
        <View style={styles.padding}>
          <AlertBox />
        </View>
        <ScrollView>
          <View style={styles.UserInfoContainer}>
            <View style={styles.ProfileImgContainer}>
              {user?.role === 'BRAND_USER' ? (
                <Image
                  style={styles.ImgSource}
                  source={{uri: brandData?.brandProfileImage}}
                />
              ) : (
                <Image
                  style={styles.ImgSource}
                  source={require('../assets/PoolLogo.png')}
                />
              )}
              {user?.role === 'BRAND_USER' ? (
                <Icon
                  name="check-circle"
                  size={18}
                  style={styles.BrandChecked}
                />
              ) : null}
            </View>
            <View style={styles.ProfileInfo}>
              {user?.role === 'BRAND_USER' ? (
                <Text style={styles.BrandName}>{brandData?.brandUsername}</Text>
              ) : null}
              <Text style={styles.UserName}>{user?.nickName}</Text>
              <Pressable
                style={styles.FollowingContainer}
                onPress={() => navigation.navigate('FollowingList')}>
                <Text style={styles.Following}>팔로잉</Text>
                <Text style={styles.FollowingCount}>
                  {userData?.userFollowingCount}
                </Text>
              </Pressable>
            </View>
          </View>
          {user?.role === 'BRAND_USER' ? null : (
            <JoinBrandContainer
              onPress={
                user?.role === 'WAITING'
                  ? () => navigation.push('BrandAssignComplete')
                  : () => navigation.push('BrandAssignGuide')
              }
            />
          )}
          <>
            <View style={styles.SeperatedSets}>
              <Text style={styles.NotiText}>알림 수신</Text>
              <Switch
                trackColor={{
                  false: theme.colors.Grey40,
                  true:
                    user?.role === 'BRAND_USER'
                      ? theme.colors.Poolblue
                      : theme.colors.Poolgreen,
                }}
                thumbColor={theme.colors.White}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <SetArticle
              title="회원정보 수정"
              onPress={() => navigation.navigate('EditUser')}
            />
            <SetArticle
              title="이용약관"
              onPress={() =>
                Linking.openURL(
                  'https://pool-.notion.site/46307ef08b8a471a8b5f4f38a6add44b',
                )
              }
            />
            <SetArticle
              title="개인정보처리방침"
              onPress={() =>
                Linking.openURL(
                  'https://pool-.notion.site/50c7bb1b42fe491cbaa8bc694f7c5ca1',
                )
              }
            />
            <SetArticle title="문의하기" />
            <Pressable style={styles.SeperatedSets} onPress={onLogout}>
              <Text style={styles.Logout}>로그아웃</Text>
            </Pressable>
          </>
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  UserInfoContainer: {
    backgroundColor: theme.colors.White,
    height: 120,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ProfileImgContainer: {
    flexDirection: 'row',
  },
  ImgSource: {
    height: 64,
    width: 64,
    borderRadius: 32,
    resizeMode: 'contain',
  },
  BrandChecked: {
    marginLeft: -18,
    marginTop: 44,
    color: theme.colors.Poolblue,
    backgroundColor: theme.colors.White,
    borderRadius: 10,
  },
  ProfileInfo: {
    marginLeft: 16,
  },
  FollowingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BrandName: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: 12,
    fontWeight: '700',
    color: theme.colors.Poolblue,
  },
  UserName: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.Grey80,
    marginBottom: 2,
  },
  Following: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: 12,
    fontWeight: '400',
    color: theme.colors.Grey40,
  },
  FollowingCount: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: 12,
    fontWeight: '700',
    color: theme.colors.Grey80,
    marginLeft: 4,
  },
  SeperatedSets: {
    height: 60,
    marginTop: 8,
    marginBottom: 7,
    paddingLeft: 24,
    paddingRight: 16,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  NotiText: {
    fontFamily: theme.fontFamily.Pretendard,
    color: theme.colors.Grey60,
    fontSize: 14,
    fontWeight: '700',
  },
  Logout: {
    fontFamily: theme.fontFamily.Pretendard,
    color: theme.colors.Grey60,
    fontSize: 14,
    fontWeight: '400',
  },
  padding: {
    paddingHorizontal: PADDING,
  },
});

export default SettingScreen;
