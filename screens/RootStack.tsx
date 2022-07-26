import React from 'react';
import MainTab from './MainTab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import LoginScreen from './LoginScreen';
import CategoryScreen from './CategoryScreen';
import BrandAssignScreen from './BrandAssignScreen';
import SignUpScreen from './SignUpScreen';
import MessageScreen from './MessageScreen';
import CreateMessageScreen from './CreateMsgScreen';
import GuideScreen from './GuideScreen';
import BrandAssignGuideScreen from './BrandAssignGuideScreen';
import BrandAssignCompleteScreen from './BrandAssignCompleteScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="MainTab">
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
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BrandAssignGuide"
        component={BrandAssignGuideScreen}
        options={{headerTitle: () => <></>}}
      />
      <Stack.Screen name="BrandAssign" component={BrandAssignScreen} />
      <Stack.Screen
        name="BrandAssignComplete"
        component={BrandAssignCompleteScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="CreateMessage" component={CreateMessageScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
