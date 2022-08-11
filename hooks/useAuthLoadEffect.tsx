import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {RootStackNavigationProp} from '../screens/types';
import {authorize} from '../slices/auth';
import authStorage from '../storages/authStorage';
import jwtDecode from 'jwt-decode';
import {RefreshToken} from '../api/auth/types';
import SplashScreen from 'react-native-splash-screen';
import {createAlert, deleteAlert} from '../slices/alert';

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
        navigation.navigate('Login');
        dispatch(
          createAlert({
            type: 'Error',
            text: '로그인 정보가 만료되었습니다. 다시 로그인해 주세요.',
          }),
        );
        setTimeout(() => dispatch(deleteAlert()), 3500);
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
