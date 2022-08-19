import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView, Text} from 'react-native';
import SearchBar from '../components/search/SearchBar';
import RecommandBrandUserContainer from '../components/search/RecommandBrandUserContainer';
import RecommandSubTitle from '../components/search/RecommandSubTitle';
import SearchResultBrandUserContainer from '../components/search/SearchResultBrandUserContainer';
import SearchResultSubTitle from '../components/search/SearchResultSubTitle';
import theme from '../assets/theme';
import {getUser} from '../api/auth';
import {useQuery} from 'react-query';
import {getAllBrand} from '../api/brand/index';

function SearchScreen() {
  const [following, setFollowing] = useState(false);
  const changeFollowing = () => setFollowing(!following);
  const [searchText, setSearchText] = useState('');
  const onChangeText = (payload: string) => setSearchText(payload);
  const [isSearching, setIsSearching] = useState(false);
  const DoSearching = () =>
    searchText !== '' ? setIsSearching(true) : setIsSearching(false);
  const {data: userData} = useQuery('getUserResult', () => getUser(), {
    refetchOnMount: 'always',
  });
  const {data: allBrandData} = useQuery('getAllBrand', () => getAllBrand());
  const Search = () => {
    if (isSearching) {
      allBrandData?.map(brandUser => {
        if (searchText == brandUser.brandUsername){
          return (
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
          );
        }
      })
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scroll}>
        <SearchBar
          searchText={searchText}
          onChangeText={onChangeText}
          DoSearching={DoSearching}
        />
        <View style={styles.line} />
        {isSearching === true ? (
          <ScrollView>
            <SearchResultSubTitle searchCount={9} />
            {Search()}
            {/* {allBrandData?.map(brandUser => {
              return (
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
              );
            })} */}
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
