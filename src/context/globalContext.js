import { createContext } from 'react';
import { AuthProvider } from './authContext';

const initialState = {};
const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={initialState}>
      <AuthProvider>{children}</AuthProvider>
    </GlobalContext.Provider>
  );
};

export { GlobalProvider };
