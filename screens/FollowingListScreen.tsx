import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {useQuery} from 'react-query';
import {getFollowingList} from '../api/follow';
import {Following} from '../api/follow/types';
import theme from '../assets/theme';
import FollowingList from '../components/setting/FollowingList';
import {RootStackParamList} from './types';

const LENGTH = 20;
type FollowingListScreenRouteProp = RouteProp<
  RootStackParamList,
  'FollowingList'
>;

function FollowingListScreen() {
  const route = useRoute<FollowingListScreenRouteProp>();
  const followingCount = route.params.followingCount;
  const [cursor, setCursor] = useState<number>(0);
  const [followingList, setFollowingList] = useState<Following[]>([]);
  const [noMoreFollowing, setNoMoreFollowing] = useState<boolean>(false);
  const {refetch} = useQuery(
    'getFollowingList',
    () => getFollowingList(cursor),
    {
      refetchOnMount: 'always',
      onSuccess: (data: Following[]) => {
        if (data.length < LENGTH) {
          setNoMoreFollowing(true);
        }
        if (data.length !== 0) {
          setFollowingList(followingList.concat(data));
          setCursor(data[data.length - 1].brandUserId);
        }
      },
    },
  );
  const RenderItem = ({item}) => {
    return (
      <FollowingList
        brandName={item.brandUsername}
        followers={item.userInfoDto.userFollowerCount}
        source={item.brandProfileImage}
        brandUserId={item.brandUserId}
        poolUserId={item.poolUserId}
      />
    );
  };
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.WholeFollowings}>
        <Text
          style={styles.WholeFollowingsText}>{`총 ${followingCount}명`}</Text>
      </View>
      <FlatList
        data={followingList}
        renderItem={RenderItem}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          if (!noMoreFollowing) {
            refetch();
          }
        }}
        onEndReachedThreshold={0.6}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  WholeFollowings: {
    height: 34,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.White,
    justifyContent: 'center',
  },
  WholeFollowingsText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey50,
  },
});

export default FollowingListScreen;
