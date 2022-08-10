import React from 'react';
import MainTab from './MainTab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import MessageScreen from './MessageScreen';
import CreateMessageScreen from './CreateMsgScreen';
import WelcomeMessageScreen from './WelcomeMsgScreen';
import GuideScreen from './GuideScreen';
import WelcomeScreen from './WelcomeScreen';
import PasswordScreen from './PasswordScreen';
import useAuthLoadEffect from '../hooks/useAuthLoadEffect';
import ProfileScreen from './ProfileScreen';
import BrandAssignScreen from './BrandAssignScreen';
import BrandAssignGuideScreen from './BrandAssignGuideScreen';
import BrandAssignCompleteScreen from './BrandAssignCompleteScreen';
import SettingStack from './SettingStack';
import EditBrandProfile from './EditBrandProfileScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  useAuthLoadEffect();
  return (
    <Stack.Navigator initialRouteName="Welcome">
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
      <Stack.Screen name="BrandAssign" component={BrandAssignScreen} />
      <Stack.Screen
        name="BrandAssignGuide"
        component={BrandAssignGuideScreen}
      />
      <Stack.Screen
        name="BrandAssignComplete"
        component={BrandAssignCompleteScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen
        name="CreateMessage"
        component={CreateMessageScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WelcomeMessage"
        component={WelcomeMessageScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SettingStack"
        component={SettingStack}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditBrandProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
