import {createBrowserRouter} from 'react-router-dom';
import Red from './Red';
import Blue from './Blue';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/blue',
        element: <Blue />,
      },
      {
        path: '/red',
        element: <Red />,
      },
    ],
  },
]);

export default router;
