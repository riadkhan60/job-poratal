import { createBrowserRouter } from 'react-router-dom';
import Login from './Authetication/LoginForm';
import Signup from './Pages/Signup';
import ErrorPage from './Pages/ErrorPage';
import AppLayout from './UILayout/AppLayout';
import App from './App';

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        index: true,
        element: <AppLayout />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
