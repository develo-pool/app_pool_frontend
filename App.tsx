import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import RootStack from './screens/RootStack';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from './slices';
import {request, PERMISSIONS} from 'react-native-permissions';
import {AppState, Platform} from 'react-native';

const queryClient = new QueryClient();

function App() {
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
