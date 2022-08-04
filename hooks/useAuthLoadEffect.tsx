import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {applyToken, clearToken} from '../api/client';
import {RootStackNavigationProp} from '../screens/types';
import {authorize} from '../slices/auth';
import authStorage from '../storages/authStorage';
import jwtDecode from 'jwt-decode';

export default function useAuthLoadEffect() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const dispatch = useDispatch();
  useEffect(() => {
    const fn = async () => {
      const auth = await authStorage.get();
      if (!auth) {
        return;
      }
      const decodedToken: {
        exp: number;
        sub: string;
      } = jwtDecode(auth.refreshToken);
      const date = new Date();
      if (decodedToken.exp * 1000 < date.getTime()) {
        clearToken();
        authStorage.clear();
        return;
      }
      navigation.navigate('MainTab');
      dispatch(authorize(auth.user));
      applyToken(auth.accessToken);
    };
    fn();
  }, [dispatch, navigation]);
}
