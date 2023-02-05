import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Message} from '../../src/api/message/types';
import theme from '../../assets/theme';
import MessageHeader from './MessageHeader.web';
import MessageImg from '../../src/components/message/MessageImg';
import MessageText from '../../src/components/message/MessageText';
import Link from '../assets/Link.png';

interface Props extends Message {
  isHome?: boolean;
}

// 사용 시에는 user와 message 프롭스를 아래에 넣어주세용
function MessageBlock(detailmessage: Props) {
  return (
    <View style={[styles.padding, !detailmessage.isHome && styles.background]}>
      <View
        style={[
          styles.detailMessageContainer,
          detailmessage.isHome && styles.home,
        ]}>
        <MessageHeader
          brandUsername={
            detailmessage?.writerDto?.brandUserInfoDto?.brandUsername
          }
          brandProfileImage={
            detailmessage?.writerDto?.brandUserInfoDto?.brandProfileImage
          }
          create_date={detailmessage.create_date}
          brandUserId={detailmessage?.writerDto?.brandUserInfoDto?.brandUserId}
        />
        <View>
          {/* 메시지의 구성에 따라 각각 다른 UI를 출력 */}
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
              <Image source={Link} style={styles.link} />
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  padding: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  background: {
    backgroundColor: theme.colors.Ivory,
  },
  home: {
    borderWidth: 1,
    borderColor: theme.colors.Grey30,
  },
  detailMessageContainer: {
    paddingHorizontal: 16,
    paddingVertical: 6,
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
