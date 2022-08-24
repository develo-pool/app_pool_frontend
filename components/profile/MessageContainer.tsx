import {View, Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import theme from '../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  brandProfileImage: any;
  brandUserName: string;
}

function MessageContainer({brandUserName, brandProfileImage}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.Info}>
        <View style={styles.BrandInfo}>
          <Image style={styles.ImgSource} source={{uri: brandProfileImage}} />
          <Text style={styles.BrandName}>{brandUserName}</Text>
        </View>
      </View>
      <Text style={styles.messageBody}>
        오늘은 드디어 여러분 라방으로 보는날~ 다들 기대되시죠? 우리 얼른 즐겁게
        만나요!! 오늘 하늘이 진짜 예뻐서 찍어봤어요!
      </Text>
      <Image
        style={styles.messageImage}
        source={require('../../assets/sky.jpg')}
      />
      <View style={styles.bottomArea}>
        <Text style={styles.messageDate}>8월 25일</Text>
        <Icon
          name="messenger-outline"
          size={14}
          color={theme.colors.Grey40}
          style={styles.commentIcon}
        />
        <Text style={styles.commentsCount}>16</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    maxHeight: 400,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 12,
    backgroundColor: theme.colors.White,
  },
  Info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  BrandInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImgSource: {
    height: 24,
    width: 24,
    borderRadius: 12,
    resizeMode: 'contain',
  },
  BrandName: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    color: theme.colors.Grey60,
    fontWeight: theme.fontWeight.Bold,
    marginLeft: 8,
  },
  messageBody: {
    marginVertical: 12,
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P2,
    color: theme.colors.Grey60,
  },
  messageImage: {
    height: 230,
    maxWidth: 320,
    resizeMode: 'cover',
  },
  bottomArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 4,
  },
  messageDate: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    color: theme.colors.Grey40,
  },
  commentIcon: {
    marginLeft: 16,
  },
  commentsCount: {
    marginLeft: 4,
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    color: theme.colors.Grey40,
  },
});

export default MessageContainer;
