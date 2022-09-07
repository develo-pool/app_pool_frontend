import React, {useCallback, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  // Switch,
  ScrollView,
  SafeAreaView,
  Linking,
  ActivityIndicator,
} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
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
// import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {sendFCMToken} from '../api/fcm';
import {useMutation} from 'react-query';
import messaging from '@react-native-firebase/messaging';
// import {checkNotifications} from 'react-native-permissions';

function SettingScreen() {
  // const notificationStatus = checkNotifications();

  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => {
  //   setIsEnabled(previousState => !previousState);
  //   Linking.openSettings();
  // };
  const navigation = useNavigation<RootStackNavigationProp>();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const {data: userData, refetch: userRefetch} = useQuery(
    'getUserResult',
    () => getUser(),
    {
      refetchOnMount: true,
    },
  );
  const id = '';
  const {data: brandData, refetch: brandRefetch} = useQuery(
    'getBrand',
    () => getBrand(id),
    {
      enabled: false,
    },
  );

  const {mutate: sendToken} = useMutation(sendFCMToken);
  // const logoutToken = '';
  const onLogout = () => {
    authStorage.clear();
    dispatch(logout());
    navigation.reset({routes: [{name: 'Welcome'}]});
  };
  // const {getItem: getFcmItem, setItem: setFcmItem} = useAsyncStorage('fcmToken');
  const getFcmToken = useCallback(async () => {
    const fcmToken = await messaging().getToken();
    // const fcmFS = await getFcmItem();
    // if (fcmFS !== fcmToken) {
    //   setFcmItem(fcmToken); // 회원가입, 로그인할 때 활용
    // }
    console.log('Fcm Token :', fcmToken);
    sendToken({fcmToken});
  }, [sendToken]);
  //getFcmItem, setFcmItem

  useEffect(() => {
    user?.role === 'BRAND_USER' && brandRefetch();
    userRefetch();

    messaging().requestPermission();
    messaging().registerDeviceForRemoteMessages();
    getFcmToken();
  }, [getFcmToken, isFocused]); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.backGroundGray}>
        <View style={styles.padding}>
          <AlertBox />
        </View>
        <View>
          <View style={styles.userInfoContainer}>
            <View style={styles.profileImgContainer}>
              {user?.role === 'BRAND_USER' ? (
                <Image
                  style={styles.imgSource}
                  source={{uri: brandData?.brandProfileImage}}
                />
              ) : (
                <Image
                  style={styles.imgSource}
                  source={require('../assets/PoolLogo.png')}
                />
              )}
              {user?.role === 'BRAND_USER' ? (
                <View style={styles.iconContainer}>
                  <Icon
                    name="check-circle"
                    size={18}
                    style={styles.brandChecked}
                  />
                </View>
              ) : null}
            </View>
            <View style={styles.profileInfo}>
              {userData ? (
                <>
                  {user?.role === 'BRAND_USER' ? (
                    <Text style={styles.brandName}>
                      {brandData?.brandUsername}
                    </Text>
                  ) : null}
                  <Text style={styles.userName}>{userData.nickName}</Text>
                  <Pressable
                    style={styles.followingContainer}
                    onPress={() =>
                      navigation.navigate('FollowingList', {
                        followingCount: userData.userFollowingCount,
                      })
                    }>
                    <Text style={styles.following}>팔로잉</Text>
                    <Text style={styles.followingCount}>
                      {userData?.userFollowingCount}
                    </Text>
                  </Pressable>
                </>
              ) : (
                <ActivityIndicator />
              )}
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
            <Pressable
              style={styles.seperatedSets}
              onPress={() => Linking.openSettings()}>
              <Text style={styles.notiText}>알림 설정</Text>
              {/* <Switch
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
              /> */}
              <Icon
                name="arrow-forward-ios"
                size={14}
                style={styles.rightArrow}
              />
            </Pressable>
            <SetArticle
              title="회원정보 수정"
              onPress={() => navigation.navigate('EditUser')}
            />
            <SetArticle
              title="이용약관"
              onPress={() =>
                Linking.openURL(
                  'https://bypool.notion.site/46307ef08b8a471a8b5f4f38a6add44b',
                )
              }
            />
            <SetArticle
              title="개인정보처리방침"
              onPress={() =>
                Linking.openURL(
                  'https://bypool.notion.site/50c7bb1b42fe491cbaa8bc694f7c5ca1',
                )
              }
            />
            <SetArticle
              title="문의하기"
              onPress={() => Linking.openURL('http://pf.kakao.com/_ebksb')}
            />
            <Pressable style={styles.seperatedSets} onPress={onLogout}>
              <Text style={styles.logout}>로그아웃</Text>
            </Pressable>
          </>
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.colors.White,
  },
  backGroundGray: {
    backgroundColor: theme.colors.Grey10,
  },
  userInfoContainer: {
    backgroundColor: theme.colors.White,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  profileImgContainer: {
    flexDirection: 'row',
  },
  imgSource: {
    height: 64,
    width: 64,
    borderRadius: 32,
    resizeMode: 'cover',
  },
  iconContainer: {
    backgroundColor: theme.colors.White,
    borderRadius: 20,
    marginLeft: -18,
    marginTop: 44,
  },
  brandChecked: {
    color: theme.colors.Poolblue,
  },
  profileInfo: {
    marginLeft: 16,
  },
  followingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandName: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Poolblue,
  },
  userName: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.H5,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey80,
    marginBottom: 2,
  },
  following: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey40,
  },
  followingCount: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey80,
    marginLeft: 4,
  },
  seperatedSets: {
    backgroundColor: theme.colors.White,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    marginTop: 8,
    marginBottom: 6,
    paddingLeft: 24,
    paddingRight: 24,
    // paddingRight: 16,
  },
  notiText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P2,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey60,
  },
  rightArrow: {
    color: theme.colors.Black,
  },
  logout: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P2,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey60,
  },
  padding: {
    paddingHorizontal: PADDING,
    zIndex: 10,
  },
});

export default SettingScreen;
