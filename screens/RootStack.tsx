import React from 'react';
import MainTab from './MainTab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import MessageScreen from './MessageScreen';
import CreateMessageScreen from './CreateMsgScreen';
import GuideScreen from './GuideScreen';
import WelcomeScreen from './WelcomeScreen';
import PasswordScreen from './PasswordScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="MainTab">
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Password" component={PasswordScreen} />
      <Stack.Screen
        name="Guide"
        component={GuideScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen
        name="CreateMessage"
        component={CreateMessageScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
