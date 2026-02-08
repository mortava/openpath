import React, { createContext, useContext, useEffect, useState } from 'react';
import type { User } from '../types/user';
import { mockBrokerUser, mockLenderUser } from '../lib/mock-data';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, _password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  companyName: string;
  nmls: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored session
    const storedUser = localStorage.getItem('openpath_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, _password: string) => {
    // Mock login - in production, this would call Supabase Auth
    setIsLoading(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Mock authentication logic
    let authenticatedUser: User;
    if (email.includes('lender')) {
      authenticatedUser = mockLenderUser;
    } else {
      authenticatedUser = mockBrokerUser;
    }

    setUser(authenticatedUser);
    localStorage.setItem('openpath_user', JSON.stringify(authenticatedUser));
    setIsLoading(false);
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem('openpath_user');
  };

  const register = async (data: RegisterData) => {
    setIsLoading(true);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Mock registration - create broker user
    const newUser: User = {
      id: `broker-${Date.now()}`,
      email: data.email,
      role: 'broker',
      firstName: data.firstName,
      lastName: data.lastName,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setUser(newUser);
    localStorage.setItem('openpath_user', JSON.stringify(newUser));
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, register }}>
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
