export function CheckPhoneNumber(value: string) {
  const re = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
  return re.test(value);
}

export function CheckBirthday(value: string) {
  const re = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/;
  return re.test(value);
}

export function CheckPassword(value: string) {
  const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/;
  return re.test(value);
}

export function CheckUserName(value: string) {
  const re = /^(?=.*[a-z0-9])[a-z0-9]{3,20}$/;
  return re.test(value);
}

export function CheckNickName(value: string) {
  const re = /^(?=.*[a-zA-Z0-9가-힣_])[a-zA-Z0-9가-힣_]{3,20}$/;
  return re.test(value);
}

export function ReplaceKorean(value: string) {
  const re = /[가-힣ㄱ-ㅎㅏ-ㅣA-Z]/g;
  return value.replace(re, '');
}
