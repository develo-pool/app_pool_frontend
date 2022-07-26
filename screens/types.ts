import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

/* MainTab */
export type MainTabParamList = {
  Feed: undefined;
  Search: undefined;
  BrandProfile: undefined;
  SettingStack: undefined;
};
/* RootStack */
export type RootStackParamList = {
  Setting: SetStackParamList;
  MainTab: undefined;
  Login: undefined;
  SignUp: {current: number};
  Guide: undefined;
  Category: undefined;
  BrandAssignGuide: undefined;
  BrandAssign: {current: number};
  BrandAssignComplete: undefined;
  Message: undefined;
  CreateMessage: undefined;
};

/* SettingStack */
export type SetStackParamList = {
  Setting: undefined;
  Login: undefined;
  FollowingList: undefined;
  BrandAssign: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
