import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SetStackParamList} from './types';
import SettingScreen from './SettingScreen';
import FollowingListScreen from './FollowingListScreen';
import LoginScreen from './LoginScreen';
import BrandAssignScreen from './BrandAssignScreen';

const Set = createNativeStackNavigator<SetStackParamList>();

function SettingStack() {
  return (
    <Set.Navigator initialRouteName="Setting">
      <Set.Screen
        name="Setting"
        component={SettingScreen}
        options={{headerShown: false}}
      />
      <Set.Screen name="FollowingList" component={FollowingListScreen} />
      <Set.Screen name="BrandAssign" component={BrandAssignScreen} />
      <Set.Screen
        name="Login"
        component={LoginScreen}
        options={{headerTitle: () => <></>}}
      />
    </Set.Navigator>
  );
}

export default SettingStack;
