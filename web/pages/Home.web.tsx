import React from 'react';
import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import theme from '../../assets/theme';
import Footer from '../../components/setting/footer';
import Title from '../../components/Title';
import {Link} from 'react-router-dom';
import PoolLogo from '../../assets/logo/Logo.png';
import GooglePlay from '../assets/store/google-play-badge.png';
import AppStore from '../assets/store/app-store-badge.png';

function Home() {
  return (
    <>
      {/* 서비스 소개 링크 */}
      <Link to="/info" style={styles.link}>
        <Text style={styles.info}>서비스 소개</Text>
      </Link>
      {/* 로고 및 슬로건 */}
      <View>
        <Image source={PoolLogo} style={styles.logo} />
        <View>
          <Title title="최애 브랜드의" alignCenter={true} />
          <Title title="POOL에 빠지다" alignCenter={true} />
        </View>
        <Text style={styles.mainText}>
          {'POOL을 통해 사랑하는 브랜드를 팔로우하고\n1:1 소통을 즐겨보세요!'}
        </Text>
      </View>
      {/* 앱 다운로드 링크 */}
      <View style={styles.storeContainer}>
        <Pressable
          onPress={() =>
            Linking.openURL(
              'https://play.google.com/store/apps/details?id=com.app_pool_frontend',
            )
          }>
          <Image source={GooglePlay} style={styles.store} />
        </Pressable>
        <Pressable
          onPress={() =>
            Linking.openURL('https://apps.apple.com/kr/app/pool/id1640180474')
          }>
          <Image source={AppStore} style={styles.store} />
        </Pressable>
      </View>
      <View>
        <Text style={styles.subtitle}>추천브랜드</Text>
        <Link to="/search" style={styles.search}>
          웹에서 브랜드를 검색해 보세요.
        </Link>
      </View>
      <View>
        <Text style={styles.subtitle}>최근메시지</Text>
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'none',
    textDecorationStyle: undefined,
    padding: 10,
    textAlign: 'right',
  },
  info: {
    color: theme.colors.Grey50,
    fontSize: theme.fontSize.P2,
  },
  logo: {
    alignSelf: 'center',
    width: 100,
    height: 70,
    marginTop: 50,
    marginBottom: 30,
  },
  mainText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
    color: theme.colors.Grey50,
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 16,
    marginBottom: 34,
  },
  storeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 70,
  },
  store: {
    width: 95,
    height: 30,
  },
  subtitle: {
    fontSize: theme.fontSize.H3,
    fontWeight: theme.fontWeight.Bold,
    textAlign: 'center',
    margin: 20,
  },
  search: {
    fontSize: theme.fontSize.P1,
    color: theme.colors.Grey50,
    textAlign: 'center',
  },
});

export default Home;
