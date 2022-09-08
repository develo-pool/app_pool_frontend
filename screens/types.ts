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
  Message: undefined;
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
  Preview: {messageBody: string};
  Profile: undefined;
  BrandProfile: {brandUserId: number; poolUserId: number};
  SettingStack: undefined;
  BrandAssign: {current: number};
  BrandAssignGuide: undefined;
  BrandAssignComplete: undefined;
  EditProfile: undefined;
  FirebasePhoneAuth: undefined;
  FirebaseAuth: undefined;
  FollowingList: {followingCount: number};
  EditUser: undefined;
  FeedMessage: {detail: number};
};

/* SettingStack */
export type SettingStackParamList = {
  Setting: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type MainTabNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;

export type SettingStackNavigationProp = CompositeNavigationProp<
  MainTabNavigationProp,
  NativeStackNavigationProp<SettingStackParamList>
>;
