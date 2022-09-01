import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';

interface Props {
  messageImg: string;
}

const {width} = Dimensions.get('window');

function MessageImg({messageImg}: Props) {
  // 높이를 정해주기 위한 height useState와 Dimensions 사용
  const [height, setHeight] = useState(0);
  if (messageImg !== '') {
    // 아래는 이미지의 가로 세로를 가져와 setHeight로 높이 설정해주는..!
    Image.getSize(messageImg, (w, h) => {
      h >= w ? setHeight(width - 74) : setHeight(h * ((width - 74) / w));
    });
  }

  return (
    <Image
      style={styles.messageImg}
      source={{uri: messageImg, height}}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  messageImg: {
    borderRadius: 8,
    marginBottom: 12,
  },
});

export default MessageImg;
