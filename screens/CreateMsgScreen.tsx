import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  // Image,
  TouchableOpacity,
} from 'react-native';
import ScreenBottomButton from '../components/ScreenBottomButton';
import {useNavigation} from '@react-navigation/native';
import {RootStackNavigationProp} from './types';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import MainContainer from '../components/MainContainer';

function CreateMessageScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();
  //   const [form, setForm] = useState({message: ''});

  return (
    <>
      <View style={styles.Main}>
        <View style={styles.CreateContainer}>
          <View style={styles.BrandInfo}>
            <View style={styles.BrandProfile} />
            <Text style={styles.BrandName}>마라가 좋아</Text>
          </View>
          <View style={styles.Line} />
          <TextInput
            style={styles.InputMessage}
            placeholder="메시지를 작성해주세요."
          />
          <View style={styles.ElementsContainer}>
            <Icon name="camera-alt" size={22} style={styles.Camera} />
            <Icon name="insert-link" size={24} style={styles.Link} />
            <TouchableOpacity style={styles.PreviewContainer}>
              <Text style={styles.Preview}> 미리보기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScreenBottomButton
        name="작성하기"
        onPress={() => navigation.navigate('MainTab')}
        // enabled={Boolean(form.message)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CreateContainer: {
    backgroundColor: 'white',
    width: 328,
    height: 320,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  BrandInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  BrandProfile: {
    height: 36,
    width: 36,
    borderRadius: 18,
    resizeMode: 'contain',
    backgroundColor: '#C7C7C7',
  },
  BrandName: {
    marginLeft: 12,
    fontSize: 13,
    fontWeight: '700',
  },
  Line: {
    height: 0.5,
    width: 292,
    backgroundColor: '#C7C7C7',
    marginVertical: 12,
  },
  InputMessage: {
    height: 196,
    paddingHorizontal: 4,

    fontSize: 14,
    fontWeight: '400',
  },
  ElementsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
  },
  Camera: {
    marginRight: 16,
  },
  Link: {
    marginRight: 160,
  },
  PreviewContainer: {},
  Preview: {
    fontSize: 13,
    fontWeight: '700',
  },
});

export default CreateMessageScreen;
