import React from 'react';
import {Text, StyleSheet, View, Pressable, Image} from 'react-native';
import Title from '../components/Title';

function BrandProfileScreen() {
  return (
    <View style={styles.Container}>
      <View style={styles.Profile}>
        <View style={styles.ProfileContainer}>
          <View style={styles.ProfileImgContainer}>
            <View>
              <View //Image로 바꿔줘야함!!
                style={styles.ImgSource}
                // source={require('../assets/Pool.png')}
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
          <View style={styles.BrandContainer}>
            <View style={styles.Brand}>
              <View>
                <Text style={styles.ProfileName}>엄지렐라</Text>
              </View>
              <View style={styles.Followers}>
                <View>
                  <Text style={styles.Follow}>팔로워</Text>
                </View>
                <Pressable>
                  <Text style={styles.FollowCountTxt}>0</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.Share}>
              <View style={styles.ShareButton}>
                <Pressable>
                  <Text style={styles.ShareText}>공유</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.IntroContainer}>
          <View>
            <Text style={styles.ProfileIntro}>
              마라맛을 사랑하는 엄지렐라입니다. 소개글이 들어갑니다. 소개글이
              들어갑니다. 소개글이 들어갑니다. 소개글이 들어갑니다.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.Message}>
        <View style={styles.InitialSet}>
          <View style={styles.InitTitleContainer}>
            <Text style={styles.InitTitle}>초기 세팅하기</Text>
          </View>
          <View style={styles.InitListUp}>
            <View style={styles.InitisDone}></View>
            <View>
              <Text style={styles.InitList}>웰컴 메시지 설정하기</Text>
            </View>
            <View>
              <Text style={styles.InitArrow}></Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.MessageNull}>등록한 메시지가 없습니다.</Text>
        </View>
      </View>
      <View style={styles.CreateMessageButton}>
        <Pressable>
          <Image
            style={styles.CreateMessage}
            source={require('../assets/New.png')}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#EDEDED',
  }, //전체 Container
  Profile: {
    flex: 1,
    backgroundColor: 'white',
  }, //프로필 영역
  Message: {
    flex: 2,
    // justifyContent: 'center',
    alignItems: 'center',
  }, //프로필 아래 메시지가 쌓이는 메시지 영역
  CreateMessageButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  }, //새 메시지 작성 버튼
  ProfileContainer: {
    flex: 1.2,
    flexDirection: 'row',
  }, // 프로필 내 브랜드 정보가 담긴 영역
  IntroContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, //프로필 내 소개글이 담긴 영역
  ProfileImgContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }, //프로필 사진 영역
  BrandContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  }, //프로필 이름, 팔로우, 공유버튼 영역
  ImgSource: {
    height: 74,
    width: 74,
    borderRadius: 37,
    resizeMode: 'contain',
    backgroundColor: '#C7C7C7',
  }, //프로필 사진
  EditProfile: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginLeft: -25,
    marginTop: 45,
  }, //수정 버튼
  Brand: {
    flex: 2.5,
  }, // 브랜드 명과 팔로워
  Share: {
    flex: 1,
  }, // 공유 버튼
  ProfileName: {
    fontSize: 19,
    fontWeight: 'bold',
  }, //브랜드 명
  Followers: {
    flexDirection: 'row',
    marginTop: 5,
  }, //팔로우, 팔로우 숫자
  Follow: {
    fontSize: 14,
    fontWeight: '400',
  },
  FollowCountTxt: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '700',
  },
  ShareButton: {
    width: 66,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
  }, //공유 버튼
  ShareText: {
    fontSize: 14,
    fontWeight: '700',
  },
  ProfileIntro: {
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 10,
    paddingRight: 10,
  }, //소개글 텍스트
  InitialSet: {
    width: 328,
    height: 96,
    marginTop: 19,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 21,
    paddingRight: 21,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    justifyContent: 'center',
  },
  InitTitleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  InitTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  InitListUp: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  InitisDone: {
    width: 20,
    marginRight: 8,
  },
  InitList: {
    width: 244,
    fontSize: 14,
    fontWeight: '700',
  },
  InitArrow: {
    fontSize: 14,
    fontWeight: '700',
  },
  MessageNull: {
    marginTop: 144,
    fontSize: 16,
    fontWeight: '400',
  }, //동록한 메시지가 없습니다.
  CreateMessage: {
    height: 75,
    width: 75,
    resizeMode: 'contain',
  },
});

export default BrandProfileScreen;
