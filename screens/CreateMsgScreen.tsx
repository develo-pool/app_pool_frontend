import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../assets/theme';
import Title from '../components/Title';

function CreateMessageScreen() {
  return (
    <>
      <View style={styles.UpperArea}>
        <View style={styles.TitleArea}>
          <Title title="메시지 작성" isSmall={false} />
          <Icon name="clear" size={24} color={theme.colors.Black} />
        </View>
        <View style={styles.Info}>
          <View style={styles.BrandInfo}>
            <Image
              style={styles.ImgSource}
              source={require('../assets/ProfileImage.png')}
            />
            <Text style={styles.BrandName}>더푸르</Text>
          </View>
          <Pressable>
            <Text style={styles.Preview}> 미리보기</Text>
          </Pressable>
        </View>
        <TextInput style={styles.InputMessage} placeholder="20자 이상 입력" />
      </View>
      <View style={styles.BottomArea}>
        <View style={styles.Line} />
        <View style={styles.BottomBar}>
          <View style={styles.ElementsContainer}>
            <Icon name="photo-camera" size={28} style={styles.Camera} />
            <Icon name="insert-link" size={28} style={styles.Link} />
          </View>
          <TouchableOpacity style={styles.SendButton}>
            <Text style={styles.Send}>발송하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  UpperArea: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: theme.colors.White,
  },
  BottomArea: {
    backgroundColor: theme.colors.White,
  },
  TitleArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Info: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
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
    color: theme.colors.Grey80,
    fontWeight: '700',
    marginLeft: 8,
  },
  Preview: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P2,
    fontWeight: '700',
    color: theme.colors.Grey30,
  },
  InputMessage: {
    paddingHorizontal: 4,
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P1,
    fontWeight: '400',
  },
  Line: {
    height: 1,
    backgroundColor: '#E8E8E8',
  },
  BottomBar: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
  },
  ElementsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 6,
  },
  Camera: {
    marginRight: 10,
  },
  Link: {},
  // Clock: {},
  SendButton: {
    backgroundColor: theme.colors.Grey30,
    width: 74,
    height: 38,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Send: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    fontWeight: '700',
    color: theme.colors.White,
  },
});

export default CreateMessageScreen;
