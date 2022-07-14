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
        <View style={styles.searchBar}>
          <TextInput
            //   value={text}
            //   onChangeText={onChangeText}
            //   onSubmitEditing={addToDo}
            returnKeyType="go"
            placeholder={'브랜드명을 검색해주세요.'}
            style={styles.input}
          />
          <Button onPress={undefined} title="🥕" />
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>추천브랜드</Text>
        </View>
        <ScrollView style={styles.recommandBrandUserList}>
          <View style={styles.recommandBrandUser}>
            <Image
              style={styles.brandUserProfileImg}
              source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
            <Text style={styles.brandUsername}>{hoon.name}</Text>
            <View style={styles.brandUserFollowerContainer}>
              <Text>팔로우</Text>
              <Text>{hoon.follower}</Text>
            </View>
            <Button onPress={undefined} title="팔로우" />
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
  brandUserProfileImg: {},
  recommandBrandUserList: {},
  recommandBrandUser: {},
  brandUsername: {},
  brandUserFollowerContainer: {},
});

export default SearchScreen;
