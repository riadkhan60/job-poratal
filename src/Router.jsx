import { Navigate, createBrowserRouter } from 'react-router-dom';
import Login from './Authetication/LoginForm';
import Signup from './Pages/Signup';
import ErrorPage from './Pages/ErrorPage';
import AppLayout from './UILayout/AppLayout';
import App from './App';
import Home, { loader as homeLoader } from './Pages/Home';
import { action as actionSignup } from './Authetication/AccountRegistrationForm';
import { action as actionLogin } from './Authetication/LoginForm';

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        path: '/',
        element: <AppLayout />,

        children: [
          {
            index: true,
            element: <Navigate replace to={'home'} />,
          },
          {
            path: 'home',
            element: <Home />,
            loader: homeLoader
          },
        ],
      },
      {
        path: 'signup',
        element: <Signup />,
        action: actionSignup
      },
      {
        path: 'login',
        element: <Login />,
        action: actionLogin
      },
    ],
  },
]);

export default router;
