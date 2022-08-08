import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import FollowButton from '../profile/FollowButton';
import theme from '../../assets/theme';

function SearchResultBrandUserContainer({following, changeFollowing}) {
  return (
    <View>
      <View style={styles.brandUserContainer}>
        <View style={styles.brandUserHorizontal}>
          <Image
            style={styles.searchBrandUserProfileImg}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpX76CrHxujOncRrHo9XMHks7UTYRpIbM_Mw&usqp=CAU',
            }}
          />
          <View style={styles.spacebetween}>
            <View style={styles.brandUserTextContainer}>
              <Text style={styles.brandUsername}>신규유튜버</Text>
              <View style={styles.brandUserFollowerContainer}>
                <Text style={styles.followerText}>팔로워</Text>
                <Text style={styles.followerCount}>1.9K</Text>
              </View>
            </View>
            <View>
              <FollowButton isFollowed={following} onPress={changeFollowing}/>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomBorderLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  brandUserContainer: {
    backgroundColor: 'white',
    width: '100%',
    flex: 1,
    padding: 10,
  },
  brandUserHorizontal: {
    flexDirection: 'row',
    flex: 1,
  },
  searchBrandUserProfileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginVertical: 5,
    marginRight: 5,
  },
  spacebetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  brandUserTextContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 3,
  },
  brandUserFollowerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  followerText: {
    color: theme.colors.Grey40,
    fontSize: theme.fontSize.P3,
    fontFamily: theme.fontFamily.Pretendard,
    fontWeight: theme.fontWeight.Light,
    marginRight: 4,
  },
  followerCount: {
    color: theme.colors.Grey80,
    fontSize: theme.fontSize.P3,
    fontFamily: theme.fontFamily.Pretendard,
    fontWeight: theme.fontWeight.Bold,
  },
  brandUserTexts: {
    padding: 10,
  },
  brandUsername: {
    fontWeight: theme.fontWeight.Bold,
    fontSize: theme.fontSize.P2,
    color: theme.colors.Grey80,
  },
  brandUserIntroContainer: {
    paddingVertical: 10,
  },
  bottomBorderLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#c5c5c5',
  },
});

export default SearchResultBrandUserContainer;
