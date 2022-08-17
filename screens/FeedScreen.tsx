import {View, StyleSheet, ScrollView, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Feed from '../components/feed/Feed';
import theme from '../assets/theme';
import NowDate from '../components/feed/NowDate';
import Hello from '../components/feed/Hello';
import {getUser} from '../api/auth';
// get방식 -> useQuery
import {useQuery} from 'react-query';
import {getAllMessage} from '../api/message/index';

function FeedScreen() {
  const {data: userData} = useQuery('getUserResult', () => getUser(), {
    refetchOnMount: 'always',
  });
  const {data: allMessageData} = useQuery('getAllMessage', () =>
    getAllMessage(),
  );
  const today = new Date(Date.now());
  const yy = today.getFullYear().toString().substring(2, 4);
  const mm = today.getMonth();
  const dd = today.getDay();
  const yymmdd = yy + '년 ' + mm + '월 ' + dd + '일';
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <Pressable onPress={() => refetchGetUser()}>
          <Text>요청</Text>
        </Pressable> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <Hello name={userData?.nickName} />
          <NowDate msgDate={yymmdd} />

          {allMessageData?.map(messages => {
            return (
              <Feed
                key={messages.postId}
                postId={messages.postId}
                body={messages.body}
                messageLink={messages.messageLink}
                filePath={messages.filePath}
                writerDto={messages.writerDto}
                commentAble={messages.commentAble}
                isWriter={messages.isWriter}
                create_date={messages.create_date}
              />
            );
          })}
          <View
            style={
              allMessageData?.length === 0
                ? styles.noMessageContainer
                : styles.isMessageContainer
            }>
            <Image
              style={styles.noMessage}
              source={require('../assets/NoMessage.png')}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: theme.colors.White,
    paddingTop: 30,
    height: '100%',
  },
  noMessage: {
    width: 151,
    height: 96,
  },
  noMessageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // API 붙이고 화면 너비 높이 계산해서 중앙으로...!
    marginTop: 200,
  },
  isMessageContainer: {
    width: 0,
    height: 0,
  },
});

export default FeedScreen;
