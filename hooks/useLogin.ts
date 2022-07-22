import {login} from '../api/auth';
import {useMutation} from 'react-query';

export default function useLogin() {
  const mutation = useMutation(login, {
    onSuccess: data => {
      console.log(data);
    },
    onError: error => {
      console.log(error);
    },
  });
  return mutation;
}
