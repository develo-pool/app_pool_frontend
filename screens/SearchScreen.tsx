import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView, Text, FlatList} from 'react-native';
import SearchBar from '../components/search/SearchBar';
import RecommandBrandUserContainer from '../components/search/RecommandBrandUserContainer';
import RecommandSubTitle from '../components/search/RecommandSubTitle';
import SearchResultBrandUserContainer from '../components/search/SearchResultBrandUserContainer';
import SearchResultSubTitle from '../components/search/SearchResultSubTitle';
import theme from '../assets/theme';
import {useQuery} from 'react-query';
import {getAllBrand} from '../api/brand/index';
import {useEffect} from 'react';
import {AllBrandResult} from '../api/brand/types';

const LENGTH = 10;

function SearchScreen() {
  const [cursor, setCursor] = useState<number>(0);
  const [Messages, setMessages] = useState<AllBrandResult[]>([]);
  const [noMoreBrand, setNoMoreBrand] = useState<boolean>(false);
  const [following, setFollowing] = useState(false);
  const changeFollowing = () => setFollowing(!following);
  const [searchText, setSearchText] = useState('');
  const onChangeText = (payload: string) => setSearchText(payload);
  const {
    data: allBrandData,
    isLoading: isBrandLoading,
    refetch: brandRefetch,
  } = useQuery('getAllBrand', () => getAllBrand(cursor), {
    refetchOnMount: 'always',
    onSuccess: data => {
      if (data.length < LENGTH) {
        setNoMoreBrand(true);
      }
      if (data.length !== 0) {
        setMessages(Messages.concat(data));
        setCursor(data[data.length - 1].brandUserId);
      }
    },
  });
  const RenderItem = ({item}) => {
    return (
      <RecommandBrandUserContainer
        key={item.poolUserId}
        changeFollowing={changeFollowing}
        brandUsername={item.brandUsername}
        brandInfo={item.brandInfo}
        brandProfileImage={item.brandProfileImage}
        follow={item.userInfoDto?.follow}
        userFollowerCount={item.userInfoDto?.userFollowerCount}
        brandUserId={item.brandUserId}
        poolUserId={item.poolUserId}
        isLoginUser={item.isLoginUser}
        refetch={brandRefetch}
      />
    );
  };
  const onEndReached = () => {
    if (!noMoreBrand) {
      brandRefetch();
    }
  };
  // const {data: allBrandData, refetch} = useQuery(
  //   'getAllBrand',
  //   () => getAllBrand(),
  //   {
  //     enabled: false,
  //   },
  // );
  const searchFilter = allBrandData?.filter(brand =>
    brand.brandUsername.includes(`${searchText}`),
  );
  useEffect(() => {
    brandRefetch();
  }, [brandRefetch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <SearchBar searchText={searchText} onChangeText={onChangeText} />
      <View style={styles.line} />
      {searchText !== '' ? (
        <ScrollView>
          <SearchResultSubTitle searchCount={searchFilter?.length} />
          {searchFilter?.length === 0 ? (
            <View style={styles.noSearchTextContainer}>
              <Text style={styles.noSearchText}>검색 결과가 없습니다</Text>
            </View>
          ) : (
            searchFilter?.map((brandUser: any) => (
              <SearchResultBrandUserContainer
                key={brandUser.poolUserId}
                changeFollowing={changeFollowing}
                brandUsername={brandUser.brandUsername}
                brandProfileImage={brandUser.brandProfileImage}
                follow={brandUser.userInfoDto?.follow}
                userFollowerCount={brandUser.userInfoDto?.userFollowerCount}
                brandUserId={brandUser.brandUserId}
                poolUserId={brandUser.poolUserId}
                isLoginUser={brandUser.isLoginUser}
                refetch={brandRefetch}
              />
            ))
          )}
        </ScrollView>
      ) : (
        <ScrollView style={styles.scroll}>
          <RecommandSubTitle />
          <FlatList
          data={Messages}
          renderItem={RenderItem}
          showsVerticalScrollIndicator={false}
          onEndReached={() => {
            onEndReached();
          }}
          onEndReachedThreshold={0.6}
        />
          {/* {allBrandData?.map((brandUser: any) => (
            <RecommandBrandUserContainer
              key={brandUser.poolUserId}
              changeFollowing={changeFollowing}
              brandUsername={brandUser.brandUsername}
              brandInfo={brandUser.brandInfo}
              brandProfileImage={brandUser.brandProfileImage}
              follow={brandUser.userInfoDto?.follow}
              userFollowerCount={brandUser.userInfoDto?.userFollowerCount}
              brandUserId={brandUser.brandUserId}
              poolUserId={brandUser.poolUserId}
              isLoginUser={brandUser.isLoginUser}
              refetch={brandRefetch}
            />
          ))} */}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  line: {
    backgroundColor: theme.colors.Grey20,
    height: 1,
    width: '100%',
  },
  safeArea: {
    backgroundColor: theme.colors.White,
  },
  scroll: {
    backgroundColor: theme.colors.Grey10,
  },
  noSearchTextContainer: {
    backgroundColor: theme.colors.Grey10,
    alignItems: 'center',
    padding: 4,
    paddingTop: 32,
  },
  noSearchText: {
    color: theme.colors.Grey40,
    fontSize: theme.fontSize.P1,
    fontFamily: theme.fontFamily.Pretendard,
  },
});

export default SearchScreen;
