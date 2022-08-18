import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

/* MainTab */
export type MainTabParamList = {
  Feed: undefined;
  Search: undefined;
  Profile: undefined;
  SettingStack: undefined;
};

/* RootStack */
export type RootStackParamList = {
  Welcome: undefined;
  MainTab: NavigatorScreenParams<MainTabParamList>;
  Login: undefined;
  SignUp: {current: number};
  Password: {current: number};
  Guide: undefined;
  Message: {detail: number};
  CreateMessage: undefined;
  WelcomeMessage: undefined;
  Preview: undefined;
  Profile: undefined;
  BrandProfile: undefined;
  SettingStack: undefined;
  BrandAssign: {current: number};
  BrandAssignGuide: undefined;
  BrandAssignComplete: undefined;
  EditProfile: undefined;
  FirebasePhoneAuth: undefined;
  FirebaseAuth: undefined;
};

/* SettingStack */
export type SettingStackParamList = {
  Setting: undefined;
  FollowingList: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type MainTabNatigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;

export type SettingStackNavigationProp = CompositeNavigationProp<
  MainTabNatigationProp,
  NativeStackNavigationProp<SettingStackParamList>
>;
