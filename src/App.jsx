import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';

import AppLayout from './UI/AppLayout';

import Category from './pages/Category';
import Home from './pages/Home';
import Post from './pages/Post';

import SEOMetaTag from './meta/SEOMetaTag';

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
    <>
      <SEOMetaTag />
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '0.5rem' }}
          toastOptions={{
            success: {
              duration: 6000,
            },
            error: {
              duration: 7000,
            },
            style: {
              fontSize: 'var(--font-md)',
              maxWidth: '31.25rem',
              padding: '1rem 1.5rem',
              backgroundColor: 'var(--color-base-0)',
              color: 'var(--color-font-dark)',
              zIndex: 999999999,
            },
          }}
        />
        <BrowserRouter basename="/">
          <Animated />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
