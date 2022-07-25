export function CheckPhoneNumber(value: string) {
  const regex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
  return regex.test(value);
}

export function CheckBirthday(value: string) {
  const regex = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/;
  return regex.test(value);
}

export function CheckPassword(value: string) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/;
  return regex.test(value);
}

export function CheckUserName(value: string) {
  const regex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
  return regex.test(value);
}

export function CheckNickName(value: string) {
  const regex = /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,16}$/;
  return regex.test(value);
}
