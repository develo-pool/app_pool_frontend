import {View, StyleSheet, ScrollView, SafeAreaView, Text} from 'react-native';
import React from 'react';
import Feed from '../components/feed/Feed';
import theme from '../assets/theme';
import NowDate from '../components/feed/NowDate';
import Hello from '../components/feed/Hello';
import {getUser} from '../api/auth';
// get방식 -> useQuery
import {useQuery} from 'react-query';
import {getMessage, getAllMessage} from '../api/message/index';
import {Message} from '../api/message/types';

// 유저 예시를 위한 doha 객체
// const doha: User = {
//   name: '엄지렐라',
//   profileImg:
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpX76CrHxujOncRrHo9XMHks7UTYRpIbM_Mw&usqp=CAU',
// };
// // 메시지 예시를 위한 test 객체
// const test: Message = {
//   user: doha,
//   isComment: false,
//   msgImg: 'https://reactnative.dev/img/tiny_logo.png',
//   msgLink: 'www.blank.com',
//   msgText: '흐하하하핳하하하하하핳 이도하 어서 API를 내놔라',
//   msgDate: Date.now(),
// };

function FeedScreen(message: Message) {
  const {data: userData} = useQuery('getUserResult', () => getUser(), {
    refetchOnMount: 'always',
  });
  // const {data: messageData} = useQuery(['getMessage', 3], ()=> getMessage());
  const {data: allMessageData} = useQuery('getAllMessage', () =>
    getAllMessage(),
  );
  // console.log(messageData);
  // console.log(allMessageData);
  // console.log(allMessageData?.writerDto)
  // console.log(userData?.nickName);
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
              console.log(messages.writerDto);
              return (<Feed
                postId={messages.postId}
                body={messages.body}
                messageLink={messages.messageLink}
                filePath={messages.filePath}
                writerDto={messages.writerDto}
                commentAble={messages.commentAble}
                isWriter={messages.isWriter}
                create_date={messages.create_date}
              />);
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
});

export default FeedScreen;
