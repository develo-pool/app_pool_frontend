import React, {useState} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
// import FollowBtn from './FollowBtn';

// Props까지 생각해서 넣어주려다가 머리가 팡팡할듯하여 일단은 넘기도록 하겠읍니다.

// interface User {
//     name: string;
//     profileImg: string;
//     intro: string;
//     follower: number;
//   }

//   const hoon: User = {
//     name: 'hoon',
//     profileImg: 'https://reactnative.dev/img/tiny_logo.png',
//     intro: '훈훈훈릠릠릠오오오늘늘늘수수수민민민화화화이이이팅팅팅',
//     follower: 300,
//   };

function BrandUserContainer({following, follow, unfollow}) {
  return (
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
            <TouchableOpacity
              onPress={() => {
                following ? unfollow() : follow();
              }}
              style={styles.followBtn}>
              <Text style={styles.followText}>
                {following ? '언팔로우' : '팔로우'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.brandUserIntroContainer}>
        <Text style={styles.brandUserIntro}>
          더풀입니다. 많은 사랑과 관심 부탁드리며...!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  brandUserContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    margin: 5,
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
    color: '#c4c4c4',
  },
  followerCount: {
    marginLeft: 5,
  },
  followText: {
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 20,
    fontWeight: '600',
    fontSize: 15,
  },
  followBtn: {
    backgroundColor: '#000000',
    borderRadius: 20,
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
  },

  brandUserTexts: {
    padding: 10,
  },
  brandUsername: {
    fontWeight: '700',
    fontSize: 20,
  },
  brandUserIntro: {
    fontWeight: '400',
    fontSize: 12,
    margin: 3,
  },
  brandUserIntroContainer: {
    paddingVertical: 10,
  },
});

export default BrandUserContainer;
