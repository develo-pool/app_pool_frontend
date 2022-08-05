import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import FollowButton from '../components/profile/FollowButton';
import theme from '../assets/theme';

function FollowingListScreen() {
  return (
    <ScrollView style={styles.Container}>
      <TouchableOpacity style={styles.FollowingsContainer}>
        <View style={styles.BrandInfomation}>
          <View style={styles.BrandProfileImage}>
            <Image source={require('../assets/ProfileImage.png')} />
          </View>
          <View style={styles.NameFollowers}>
            <Text style={styles.BrandName}>BrandName</Text>
            <View style={styles.FollowerContainer}>
              <Text style={styles.Follower}>팔로워</Text>
              <Text style={styles.FollowerCount}>1.8k</Text>
            </View>
          </View>
        </View>
        <FollowButton isFollowed={false} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {},
  WholeFollowings: {},
  FollowingsContainer: {},
  BrandInfomation: {},
  BrandProfileImage: {},
  BrandName: {},
  NameFollowers: {},
  FollowerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Follower: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Light,
    color: theme.colors.Grey40,
  },
  FollowerCount: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey80,
    marginLeft: 4,
  },
});

export default FollowingListScreen;
