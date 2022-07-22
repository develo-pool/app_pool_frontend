import {useMutation} from 'react-query';
import {signUp} from '../api/auth';

export default function useRegister() {
  const mutation = useMutation(signUp, {
    onSuccess: data => {
      console.log(data);
    },
    onError: error => {
      console.log(error);
    },
  });
  return mutation;
}
