import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';

import AppLayout from './UI/AppLayout';

import Category from './pages/Category';
import Home from './pages/Home';
import Post from './pages/Post';

const Animated = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location}>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path=":category" element={<Category />} />
          <Route path=":category/:id" element={<Post />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/">
        <Animated />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
