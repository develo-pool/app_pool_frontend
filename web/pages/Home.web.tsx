import React from 'react';
import {Image, Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import theme from '../../assets/theme';
import Footer from '../../components/setting/footer';
import Title from '../../components/Title';
import {Link} from 'react-router-dom';
import PoolLogo from '../../assets/logo/Logo.png';
import GooglePlay from '../assets/home/google-play-badge.png';
import AppStore from '../assets/home/app-store-badge.png';
import {useQuery} from 'react-query';
import {getRecentBrand, getRecentMessage} from '../../api/web';
import {brand} from '../../api/web/types';
import BrandUserContainer from '../components/BrandUserContainer.web';
import MessageBlock from '../components/MessageBlock.web';
import {Message} from '../../api/message/types';

function Home() {
  const {data: brandData} = useQuery(
    'getRecentBrandData',
    () => getRecentBrand(),
    {
      refetchOnMount: true,
    },
  );
  const {data: messageData} = useQuery(
    'getRecentMessageData',
    () => getRecentMessage(),
    {
      refetchOnMount: true,
    },
  );

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
          <Image
            source={GooglePlay}
            style={styles.store}
            resizeMode="stretch"
          />
        </Pressable>
        <Pressable
          onPress={() =>
            Linking.openURL('https://apps.apple.com/kr/app/pool/id1640180474')
          }>
          <Image source={AppStore} style={styles.store} resizeMode="stretch" />
        </Pressable>
      </View>
      {/* 최신 브랜드 3개 */}
      <View style={styles.block}>
        <Text style={styles.subtitle}>추천 브랜드</Text>
        {brandData?.map((item: brand) => (
          <BrandUserContainer item={item} isHome={true} key={item.brandInfo} />
        ))}
        <Link to="/search" style={styles.search}>
          웹에서 브랜드를 검색해 보세요.
        </Link>
      </View>
      {/* 최근 메세지 3개 */}
      <View style={styles.block}>
        <Text style={styles.subtitle}>최근 메시지</Text>
        {messageData?.map((item: Message) => (
          <MessageBlock
            key={item.postId}
            postId={item.postId}
            body={item.body}
            messageLink={item.messageLink}
            filePath={item.filePath}
            writerDto={item.writerDto}
            commentAble={item.commentAble}
            isWriter={item.isWriter}
            create_date={item.create_date}
            commentCount={item.commentCount}
            isHome={true}
          />
        ))}
      </View>
      <View>
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    paddingBottom: 55,
  },
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
    height: 73,
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
