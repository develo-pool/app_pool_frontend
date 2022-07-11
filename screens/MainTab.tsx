import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from './SearchScreen';
import FeedScreen from './FeedScreen';
import SettingStack from './SettingStack';
import BrandProfileScreen from './BrandProfileScreen';

const Tab = createBottomTabNavigator();

const isBrandUser = true;

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="SettingStack" component={SettingStack} />
      {isBrandUser && (
        <Tab.Screen name="BrandProfile" component={BrandProfileScreen} />
      )}
    </Tab.Navigator>
  );
}

export default MainTab;
