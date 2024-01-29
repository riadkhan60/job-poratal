import { Outlet } from 'react-router-dom';
import AuthenticationProvider from './context/AuthenticationProvider';

function App() {
  return (
    <AuthenticationProvider>
      <Outlet />
    </AuthenticationProvider>
  );
}

export default App;
