import React from 'react';
import {StyleSheet, View} from 'react-native';
import MessageHeader from '../message/MessageHeader';
import MessageImg from '../message/MessageImg';
import MessageLink from '../message/MessageLink';
import MessageText from '../message/MessageText';
import theme from '../../assets/theme';
import {Message} from '../../api/message/types';

// 사용 시에는 user와 message 프롭스를 아래에 넣어주세용
function DetailMessageContainer(detailmessage: Message) {
  return (
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
          <MessageLink messageLink={`${detailmessage.messageLink}`} />
        ) : (
          ''
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailMessageContainer: {
    paddingHorizontal: 16,
    backgroundColor: theme.colors.White,
  },
});

export default DetailMessageContainer;
