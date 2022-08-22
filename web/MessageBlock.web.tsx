import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Message} from '../api/message/types';
import theme from '../assets/theme';
import MessageHeader from '../components/message/MessageHeader';
import MessageImg from '../components/message/MessageImg';
import MessageText from '../components/message/MessageText';
import Link from './assets/Link.png';

// 사용 시에는 user와 message 프롭스를 아래에 넣어주세용
function MessageBlock(detailmessage: Message) {
  return (
    <View style={styles.background}>
      <View style={styles.detailMessageContainer}>
        <MessageHeader
          brandUsername={
            detailmessage?.writerDto?.brandUserInfoDto?.brandUsername
          }
          brandProfileImage={
            detailmessage?.writerDto?.brandUserInfoDto?.brandProfileImage
          }
          create_date={detailmessage.create_date}
        />
        <View>
          {/* 메시지의 구성에 따라 각각 다른 UI를 출력 */}
          {detailmessage.body ? (
            <MessageText messageText={`${detailmessage.body}`} />
          ) : (
            ''
          )}
          {detailmessage.filePath ? (
            <MessageImg messageImg={`${detailmessage.filePath}`} />
          ) : (
            ''
          )}
          {detailmessage.messageLink ? (
            <TouchableOpacity
              style={styles.linkContainer}
              onPress={() =>
                Linking.openURL('https://' + `${detailmessage.messageLink}`)
              }>
              <Image source={Link} style={styles.link} />
              <Text style={styles.messageLink}>
                {detailmessage.messageLink}
              </Text>
            </TouchableOpacity>
          ) : (
            ''
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.colors.Ivory,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  detailMessageContainer: {
    paddingHorizontal: 16,
    backgroundColor: theme.colors.White,
    borderRadius: 10,
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
  icon: {
    marginHorizontal: 8,
  },
  link: {
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

export default MessageBlock;
