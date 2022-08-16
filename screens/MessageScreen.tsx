import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import theme from '../assets/theme';
import Comment from '../components/message/Comment';
import DetailMessageContainer from '../components/message/DetailMessageContainer';
import InputCommentContainer from '../components/message/InputCommentContainer';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackNavigationProp, RootStackParamList} from './types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getMessage} from '../api/message/index';
import {Message} from '../api/message/types';
import {getUser} from '../api/auth';
import {useQuery} from 'react-query';

type MessageScreenRouteProp = RouteProp<RootStackParamList, 'Message'>;

interface User {
  isBrand?: boolean;
  userName: string;
  userProfileImg: string;
}
const tester: User = {
  isBrand: false,
  userName: '진세',
  userProfileImg: 'https://img.hankyung.com/photo/202111/03.28096495.1.jpg',
};

function MessageScreen(detailmessage: Message) {
  const [commentText, setCommentText] = useState('');
  const onChangeText = payload => setCommentText(payload);
  const [commentList, setCommentList] = useState({});
  const route = useRoute<MessageScreenRouteProp>();
  const detail = route.params.detail;
  console.log(JSON.stringify(detail));
  const navigation = useNavigation<RootStackNavigationProp>();
  const {data: messageData} = useQuery('getMessage', () => getMessage(detail));
  console.log(messageData?.postId)

  const addComments = async () => {
    const writtenTime = Date.now();
    if (commentText === '') {
      return;
    }
    const newComments = {
      ...commentList,
      [tester.userName]: {commentText, tester, writtenTime},
    };
    setCommentList(newComments);
    setCommentText('');
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerBackVisible: false,
      headerShadowVisible: false,
      headerTitle: '',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.spacebetween}>
          {/* <DetailMessageContainer user={undefined} message={undefined} /> */}
          {messageData ? (<DetailMessageContainer
                key={messageData?.postId}
                postId={messageData.postId}
                body={messageData?.body}
                messageLink={messageData?.messageLink}
                filePath={messageData?.filePath}
                writerDto={messageData.writerDto}
                commentAble={messageData.commentAble}
                isWriter={messageData.isWriter}
                create_date={messageData.create_date}
              />) : ''}
          {Object.keys(commentList).map(key => (
            <View key={key}>
              <Comment
                text={commentList[key].commentText}
                userName={commentList[key].tester.userName}
                userProfileImg={commentList[key].tester.userProfileImg}
                writenCommentTime={commentList[key].writtenTime}
              />
            </View>
          ))}
        </View>
        {tester.isBrand ? null : (
          <InputCommentContainer
            commentText={commentText}
            onChangeText={onChangeText}
            isComment={Object.keys(commentList).length === 0 ? false : true}
            addComments={addComments}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.colors.White,
  },
  container: {
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.Grey10,
  },
  spacebetween: {},
  scrollview: {},
});

export default MessageScreen;
