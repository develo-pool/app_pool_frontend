import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import LoginScreen from './LoginScreen';
import CategoryScreen from './CategoryScreen';
import BrandAssignScreen from './BrandAssignScreen';
import SignUpScreen from './SignUpScreen';

type RootStackParamList = {
  MainTab: undefined;
  Login: undefined;
  SignUp: undefined;
  Category: undefined;
  BrandAssign: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerTitle: () => <></>}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{headerTitle: () => <></>}}
      />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="BrandAssign" component={BrandAssignScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
