import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../../assets/theme';

interface Props {
  msgDate: string;
}

function NowDate({msgDate}: Props) {
  return (
    <View style={styles.date}>
      <Text style={styles.today}>Today</Text>
      <Text style={styles.dateNow}>{msgDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    height: 26,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 40,
    backgroundColor: theme.colors.Skyblue,
    borderRadius: 13,
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  today: {
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    paddingLeft: 10,
  },
  dateNow: {
    fontSize: theme.fontSize.P3,
    paddingRight: 10,
    paddingLeft: 6,
  },
});

export default NowDate;
