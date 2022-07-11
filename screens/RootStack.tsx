import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import LoginScreen from './LoginScreen';
import CategoryScreen from './CategoryScreen';
import BrandAssignScreen from './BrandAssignScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="BrandAssign" component={BrandAssignScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;