import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import RootStack from './screens/RootStack';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from './slices';
import messaging from '@react-native-firebase/messaging';

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
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
