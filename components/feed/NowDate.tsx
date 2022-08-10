import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../assets/theme';

interface Props {
  msgDate: number;
}

function NowDate({msgDate}: Props) {
  return (
    <View style={styles.date}>
      <Text style={styles.today}>Today</Text>
      <Text style={styles.dateNow}>{Date.now()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    height: 26,
    width: 131,
    backgroundColor: theme.colors.Skyblue,
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 40,
  },
  today: {
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    marginLeft: 10,
  },
  dateNow: {
    fontSize: theme.fontSize.P3,
    marginRight: 10,
    marginLeft: 6,
  },
});

export default NowDate;
