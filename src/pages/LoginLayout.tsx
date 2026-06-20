import useAuth from '@/auth/store';
import { Navigate, Outlet } from 'react-router';
import toast from 'react-hot-toast';
function LoginLayout() {
  const checkLogin = useAuth((state) => state.checkLogin);

  if (checkLogin()) {
    toast.success('Already Logged In');
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

export default LoginLayout