import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './screens/RootStack';
import {QueryClient, QueryClientProvider} from 'react-query';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './slices';
import {Provider} from 'react-redux';

const queryClient = new QueryClient();
const store = configureStore({reducer: rootReducer});

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
