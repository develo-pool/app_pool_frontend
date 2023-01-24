import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useQuery} from 'react-query';
import {useNavigate, useParams} from 'react-router-dom';
import {Message} from '../../api/message/types';
import {getBrandWebMessage, getBrandWebProfile} from '../../api/web';
import theme from '../../assets/theme';
import Footer from '../../components/setting/footer';
import MessageBlock from '../components/MessageBlock.web';
import Profile from '../components/Profile.web';

const LENGTH = 10;

function ProfileScreen() {
  const {brandId = '0'} = useParams();
  const id = parseInt(brandId, 10);
  const navigation = useNavigate();
  const [loadMessageList, setLoadMessageList] = useState<Message[]>([]);
  const [cursor, setCursor] = useState<number>(0);
  const [noMorePost, setNoMorePost] = useState<boolean>(false);
  const {isLoading: isMessageLoading, refetch} = useQuery(
    'getBrandWebMessage',
    () => getBrandWebMessage({brandId: id, cursor: cursor}),
    {
      onSuccess: data => {
        if (data.length < LENGTH) {
          setNoMorePost(true);
        }
        if (data.length !== 0) {
          setLoadMessageList(loadMessageList.concat(data));
          setCursor(data[data.length - 1].postId);
        }
      },
      onError: () => {
        navigation('/none');
      },
      refetchOnMount: true,
    },
  );
  const {data: profileData, isLoading: isProfileLoading} = useQuery(
    'getBrandWebProfile',
    () => getBrandWebProfile(id),
    {
      onError: () => {
        navigation('/none');
      },
      refetchOnMount: true,
    },
  );

  const RenderItem = ({item}) => {
    return (
      <MessageBlock
        key={item.postId}
        postId={item.postId}
        body={item.body}
        messageLink={item.messageLink}
        filePath={item.filePath}
        writerDto={item.writerDto}
        commentAble={item.commentAble}
        isWriter={item.isWriter}
        create_date={item.create_date}
        commentCount={item.commentCount}
      />
    );
  };

  return (
    <View style={styles.block}>
      {isMessageLoading ? (
        <View style={styles.Message}>
          <ActivityIndicator />
        </View>
      ) : loadMessageList ? (
        <FlatList
          data={loadMessageList}
          renderItem={RenderItem}
          onEndReached={() => {
            if (!noMorePost) {
              refetch();
            }
          }}
          ListHeaderComponent={
            <Profile data={profileData} isLoading={isProfileLoading} />
          }
          ListFooterComponent={
            <View style={styles.margin}>
              <Footer />
            </View>
          }
        />
      ) : (
        <View style={styles.Message}>
          <Text style={styles.MessageNull}>등록된 메시지가 없습니다.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: theme.colors.Ivory,
  },
  Message: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.Ivory,
    padding: 16,
  }, //프로필 아래 메시지가 쌓이는 메시지 영역
  MessageNull: {
    marginTop: 32,
    fontSize: theme.fontSize.P1,
    fontWeight: theme.fontWeight.Light,
  }, //동록한 메시지가 없습니다.
  margin: {
    paddingTop: 60,
  },
});

export default ProfileScreen;
