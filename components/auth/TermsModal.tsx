import React from 'react';
import {Modal, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainContainer from '../MainContainer';
import ScreenBottomButton from '../ScreenBottomButton';
import Terms from '../Terms';

function TermsModal({
  type,
  onPress,
  setModalVisible,
  visible,
  buttonEnabled,
}: {
  type: 'term' | 'privacy';
  onPress: any;
  setModalVisible: any;
  visible: boolean;
  buttonEnabled?: boolean;
}) {
  const onPressHandler = () => {
    onPress(true);
    setModalVisible(false);
  };
  return (
    <Modal visible={visible}>
      <MainContainer>
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={styles.icon}>
          <Icon name="close" size={24} color="black" />
        </TouchableOpacity>
        <Terms type={type} />
      </MainContainer>
      {buttonEnabled ? (
        <ScreenBottomButton name="동의합니다." onPress={onPressHandler} />
      ) : (
        <ScreenBottomButton
          name="동의했습니다."
          onPress={onPressHandler}
          enabled={false}
        />
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  icon: {
    // alignSelf: 'flex-end',
    // marginTop: 24,
    position: 'absolute',
    right: 16,
    top: 16,
  },
});

export default TermsModal;
