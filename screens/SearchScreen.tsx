import React from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput, Button } from 'react-native';
import Title from '../components/Title';

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
});

export default SearchScreen;
