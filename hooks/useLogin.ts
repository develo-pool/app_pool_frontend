import {login} from '../api/auth';
import {useMutation} from 'react-query';
import {useDispatch} from 'react-redux';
import {authorize} from '../slices/auth';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../screens/types';
import authStorage from '../storages/authStorage';
import {createAlert, deleteAlert} from '../slices/alert';

export default function useLogin() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const dispatch = useDispatch();
  const mutation = useMutation(login, {
    onSuccess: data => {
      if (data) {
        dispatch(authorize(data.authorization));
        authStorage.set({
          accessToken: data.authorization,
          refreshToken: data['authorization-refresh'],
        });
        navigation.navigate('MainTab');
      }
    },
    onError: () => {
      dispatch(
        createAlert({
          type: 'Error',
          text: '잘못된 아이디 또는 비밀번호입니다.',
        }),
      );
      setTimeout(() => dispatch(deleteAlert()), 3500);
    },
  });
  return mutation;
}
