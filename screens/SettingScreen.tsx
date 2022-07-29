import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable, Image, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../assets/theme';
import JoinBrandContainer from '../components/setting/JoinBrand';
import SetArticle from './../components/setting/SetArticle';
import {SettingStackNavigationProp} from './types';
import {clearToken} from '../api/client';
import authStorage from '../storages/authStorage';
import {useDispatch} from 'react-redux';
import {logout} from '../slices/auth';

const isBrandUser = false;

function SettingScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation<SettingStackNavigationProp>();
  const dispatch = useDispatch();

  const onLogout = () => {
    authStorage.clear();
    clearToken();
    dispatch(logout());
    navigation.push('Welcome');
  };

  return (
    <View style={styles.block}>
      <View style={styles.UserInfoContainer}>
        <View style={styles.ProfileImgContainer}>
          <Image
            style={styles.ImgSource}
            source={require('../assets/ProfileImage.png')}
          />
          {isBrandUser && (
            <Icon name="check-circle" size={18} style={styles.BrandChecked} />
          )}
        </View>
        <View style={styles.ProfileInfo}>
          {isBrandUser && <Text style={styles.BrandName}>더푸르</Text>}
          <Text style={styles.UserName}>김자네</Text>
          <Pressable style={styles.FollowingContainer}>
            <Text style={styles.Following}>팔로잉</Text>
            <Text style={styles.FollowingCount}>489</Text>
            <Icon
              name="arrow-forward-ios"
              size={12}
              style={styles.RightArrow}
            />
          </Pressable>
        </View>
      </View>
      {isBrandUser ? null : (
        <JoinBrandContainer
          onPress={() => navigation.push('BrandAssignGuide')}
        />
      )}

      <>
        <View style={styles.SeperatedSets}>
          <Text style={styles.NotiText}>알림 수신</Text>
          <View style={styles.NotiSwitch}>
            <Switch
              trackColor={{
                false: theme.colors.Grey40,
                true: isBrandUser
                  ? theme.colors.Poolblue
                  : theme.colors.Poolgreen,
              }}
              thumbColor={theme.colors.White}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <SetArticle title="회원정보 수정" />
        <SetArticle title="이용약관" />
        <SetArticle title="개인정보처리방침" />
        <SetArticle title="문의하기" />
        <Pressable style={styles.SeperatedSets} onPress={onLogout}>
          <Text style={styles.Logout}>로그아웃</Text>
        </Pressable>
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
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
  },
  ProfileInfo: {
    marginLeft: 16,
  },
  FollowingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  RightArrow: {
    marginLeft: 6,
    color: theme.colors.Grey80,
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
    paddingHorizontal: 24,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  NotiText: {
    fontFamily: theme.fontFamily.Pretendard,
    color: theme.colors.Grey60,
    fontSize: 14,
    fontWeight: '700',
  },
  NotiSwitch: {
    marginLeft: 240,
  },

  Logout: {
    fontFamily: theme.fontFamily.Pretendard,
    color: theme.colors.Grey60,
    fontSize: 14,
    fontWeight: '400',
  },
});

export default SettingScreen;
