import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import theme from '../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  searchText?: string;
  onChangeText?: any;
}

function SearchBar({searchText, onChangeText}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <View style={styles.searchBarContainer}>
          <Icon name="search" size={24} color={theme.colors.Grey80} />
          <TextInput
            value={searchText}
            onChangeText={onChangeText}
            returnKeyType="go"
            placeholder={'브랜드명을 검색해주세요.'}
            placeholderTextColor={'rgba(0, 0, 0, 0.2)'}
            style={styles.input}
            autoCapitalize={'none'}
            autoComplete={'off'}
          />
        </View>
        {searchText !== '' ? (
          <TouchableOpacity onPress={() => onChangeText('')}>
            <Icon name="cancel" size={16} color={theme.colors.Grey30} />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.White,
  },
  input: {
    fontSize: theme.fontSize.P1,
    marginHorizontal: 16,
    fontFamily: theme.fontFamily.Pretendard,
    paddingVertical: 12,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderRadius: 6,
    marginVertical: 16,
    marginHorizontal: 16,
    justifyContent: 'space-between',
    borderColor: theme.colors.Grey80,
    borderWidth: 1,
    maxHeight: 48,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  default: {
    backgroundColor: theme.colors.White,
  },
  focus: {
    borderColor: theme.colors.Black,
  },
});

export default SearchBar;
