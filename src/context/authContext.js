import { createContext, useContext, useReducer } from 'react';
import { authReducer } from '../reducers/authReducer';

const initialState = { isAuthenticated: false, user: null, error: null };
const AuthContext = createContext(initialState);

const AuthProvider = ({ children }) => {
  const [authState, setAuth] = useReducer(authReducer, initialState);

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
