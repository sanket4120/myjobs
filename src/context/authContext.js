import { createContext, useContext, useEffect, useReducer } from 'react';
import { authReducer } from '../reducers/authReducer';
import { setAuthToken } from '../utils/setAuthToken';

const initialState = { isAuthenticated: false, user: null, error: null };
const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [authState, setAuth] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (authState.isAuthenticated) {
      const token = localStorage.getItem('token');
      setAuthToken(token);
    } else {
      localStorage.removeItem('token');
    }
  }, [authState]);

  return (
    <AuthContext.Provider
      value={{
        authState,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
