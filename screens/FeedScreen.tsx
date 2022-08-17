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
          {allMessageData?.map(
            (messages: {
              postId: number;
              body: string;
              messageLink: string;
              filePath: string;
              writerDto: object | undefined;
              commentAble: boolean;
              isWriter: boolean;
              create_date: string;
            }) => {
              try {
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
              } catch {
                return (
                  <View style={styles.noMessageContainer}>
                    <Image
                      style={styles.noMessage}
                      source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png',
                      }}
                      // source={require('../assets/NoMessage.png')}
                      resizeMode="contain"
                    />
                  </View>
                );
              }
            },
          )}
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
  },
  noMessage: {
    width: 151,
    height: 96,
  },
  noMessageContainer: {
    backgroundColor: theme.colors.White,
  },
});

export default FeedScreen;
