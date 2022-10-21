import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import theme from '../../assets/theme';
import SearchLogo from '../../web/assets/search/Search.png';
import OnSearchLogo from '../../web/assets/search/Search_OnFocus.png';
import Delete from '../../web/assets/search/Delete.png';
// import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  searchText?: string;
  onChangeText?: any;
}

function SearchBar({searchText, onChangeText}: Props) {
  const [focused, setFocused] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <View style={[styles.searchBar, focused && styles.focus]}>
        <View style={styles.searchBarContainer}>
          {focused ? (
            <Image source={OnSearchLogo} style={styles.logo} />
          ) : (
            <Image source={SearchLogo} style={styles.logo} />
          )}
          <TextInput
            value={searchText}
            onChangeText={onChangeText}
            returnKeyType="go"
            placeholder={'브랜드명을 검색해주세요.'}
            placeholderTextColor={'rgba(0, 0, 0, 0.2)'}
            style={searchText !== '' ? styles.input_searchText : styles.input}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            autoCapitalize={'none'}
            autoComplete={'off'}
          />
        </View>
        {searchText !== '' ? (
          <TouchableOpacity onPress={() => onChangeText('')}>
            <Image source={Delete} style={styles.logo} />
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
    marginLeft: -36,
    marginRight: -13,
    fontFamily: theme.fontFamily.Pretendard,
    paddingVertical: 12,
    flex: 1,
    paddingHorizontal: 40,
    borderColor: theme.colors.Black,
    borderRadius: 6,
  },
  input_searchText: {
    fontSize: theme.fontSize.P1,
    marginLeft: -36,
    marginRight: -36,
    fontFamily: theme.fontFamily.Pretendard,
    paddingVertical: 12,
    flex: 1,
    paddingHorizontal: 40,
    borderColor: theme.colors.Black,
    borderRadius: 6,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderRadius: 6,
    marginVertical: 16,
    marginHorizontal: 16,
    justifyContent: 'space-between',
    borderColor: theme.colors.Grey30,
    borderWidth: 1,
    maxHeight: 48,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  default: {
    backgroundColor: theme.colors.White,
  },
  focus: {
    borderColor: theme.colors.Black,
  },
  logo: {
    width: 24,
    height: 24,
    padding: 4,
  },
});

export default SearchBar;
