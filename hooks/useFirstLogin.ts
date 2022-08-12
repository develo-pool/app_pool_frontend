import {login} from '../api/auth';
import {useMutation} from 'react-query';
import {useDispatch} from 'react-redux';
import {authorize} from '../slices/auth';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../screens/types';
import authStorage from '../storages/authStorage';
import {createAlert, deleteAlert} from '../slices/alert';

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
      navigation.reset({routes: [{name: 'Guide'}]});
    },
    onError: () => {
      dispatch(
        createAlert({
          type: 'Error',
          text: '오류가 발생했습니다. 로그인해 주세요.',
        }),
      );
      setTimeout(() => dispatch(deleteAlert()), 3500);
      navigation.reset({routes: [{name: 'Login'}]});
    },
  });
  return mutation;
}
