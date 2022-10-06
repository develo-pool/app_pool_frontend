import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import PoolLogo from '../../assets/logo/Logo.png';
import Title from '../../components/Title';
import theme from '../../assets/theme';
import DATA from '../../components/guide/Contents';
import Img0 from '../../assets/guide/0.png';
import Img1 from '../../assets/guide/1.png';
import Img2 from '../../assets/guide/2.png';
import Img3 from '../../assets/guide/3.png';
import Back from '../assets/info/Back.png';
import {Link} from 'react-router-dom';

function Info() {
  return (
    <>
      <Link to="/">
        <Image source={Back} style={styles.back} />
      </Link>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={PoolLogo} style={styles.logo} />
        <View style={styles.block}>
          <Title title={DATA[0].title} alignCenter={true} />
          <Image source={Img0} style={styles.image} />
          <Text style={styles.text}>{DATA[0].text}</Text>
        </View>
        <View style={styles.block}>
          <Title title={DATA[1].title} alignCenter={true} />
          <Image source={Img1} style={styles.image} />
          <Text style={styles.text}>{DATA[1].text}</Text>
        </View>
        <View style={styles.block}>
          <Title title={DATA[2].title} alignCenter={true} />
          <Image source={Img2} style={styles.image} />
          <Text style={styles.text}>{DATA[2].text}</Text>
        </View>
        <View style={styles.block}>
          <Title title={DATA[3].title} alignCenter={true} />
          <Image source={Img3} style={styles.image} />
          <Text style={styles.text}>{DATA[3].text}</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 100,
    textAlign: 'center',
  },
  back: {
    width: 32,
    height: 32,
    position: 'absolute',
    margin: 16,
    zIndex: 10,
  },
  logo: {
    alignSelf: 'center',
    width: 100,
    height: 73,
    marginTop: 50,
    marginBottom: 30,
  },
  image: {
    width: 263,
    height: 200,
    marginTop: 55,
    marginBottom: 55,
  },
  text: {
    fontSize: theme.fontSize.P1,
    fontWeight: theme.fontWeight.Bold,
    color: theme.colors.Grey60,
  },
});

export default Info;
