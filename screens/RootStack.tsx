import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from './MainTab';
import LoginScreen from './LoginScreen';
import CategoryScreen from './CategoryScreen';
import BrandAssignScreen from './BrandAssignScreen';
import SignUpScreen from './SignUpScreen';
import MessageScreen from './MessageScreen';
import CreateMessageScreen from './CreateMsgScreen';
import {RootStackParamList} from './types';
import GuideScreen from './GuideScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
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
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen
        name="Guide"
        component={GuideScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="BrandAssign" component={BrandAssignScreen} />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="CreateMessage" component={CreateMessageScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
