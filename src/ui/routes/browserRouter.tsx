import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@layouts/index';

import { HomePage } from '@home/index';
import { EditorPage } from '@editor/index';
import { PreviewPage } from '@preview/index';

import { ROUTES } from '@routes/index';
import '@styles/css/index.css';

export const browserRouter = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.home,
        element: <HomePage />,
      },
      {
        path: ROUTES.builder,
        element: <EditorPage />,
      },
      {
        path: ROUTES.preview,
        element: <PreviewPage />,
      },
    ],
  },
]);
