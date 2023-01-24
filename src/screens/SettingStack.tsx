import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingStackParamList} from './types';
import SettingScreen from './SettingScreen';

const Setting = createNativeStackNavigator<SettingStackParamList>();

function SettingStack() {
  return (
    <Setting.Navigator initialRouteName="Setting">
      <Setting.Screen
        name="Setting"
        component={SettingScreen}
        options={{headerShown: false}}
      />
    </Setting.Navigator>
  );
}

export default SettingStack;
