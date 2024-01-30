import { Navigate, createBrowserRouter } from 'react-router-dom';
import Login from './Authetication/LoginForm';
import Signup from './Pages/Signup';
import ErrorPage from './Pages/ErrorPage';
import AppLayout from './UILayout/AppLayout';
import App from './App';
import Home from './Pages/Home';
import { action as actionSignup } from './Authetication/AccountRegistrationForm';
import { action as actionLogin } from './Authetication/LoginForm';
import { action as createJobAction } from './CreateJob/CreateJobForm';
import CreateJob from './Pages/CreateJob';
import JobView, { loader as jobLoader } from './Pages/JobView';
import JobViewDemo from './Pages/JobeViewDemo';

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
          },
          {
            path: 'job/:jobId',
            element: <JobView />,
            loader: jobLoader
          },
          {
            path: 'job/demo',
            element: <JobViewDemo />,
          },
          {
            path: 'createjobs',
            element: <CreateJob />,
            action: createJobAction
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
