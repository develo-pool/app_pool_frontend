import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  Linking,
  TouchableOpacity,
} from 'react-native';
import theme from '../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Message} from '../../api/message/types';
import MessageBodyContainer from './MessageBodyContainer';
import MessageImgContainer from './MessageImgContainer';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../screens/types';

function BrandProfileMessageContainer(detailmessage: Message) {
  const Month = detailmessage.create_date.substring(5, 7);
  const Day = detailmessage.create_date.substring(8, 10);
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate('Message', {detail: detailmessage.postId})
      }>
      <View style={styles.Info}>
        <View style={styles.BrandInfo}>
          <Image
            style={styles.ImgSource}
            source={{
              uri: detailmessage.writerDto.brandUserInfoDto.brandProfileImage,
            }}
          />
          <Text style={styles.BrandName}>
            {detailmessage?.writerDto?.brandUserInfoDto?.brandUsername}
          </Text>
        </View>
      </View>
      <View>
        {detailmessage.body && (
          <MessageBodyContainer messageText={`${detailmessage.body}`} />
        )}
        {detailmessage.filePath && (
          <MessageImgContainer messageImg={`${detailmessage.filePath}`} />
        )}
        {detailmessage.messageLink && (
          <TouchableOpacity
            style={styles.linkContainer}
            onPress={() =>
              Linking.openURL('https://' + `${detailmessage.messageLink}`)
            }>
            <Icon name="insert-link" size={20} style={styles.linkIcon} />
            <View>
              <Text style={styles.messageLink}>
                {detailmessage.messageLink}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        <View style={styles.bottomArea}>
          <Text style={styles.messageDate}>
            {Month}월 {Day}일
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 400,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginHorizontal: 16,
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
  linkContainer: {
    height: 36,
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 8,
    borderColor: theme.colors.Grey40,
    alignItems: 'center',
    flexDirection: 'row',
  },
  linkIcon: {
    marginHorizontal: 8,
  },
  messageLink: {
    color: theme.colors.Poolblue,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Light,
    fontFamily: theme.fontFamily.Pretendard,
  },
  bottomArea: {
    flexDirection: 'row',
    alignItems: 'center',
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

export default BrandProfileMessageContainer;
