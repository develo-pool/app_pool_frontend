import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';

function SearchBar({searchText, onChangeText, DoSearching}) {
  return (
    <View>
      <View style={styles.searchBar}>
        <TextInput
          value={searchText}
          onChangeText={onChangeText}
          onSubmitEditing={DoSearching()}
          returnKeyType="go"
          placeholder={'브랜드명을 검색해주세요.'}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => DoSearching()}
          style={styles.searchIconContainer}>
          <Text style={styles.searchIcon}>🥕</Text>
        </TouchableOpacity>
      </View>
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
