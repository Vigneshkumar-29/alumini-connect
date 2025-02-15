import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'alumni';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (userData: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Implement actual login logic here
    setUser({
      id: '1',
      name: 'John Doe',
      email: email,
      role: 'student'
    });
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (userData: any) => {
    // Implement actual registration logic here
    setUser({
      id: '1',
      name: userData.name,
      email: userData.email,
      role: userData.role
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}