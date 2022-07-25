import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SetStackParamList} from './types';
import SettingScreen from './SettingScreen';
import FollowingListScreen from './FollowingListScreen';
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator<SetStackParamList>();

function SettingStack() {
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerTitle: () => <></>}}
      />
      <Stack.Screen name="FollowingList" component={FollowingListScreen} />
    </Stack.Navigator>
  );
}

export default SettingStack;
