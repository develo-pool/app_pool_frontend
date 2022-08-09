import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  Switch,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../assets/theme';
import JoinBrandContainer from '../components/setting/JoinBrand';
import SetArticle from './../components/setting/SetArticle';
import {SettingStackNavigationProp} from './types';
import authStorage from '../storages/authStorage';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../slices/auth';
import TermsModal from '../components/auth/TermsModal';
import {RootState} from '../slices';

const isBrandUser = false;
//TODO Delete isBrandUser

function SettingScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const navigation = useNavigation<SettingStackNavigationProp>();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const [termModalVisible, setTermModalVisible] = useState<boolean>(false);
  const onLogout = () => {
    authStorage.clear();
    dispatch(logout());
    navigation.push('Welcome');
  };

  return (
    <ScrollView style={styles.block}>
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
          <Pressable
            style={styles.FollowingContainer}
            onPress={() => navigation.navigate('FollowingList')}>
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
        <SetArticle
          title="이용약관"
          onPress={() => setTermModalVisible(true)}
        />
        <TermsModal
          type="term"
          setModalVisible={setTermModalVisible}
          onPress={() => setTermModalVisible(true)}
          visible={termModalVisible}
          buttonEnabled={false}
        />
        <SetArticle title="개인정보처리방침" />
        <SetArticle title="문의하기" />
        <Pressable style={styles.SeperatedSets} onPress={onLogout}>
          <Text style={styles.Logout}>로그아웃</Text>
        </Pressable>
      </>
      <View style={styles.Footer}>
        <Text style={styles.FooterText}>주식회사 더풀네트워크</Text>
        <Text style={styles.FooterText}>대표자 송진태</Text>
        <Text style={styles.FooterText}>
          서울 종로구 종로 6 광화문 우체국 5층 스타트업빌리지
        </Text>
        <Text style={styles.FooterText}>사업자등록번호 701-86-02478</Text>
        <Text style={styles.FooterText}>대표 이메일 info@thepool.network</Text>
        <Text style={styles.FooterText}>
          개인정보관리책임자 송진태 ttao@thepool.network
        </Text>
      </View>
    </ScrollView>
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
  Footer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'center',
  },
  FooterText: {
    fontFamily: theme.fontFamily.Pretendard,
    color: theme.colors.Grey40,
    fontSize: theme.fontSize.P3,
    fontWeight: '400',
  },
});

export default SettingScreen;
