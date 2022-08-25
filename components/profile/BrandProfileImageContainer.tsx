import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../screens/types';
import theme from '../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  isEditable: boolean;
  imgSource: any;
}

function BrandProfileImageContainer({isEditable, imgSource}: Props) {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={styles.ProfileImgContainer}>
      <Image style={styles.ImgSource} source={imgSource} />
      {isEditable && (
        <TouchableOpacity
          style={styles.EditProfile}
          onPress={() => navigation.navigate('EditProfile')}>
          <Icon name="edit" size={18} style={styles.EditButton} />
        </TouchableOpacity>
      )}
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
