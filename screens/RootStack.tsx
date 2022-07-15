import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import MainTab from './MainTab';
import LoginScreen from './LoginScreen';
import CategoryScreen from './CategoryScreen';
import BrandAssignScreen from './BrandAssignScreen';
import SignUpScreen from './SignUpScreen';
import MessageScreen from './MessageScreen';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerTitle: () => <></>}}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="BrandAssign" component={BrandAssignScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
