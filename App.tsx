import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './screens/RootStack';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
// import {LogContextProVier} from './contexts/LogContext'
import store from './slices';

const queryClient = new QueryClient();

function App() {
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
