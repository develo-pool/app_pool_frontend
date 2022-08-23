import React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useQuery} from 'react-query';
import {useNavigate, useParams} from 'react-router-dom';
import {Message} from '../api/message/types';
import {getBrandWebMessage, getBrandWebProfile} from '../api/web';
import PoolLogo from '../assets/PoolLogo.png';
import theme from '../assets/theme';
import Footer from '../components/setting/footer';
import MessageBlock from './MessageBlock.web';

function ProfileScreen() {
  const navigation = useNavigate();
  const {brandId = '0'} = useParams();
  const id = parseInt(brandId, 10);
  const {data: profileData, isLoading: isProfileLoading} = useQuery(
    'getBrandWebProfile',
    () => getBrandWebProfile(id),
    {
      onError: () => {
        navigation('/404');
      },
      refetchOnMount: true,
    },
  );
  const {data: messageData, isLoading: isMessageLoading} = useQuery(
    'getBrandWebMessage',
    () => getBrandWebMessage({brandId: id, cursor: 0}),
    {
      refetchOnMount: true,
    },
  );
  return (
    <View style={styles.block}>
      <View style={styles.ProfileSection}>
        {!isProfileLoading && profileData ? (
          <>
            <View style={styles.ProfileLayout}>
              <View style={styles.ProfileContainer}>
                <View style={styles.ProfileImgContainer}>
                  <Image
                    style={styles.ImgSource}
                    source={
                      profileData.brandProfileImage
                        ? {uri: profileData.brandProfileImage}
                        : PoolLogo
                    }
                  />
                </View>
                <View style={styles.BrandInfo}>
                  <Text style={styles.BrandName}>
                    {profileData.brandUsername}
                  </Text>
                  <View style={styles.FollowerContainer}>
                    <Text style={styles.Follower}>팔로워</Text>
                    <Text style={styles.FollowerCount}>
                      {profileData.userInfoDto.userFollowerCount}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.FollowButton}>
                <TouchableOpacity
                  style={[styles.ButtonFrame]}
                  onPress={() => {}}>
                  <Text style={styles.FollowText}>팔로우</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.IntroContainer}>
              <Text style={styles.IntroText}>{profileData.brandInfo}</Text>
            </View>
          </>
        ) : (
          <ActivityIndicator />
        )}
      </View>
      {isMessageLoading ? (
        <View style={styles.Message}>
          <ActivityIndicator />
        </View>
      ) : messageData ? (
        <View>
          {messageData.map((message: Message) => {
            return (
              <MessageBlock
                key={message.postId}
                postId={message.postId}
                body={message.body}
                messageLink={message.messageLink}
                filePath={message.filePath}
                writerDto={message.writerDto}
                commentAble={message.commentAble}
                isWriter={message.isWriter}
                create_date={message.create_date}
              />
            );
          })}
        </View>
      ) : (
        <View style={styles.Message}>
          <Text style={styles.MessageNull}>등록된 메시지가 없습니다.</Text>
        </View>
      )}

      <View style={styles.Ivory}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
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
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.Ivory,
    padding: 16,
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
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.White,
  },
  Ivory: {
    paddingTop: 60,
    backgroundColor: theme.colors.Ivory,
  },
});

export default ProfileScreen;
