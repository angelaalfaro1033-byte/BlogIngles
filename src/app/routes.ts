import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { PostDetail } from './pages/PostDetail';
import { Noticias } from './pages/Noticias';
import { Peliculas } from './pages/Peliculas';
import { Personajes } from './pages/Personajes';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'post/:slug', Component: PostDetail },
      { path: 'noticias', Component: Noticias },
      { path: 'peliculas', Component: Peliculas },
      { path: 'personajes', Component: Personajes },
      { path: '*', Component: NotFound },
    ],
  },
]);
