import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import BorderLine from '../components/message/BorderLine';
import Comment from '../components/message/Comment';
import CommentBar from '../components/message/CommentBar';
import DetailMessageContainer from '../components/message/DetailMessageContainer';
import InputCommentContainer from '../components/message/InputCommentContainer';

function MessageScreen() {
  // const [msgImgHeight, setmsgImgHeight] = useState(0);
  // const { width } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        <DetailMessageContainer user={undefined} message={undefined} />

        <BorderLine />

        <CommentBar commentCount={927} />

        <Comment
          user={undefined}
          commentText="프론트짱 다인님의 기운을 받아 햅삐ㅣㅣㅣㅣㅣㅣ"
          commentDate={Date.now()}
        />
      </ScrollView>
      <InputCommentContainer />
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
