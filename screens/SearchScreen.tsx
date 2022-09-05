import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import SearchBar from '../components/search/SearchBar';
import RecommandBrandUserContainer from '../components/search/RecommandBrandUserContainer';
import RecommandSubTitle from '../components/search/RecommandSubTitle';
import SearchResultBrandUserContainer from '../components/search/SearchResultBrandUserContainer';
import SearchResultSubTitle from '../components/search/SearchResultSubTitle';
import theme from '../assets/theme';
import {useQuery} from 'react-query';
import {getAllBrand} from '../api/brand/index';
import {AllBrandResult} from '../api/brand/types';
import {useIsFocused} from '@react-navigation/native';

const LENGTH = 10;

function SearchScreen() {
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);

  const [cursor, setCursor] = useState<number>(0);
  const [Brands, setBrands] = useState<AllBrandResult[]>([]);
  const [noMoreBrand, setNoMoreBrand] = useState<boolean>(false);
  const [following, setFollowing] = useState(false);
  const isFocused = useIsFocused();
  const changeFollowing = () => setFollowing(!following);
  const [searchText, setSearchText] = useState('');
  const [refreshing, setRefreshing] = useState(false);
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
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setCursor(0);
    refetch();
    setRefreshing(false);
  }, [refetch]);
  useEffect(() => {
    refetch();
  }, [refetch, isFocused, searchText]);
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
      />
    );
  };
  const searchFilter = Brands?.filter(brand =>
    brand.brandUsername.toUpperCase().includes(`${searchText.toUpperCase()}`),
  );
  const RenderSearchItem = ({item}) => {
    return (
      <SearchResultBrandUserContainer
        key={item.poolUserId}
        changeFollowing={changeFollowing}
        brandUsername={item.brandUsername}
        brandProfileImage={item.brandProfileImage}
        follow={item.userInfoDto?.follow}
        userFollowerCount={item.userInfoDto?.userFollowerCount}
        brandUserId={item.brandUserId}
        poolUserId={item.poolUserId}
        isLoginUser={item.isLoginUser}
        refetch={refetch}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.SearchScreenContainer}>
        <View>
          <SearchBar searchText={searchText} onChangeText={onChangeText} />
          <View style={styles.line} />
        </View>
        <View style={styles.container}>
          {searchText !== '' ? (
            searchFilter?.length !== 0 ? (
              <FlatList
                data={searchFilter}
                style={styles.flatList}
                renderItem={RenderSearchItem}
                showsVerticalScrollIndicator={false}
                onEndReached={() => {
                  onEndReached();
                }}
                onEndReachedThreshold={0.6}
                onRefresh={onRefresh}
                refreshing={refreshing}
                ListHeaderComponent={
                  <SearchResultSubTitle searchCount={searchFilter?.length} />
                }
                ListFooterComponent={
                  <>{isBrandLoading && <ActivityIndicator />}</>
                }
              />
            ) : (
              <>
                {/* <SearchResultSubTitle searchCount={searchFilter?.length} />
                <View style={styles.noSearchTextContainer}>
                  <Text style={styles.noSearchText}>검색 결과가 없습니다</Text>
                </View> */}
              </>
            )
          ) : (
            <FlatList
              data={Brands}
              style={styles.flatList}
              renderItem={RenderRecommandItem}
              showsVerticalScrollIndicator={false}
              onEndReached={() => {
                onEndReached();
              }}
              onEndReachedThreshold={0.6}
              onRefresh={onRefresh}
              refreshing={refreshing}
              ListHeaderComponent={<RecommandSubTitle />}
              ListFooterComponent={
                <>{isBrandLoading && <ActivityIndicator />}</>
              }
            />
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
    backgroundColor: theme.colors.White,
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
  bottomSafeArea: {
    height: 300,
  },
});

export default SearchScreen;
