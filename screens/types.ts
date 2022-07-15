import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

/* MainTab */

/* RootStack */

export type RootStackParamList = {
  MainTab: undefined;
  Login: undefined;
  SignUp: {current: number};
  Category: undefined;
  BrandAssign: undefined;
  Message: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
