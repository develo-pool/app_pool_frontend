import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

function SearchBar() {
  return (
    <View style={styles.searchBar}>
      <TextInput
        //   value={text}
        //   onChangeText={onChangeText}
        //   onSubmitEditing={addToDo}
        returnKeyType="go"
        placeholder={'브랜드명을 검색해주세요.'}
        style={styles.input}
      />
      {/* <Button onPress={undefined} title="🥕" /> */}
      <TouchableOpacity
        onPress={() => undefined}
        style={styles.searchIconContainer}>
        <Text style={styles.searchIcon}>🥕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    // backgroundColor: '#666666',
    fontSize: 18,
    color: 'FFFFFF',
    flex: 9,
    marginHorizontal: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    backgroundColor: '#333333',
  },
  searchIconContainer: {
    flex: 1,
  },
  searchIcon: {
    fontSize: 25,
  },
});

export default SearchBar;
