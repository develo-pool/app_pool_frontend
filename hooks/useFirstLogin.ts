import {login} from '../api/auth';
import {useMutation} from 'react-query';
import {AuthError} from '../api/types';
import {useDispatch} from 'react-redux';
import {authorize} from '../slices/auth';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../screens/types';
import authStorage from '../storages/authStorage';

export default function useFirstLogin() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const dispatch = useDispatch();
  const mutation = useMutation(login, {
    onSuccess: data => {
      dispatch(authorize(data.authorization));
      authStorage.set({
        accessToken: data.authorization,
        refreshToken: data['authorization-refresh'],
      });
      navigation.navigate('Guide');
    },
    onError: (error: AuthError) => {
      console.log(error);
    },
  });
  return mutation;
}
