import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  Image,
} from 'react-native';
import Title from '../components/Title';
import SearchBar from '../components/Search/SearchBar';

interface User {
  name: string;
  profileImg: string;
  intro: string;
  follower: number;
}

const hoon: User = {
  name: 'hoon',
  profileImg: 'https://reactnative.dev/img/tiny_logo.png',
  intro: '훈훈훈릠릠릠오오오늘늘늘수수수민민민화화화이이이팅팅팅',
  follower: 300,
};

function SearchScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Title title="탐색하기" alignCenter={false} />
        <SearchBar />
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>추천브랜드</Text>
        </View>

        <ScrollView style={styles.recommandBrandUserList}>
          <View style={styles.recommandBrandUser}>
            <Image
              style={styles.recommandBrandUserProfileImg}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Text style={styles.brandUsername}>{hoon.name}</Text>
            <View style={styles.brandUserFollowerContainer}>
              <Text>팔로우</Text>
              <Text>{hoon.follower}</Text>
            </View>
            <View style={styles.recommandBrandUserFollowBtn}>
              <Button onPress={undefined} title="팔로우" />
            </View>
          </View>
        </ScrollView>

        <ScrollView>
          <View style={styles.searchBrandUser}>
            <Image
              style={styles.searchBrandUserProfileImg}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Text style={styles.brandUsername}>{hoon.name}</Text>
            <View style={styles.searchBrandUserFollowBtn}>
              <Button onPress={undefined} title="팔로우" />
            </View>
          </View>
        </ScrollView>
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
