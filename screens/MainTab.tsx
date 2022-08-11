import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from './SearchScreen';
import FeedScreen from './FeedScreen';
import SettingStack from './SettingStack';
import BrandProfileScreen from './BrandProfileScreen';
import {MainTabParamList} from './types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, StyleSheet} from 'react-native';
import theme from './../assets/theme';

const Tab = createBottomTabNavigator<MainTabParamList>();

const isBrandUser = true;

function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarInactiveTintColor: theme.colors.Grey40,
        tabBarActiveTintColor: 'white',
      }}>
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Icon name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Icon name="view-agenda" size={24} color={color} />
          ),
        }}
      />
      {isBrandUser && (
        <Tab.Screen
          name="BrandProfile"
          component={BrandProfileScreen}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => (
              <Icon name="person" size={24} color={color} />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="SettingStack"
        component={SettingStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Icon name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTab;
