import {useMutation} from 'react-query';
import {useDispatch} from 'react-redux';
import {signUp} from '../api/auth';
import useFirstLogin from './useFirstLogin';
import {createAlert, deleteAlert} from '../slices/alert';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../screens/types';

export default function useSignUp() {
  const {mutate: login} = useFirstLogin();
  const navigation = useNavigation<RootStackNavigationProp>();
  const dispatch = useDispatch();
  const mutation = useMutation(signUp, {
    onSuccess: data => {
      login({username: data.username, password: data.password});
    },
    onError: () => {
      dispatch(
        createAlert({
          type: 'Error',
          text: '오류가 발생했습니다. 다시 시도해 주세요.',
        }),
      );
      setTimeout(() => dispatch(deleteAlert()), 3500);
      navigation.reset({routes: [{name: 'Welcome'}]});
    },
  });
  return mutation;
}
