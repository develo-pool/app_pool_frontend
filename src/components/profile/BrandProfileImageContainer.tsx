import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import theme from '../../../assets/theme';

interface Props {
  imgSource: any;
}

function BrandProfileImageContainer({imgSource}: Props) {
  return (
    <View style={styles.ProfileImgContainer}>
      <Image style={styles.ImgSource} source={imgSource} />
    </View>
  );
}

const styles = StyleSheet.create({
  ProfileImgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }, //프로필 사진 영역
  ImgSource: {
    height: 90,
    width: 90,
    borderRadius: 45,
    resizeMode: 'cover',
  }, //프로필 사진
  EditProfile: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.Grey50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -32,
    marginTop: 58,
  }, //수정 버튼
  EditButton: {
    color: theme.colors.White,
  },
});

export default BrandProfileImageContainer;
