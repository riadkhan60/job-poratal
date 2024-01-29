import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../context/authValues';
import { useEffect } from 'react';

function AppLayout() {
  const navigateTo = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) navigateTo('/login');
  }, [navigateTo, user]);

  if (!user) return null;

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AppLayout;
