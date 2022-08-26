import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../assets/theme';
import Commentcomponent from '../components/message/Commentcomponent';
import DetailMessageContainer from '../components/message/DetailMessageContainer';
import InputCommentContainer from '../components/message/InputCommentContainer';
import {
  RouteProp,
  useNavigation,
  useRoute,
  CommonActions,
} from '@react-navigation/native';
import {RootStackNavigationProp, RootStackParamList} from './types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getMessage} from '../api/message/index';
import {useQuery, useMutation} from 'react-query';
import {getComment, getAllComment, createComment} from '../api/comment/index';
import {getUser} from '../api/auth';
import {Comment} from '../api/comment/types';

type MessageScreenRouteProp = RouteProp<RootStackParamList, 'Message'>;

const LENGTH = 10;

function MessageScreen() {
  const [commentText, setCommentText] = useState('');
  const onChangeText = (payload: string) => setCommentText(payload);
  const route = useRoute<MessageScreenRouteProp>();
  const detail = route.params.detail;
  const [loadCommentList, setLoadCommentList] = useState<Comment[]>([]);
  const [cursor, setCursor] = useState<number>(0);
  const [noMoreComment, setNoMoreComment] = useState<boolean>(false);
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
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.goBack())}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const {data: messageData, refetch: messageRefetch} = useQuery(
    'getMessage',
    () => getMessage(detail),
    {
      onSuccess: () => {
        messageRefetch;
      },
    },
  );
  // const {data: allCommentData, refetch: allCommentRefetch} = useQuery(
  //   'getAllComment',
  //   () => getAllComment(detail, cursor),
  //   {enabled: false},
  // );
  const {isLoading: isMessageLoading, refetch: commentListrefetch} = useQuery(
    'getAllComment',
    () => getAllComment({detail: detail, cursor: cursor}),
    {
      onSuccess: data => {
        if (data.length < LENGTH) {
          setNoMoreComment(true);
        }
        if (data.length !== 0) {
          setLoadCommentList(loadCommentList.concat(data));
          setCursor(data[data.length - 1].id);
        }
      },
      refetchOnMount: true,
    },
  );
  const RenderItem = ({item}) => {
    return (
      <Commentcomponent
        key={item.id}
        text={item.body}
        userName={item.writer?.nickName}
        userProfileImg={item.writer?.username}
        writenCommentTime={item?.create_date}
      />
    );
  };
  const {data: commentData, refetch: commentRefetch} = useQuery(
    'getComment',
    () => getComment(detail),
    {enabled: false},
  );
  const {mutate: writeComment} = useMutation(createComment, {
    onSuccess: () => {
      commentRefetch();
      messageRefetch();
    },
  });
  useEffect(() => {
    if (
      userData?.role === 'BRAND_USER' &&
      userData.username === messageData?.writerDto?.username
    ) {
      commentListrefetch();
    } else if (messageData?.commentAble === false) {
      commentRefetch();
    }
  }, [
    messageData,
    commentListrefetch,
    commentRefetch,
    userData?.role,
    userData?.username,
  ]);

  const onPress = async () => {
    if (commentText === '') {
      return;
    }
    writeComment({messageId: detail, body: commentText});
    setCommentText('');
    // await messageRefetch();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View>
          {messageData ? (
            <DetailMessageContainer
              key={messageData.postId}
              postId={messageData.postId}
              body={messageData.body}
              messageLink={messageData.messageLink}
              filePath={messageData.filePath}
              writerDto={messageData.writerDto}
              commentAble={messageData.commentAble}
              isWriter={messageData.isWriter}
              create_date={messageData.create_date}
            />
          ) : (
            ''
          )}
        </View>

        {userData?.userStatus === 'BRAND_USER' &&
        userData.username === messageData?.writerDto?.username ? (
          <View>
            {/* <ScrollView>
              {allCommentData?.map(comments => {
                return (
                  <Commentcomponent
                    key={comments.id}
                    text={comments.body}
                    userName={comments.writer?.nickName}
                    userProfileImg={comments.writer?.username}
                    writenCommentTime={comments?.create_date}
                  />
                );
              })}
            </ScrollView> */}
            {isMessageLoading ? (
              <View>
                <ActivityIndicator />
              </View>
            ) : loadCommentList ? (
              <FlatList
                data={loadCommentList}
                renderItem={RenderItem}
                onEndReached={() => {
                  if (!noMoreComment) {
                    commentListrefetch();
                  }
                }}
                // showsVerticalScrollIndicator={false}
                // ListHeaderComponent={<Profile id={id} />}
                // ListFooterComponent={
                //   <View style={styles.margin}>
                //     <Footer />
                //   </View>
                // }
              />
            ) : (
              <View>
                <Text>등록된 댓글이 없습니다.</Text>
              </View>
            )}
          </View>
        ) : (
          <View style={styles.spacebetween}>
            {commentData ? (
              <Commentcomponent
                text={commentData.body}
                userName={commentData.writer.nickName}
                userProfileImg={
                  commentData.writer.brandUserInfoDto.brandProfileImage
                }
                writenCommentTime={commentData.create_date}
              />
            ) : (
              <View />
            )}
            <KeyboardAvoidingView>
              <InputCommentContainer
                commentText={commentText}
                onChangeText={onChangeText}
                commentAble={messageData?.commentAble}
                addComments={onPress}
              />
            </KeyboardAvoidingView>
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
  spacebetween: {
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default MessageScreen;
