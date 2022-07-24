// username: String (아이디) 영문소문자, 숫자만 사용 가능. 최소 3자 ~ 최대 20자.
// password: String (비밀번호) 8자이상, 1개이상의 알파벳소문자, 숫자, 특수문자 포함
// nickName: String (닉네임) 영문소문자, 숫자, 특수문자(언더바_)만 사용 가능. 최소 3자 ~ 최대 20자.
// phoneNumber: String (전화번호) 슬래시 없이 11자
// gender: String (성별) ‘male’ ‘female’
// birthday: String (생년월일 6글자)
// termAgreement: Boolean (이용약관 동의 여부)
// privacyAgreement: Boolean (개인정보 처리방침 동의 여부)

export function CheckPhoneNumber(value: string) {
  const regex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
  return regex.test(value);
}
