import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

interface IUser {
  name: string;
  avatar: string;
}

interface ISignInData {
  email: string;
  password: string;
}

interface IAuthContextData {
  signed: boolean;
  user: IUser | null;
  loading: boolean;
  signIn: (signInData: ISignInData) => Promise<void>;
  signOut: () => void;
}

interface IResponseData {
  user: IUser;
  token: string;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storageUser = localStorage.getItem('@AuroraEvents:user');
    const storageToken = localStorage.getItem('@AuroraEvents:token');

    if (storageUser && storageToken) {
      api.defaults.headers.Authorization = `Bearer ${storageToken}`;
      setUser(JSON.parse(storageUser));
    }

    setLoading(false);
  }, []);

  async function signIn(signInData: ISignInData) {
    try {
      const { data } = await api.post<IResponseData>('sessions', signInData);

      const userData = {
        name: data.user.name,
        avatar: data.user.avatar,
      };

      setUser(userData);

      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      localStorage.setItem('@AuroraEvents:user', JSON.stringify(userData));
      localStorage.setItem('@AuroraEvents:token', data.token);

      setLoading(false);
    } catch (error) {
      if (error.response) throw error.response.data;
      else throw error;
    }
  }

  function signOut() {
    setUser(null);
    api.defaults.headers.Authorization = undefined;
    localStorage.removeItem('@AuroraEvents:user');
    localStorage.removeItem('@AuroraEvents:token');
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
