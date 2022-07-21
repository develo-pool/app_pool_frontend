import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
// import FollowBtn from './FollowBtn';

// Props까지 생각해서 넣어주려다가 머리가 팡팡할듯하여 일단은 넘기도록 하겠읍니다.
// interface Props {
//     brandUser : User;
//     user : User;

// }

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
function BrandUserHorizontal() {
  return (
    <View style={styles.searchBrandUser}>
      <View style={styles.brandUserContainer}>
        <Image
          style={styles.searchBrandUserProfileImg}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpX76CrHxujOncRrHo9XMHks7UTYRpIbM_Mw&usqp=CAU',
          }}
        />
        <View style={styles.brandUserTexts}>
          <Text style={styles.brandUsername}>신규유튜버</Text>
          <Text style={styles.brandUserItro}>잘부탁드려요</Text>
        </View>
      </View>
      <View style={styles.followBtnContainer}>
        <TouchableOpacity onPress={() => undefined} style={styles.followBtn}>
          <Text style={styles.followText}>팔로우</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBrandUser: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    padding: 10,
  },
  brandUserContainer: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBrandUserProfileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginVertical: 5,
    marginRight: 5,
  },
  brandUserTexts: {
    padding: 10,
  },
  brandUsername: {
    fontWeight: '700',
    fontSize: 20,
    margin: 3,
  },
  brandUserItro: {
    fontWeight: '400',
    fontSize: 12,
    margin: 3,
  },
  brandUserFollowerContainer: {},
  followText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  followBtn: {},
  followBtnContainer: {
    backgroundColor: '#000000',
    flex: 2,
    borderRadius: 10,
    alignItems: 'center',
    height: '80%',
    justifyContent: 'center',
  },
});

export default BrandUserHorizontal;
