import React, {useState} from 'react';
import {
  // ScrollView,
  StyleSheet,
  View,
} from 'react-native';
// import BorderLine from '../components/message/BorderLine';
import Comment from '../components/message/Comment';
// import CommentBar from '../components/message/CommentBar';
import DetailMessageContainer from '../components/message/DetailMessageContainer';
import InputCommentContainer from '../components/message/InputCommentContainer';

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
  const [comments, setComments] = useState({});
  const [isWriteComment, setIsWriteComment] = useState(false);
  const date = new Date();
  const now = date.toString();

  const addComments = async () => {
    if (commentText === '') {
      return;
    }
    const newComments = {
      ...comments,
      [tester.userName]: {commentText, tester, now},
    };
    setComments(newComments);
    setIsWriteComment(true);
    setCommentText('');
  };
  // useEffect = (() => {

  // }, [CommentText])
  return (
    <View style={styles.container}>
      <DetailMessageContainer user={undefined} message={undefined} />
      {/* <Text>{comments['진세'].commentText}</Text>
          <Text>{console.log(comments)}</Text> */}

      {/* <BorderLine /> */}

      {/* <CommentBar commentCount={927} /> */}
      {Object.keys(comments).map(key => (
        <View key={key}>
          <Comment
            text={comments[key].commentText}
            userName={comments[key].tester.userName}
            userProfileImg={comments[key].tester.userProfileImg}
            writenCommentTime={comments[key].now}
          />
        </View>
      ))}

      <View>
        {/* <ScrollView style={styles.scrollview}> */}
        {tester.isBrand ? (
          ''
        ) : (
          <InputCommentContainer
            commentText={commentText}
            onChangeText={onChangeText}
            isWriteComment={isWriteComment}
            addComments={addComments}
          />
        )}
        {/* </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 20,
  },
  scrollview: {
    flex: 1,
  },
});

export default MessageScreen;
