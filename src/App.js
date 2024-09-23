// Core
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Components
import Layout from './components/layout';
import Loading from './components/Loading';

const PostsPage = lazy(() => import('./pages/PostsPage'));
const PostPage = lazy(() => import('./pages/PostPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AboutTeamPage = lazy(() => import('./pages/AboutTeamPage'));
const AboutNewsPage = lazy(() => import('./pages/AboutNewsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
// Function
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
                     <Route path='news' element={<AboutNewsPage />} />
                     <Route path='team' element={<AboutTeamPage />} />
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
