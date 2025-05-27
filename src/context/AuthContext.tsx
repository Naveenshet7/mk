import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  addresses: Address[];
}

interface Address {
  id: string;
  title: string;
  fullName: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
  addAddress: (address: Omit<Address, 'id'>) => Promise<void>;
  updateAddress: (address: Address) => Promise<void>;
  deleteAddress: (id: string) => Promise<void>;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Mock login function
  const login = async (email: string, password: string): Promise<void> => {
    // In a real app, this would make an API call to authenticate
    // For demo purposes, we'll just simulate a successful login
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const mockUser: User = {
        id: '123',
        firstName: 'John',
        lastName: 'Doe',
        email: email,
        addresses: [
          {
            id: '1',
            title: 'Home',
            fullName: 'John Doe',
            streetAddress: '123 Main St',
            city: 'Mumbai',
            state: 'Maharashtra',
            postalCode: '400001',
            country: 'India',
            isDefault: true
          }
        ]
      };
      
      setUser(mockUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Invalid email or password');
    }
  };

  const register = async (userData: RegisterData): Promise<void> => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user registration
      const newUser: User = {
        id: Date.now().toString(),
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        phone: userData.phone,
        addresses: []
      };
      
      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(newUser));
    } catch (error) {
      console.error('Registration failed:', error);
      throw new Error('Registration failed. Please try again.');
    }
  };

  const logout = (): void => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const forgotPassword = async (email: string): Promise<void> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // In a real app, this would trigger a password reset email
    console.log(`Password reset email sent to ${email}`);
  };

  const updateProfile = async (data: Partial<User>): Promise<void> => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (user) {
        const updatedUser = { ...user, ...data };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
    } catch (error) {
      console.error('Profile update failed:', error);
      throw new Error('Failed to update profile');
    }
  };

  const addAddress = async (address: Omit<Address, 'id'>): Promise<void> => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (user) {
        const newAddress: Address = {
          ...address,
          id: Date.now().toString()
        };
        
        // If this is the first address or marked as default, update other addresses
        let updatedAddresses = [...user.addresses];
        if (address.isDefault || updatedAddresses.length === 0) {
          updatedAddresses = updatedAddresses.map(addr => ({
            ...addr,
            isDefault: false
          }));
        }
        
        updatedAddresses.push(newAddress);
        
        const updatedUser = {
          ...user,
          addresses: updatedAddresses
        };
        
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
    } catch (error) {
      console.error('Add address failed:', error);
      throw new Error('Failed to add address');
    }
  };

  const updateAddress = async (address: Address): Promise<void> => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (user) {
        let updatedAddresses = [...user.addresses];
        
        // If setting as default, update other addresses
        if (address.isDefault) {
          updatedAddresses = updatedAddresses.map(addr => ({
            ...addr,
            isDefault: addr.id === address.id
          }));
        } else {
          // Update the specific address
          updatedAddresses = updatedAddresses.map(addr => 
            addr.id === address.id ? address : addr
          );
        }
        
        const updatedUser = {
          ...user,
          addresses: updatedAddresses
        };
        
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
    } catch (error) {
      console.error('Update address failed:', error);
      throw new Error('Failed to update address');
    }
  };

  const deleteAddress = async (id: string): Promise<void> => {
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (user) {
        let updatedAddresses = user.addresses.filter(address => address.id !== id);
        
        // If we deleted the default address and have other addresses, make the first one default
        if (user.addresses.find(addr => addr.id === id && addr.isDefault) && updatedAddresses.length > 0) {
          updatedAddresses[0].isDefault = true;
        }
        
        const updatedUser = {
          ...user,
          addresses: updatedAddresses
        };
        
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      }
    } catch (error) {
      console.error('Delete address failed:', error);
      throw new Error('Failed to delete address');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        register,
        logout,
        forgotPassword,
        updateProfile,
        addAddress,
        updateAddress,
        deleteAddress
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};