import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Title from '../components/Title';
import SearchBar from '../components/search/SearchBar';
import RecommandBrandUserContainer from '../components/search/RecommandBrandUserContainer';
import RecommandSubTitle from '../components/search/RecommandSubTitle';
import SearchResultBrandUserContainer from '../components/search/SearchResultBrandUserContainer';
import SearchResultSubTitle from '../components/search/SearchResultSubTitle';

// interface User {
//   name: string;
//   profileImg: string;
//   intro: string;
//   follower: number;
// }

// const hoon: User = {
//   name: 'hoon',
//   profileImg: 'https://reactnative.dev/img/tiny_logo.png',
//   intro: ''
//   follower: 300,
// };

function SearchScreen() {
  const [following, setFollowing] = useState(false);
  const changeFollowing = () => setFollowing(!following);
  const [searchText, setSearchText] = useState('');
  const onChangeText = payload => setSearchText(payload);
  const [isSearching, setIsSearching] = useState(false);
  const DoSearching = () =>
    searchText !== '' ? setIsSearching(true) : setIsSearching(false);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Title title="탐색하기" alignCenter={false} />
        <SearchBar
          searchText={searchText}
          onChangeText={onChangeText}
          DoSearching={DoSearching}
        />
        {isSearching ? (
          <ScrollView>
            <SearchResultSubTitle searchCount={9} />
            <SearchResultBrandUserContainer
              following={following}
              changeFollowing={changeFollowing}
            />
            <SearchResultBrandUserContainer
              following={following}
              changeFollowing={changeFollowing}
            />
          </ScrollView>
        ) : (
          <ScrollView>
            <RecommandSubTitle />
            <RecommandBrandUserContainer
              following={following}
              changeFollowing={changeFollowing}
            />
            <RecommandBrandUserContainer
              following={following}
              changeFollowing={changeFollowing}
            />
          </ScrollView>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  searchTitle: {
    margin: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#666666',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    margin: 10,
    fontSize: 18,
    color: 'FFFFFF',
  },
  subTitle: {},
  subTitleContainer: {},
  recommandBrandUserProfileImg: {},
  recommandBrandUserList: {},
  recommandBrandUser: {},
  recommandBrandUserFollowBtn: {},
  brandUsername: {},
  brandUserFollowerContainer: {},
  searchBrandUser: {},
  searchBrandUserProfileImg: {},
  searchBrandUserFollowBtn: {},
});

export default SearchScreen;
