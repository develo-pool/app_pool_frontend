import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../assets/theme';
import Comment from '../components/message/Comment';
import DetailMessageContainer from '../components/message/DetailMessageContainer';
import InputCommentContainer from '../components/message/InputCommentContainer';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackNavigationProp, RootStackParamList} from './types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getMessage} from '../api/message/index';
import {useQuery, useMutation} from 'react-query';
import {getComment, getAllComment, createComment} from '../api/comment/index';
import {getUser} from '../api/auth';

type MessageScreenRouteProp = RouteProp<RootStackParamList, 'Message'>;

function MessageScreen() {
  const [commentText, setCommentText] = useState('');
  const onChangeText = (payload: string) => setCommentText(payload);
  const route = useRoute<MessageScreenRouteProp>();
  // const detail = route.params.detail;
  const navigation = useNavigation<RootStackNavigationProp>();
  const {data: userData} = useQuery('getUserResult', () => getUser(), {
    refetchOnMount: 'always',
  });

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

  const {data: messageData} = useQuery('getMessage', () => getMessage(4));
  const {data: allCommentData} = useQuery('getAllComment', () =>
    getAllComment(4),
  );
  const {data: commentData} = useQuery('getComment', () => getComment(4));

  console.log(allCommentData);
  console.log(userData);

  const {mutate: writeComment} = useMutation(createComment, {
    onSuccess: async () => {
      await getComment(4);
    },
    onError: () => {},
  });

  const addComments = async () => {
    if (commentText === '') {
      return;
    }
    setCommentText('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.spacebetween}>
          {messageData ? (
            <DetailMessageContainer
              key={messageData?.postId}
              postId={messageData.postId}
              body={messageData?.body}
              messageLink={messageData?.messageLink}
              filePath={messageData?.filePath}
              writerDto={messageData.writerDto}
              commentAble={messageData.commentAble}
              isWriter={messageData.isWriter}
              create_date={messageData.create_date}
            />
          ) : (
            ''
          )}
        </View>

        {userData?.userStatus == 'BRAND_USER' &&
        userData.username == messageData?.writerDto?.username ? (
          <ScrollView>
            {allCommentData?.map(comments => {
              return (
                <Comment
                  key={comments.id}
                  text={comments.body}
                  userName={comments.writer?.nickName}
                  userProfileImg={comments.writer?.username}
                  writenCommentTime={comments.writer?.username}
                />
              );
            })}
          </ScrollView>
        ) : (
          <View>
            {commentData ? (
              <Comment
                text={commentData.body}
                userName={commentData.writer?.nickName}
                userProfileImg={commentData.writer?.username}
                writenCommentTime={commentData.writer?.username}
              />
            ) : (
              ''
            )}
            <InputCommentContainer
              commentText={commentText}
              onChangeText={onChangeText}
              isComment={commentData ? false : true}
              addComments={addComments}
            />
          </View>
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
