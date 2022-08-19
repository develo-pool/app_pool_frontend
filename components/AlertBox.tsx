import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../assets/theme';
// import {useSelector} from 'react-redux';
// import {RootState} from '../slices';

function AlertBox() {
  // const alertState = useSelector((state: RootState) => state.alert);
  return (
    <>
      <View style={[styles.box, styles.green]}>
        <Text style={[styles.text, styles.green]}>
          State Area View Test Alert!
        </Text>
      </View>
      {/* {alertState.isVisible && (
        <View
          style={[
            styles.box,
            alertState.alert.type === 'Error' ? styles.red : styles.green,
          ]}>
          <Text
            style={[
              styles.text,
              alertState.alert.type === 'Error' ? styles.red : styles.green,
            ]}>
            {alertState.alert.text}
          </Text>
        </View>
      )} */}
    </>
  );
}
const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    top: 16,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 19,
    borderRadius: 8,
    zIndex: 10,
  },
  text: {
    fontFamily: theme.fontFamily.Pretendard,
    fontSize: theme.fontSize.P2,
    lineHeight: 14,
  },
  red: {
    backgroundColor: '#FFE4E6',
    color: theme.colors.Error,
  },
  green: {
    backgroundColor: '#D7FFF3',
    color: theme.colors.Correct,
  },
});

export default AlertBox;
