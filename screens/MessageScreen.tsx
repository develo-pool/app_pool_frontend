import React, {useEffect, useState} from 'react';
import {
  // ScrollView,
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

interface User {
  isBrand: boolean;
  userName: string;
  userProfileImg: string;
}
const tester: User = {
  isBrand: false,
  userName: '진세',
  userProfileImg: 'https://img.hankyung.com/photo/202111/03.28096495.1.jpg',
};

function MessageScreen() {
  const [commentText, setCommentText] = useState('');
  const onChangeText = payload => setCommentText(payload);
  const [commentList, setCommentList] = useState({});
  const navigation = useNavigation<RootStackNavigationProp>();

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
      headerLeft: () =>(
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
        ),
    });
  }, [navigation]);

  return (
    <View style={styles.safetyArea}>
      <DetailMessageContainer user={undefined} message={undefined} />
      <View>
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

      <View style={styles.floatBottom}>
        {tester.isBrand ? null : (
          <InputCommentContainer
            commentText={commentText}
            onChangeText={onChangeText}
            isComment={Object.keys(commentList).length === 0 ? false : true}
            addComments={addComments}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safetyArea: {
  },
  floatBottom: {
  },
  scrollview: {},
});

export default MessageScreen;
