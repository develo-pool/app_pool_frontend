import React from 'react';
import {Image, StyleSheet} from 'react-native';
import PoolLogo from '../../assets/logo/Logo.png';

function Info() {
  return (
    <>
      <Image source={PoolLogo} style={styles.logo} />
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    width: 100,
    height: 70,
    marginTop: 50,
    marginBottom: 30,
  },
});

export default Info;
