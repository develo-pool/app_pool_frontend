import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SignUpParams} from '../../api/auth';
import TextInputs from '../TextInputs';
import Title from '../Title';
import {InputTitle, RadioButton} from './AuthComponents';
import {CheckBirthday} from './Validation';

function SecondForm({
  onChangeText,
  form,
}: {
  onChangeText: any;
  form: SignUpParams;
}) {
  return (
    <View>
      <Title title="생년월일 및 성별을" />
      <Title title="입력해 주세요." hasMargin={true} />
      <InputTitle title="생년월일" />
      <View style={styles.row}>
        <TextInputs
          type="default"
          placeholder="예. 990101"
          keyboardType="numeric"
          value={form.birthDay}
          onChangeText={onChangeText('birthDay')}
          maxLength={6}
          alert={
            CheckBirthday(form.birthDay) || !form.birthDay
              ? undefined
              : {type: 'Error', text: '생년월일 6자리로 입력해 주세요.'}
          }
        />
      </View>
      <InputTitle title="성별" />
      <View style={styles.row}>
        <RadioButton
          text="여자"
          value="female"
          disabled={form.gender !== 'female'}
          onPress={onChangeText('gender')}
        />
        <RadioButton
          text="남자"
          value="male"
          disabled={form.gender !== 'male'}
          marginLeft={true}
          onPress={onChangeText('gender')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginBottom: 30,
    minHeight: 48,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#BABABA',
    backgroundColor: 'white',
    paddingHorizontal: 12,
  },
});

export default SecondForm;
