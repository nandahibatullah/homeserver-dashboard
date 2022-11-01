import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface AuthContextType {
  loggedIn: boolean;
  error?: string;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);
const adminDetails = {
  username: import.meta.env.VITE_ADMIN_USERNAME,
  password: import.meta.env.VITE_ADMIN_PASSWORD,
};

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [loggedIn, setLoggedIn] = useState<boolean>(() => {
    const loggedIn: boolean = JSON.parse(
      sessionStorage.getItem('loggedIn') ?? 'false'
    );
    return loggedIn;
  });
  const [error, setError] = useState<string>();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) setError(undefined);
  }, [location.pathname]);

  const login = (username: string, password: string) => {
    if (
      username === adminDetails.password &&
      password === adminDetails.password
    ) {
      sessionStorage.setItem('loggedIn', 'true');
      setLoggedIn(true);
      navigate('/');
    } else {
      setError('Username or Password is incorrect');
    }
  };

  const logout = () => {
    sessionStorage.removeItem('loggedIn');
    setLoggedIn(false);
  };

  const memoizedValues = useMemo(
    () => ({
      loggedIn,
      error,
      login,
      logout,
    }),
    [loggedIn, error]
  );

  return (
    <AuthContext.Provider value={memoizedValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
