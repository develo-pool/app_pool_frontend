import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  GestureResponderEvent,
} from 'react-native';
import BorderLine from '../components/message/BorderLine';
import Comment from '../components/message/Comment';
import CommentBar from '../components/message/CommentBar';
import DetailMessageContainer from '../components/message/DetailMessageContainer';
import InputCommentContainer from '../components/message/InputCommentContainer';
import ScreenBottomButton from '../components/ScreenBottomButton';

interface User {
  isBrand: boolean;
  isWriteComment: boolean;
}
const tester: User = {
  isBrand: false,
  isWriteComment: true,
};

function MessageScreen() {
  // const [msgImgHeight, setmsgImgHeight] = useState(0);
  // const { width } = Dimensions.get('window');
  return (
    <>
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

          {tester.isBrand ? (
            ''
          ) : tester.isWriteComment ? (
            <InputCommentContainer />
          ) : (
            <ScreenBottomButton
              name="답장하기"
              enabled={true}
              onPress={function (event: GestureResponderEvent): void {}}
            />
          )}
        </ScrollView>
      </View>
    </>
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
