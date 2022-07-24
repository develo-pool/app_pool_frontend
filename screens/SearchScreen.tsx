import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Title from '../components/Title';
import SearchBar from '../components/search/SearchBar';
import BrandUserContainer from '../components/search/BarandUserContainer';
import SubTitle from '../components/search/SubTitle';

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
  const [text, setText] = useState('');
  const onChangeText = setText(text);
  const [following, setFollowing] = useState(false);
  const follow = () => setFollowing(true);
  const unfollow = () => setFollowing(false);
  const [isSearching, setIsSearching] = useState(false);
  const searching = () =>
    text === '' ? setIsSearching(false) : setIsSearching(true);
  const searchBtnOnPress = () => searching();
  return (
    <View style={styles.container}>
      <ScrollView>
        <Title title="탐색하기" alignCenter={false} />
        <SearchBar
          text={text}
          onChangeText={onChangeText}
          searchBtnOnPress={searchBtnOnPress}
        />
        <SubTitle isSearching={isSearching} searchCount={9} />
        <ScrollView>
          <BrandUserContainer
            following={following}
            follow={follow}
            unfollow={unfollow}
          />
        </ScrollView>

        <ScrollView>{/* <BrandUserContainer /> */}</ScrollView>
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
