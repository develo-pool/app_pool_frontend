import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

/* MainTab */
export type MainTabParamList = {
  Feed: undefined;
  Search: undefined;
  BrandProfile: undefined;
  SettingStack: undefined;
};

/* RootStack */
export type RootStackParamList = {
  Welcome: undefined;
  MainTab: undefined;
  Login: undefined;
  SignUp: {current: number};
  Guide: undefined;
  Message: undefined;
  CreateMessage: undefined;
  Setting: SettingStackParamList;
};

/* SettingStack */
export type SettingStackParamList = {
  Setting: undefined;
  Login: undefined;
  FollowingList: undefined;
  BrandAssign: {current: number};
  BrandAssignGuide: undefined;
  BrandAssignComplete: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type SettingStackNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<SettingStackParamList>,
  BottomTabNavigationProp<MainTabParamList, 'SettingStack'>
>;
