import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import theme from '../assets/theme';
import ProfileImageContainer from '../components/profile/ProfileImageContainer';
import ScreenBottomButton from './../components/ScreenBottomButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from './types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useQuery, useMutation} from 'react-query';
import {getBrand} from '../api/brand';
import {updateBrandInfo} from '../api/brand';

function EditProfile() {
  const [info, setInfo] = useState('');
  const navigation = useNavigation<RootStackNavigationProp>();
  const {data: brandData} = useQuery('getBrand', () => getBrand(''), {
    refetchOnMount: 'always',
  });
  const {mutate: write} = useMutation(updateBrandInfo, {
    onSuccess: () => {
      navigation.goBack();
    },
  });
  const onSubmit = useCallback(() => {
    console.log(info);
    write(info);
  }, [write, info]);

  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: false,
      headerShadowVisible: false,
      headerTitle: '',
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.UpperContainer}>
          <ProfileImageContainer isEditable={false} />
        </View>
        <TextInput
          style={styles.InputContainer}
          placeholder="소개 문구를 입력해주세요."
          autoFocus={true}
          maxLength={200}
          defaultValue={brandData?.brandInfo}
          onChangeText={setInfo}
        />
        <View style={styles.InputTextCounter}>
          <Text style={styles.CounterText}>{info.length}/200</Text>
        </View>
      </View>
      <ScreenBottomButton name="저장" onPress={onSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.White,
  },
  UpperContainer: {
    marginTop: 44,
  },
  InputContainer: {
    marginTop: 52,
    paddingHorizontal: 16,
    fontFamily: theme.fontFamily.Pretendard,
    color: theme.colors.Grey60,
    fontSize: theme.fontSize.P2,
  },
  InputTextCounter: {
    paddingHorizontal: 16,
    alignItems: 'flex-end',
    marginTop: 16,
  },
  CounterText: {
    fontFamily: theme.fontFamily.Pretendard,
    color: theme.colors.Grey30,
    fontSize: theme.fontSize.P2,
  },
});
export default EditProfile;
