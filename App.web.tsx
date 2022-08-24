import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from './slices';
import ProfileScreen from './web/ProfileScreen.web';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import NotFound from './web/NotFound.web';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/:brandId" element={<ProfileScreen />} />
            <Route path="/none" element={<NotFound />} />
            <Route path="/" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
