import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from './SearchScreen';
import FeedScreen from './FeedScreen';
import SettingStack from './SettingStack';
import ProfileScreen from './ProfileScreen';
import {MainTabParamList} from './types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import theme from './../assets/theme';
import {RootState} from '../slices';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator<MainTabParamList>();

const isBrandUser = true;

function MainTab() {
  const user = useSelector((state: RootState) => state.auth.user);
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
          headerShown: false,
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
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <Icon name="view-agenda" size={24} color={color} />
          ),
        }}
      />
      {/* {user?.role === 'BRAND_USER' ? (
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => (
              <Icon name="person" size={24} color={color} />
            ),
          }}
        />
      ) : null} */}
      {isBrandUser && (
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
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
          headerShown: false,
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
