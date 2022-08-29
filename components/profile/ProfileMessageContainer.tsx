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
import MessageImg from '../../components/message/MessageImg';
import MessageText from '../../components/message/MessageText';

function ProfileMessageContainer(detailmessage: Message) {
  const Month = detailmessage.create_date.substring(5, 7);
  const Day = detailmessage.create_date.substring(8, 10);

  return (
    <Pressable style={styles.container}>
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
        {detailmessage.body ? (
          <MessageText messageText={`${detailmessage.body}`} />
        ) : (
          <></>
        )}
        {detailmessage.filePath ? (
          <MessageImg messageImg={`${detailmessage.filePath}`} />
        ) : (
          <></>
        )}
        {detailmessage.messageLink ? (
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
        ) : (
          <></>
        )}
      </View>
      <View style={styles.bottomArea}>
        <Text style={styles.messageDate}>
          {Month}월 {Day}일
        </Text>
        <Icon
          name="messenger-outline"
          size={14}
          color={theme.colors.Grey40}
          style={styles.commentIcon}
        />
        <Text style={styles.commentsCount}>16</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
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
    resizeMode: 'contain',
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
  linkContainer: {
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    padding: 8,
    borderColor: theme.colors.Grey20,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 18,
  },
  linkIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  messageLink: {
    color: theme.colors.Poolblue,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Light,
    fontFamily: theme.fontFamily.Pretendard,
  },
});

export default ProfileMessageContainer;
