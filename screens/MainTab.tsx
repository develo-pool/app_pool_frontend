import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from './SearchScreen';
import FeedScreen from './FeedScreen';
import SettingStack from './SettingStack';
import BrandProfileScreen from './BrandProfileScreen';
import {MainTabParamList} from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

const isBrandUser = true;

function MainTab() {
  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      {isBrandUser && (
        <Tab.Screen
          name="BrandProfile"
          component={BrandProfileScreen}
          options={{headerShown: false}}
        />
      )}
      <Tab.Screen
        name="SettingStack"
        component={SettingStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
