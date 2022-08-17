import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import theme from './assets/theme';
import store from './slices';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <View style={styles.ProfileSection}>
          <View style={styles.ProfileLayout}>
            <View style={styles.ProfileContainer}>
              <View style={styles.ProfileImgContainer}>
                <Image
                  style={styles.ImgSource}
                  source={require('./assets/PoolLogo.png')}
                />
              </View>
              <View style={styles.BrandInfo}>
                <Text style={styles.BrandName}>김자네</Text>
                <View style={styles.FollowerContainer}>
                  <Text style={styles.Follower}>팔로워</Text>
                  <Text style={styles.FollowerCount}>1.8k</Text>
                </View>
              </View>
            </View>
            <View style={styles.FollowButton}>
              <TouchableOpacity style={[styles.ButtonFrame]} onPress={() => {}}>
                <Text style={styles.FollowText}>팔로우</Text>
              </TouchableOpacity>
            </View>
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
      </Provider>
    </QueryClientProvider>
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
  BrandInfo: {
    justifyContent: 'center',
    marginLeft: 16,
  },
  BrandName: {
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
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey40,
  },
  FollowerCount: {
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
    height: 460,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.Ivory,
  }, //프로필 아래 메시지가 쌓이는 메시지 영역
  MessageNull: {
    marginTop: 32,
    fontSize: theme.fontSize.P1,
    fontWeight: theme.fontWeight.Light,
  }, //동록한 메시지가 없습니다.

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

  FollowButton: {
    justifyContent: 'center',
  },
  ButtonFrame: {
    backgroundColor: theme.colors.Poolgreen,
    width: 64,
    height: 32,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  FollowText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.White,
  },
});

export default App;
