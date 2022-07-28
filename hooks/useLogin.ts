import {login} from '../api/auth';
import {useMutation} from 'react-query';
import {AuthError} from '../api/types';
import {useDispatch} from 'react-redux';
import {authorize} from '../slices/auth';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from '../screens/types';
import {applyToken} from '../api/client';

export default function useLogin() {
  const navigation = useNavigation<RootStackNavigationProp>();
  const dispatch = useDispatch();
  const mutation = useMutation(login, {
    onSuccess: data => {
      dispatch(
        authorize({
          username: data.username,
          nickName: data.nickname,
          userStatus: data.role,
        }),
      );
      applyToken(data.authorization);
      navigation.navigate('MainTab');
    },
    onError: (error: AuthError) => {
      console.log(error);
    },
  });
  return mutation;
}
