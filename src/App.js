import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/layout';
import Loading from './components/Loading';

const PostsPage = lazy(() => import('./pages/PostsPage'));
const PostPage = lazy(() => import('./pages/PostPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const PartnersPage = lazy(() => import('./pages/PartnersPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
   return (
      <Suspense
         fallback={<Loading heightStyle='100vh' classStyle='bg-primary' />}
      >
         <BrowserRouter>
            <Routes>
               <Route element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path='about'>
                     <Route index element={<AboutPage />} />
                     <Route path='team' element={<TeamPage />} />
                     <Route path='partners' element={<PartnersPage />} />
                  </Route>
                  <Route path='posts' element={<PostsPage />} />
                  <Route path='posts/:postId' element={<PostPage />} />
               </Route>
               <Route path='*' element={<NotFoundPage />} />
            </Routes>
         </BrowserRouter>
      </Suspense>
   );
}

export default App;
