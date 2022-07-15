import React from 'react';
import {Text, View, StyleSheet, Pressable, Image} from 'react-native';
import Title from '../components/Title';
import MainContainer from '../components/MainContainer';

function SettingStack() {
  return (
    <MainContainer>
      <Title title="설정" alignCenter={false} />
      <View style={styles.UserInfo}>
        <View style={styles.ProfileImgContainer}>
          <View>
            <Image //Image로 바꿔줘야함!!
              style={styles.ImgSource}
              source={require('../assets/Pool.png')}
            />
          </View>
          <View>
            <Pressable>
              <Image
                style={styles.EditProfile}
                source={require('../assets/Edit.png')}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.UserNameContainer}>
          <Text style={styles.UserName}>호빵맨</Text>
        </View>
        <View style={styles.FollowingContainer}>
          <View>
            <Text style={styles.FollowingCount}>1</Text>
          </View>
          <View>
            <Text style={styles.Following}>팔로잉</Text>
          </View>
        </View>
      </View>
      <View style={styles.JoinBrandContainer}>
        <View style={styles.JoinImgContainer}>
          <View //Image로 바꿔줘야함!!
            style={styles.JoinBrandImg}
            // source={require('../assets/Pool.png')}
          />
        </View>
        <View style={styles.JoinInfoContainer}>
          <View style={styles.JoinTitleContainer}>
            <Text style={styles.JoinBrandTitle}>브랜드 등록 신청하기</Text>
          </View>
          <View style={styles.JoinIntroContainer}>
            <Text style={styles.JoinBrandIntro}>
              누구나 브랜드로 등록하면 메시지를 보낼 수 있어요!
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.Settings}></View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  UserInfo: {
    flexDirection: 'row',
    marginTop: 24,
  },
  ProfileImgContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  UserNameContainer: {
    flex: 2,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  FollowingContainer: {
    flex: 1,
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
  JoinBrandContainer: {
    flexDirection: 'row',
    marginTop: 44,
  },
  JoinImgContainer: {
    flex: 1,
  },
  JoinInfoContainer: {
    flex: 4,
    justifyContent: 'center',
  },
  JoinBrandImg: {
    height: 52,
    width: 52,
    borderRadius: 26,
    resizeMode: 'contain',
    backgroundColor: '#C7C7C7',
  },
  JoinTitleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  JoinIntroContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  JoinBrandTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  JoinBrandIntro: {
    fontSize: 12,
    fontWeight: '400',
  },
  Settings: {},
});

export default SettingStack;
