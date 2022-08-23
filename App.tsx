import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import RootStack from './screens/RootStack';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from './slices';
import {request, PERMISSIONS, requestMultiple} from 'react-native-permissions';
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
    const listener = AppState.addEventListener('change', status => {
      if (Platform.OS === 'ios' && status === 'active') {
        request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY)
          .then(result => console.log(result))
          .catch(error => console.log(error));
      }
    });
    requestMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.IOS.FACE_ID, PERMISSIONS.IOS.PHOTO_LIBRARY, PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY]).then(
      statuses => {
        console.log('Camera', statuses[PERMISSIONS.IOS.CAMERA]);
        console.log('FaceID', statuses[PERMISSIONS.IOS.FACE_ID]);
        console.log('Photo_Library)', statuses[PERMISSIONS.IOS.PHOTO_LIBRARY]);
        console.log('App_tracking_Transparency', statuses[PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY]);
      },
    );
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
