import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from '@layouts/MainLayout';
import { HomePage } from '@pages/Home';
import { BuilderPage } from '@pages/Builder';
import { PreviewPage } from '@pages/Preview';

const route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'builder',
        element: <BuilderPage />,
      },
      {
        path: 'preview',
        element: <PreviewPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
