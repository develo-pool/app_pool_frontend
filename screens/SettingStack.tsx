import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SetStackParamList} from './types';
import SettingScreen from './SettingScreen';
import FollowingListScreen from './FollowingListScreen';
import LoginScreen from './LoginScreen';
import BrandAssignScreen from './BrandAssignScreen';
import BrandAssignGuideScreen from './BrandAssignGuideScreen';
import BrandAssignCompleteScreen from './BrandAssignCompleteScreen';
import CategoryScreen from './CategoryScreen';

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
      <Set.Screen
        name="Login"
        component={LoginScreen}
        options={{headerTitle: () => <></>}}
      />
      <Set.Screen
        name="Category"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
      <Set.Screen name="BrandAssign" component={BrandAssignScreen} />
      <Set.Screen
        name="BrandAssignGuide"
        component={BrandAssignGuideScreen}
        options={{headerTitle: () => <></>}}
      />
      <Set.Screen
        name="BrandAssignComplete"
        component={BrandAssignCompleteScreen}
        options={{headerShown: false}}
      />
    </Set.Navigator>
  );
}

export default SettingStack;
