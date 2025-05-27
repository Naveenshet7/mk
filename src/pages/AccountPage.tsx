import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { User, MapPin, Package, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import AccountProfile from '../components/account/AccountProfile';
import AccountAddresses from '../components/account/AccountAddresses';
import AccountOrders from '../components/account/AccountOrders';

const AccountPage: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Check active route for navigation highlighting
  const isActive = (path: string) => {
    return location.pathname === `/account${path}` ? true : false;
  };

  if (!isAuthenticated) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-8">My Account</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar - Desktop */}
        <div className="hidden md:block">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-1">
            <Link 
              to="/account" 
              className={`flex items-center p-3 rounded-md ${
                isActive('') 
                  ? 'bg-amber-100 text-amber-800' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <User size={18} className="mr-3" />
              <span>Profile</span>
            </Link>
            <Link 
              to="/account/addresses" 
              className={`flex items-center p-3 rounded-md ${
                isActive('/addresses') 
                  ? 'bg-amber-100 text-amber-800' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <MapPin size={18} className="mr-3" />
              <span>Addresses</span>
            </Link>
            <Link 
              to="/account/orders" 
              className={`flex items-center p-3 rounded-md ${
                isActive('/orders') 
                  ? 'bg-amber-100 text-amber-800' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <Package size={18} className="mr-3" />
              <span>Orders</span>
            </Link>
            <button 
              onClick={handleLogout}
              className="flex items-center w-full text-left p-3 rounded-md text-red-600 hover:bg-red-50"
            >
              <LogOut size={18} className="mr-3" />
              <span>Logout</span>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden mb-6">
          <button 
            className="w-full bg-white p-4 rounded-md shadow-md flex justify-between items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="font-medium">
              {isActive('') && 'Profile'}
              {isActive('/addresses') && 'Addresses'}
              {isActive('/orders') && 'Orders'}
            </span>
            <span className="text-gray-500">
              {isMobileMenuOpen ? '▲' : '▼'}
            </span>
          </button>
          
          {isMobileMenuOpen && (
            <div className="bg-white mt-2 rounded-md shadow-md overflow-hidden">
              <Link 
                to="/account" 
                className={`block p-4 ${isActive('') ? 'bg-amber-100 text-amber-800' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Profile
              </Link>
              <Link 
                to="/account/addresses" 
                className={`block p-4 ${isActive('/addresses') ? 'bg-amber-100 text-amber-800' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Addresses
              </Link>
              <Link 
                to="/account/orders" 
                className={`block p-4 ${isActive('/orders') ? 'bg-amber-100 text-amber-800' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Orders
              </Link>
              <button 
                onClick={handleLogout}
                className="block w-full text-left p-4 text-red-600 border-t"
              >
                Logout
              </button>
            </div>
          )}
        </div>
        
        {/* Main Content */}
        <div className="md:col-span-3">
          <Routes>
            <Route path="/" element={<AccountProfile />} />
            <Route path="/addresses" element={<AccountAddresses />} />
            <Route path="/orders" element={<AccountOrders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;