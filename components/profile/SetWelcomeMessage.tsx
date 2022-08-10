import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import theme from '../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../screens/types';

function SetWelcomeMsg() {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <Pressable
      style={styles.SetWelcomeMessage}
      onPress={() => navigation.navigate('WelcomeMessage')}>
      <Text style={styles.SetWelcomeText}>웰컴메시지를 설정해주세요</Text>
      <Icon name="arrow-forward-ios" size={12} style={styles.RightArrow} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  SetWelcomeMessage: {
    height: 50,
    backgroundColor: theme.colors.White,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  SetWelcomeText: {
    color: theme.colors.Grey50,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
    // color:theme.colors.Poolblue,
  },
  RightArrow: {
    marginLeft: 6,
    color: theme.colors.Grey80,
    // color:theme.colors.Poolblue,
  },
});

export default SetWelcomeMsg;
