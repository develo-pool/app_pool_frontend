import {useMutation} from 'react-query';
import {signUp} from '../api/auth';
import {AuthError} from '../api/types';

export default function useSignUp() {
  const mutation = useMutation(signUp, {
    onSuccess: data => {
      console.log(data);
    },
    onError: (error: AuthError) => {
      console.log(error);
    },
  });
  return mutation;
}
