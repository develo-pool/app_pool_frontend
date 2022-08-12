import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import SearchBar from '../components/search/SearchBar';
import RecommandBrandUserContainer from '../components/search/RecommandBrandUserContainer';
import RecommandSubTitle from '../components/search/RecommandSubTitle';
import SearchResultBrandUserContainer from '../components/search/SearchResultBrandUserContainer';
import SearchResultSubTitle from '../components/search/SearchResultSubTitle';
import theme from '../assets/theme';

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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scroll}>
        <SearchBar
          searchText={searchText}
          onChangeText={onChangeText}
          DoSearching={DoSearching}
        />
        <View style={styles.line} />
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
