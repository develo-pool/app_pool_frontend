import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import RootStack from './screens/RootStack';

const reactQuery = require('react-query');
const {QueryClient, QueryClientProvider} = reactQuery;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
