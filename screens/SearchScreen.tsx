import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import SearchBar from '../components/search/SearchBar';
import RecommandBrandUserContainer from '../components/search/RecommandBrandUserContainer';
import RecommandSubTitle from '../components/search/RecommandSubTitle';
import SearchResultBrandUserContainer from '../components/search/SearchResultBrandUserContainer';
import SearchResultSubTitle from '../components/search/SearchResultSubTitle';
import theme from '../assets/theme';
import {useQuery} from 'react-query';
import {getAllBrand} from '../api/brand/index';
import {useEffect} from 'react';

function SearchScreen() {
  const [following, setFollowing] = useState(false);
  const changeFollowing = () => setFollowing(!following);
  const [searchText, setSearchText] = useState('');
  const onChangeText = (payload: string) => setSearchText(payload);
  const {data: allBrandData, refetch} = useQuery(
    'getAllBrand',
    () => getAllBrand(),
    {
      enabled: false,
    },
  );
  const searchFilter = allBrandData?.filter(brand =>
    brand.brandUsername.includes(`${searchText}`),
  );
  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scroll}>
        <SearchBar searchText={searchText} onChangeText={onChangeText} />
        <View style={styles.line} />
        {searchText !== '' ? (
          <ScrollView>
            <SearchResultSubTitle searchCount={searchFilter?.length} />
            {searchFilter?.map((brandUser: any) => (
              <SearchResultBrandUserContainer
                key={brandUser.poolUserId}
                changeFollowing={changeFollowing}
                brandUsername={brandUser.brandUsername}
                brandProfileImage={brandUser.brandProfileImage}
                follow={brandUser.userInfoDto?.follow}
                userFollowerCount={brandUser.userInfoDto?.userFollowerCount}
                poolUserId={brandUser.poolUserId}
                isLoginUser={brandUser.isLoginUser}
              />
            ))}
          </ScrollView>
        ) : (
          <ScrollView>
            <RecommandSubTitle />
            {allBrandData?.map(brandUser => {
              return (
                <RecommandBrandUserContainer
                  key={brandUser.poolUserId}
                  changeFollowing={changeFollowing}
                  brandUsername={brandUser.brandUsername}
                  brandInfo={brandUser.brandInfo}
                  brandProfileImage={brandUser.brandProfileImage}
                  follow={brandUser.userInfoDto?.follow}
                  userFollowerCount={brandUser.userInfoDto?.userFollowerCount}
                  poolUserId={brandUser.poolUserId}
                  isLoginUser={brandUser.isLoginUser}
                />
              );
            })}
          </ScrollView>
        )}
      </ScrollView>
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
});

export default SearchScreen;
