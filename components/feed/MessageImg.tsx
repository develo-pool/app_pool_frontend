import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';

interface Props {
  messageImg: string;
}

function MessageImg({messageImg}: Props) {
  // 높이를 정해주기 위한 height useState와 Dimensions 사용
  const [height, setHeight] = useState(0);
  const {width} = Dimensions.get('window');
  // 아래는 이미지의 가로 세로를 가져와 setHeight로 높이 설정해주는..!
  Image.getSize(messageImg, (w, h) => {
    setHeight(h * (width / w));
  });

  return (
    <Image
      style={styles.messageImg}
      source={{uri: messageImg, height}}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  messageImg: {
    width: '100%',
  },
});

export default MessageImg;
