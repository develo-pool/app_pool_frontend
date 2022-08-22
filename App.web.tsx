import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from './slices';
import ProfileScreen from './web/ProfileScreen.web';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NavigationContainer>
          <ProfileScreen />
        </NavigationContainer>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
