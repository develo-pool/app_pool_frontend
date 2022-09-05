import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

interface Props {
  messageImg: string;
}
const windowWidth = Dimensions.get('window').width;

function MessageImgContainer({messageImg}: Props) {
  // 높이를 정해주기 위한 height useState와 Dimensions 사용
  const [height, setHeight] = useState(0);

  if (messageImg !== '') {
    Image.getSize(messageImg, (w, h) => {
      h >= w
        ? setHeight(windowWidth - 56)
        : setHeight(h * ((windowWidth - 56) / w));
    });
  }

  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.messageImg}
        source={{uri: messageImg !== '' ? messageImg : undefined, height}}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    maxHeight: windowWidth,
    marginBottom: 8,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  messageImg: {
    borderRadius: 6,
    maxWidth: windowWidth,
  },
});

export default MessageImgContainer;
