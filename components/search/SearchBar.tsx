import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardTypeOptions,
} from 'react-native';
import theme from '../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TextInputs from '../TextInputs';

function SearchBar({searchText, onChangeText, DoSearching}) {
  return (
    <View>
      <TextInputs
        type={DoSearching ? 'disable' : 'focus'}
        placeholder="브랜드명을 입력해주세요."
        value={searchText}
        onChangeText={onChangeText}
      />
      <View style={styles.searchBar}>
        <TextInput
          value={searchText}
          onChangeText={onChangeText}
          // onSubmitEditing={DoSearching()}
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
