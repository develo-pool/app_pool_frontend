import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import theme from '../../assets/theme';

interface Props {
  name: string;
}

function Hello({name}: Props) {
  return (
    <View>
      <View style={styles.centerAlign}>
        <Text style={styles.welcome}>안녕하세요</Text>
        <Text style={styles.welcomeUsername}>{name}</Text>
        <Text style={styles.welcome}>님 :)</Text>
      </View>
      <View style={styles.centerAlign}>
        <Text style={styles.welcome}>오늘의 메시지를 확인해 보세요</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    centerAlign: {
        height: 26,
        alignItems: 'center',
        flexDirection: 'row',
      },
      welcome: {
        fontSize: theme.fontSize.H4,
        fontWeight: theme.fontWeight.Bold,
        fontFamily: theme.fontFamily.Pretendard,
      },
      welcomeUsername: {
        fontSize: theme.fontSize.H4,
        fontWeight: theme.fontWeight.Bold,
        fontFamily: theme.fontFamily.Pretendard,
        color: theme.colors.Poolgreen,
        marginLeft: 4,
      },
});

export default Hello;
