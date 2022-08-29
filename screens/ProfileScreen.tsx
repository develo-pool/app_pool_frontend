import React from 'react'; // , {useState}
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  // ActivityIndicator,
} from 'react-native';
import ProfileHeader from '../components/profile/ProfileHeader';
import SetWelcomeMsg from '../components/profile/SetWelcomeMessage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from '../assets/theme';
import {useNavigation} from '@react-navigation/native';
import {useQuery} from 'react-query';
import {RootStackNavigationProp} from './types';
import {SafeAreaView} from 'react-native-safe-area-context';
import MessageContainer from '../components/profile/MessageContainer';
// import {useParams} from 'react-router-dom';
// import {Message} from '../api/message/types';
import {getBrand} from '../api/brand';

function ProfileScreen() {
  // const {brandId = '0'} = useParams();
  // const id = parseInt(brandId, 10);
  const navigation = useNavigation<RootStackNavigationProp>();
  // const [loadMessageList, setLoadMessageList] = useState<Message[]>([]);
  // const [cursor, setCursor] = useState<number>(0);
  // const [noMorePost, setNoMorePost] = useState<boolean>(false);

  const {data: brandData} = useQuery('getBrand', () => getBrand(''), {
    refetchOnMount: 'always',
  });
  // const {data: brandMessages} = useQuery(
  //   'getMyProfile',
  //   () => getMyProfile(cursor),
  //   {
  //     refetchOnMount: 'always',
  //   },
  // );

  // const RenderItem = ({item}) => {
  //   return (
  //     <ProfileFeed
  //       key={item.postId}
  //       postId={item.postId}
  //       body={item.body}
  //       messageLink={item.messageLink}
  //       filePath={item.filePath}
  //       writerDto={item.writerDto}
  //       commentAble={item.commentAble}
  //       isWriter={item.isWriter}
  //       create_date={item.create_date}
  //     />
  //   );
  // };

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <ProfileHeader />
          <SetWelcomeMsg />
          <View style={styles.Message}>
            {brandData?.brandUserId === 0 ? (
              //이거 바꿔야함
              <Text style={styles.MessageNull}>등록된 메시지가 없습니다.</Text>
            ) : (
              <MessageContainer
                brandProfileImage={brandData?.brandProfileImage}
                brandUserName={brandData?.brandUsername as string}
              />
            )}
            <MessageContainer
              brandProfileImage={brandData?.brandProfileImage}
              brandUserName={brandData?.brandUsername as string}
            />
          </View>
        </ScrollView>
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
  },
  MessageNull: {
    marginTop: 32,
    fontSize: theme.fontSize.P1,
    fontWeight: theme.fontWeight.Light,
  }, //동록한 메시지가 없습니다.
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
  }, //새 메시지 작성 버튼
  CreateMessage: {
    color: theme.colors.White,
  },
});

export default ProfileScreen;
