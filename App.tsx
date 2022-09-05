import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import RootStack from './screens/RootStack';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from './slices';
import {
  request,
  PERMISSIONS,
  // requestMultiple,
  // requestNotifications,
} from 'react-native-permissions';
import {AppState, Platform} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const queryClient = new QueryClient();

async function requestUserPermission() {
  const authorizationStatus = await messaging().requestPermission();

  if (authorizationStatus) {
    console.log('Permission status:', authorizationStatus);
  }
}
requestUserPermission();

// requestMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.FACE_ID]).then(
//   statuses => {
//     console.log('Camera', statuses[PERMISSIONS.IOS.CAMERA]);
//     console.log('FaceID', statuses[PERMISSIONS.IOS.FACE_ID]);
//   },
// );

function App() {
  useEffect(() => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      console.log(remoteMessage);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const listener = AppState.addEventListener('change', status => {
      if (Platform.OS === 'ios' && status === 'active') {
        request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY)
          .then(result => console.log(result))
          .catch(error => console.log(error));
      }
    });
    return listener.remove;
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
