import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable, Image, Switch} from 'react-native';
import Title from '../components/Title';
import JoinBrandContainer from '../components/setting/JoinBrand';
import SetArticle from './../components/setting/SetArticle';

function SettingStack() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={{flex: 1}}>
      <View style={styles.UpperContainer}>
        <Title title="설정" />
        <View style={styles.UserInfoContainer}>
          <View style={styles.ProfileImgContainer}>
            <Image //Image로 바꿔줘야함!!
              style={styles.ImgSource}
              source={require('../assets/Pool.png')}
            />
            <Pressable>
              <Image
                style={styles.EditProfile}
                source={require('../assets/Edit.png')}
              />
            </Pressable>
          </View>
          <View style={styles.UserNameContainer}>
            <Text style={styles.UserName}>호빵맨</Text>
          </View>
          <View style={styles.FollowingContainer}>
            <Text style={styles.FollowingCount}>1</Text>
            <Text style={styles.Following}>팔로잉</Text>
          </View>
        </View>
        <JoinBrandContainer />
      </View>
      <View style={styles.SettingsContainer}>
        <View style={styles.SetNotification}>
          <Text style={styles.NotiText}>알림 수신</Text>
          <View style={styles.NotiSwitch}>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <SetArticle title="이용약관" />
        <SetArticle title="개인정보처리방침" />
        <SetArticle title="문의하기" />
        <SetArticle title="로그아웃" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  UpperContainer: {
    flex: 3,
    marginHorizontal: 24,
  },
  SettingsContainer: {
    flex: 5,
  },
  UserInfoContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  ProfileImgContainer: {
    flex: 1.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  UserNameContainer: {
    flex: 2.2,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  FollowingContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImgSource: {
    height: 74,
    width: 74,
    borderRadius: 37,
    resizeMode: 'contain',
    backgroundColor: '#C7C7C7',
  },
  EditProfile: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginLeft: -25,
    marginTop: 45,
  },
  UserName: {
    fontSize: 19,
    fontWeight: '700',
  },
  FollowingCount: {
    fontSize: 24,
    fontWeight: '700',
  },
  Following: {
    fontSize: 12,
    fontWeight: '700',
  },
  SetNotification: {
    height: 60,
    marginTop: 8,
    paddingHorizontal: 24,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  NotiText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
  },
  NotiSwitch: {
    marginLeft: 240,
  },
});

export default SettingStack;
