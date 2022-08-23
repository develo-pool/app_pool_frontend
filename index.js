/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
  onMessageReceived(remoteMessage);
});

const onMessageReceived = message => {
  console.log('background message: ', message);
  Platform.OS === 'ios' && Vibration.vibrate([400]);
};

AppRegistry.registerComponent(appName, () => App);
