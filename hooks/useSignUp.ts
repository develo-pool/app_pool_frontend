import {useMutation} from 'react-query';
import {signUp} from '../api/auth';
import {AuthError} from '../api/auth/types';
import useFirstLogin from './useFirstLogin';

export default function useSignUp() {
  const {mutate: login} = useFirstLogin();
  const mutation = useMutation(signUp, {
    onSuccess: data => {
      login({username: data.username, password: data.password});
    },
    onError: (error: AuthError) => {
      console.log(error);
    },
  });
  return mutation;
}
