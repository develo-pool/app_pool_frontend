import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import theme from '../../../assets/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../../screens/types';

function SetWelcomeMsg() {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <Pressable
      style={styles.SetWelcomeMessage}
      onPress={() => navigation.navigate('WelcomeMessage')}>
      <Text style={styles.SetWelcomeText}>웰컴메시지 설정</Text>
      <Icon name="arrow-forward-ios" size={12} style={styles.RightArrow} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  SetWelcomeMessage: {
    paddingVertical: 14,
    backgroundColor: theme.colors.White,
    flexDirection: 'row',
    alignItems: 'center',
  },
  SetWelcomeText: {
    color: theme.colors.Poolblue,
    fontSize: theme.fontSize.P3,
    fontWeight: theme.fontWeight.Bold,
  },
  RightArrow: {
    marginLeft: 6,
    color: theme.colors.Poolblue,
  },
});

export default SetWelcomeMsg;
