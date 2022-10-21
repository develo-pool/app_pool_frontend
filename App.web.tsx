import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from './slices';
import ProfileScreen from './web/ProfileScreen.web';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import NotFound from './web/NotFound.web';
import Home from './web/pages/Home.web';
import Info from './web/pages/Info.web';
import SearchScreen from './web/SearchScreen.web';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:brandId" element={<ProfileScreen />} />
            <Route path="/none" element={<NotFound />} />
            <Route path="/info" element={<Info />} />
            <Route path="/search" element={<SearchScreen />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
