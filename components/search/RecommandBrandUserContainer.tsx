import React from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
import theme from '../../assets/theme';
import FollowButton from '../profile/FollowButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../screens/types';

interface Props {
  following?: any;
  changeFollowing?: any;
}

function RecommandBrandUserContainer({following, changeFollowing}: Props) {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <Pressable
      style={styles.brandUserContainer}
      onPress={() => navigation.navigate('BrandProfile', {poolUserId: '1'})}>
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
            <FollowButton isFollowed={following} onPress={changeFollowing} />
          </View>
        </View>
      </View>
      <View style={styles.brandUserIntroContainer}>
        <Text style={styles.brandUserIntro}>
          더풀입니다. 많은 사랑과 관심 부탁드리며...!
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  brandUserContainer: {
    backgroundColor: theme.colors.White,
    borderRadius: 4,
    marginHorizontal: 16,
    marginBottom: 12,
    flex: 1,
    padding: 12,
  },
  brandUserHorizontal: {
    flexDirection: 'row',
    flex: 1,
  },
  searchBrandUserProfileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
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
    marginTop: 2,
    // marginBottom: 4,
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
  brandUserIntro: {
    color: theme.colors.Grey60,
    fontSize: theme.fontSize.P3,
    fontFamily: theme.fontFamily.Pretendard,
    fontWeight: theme.fontWeight.Light,
  },
  brandUserIntroContainer: {
    marginTop: 12,
  },
});

export default RecommandBrandUserContainer;
