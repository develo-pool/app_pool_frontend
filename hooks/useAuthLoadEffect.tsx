import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {RootStackNavigationProp} from '../screens/types';
import {authorize} from '../slices/auth';
import authStorage from '../storages/authStorage';
import jwtDecode from 'jwt-decode';
import {RefreshToken} from '../api/types';
import SplashScreen from 'react-native-splash-screen';

export default function useAuthLoadEffect() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const dispatch = useDispatch();
  useEffect(() => {
    const fn = async () => {
      const auth = await authStorage.get();
      if (!auth) {
        SplashScreen.hide();
        return;
      }
      const decodedRefreshToken: RefreshToken = jwtDecode(auth.refreshToken);
      const date = new Date();
      if (decodedRefreshToken.exp * 1000 - date.getTime() < 60 * 1000) {
        authStorage.clear();
        SplashScreen.hide();
        return;
      }
      navigation.navigate('MainTab');
      SplashScreen.hide();
      dispatch(authorize(auth.accessToken));
    };
    fn();
  }, [dispatch, navigation]);
}
