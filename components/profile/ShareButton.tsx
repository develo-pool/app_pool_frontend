import React from 'react';
import {Share, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ShareButton({
  brandUserName,
  brandId,
}: {
  brandUserName: string;
  brandId: number;
}) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Pool',
        message: `${brandUserName}님의 POOL에 참여해보세요!${'\n'}https://app-pool-firebase.web.app/${brandId}`,
        url: `https://app-pool-firebase.web.app/${brandId}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <TouchableOpacity style={styles.button} onPress={() => onShare()}>
      <Icon name="logout" size={24} color="black" style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingTop: 16,
  },
  icon: {
    transform: [{rotate: '270deg'}],
  },
});

export default ShareButton;
