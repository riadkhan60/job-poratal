import { Outlet } from 'react-router-dom';
import AuthenticationProvider from './context/AuthenticationProvider';
import JobsListProvider from './context/JobsListProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
function App() {
  return (
    <AuthenticationProvider>
      <JobsListProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </JobsListProvider>
    </AuthenticationProvider>
  );
}

export default App;
