import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {RootStackNavigationProp} from '../screens/types';
import {authorize} from '../slices/auth';
import authStorage from '../storages/authStorage';
import jwtDecode from 'jwt-decode';
import {RefreshToken} from '../api/types';

export default function useAuthLoadEffect() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const dispatch = useDispatch();
  useEffect(() => {
    const fn = async () => {
      const auth = await authStorage.get();
      if (!auth) {
        return;
      }
      const decodedRefreshToken: RefreshToken = jwtDecode(auth.refreshToken);
      const date = new Date();
      if (decodedRefreshToken.exp * 1000 < date.getTime()) {
        authStorage.clear();
        return;
      }
      navigation.navigate('MainTab');
      dispatch(authorize(auth.accessToken));
    };
    fn();
  }, [dispatch, navigation]);
}
