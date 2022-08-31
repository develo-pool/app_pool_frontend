import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../assets/theme';
import ShareButton from '../components/profile/ShareButton';
import BrandProfileMessageContainer from '../components/profile/BrandProfileMessageContainer';
import BrandProfileHeader from './../components/profile/BrandProfileHeader';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackNavigationProp, RootStackParamList} from './types';
import {useQuery} from 'react-query';
import {Message} from '../api/message/types';
import {getBrandProfile} from '../api/brand';
import {getProfile} from '../api/profile';

type BrandProfileScreenRouteProp = RouteProp<
  RootStackParamList,
  'BrandProfile'
>;

const LENGTH = 10;

function BrandProfileScreen() {
  const route = useRoute<BrandProfileScreenRouteProp>();
  const brandUserId = route.params.brandUserId;
  const poolUserId = route.params.poolUserId;
  const navigation = useNavigation<RootStackNavigationProp>();
  const [loadMessageList, setLoadMessageList] = useState<Message[]>([]);
  const [cursor, setCursor] = useState<number>(0);
  const [noMorePost, setNoMorePost] = useState<boolean>(false);

  const {data: brandData} = useQuery(
    'getBrandProfile',
    () => getBrandProfile(brandUserId),
    {
      refetchOnMount: 'always',
    },
  );

  const {isLoading: isMessageLoading, refetch} = useQuery(
    'getProfile',
    () => getProfile({userId: poolUserId, cursor: cursor}),
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

  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      headerShadowVisible: false,
      headerTitle: '',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),

      headerRight: () =>
        brandData && (
          <ShareButton
            brandUserName={brandData.brandUsername}
            brandId={brandUserId}
          />
        ),
    });
  }, [navigation, brandUserId, brandData]);

  const RenderItem = ({item}) => {
    return (
      <BrandProfileMessageContainer
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
    <SafeAreaView style={styles.safeArea}>
      {isMessageLoading ? (
        <View style={styles.Message}>
          <ActivityIndicator />
        </View>
      ) : loadMessageList ? (
        <FlatList
          data={loadMessageList}
          renderItem={RenderItem}
          ListHeaderComponent={
            <BrandProfileHeader
              brandUserId={brandUserId}
              poolUserId={poolUserId}
            />
          }
          onEndReached={() => {
            if (!noMorePost) {
              refetch();
            }
          }}
        />
      ) : (
        <View style={styles.Message}>
          <Text style={styles.MessageNull}>등록된 메시지가 없습니다.</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: theme.colors.White,
  },
  rotate: {
    transform: [{rotate: '270deg'}],
  },
  Message: {
    alignItems: 'center',
    paddingHorizontal: 16,
  }, //프로필 아래 메시지가 쌓이는 메시지 영역
  MessageNull: {
    marginTop: 32,
    fontSize: theme.fontSize.P1,
    fontWeight: theme.fontWeight.Light,
  }, //동록한 메시지가 없습니다.
});

export default BrandProfileScreen;
