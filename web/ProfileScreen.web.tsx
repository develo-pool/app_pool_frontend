import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useQuery} from 'react-query';
import {useParams} from 'react-router-dom';
import {Message} from '../api/message/types';
import {getBrandWebMessage} from '../api/web';
import theme from '../assets/theme';
import Footer from '../components/setting/footer';
import MessageBlock from './MessageBlock.web';
import Profile from './Profile.web';

const LENGTH = 10;

function ProfileScreen() {
  const {brandId = '0'} = useParams();
  const id = parseInt(brandId, 10);

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
          ListHeaderComponent={<Profile id={id} />}
          ListFooterComponent={
            <View style={styles.Ivory}>
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
  },
  ProfileSection: {
    height: 180,
    backgroundColor: theme.colors.White,
    paddingHorizontal: 16,
  }, //프로필 영역
  ProfileLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ProfileContainer: {
    height: 120,
    flexDirection: 'row',
  }, // 프로필 내 브랜드 정보가 담긴 영역
  BrandInfo: {
    justifyContent: 'center',
    marginLeft: 16,
  },
  BrandName: {
    fontSize: theme.fontSize.P1,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey80,
    marginBottom: 2,
  },
  FollowerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Follower: {
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey40,
  },
  FollowerCount: {
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey80,
    marginLeft: 4,
  },
  IntroContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  }, //프로필 내 소개글이 담긴 영역
  IntroText: {
    fontSize: theme.fontSize.P2,
    color: theme.colors.Grey50,
    fontWeight: theme.fontWeight.Light,
    paddingHorizontal: 4,
  }, //소개글 텍스트
  Message: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.Ivory,
    padding: 16,
  }, //프로필 아래 메시지가 쌓이는 메시지 영역
  MessageNull: {
    marginTop: 32,
    fontSize: theme.fontSize.P1,
    fontWeight: theme.fontWeight.Light,
  }, //동록한 메시지가 없습니다.

  ProfileImgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }, //프로필 사진 영역
  ImgSource: {
    height: 90,
    width: 90,
    borderRadius: 45,
    resizeMode: 'contain',
  }, //프로필 사진

  FollowButton: {
    justifyContent: 'center',
  },
  ButtonFrame: {
    backgroundColor: theme.colors.Poolgreen,
    width: 64,
    height: 32,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  FollowText: {
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.White,
  },
  Ivory: {
    paddingTop: 60,
    backgroundColor: theme.colors.Ivory,
  },
});

export default ProfileScreen;
