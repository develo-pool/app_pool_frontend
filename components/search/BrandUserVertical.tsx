import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import BrandUserCategory from './BrandUserCategory';
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

function BrandUserVertical() {
  return (
    <View style={styles.recommandBrandUser}>
      <View style={styles.brandUserContainer}>
        <Image
          style={styles.recommandBrandUserProfileImg}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpX76CrHxujOncRrHo9XMHks7UTYRpIbM_Mw&usqp=CAU',
          }}
        />
        <Text style={styles.brandUsername}>엄지렐라</Text>
        <Text style={styles.brandUserItro}>명품이 좋아요</Text>
        <View style={styles.brandUserFollowerContainer}>
          <Text style={styles.brandUserFollowerText}>팔로우</Text>
          <Text style={styles.brandUserFollowerText}>999</Text>
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
  recommandBrandUser: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  brandUserContainer: {
    alignItems: 'center',
  },
  recommandBrandUserProfileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginVertical: 10,
  },
  brandUsername: {
    fontWeight: '500',
    fontSize: 18,
    margin: 3,
  },
  brandUserItro: {
    fontWeight: '400',
    fontSize: 12,
    margin: 3,
    paddingHorizontal: 10,
    width: '80%',
  },
  brandUserFollowerContainer: {
    flexDirection: 'row',
  },
  brandUserFollowerText: {
    fontSize: 12,
    margin: 3,
    fontWeight: '500',
  },
  followText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  followBtnContainer: {
    backgroundColor: '#000000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    height: 30,
    marginBottom: 10,
  },
  followBtn: {},
  categoryContainer: {
    flexDirection:'row',

  },
  category: {
    backgroundColor: '#666666',
    borderRadius: 10,
    margin: 5,
  },
  categoryText: {

  },
});

export default BrandUserVertical;
