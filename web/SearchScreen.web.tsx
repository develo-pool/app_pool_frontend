import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import SearchBar from './components/SearchBar';
import RecommandBrandUserContainer from './components/RecommandBrandUserContainer';
import RecommandSubTitle from '../components/search/RecommandSubTitle';
// import SearchResultBrandUserContainer from '../components/search/SearchResultBrandUserContainer';
import SearchResultSubTitle from '../components/search/SearchResultSubTitle';
import theme from '../assets/theme';
import {useQuery} from 'react-query';
import {getAllBrand} from '../api/web/index';
import {AllBrandResult} from '../api/web/types';
import Back from './assets/search/Back.png';
import {useNavigate} from 'react-router-dom';

// import {follow, unfollow} from '../api/follow';

const LENGTH = 10;

function SearchScreen() {
  const navigation = useNavigate();
  const [cursor, setCursor] = useState<number>(0);
  const [Brands, setBrands] = useState<AllBrandResult[]>([]);
  const [noMoreBrand, setNoMoreBrand] = useState<boolean>(false);
  const [following, setFollowing] = useState(false);
  const changeFollowing = () => setFollowing(!following);
  const [searchText, setSearchText] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [searchFilter, setSearchFilter] = useState<AllBrandResult[]>([]);
  const onChangeText = (payload: string) => setSearchText(payload);
  const {isLoading: isBrandLoading, refetch} = useQuery(
    'getAllBrand',
    () => getAllBrand(cursor),
    {
      refetchOnMount: 'always',
      onSuccess: (data: AllBrandResult[]) => {
        if (data.length < LENGTH) {
          setNoMoreBrand(true);
        }
        if (data.length !== 0) {
          if (cursor === 0) {
            setBrands(data);
          } else {
            setBrands(Brands.concat(data));
          }
          setCursor(data[data.length - 1].brandUserId);
          setRefreshing(false);
        }
      },
    },
  );

  const onEndReached = () => {
    if (!noMoreBrand) {
      refetch();
    }
  };
  // const onMount = useCallback(()=>{
  //   setRefreshing(true);
  //   refetch();
  //   setRefreshing(false);
  // }, [refetch])
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setCursor(0);
    refetch();
    setRefreshing(false);
  }, [refetch]);
  useEffect(() => {
    onRefresh();
    // onMount();
    setSearchFilter(
      Brands?.filter(brand =>
        brand.brandUsername
          .toUpperCase()
          .includes(`${searchText.toUpperCase()}`),
      ),
    );
    // refetch();
  }, [refetch, searchText, Brands, onRefresh]);
  const RenderRecommandItem = ({item}) => {
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
        refetch={refetch}
        searchText={searchText}
      />
    );
  };
  // const searchFilter = Brands?.filter(brand =>
  //   brand.brandUsername.toUpperCase().includes(`${searchText.toUpperCase()}`),
  // );

  // const RenderSearchItem = ({item}) => {
  //   return (
  //     <SearchResultBrandUserContainer
  //       key={item.poolUserId}
  //       changeFollowing={changeFollowing}
  //       brandUsername={item.brandUsername}
  //       brandProfileImage={item.brandProfileImage}
  //       follow={item.userInfoDto?.follow}
  //       userFollowerCount={item.userInfoDto?.userFollowerCount}
  //       brandUserId={item.brandUserId}
  //       poolUserId={item.poolUserId}
  //       isLoginUser={item.isLoginUser}
  //       refetch={refetch}
  //     />
  //   );
  // };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.SearchScreenContainer}>
        <View style={styles.Header}>
          <TouchableOpacity onPress={() => navigation('/')}>
            <Image source={Back} style={styles.Back} />
          </TouchableOpacity>

          <Text style={styles.HeaderText}>POOL에서 브랜드를 찾아보세요</Text>
          <View style={styles.align} />
        </View>
        <View>
          <SearchBar searchText={searchText} onChangeText={onChangeText} />
          <View style={styles.line} />
        </View>
        <View style={styles.container}>
          {searchFilter ? (
            <FlatList
              data={searchText !== '' ? searchFilter : Brands}
              style={styles.flatList}
              renderItem={
                // searchText !== '' ? RenderSearchItem : RenderRecommandItem
                RenderRecommandItem
              }
              showsVerticalScrollIndicator={false}
              onEndReached={() => {
                onEndReached();
              }}
              onEndReachedThreshold={0.6}
              onRefresh={onRefresh}
              refreshing={refreshing}
              ListHeaderComponent={
                searchText !== '' ? (
                  <SearchResultSubTitle searchCount={searchFilter?.length} />
                ) : (
                  <RecommandSubTitle />
                )
              }
              ListFooterComponent={
                <>{isBrandLoading && <ActivityIndicator />}</>
              }
            />
          ) : (
            <>
              <SearchResultSubTitle searchCount={0} />
              <View style={styles.noSearchTextContainer}>
                <Text style={styles.noSearchText}>검색 결과가 없습니다</Text>
              </View>
            </>
          )}
        </View>
      </View>
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
    backgroundColor: theme.colors.Grey10,
    height: '100%',
  },
  flatList: {
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
  container: {
    height: '89%',
  },
  SearchScreenContainer: {
    backgroundColor: theme.colors.Grey10,
  },
  Back: {
    width: 32,
    height: 32,
    marginLeft: 10,
  },
  Header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    zIndex: 999,
    paddingTop: 30,
    backgroundColor: theme.colors.White,
    paddingBottom: 10,
  },
  HeaderText: {
    fontWeight: theme.fontWeight.Bold,
    fontSize: theme.fontSize.H4,
    fontFamily: theme.fontFamily.Pretendard,
  },
  align: {width: 32, height: 32, marginRight: 10},
});

export default SearchScreen;
