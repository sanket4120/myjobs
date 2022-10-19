import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const AuthRequired = () => {
  const location = useLocation();
  const { authState } = useAuth();

  return authState.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location.pathname }} />
  );
};

export { AuthRequired };
