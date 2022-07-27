import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingStackParamList} from './types';
import SettingScreen from './SettingScreen';
import FollowingListScreen from './FollowingListScreen';
import LoginScreen from './LoginScreen';
import BrandAssignScreen from './BrandAssignScreen';
import BrandAssignGuideScreen from './BrandAssignGuideScreen';
import BrandAssignCompleteScreen from './BrandAssignCompleteScreen';

const Setting = createNativeStackNavigator<SettingStackParamList>();

function SettingStack() {
  return (
    <Setting.Navigator initialRouteName="Setting">
      <Setting.Screen
        name="Setting"
        component={SettingScreen}
        options={{headerShown: false}}
      />
      <Setting.Screen name="FollowingList" component={FollowingListScreen} />
      <Setting.Screen
        name="Login"
        component={LoginScreen}
        options={{headerTitle: () => <></>}}
      />
      <Setting.Screen name="BrandAssign" component={BrandAssignScreen} />
      <Setting.Screen
        name="BrandAssignGuide"
        component={BrandAssignGuideScreen}
        options={{headerTitle: () => <></>}}
      />
      <Setting.Screen
        name="BrandAssignComplete"
        component={BrandAssignCompleteScreen}
        options={{headerShown: false}}
      />
    </Setting.Navigator>
  );
}

export default SettingStack;
