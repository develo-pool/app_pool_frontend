import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
  NativeModules,
  ScrollView,
} from 'react-native';
import theme from '../../assets/theme';
import {useQuery} from 'react-query';

import {
  CommonActions,
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackNavigationProp, RootStackParamList} from '../../screens/types';
import {getUser} from '../../api/auth';
import {getMessage} from '../../api/message';
import InputCommentContainer from '../../components/message/InputCommentContainer';
import DetailMessageContainer from '../../components/message/DetailMessageContainer';
type MessageScreenRouteProp = RouteProp<RootStackParamList, 'Message'>;

const {any: StatusBarManager} = NativeModules;

function MessageScreen() {
  const isFocused = useIsFocused();
  const [commentText, setCommentText] = useState('');
  const onChangeText = (payload: string) => setCommentText(payload);
  const route = useRoute<MessageScreenRouteProp>();
  const detail = route.params.detail;
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
          {/* <Icon name="arrow-back" size={24} color="black" /> */}
        </TouchableOpacity>
      ),
    });
  }, [navigation, isFocused]);

  const {data: messageData} = useQuery('getMessage', () => getMessage(detail), {
    refetchOnMount: true,
  });

  useEffect(() => {
    Platform.OS === 'ios'
      ? StatusBarManager?.getHeight(statusBarFrameData => {
          setStatusBarHeight(statusBarFrameData.height);
          console.log(statusBarFrameData.height);
        })
      : null;
  }, []);

  const [statusBarHeight, setStatusBarHeight] = useState(0);

  return (
    <KeyboardAvoidingView
      style={styles.avoiding}
      keyboardVerticalOffset={statusBarHeight + 90}
      enabled>
      <SafeAreaView style={styles.safeArea}>
        {userData?.userStatus === 'BRAND_USER' &&
        userData.username === messageData?.writerDto?.username ? (
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
            <View style={styles.spacebetween} />
          </View>
        ) : (
          <View style={styles.container}>
            <ScrollView style={styles.scrollview}>
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

              <View style={styles.spacebetween} />
            </ScrollView>

            <InputCommentContainer
              commentText={commentText}
              onChangeText={onChangeText}
              commentAble={messageData?.commentAble}
            />
          </View>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    height: '100%',
    // justifyContent: 'space-between',
    backgroundColor: theme.colors.Grey10,
  },
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
