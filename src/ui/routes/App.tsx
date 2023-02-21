import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { HomePage } from '@pages/Home';
import { BuilderPage } from '@pages/Builder';
import { PreviewPage } from '@pages/Preview';

const route = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/home',
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
]);

function App() {
  return (
    <RouterProvider router={route} />
  );
}

export default App;
