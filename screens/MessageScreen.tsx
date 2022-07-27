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
  const [commentList, setCommentList] = useState({});
  const [isComment, setIsComment] = useState(false);

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
    setIsComment(true);
    setCommentText('');
  };
  return (
    <View style={styles.container}>
      <DetailMessageContainer user={undefined} message={undefined} />

      {/* <BorderLine /> */}

      {/* <CommentBar commentCount={927} /> */}
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

      <View>
        {/* <ScrollView style={styles.scrollview}> */}
        {tester.isBrand ? (
          null
        ) : (<InputCommentContainer
        commentText={commentText}
        onChangeText={onChangeText}
        isComment={Object.keys(commentList).length === 0 ? false : true}
        addComments={addComments}
      />
        
        
        // Object.keys(commentList).length === 0 ? (
        // <InputCommentContainer
        //   commentText={commentText}
        //   onChangeText={onChangeText}
        //   isComment={false}
        //   addComments={addComments}
        // />) : (
        //   <InputCommentContainer
        //     commentText={commentText}
        //     onChangeText={onChangeText}
        //     isComment={true}
        //     addComments={addComments}
        //   />
          
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
