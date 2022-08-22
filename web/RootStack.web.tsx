import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen.web';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Profile: {userId: number};
  Notfound: undefined;
};

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
        initialParams={{userId: 0}}
      />
      <Stack.Screen
        name="Notfound"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
