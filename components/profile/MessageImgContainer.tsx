import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

interface Props {
  messageImg: string;
}
const {width} = Dimensions.get('window');

function MessageImgContainer({messageImg}: Props) {
  // 높이를 정해주기 위한 height useState와 Dimensions 사용
  const [height, setHeight] = useState(0);
  if (messageImg !== '') {
    Image.getSize(messageImg, (w, h) => {
      h >= w ? setHeight(width - 74) : setHeight(h * ((width - 74) / w));
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
