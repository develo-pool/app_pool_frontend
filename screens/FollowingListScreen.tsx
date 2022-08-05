import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import theme from '../assets/theme';
import FollowingList from '../components/setting/FollowingList';

function FollowingListScreen() {
  return (
    <View style={styles.Container}>
      <View style={styles.WholeFollowings}>
        <Text style={styles.WholeFollowingsText}> 총 12명</Text>
      </View>
      <ScrollView>
        <FollowingList brandName="푸르지오" followers={180000} />
        <FollowingList brandName="Britney" followers={345} />
        <FollowingList brandName="김삿갓" followers={410000} />
        <FollowingList brandName="Blue" followers={870} />
        <FollowingList brandName="Jack" followers={3210} />
        <FollowingList brandName="Isaac" followers={22} />
        <FollowingList brandName="푸르지오" followers={180000} />
        <FollowingList brandName="Britney" followers={345} />
        <FollowingList brandName="김삿갓" followers={410000} />
        <FollowingList brandName="Blue" followers={870} />
        <FollowingList brandName="Jack" followers={3210} />
        <FollowingList brandName="Isaac" followers={22} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  WholeFollowings: {
    height: 34,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.White,
    justifyContent: 'center',
  },
  WholeFollowingsText: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey50,
  },
});

export default FollowingListScreen;
