import React from 'react';
import MainTab from './MainTab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import MessageScreen from './MessageScreen';
import FeedMessageScreen from './FeedMessageScreen';
import CreateMessageScreen from './CreateMsgScreen';
import WelcomeMessageScreen from './WelcomeMsgScreen';
import GuideScreen from './GuideScreen';
import WelcomeScreen from './WelcomeScreen';
import PasswordScreen from './PasswordScreen';
import useAuthLoadEffect from '../hooks/useAuthLoadEffect';
import BrandProfileScreen from './BrandProfileScreen';
import BrandAssignScreen from './BrandAssignScreen';
import BrandAssignGuideScreen from './BrandAssignGuideScreen';
import BrandAssignCompleteScreen from './BrandAssignCompleteScreen';
import FollowingListScreen from './FollowingListScreen';
import EditUserScreen from './EditUserScreen';
import EditProfile from './EditProfileScreen';
import PreviewScreen from './PreviewScreen';

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
      <Stack.Screen name="FeedMessage" component={FeedMessageScreen} />
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
        name="Preview"
        component={PreviewScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="BrandProfile" component={BrandProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen
        name="FollowingList"
        component={FollowingListScreen}
        options={{headerShadowVisible: false, title: ''}}
      />
      <Stack.Screen
        name="EditUser"
        component={EditUserScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;