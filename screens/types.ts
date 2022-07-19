import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

/* MainTab */

/* RootStack */

export type RootStackParamList = {
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

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
