import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
// import {Alert} from 'react-native';
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
import {AppState, Platform, Linking} from 'react-native';
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

const config = {
  screens: {  
    Welcome: '/welcome',
    MainTab: {
      screens: {
        Search: '/search',
        Feed: '/feed',
        Profile: '/profile',
        SettingStack: '/setting',
      },
    },
    Login: '/login',
    SignUp: '/signup',
    Password: '/password',
    Guide: '/guide',
    BrandAssign: '/brandassign',
    BrandAssignGuide: '/brandassignguide',
    BrandAssignComplete: '/brandassigncomplete',
    FeedMessage: '/feedmessage/:id',
    Message: '/message/:id',
    WelcomeMessage: '/welcomemessage',
    Preview: '/preview',
    BrandProfile: '/brandprofile/:id',
    EditProfile: '/editprofile',
    FollowList: '/followlist',
    EditUser: '/edituser',
  },
};

const linking = { 
  prefixes: [
    'http://localhost:3000',
    'https://app-pool-firebase.web.app',
    'pool://',
  ],

  async getInitialURL() {
    const url = await Linking.getInitialURL();

    if (url != null) {
      return url;
    }

    return null;
  },

  subscribe(listener){
    console.log('linking subscribe to ', listener);
    const onReceiveURL = (event) => {
      const { url } = event;
      console.log('link has url', url, event);
      return listener(url);
    };

    Linking.addEventListener('url', onReceiveURL);
    return () => {
      console.log('linking unsubscribe to ', listener);
      Linking.removeEventListener('url', onReceiveURL);
    };
  },
  config,
}

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

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Alert.alert(
      //   'A new FCM message arrived!',
      //   JSON.stringify(remoteMessage.notification),
      // );
      //이 부분이 어플 실행중 알림을 받는 부분 -> 스타일 수정 필요
      console.log(JSON.stringify(remoteMessage));
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
        <NavigationContainer linking={linking}>
          <RootStack />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
