import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

interface Props {
  messageImg: string;
}

function MessageImgContainer({messageImg}: Props) {
  // 높이를 정해주기 위한 height useState와 Dimensions 사용
  const [height, setHeight] = useState(0);
  if (messageImg !== '') {
    const {width} = Dimensions.get('window');
    // 아래는 이미지의 가로 세로를 가져와 setHeight로 높이 설정해주는..!
    Image.getSize(messageImg, (w, h) => {
      setHeight(h * ((width - 32) / w));
    });
  }

  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.messageImg}
        source={{uri: messageImg !== '' ? messageImg : undefined, height}}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    maxHeight: 220,
    marginBottom: 8,
  },
  messageImg: {
    borderRadius: 6,
    maxHeight: 220,
    maxWidth: 400,
  },
});

export default MessageImgContainer;
