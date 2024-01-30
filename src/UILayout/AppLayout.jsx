import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../context/authValues';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import useJobsListValues from '../context/Jobslistvalues';

function AppLayout() {
  const navigateTo = useNavigate();
  const { user } = useAuth();


  useEffect(() => {
    if (!user) navigateTo('/login');
  }, [navigateTo, user]);

  if (!user) return null;

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
