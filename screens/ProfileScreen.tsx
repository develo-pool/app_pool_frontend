import React, {useCallback, useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileMessageContainer from '../components/profile/ProfileMessageContainer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../assets/theme';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useQuery} from 'react-query';
import {RootStackNavigationProp} from './types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Message} from '../api/message/types';
import {getMyProfile} from '../api/profile';

const LENGTH = 10;
function ProfileScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [loadMessageList, setLoadMessageList] = useState<Message[]>([]);
  const isFocused = useIsFocused();
  const [cursor, setCursor] = useState<number>(0);
  const [noMorePost, setNoMorePost] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState(false);
  const {isLoading: isMessageLoading, refetch: profileRefetch} = useQuery(
    'getMyProfile',
    () => getMyProfile(cursor),
    {
      onSuccess: data => {
        if (data.length < LENGTH) {
          setNoMorePost(true);
        }
        if (data.length !== 0) {
          setLoadMessageList(loadMessageList.concat(data));
          setCursor(data[data.length - 1].postId);
        }
        setRefreshing(false);
      },
      refetchOnMount: 'always',
    },
  );

  useEffect(() => {
    if (isFocused) {
      profileRefetch();
    }
  }, [isFocused, profileRefetch]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setCursor(0);
    profileRefetch();
  }, [profileRefetch]);

  const RenderItem = ({item}) => {
    return (
      <ProfileMessageContainer
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
    <>
      <SafeAreaView>
        {isMessageLoading ? (
          <View style={styles.Message}>
            <ActivityIndicator />
          </View>
        ) : loadMessageList ? (
          <FlatList
            data={loadMessageList}
            renderItem={RenderItem}
            ListHeaderComponent={<ProfileHeader />}
            onEndReached={() => {
              if (!noMorePost) {
                profileRefetch();
              }
            }}
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        ) : (
          <View style={styles.Message}>
            <Text style={styles.MessageNull}>등록된 메시지가 없습니다.</Text>
          </View>
        )}
      </SafeAreaView>
      <View style={styles.createButtonLayout}>
        <TouchableOpacity
          style={styles.CreateMessageButton}
          onPress={() => navigation.navigate('CreateMessage')}>
          <Icon name="border-color" size={24} style={styles.CreateMessage} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  Message: {
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 32,
  },
  MessageNull: {
    fontSize: theme.fontSize.P1,
    fontWeight: theme.fontWeight.Light,
  },
  createButtonLayout: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
  CreateMessageButton: {
    height: 68,
    width: 68,
    borderRadius: 34,
    backgroundColor: theme.colors.Black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CreateMessage: {
    color: theme.colors.White,
  },
});

export default ProfileScreen;
