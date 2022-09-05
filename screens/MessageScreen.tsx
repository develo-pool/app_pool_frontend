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
  Platform,
  ScrollView,
  Keyboard,
  NativeModules,
} from 'react-native';
import theme from '../assets/theme';
import Commentcomponent from '../components/message/Commentcomponent';
import DetailMessageContainer from '../components/message/DetailMessageContainer';
import InputCommentContainer from '../components/message/InputCommentContainer';
import {
  RouteProp,
  useNavigation,
  useRoute,
  useIsFocused,
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

const {any: StatusBarManager} = NativeModules;

function MessageScreen() {
  const isFocused = useIsFocused();
  const [commentText, setCommentText] = useState('');
  const onChangeText = (payload: string) => setCommentText(payload);
  const route = useRoute<MessageScreenRouteProp>();
  const detail = route.params.detail;
  const [loadCommentList, setLoadCommentList] = useState<Comment[]>([]);
  const [cursor, setCursor] = useState<number>(0);
  const [noMoreComment, setNoMoreComment] = useState<boolean>(false);
  const navigation = useNavigation<RootStackNavigationProp>();
  const {data: userData} = useQuery('getUserResult', () => getUser(), {
    refetchOnMount: true,
  });
  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerBackVisible: false,
      headerShadowVisible: false,
      headerTitle: '',
      headerLeft: () => (
        <TouchableOpacity
          onPress={
            () => navigation.dispatch(CommonActions.goBack())
            // navigation.reset({routes: [{name: "MainTab"}]})
          }>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, isFocused]);

  const {data: messageData, refetch: messageRefetch} = useQuery(
    'getMessage',
    () => getMessage(detail),
    {
      // onSuccess: () => {
      //   messageRefetch();
      // },
      refetchOnMount: true,
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
        userProfileImg={item.writer?.brandProfileImage}
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
    commentRefetch,
    commentListrefetch,
    messageData?.commentAble,
    messageData?.writerDto?.username,
    userData?.role,
    userData?.username,
    detail,
  ]);

  const onPress = async () => {
    if (commentText === '') {
      return;
    }
    writeComment({messageId: detail, body: commentText});
    setCommentText('');
  };

  useEffect(() => {
    Platform.OS == 'ios'
      ? StatusBarManager?.getHeight(statusBarFrameData => {
          setStatusBarHeight(statusBarFrameData.height);
          console.log(statusBarFrameData.height);
        })
      : null;
  }, []);
  // console.log(StatusBarManager?.getHeight())

  const [statusBarHeight, setStatusBarHeight] = useState(0);

  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      behavior={Platform.select({ios: 'padding'})}
      style={styles.avoiding}
      keyboardVerticalOffset={statusBarHeight + 90}
      enabled>
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
                commentCount={messageData.commentCount}
              />
            ) : (
              ''
            )}
          </View>

          {userData?.userStatus === 'BRAND_USER' &&
          userData.username === messageData?.writerDto?.username ? (
            <View style={styles.spacebetween}>
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
                <View>
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
                </View>
              ) : (
                <View>
                  <Text>등록된 댓글이 없습니다.</Text>
                </View>
              )}
            </View>
          ) : (
            <View style={styles.spacebetween}>
              {!messageData?.commentAble ? (
                commentData ? (
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
                )
              ) : (
                <View />
              )}
            </View>
          )}

          <InputCommentContainer
            commentText={commentText}
            onChangeText={onChangeText}
            commentAble={messageData?.commentAble}
            addComments={onPress}
          />
        </View>
        {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <InputCommentContainer
          commentText={commentText}
          onChangeText={onChangeText}
          commentAble={messageData?.commentAble}
          addComments={onPress}
        />
      </KeyboardAvoidingView> */}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.colors.White,
    flex: 1,
  },
  container: {
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.Grey10,
  },
  spacebetween: {
    justifyContent: 'space-between',
    // flex: 1,
  },
  avoiding: {
    flex: 1,
  },
});

export default MessageScreen;
