import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="bg-gradient-to-r from-spice-700 to-spice-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-bold tracking-wider text-spice-50">Malanad Masala</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-spice-200 transition-colors">Home</Link>
            <div className="relative group">
              <button 
                className="flex items-center hover:text-spice-200 transition-colors"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Products <ChevronDown size={16} className="ml-1" />
              </button>
              {/* Products dropdown menu */}
              <div 
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-md mt-1 py-2 z-50 transform transition-all duration-200 ${
                  isProductsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <Link 
                  to="/products/seasonings" 
                  className="block px-4 py-2 text-gray-800 hover:bg-spice-50 hover:text-spice-700 transition-colors"
                  onClick={() => setIsProductsOpen(false)}
                >
                  Seasonings
                </Link>
                <Link 
                  to="/products/powdered-spices" 
                  className="block px-4 py-2 text-gray-800 hover:bg-spice-50 hover:text-spice-700 transition-colors"
                  onClick={() => setIsProductsOpen(false)}
                >
                  Powdered Spices
                </Link>
                <Link 
                  to="/products/blended-masala" 
                  className="block px-4 py-2 text-gray-800 hover:bg-spice-50 hover:text-spice-700 transition-colors"
                  onClick={() => setIsProductsOpen(false)}
                >
                  Blended Masala
                </Link>
                <Link 
                  to="/products/whole-spices" 
                  className="block px-4 py-2 text-gray-800 hover:bg-spice-50 hover:text-spice-700 transition-colors"
                  onClick={() => setIsProductsOpen(false)}
                >
                  Whole Spices
                </Link>
                <Link 
                  to="/products/combo-packs" 
                  className="block px-4 py-2 text-gray-800 hover:bg-spice-50 hover:text-spice-700 transition-colors"
                  onClick={() => setIsProductsOpen(false)}
                >
                  Combo Packs
                </Link>
                <Link 
                  to="/products/dry-fruits" 
                  className="block px-4 py-2 text-gray-800 hover:bg-spice-50 hover:text-spice-700 transition-colors"
                  onClick={() => setIsProductsOpen(false)}
                >
                  Dry Fruits
                </Link>
              </div>
            </div>
            <Link to="/all-products" className="hover:text-spice-200 transition-colors">All Products</Link>
            <Link to="/malanad-special" className="hover:text-spice-200 transition-colors">Malanad Special</Link>
            <Link to="/herbs" className="hover:text-spice-200 transition-colors">Herbs</Link>
            <Link to="/about" className="hover:text-spice-200 transition-colors">About Us</Link>
            <Link to="/blog" className="hover:text-spice-200 transition-colors">Blog</Link>
            <Link to="/recipes" className="hover:text-spice-200 transition-colors">Recipes</Link>
          </nav>

          {/* Search, Cart, and Account */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className="p-2 hover:bg-spice-500 rounded-full transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link 
              to="/cart" 
              className="p-2 hover:bg-spice-500 rounded-full transition-colors duration-200 relative"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <Link 
              to={isAuthenticated ? "/account" : "/login"} 
              className="p-2 hover:bg-spice-500 rounded-full transition-colors duration-200"
              aria-label="Account"
            >
              <User size={20} />
            </Link>
            <button 
              className="md:hidden p-2 hover:bg-spice-500 rounded-full transition-colors duration-200" 
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 transition-all duration-300 ease-in-out">
            <form onSubmit={handleSearch} className="flex w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for spices..."
                className="w-full p-2 text-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-spice-400 bg-white/95"
              />
              <button 
                type="submit" 
                className="bg-spice-500 hover:bg-spice-400 p-2 rounded-r-md transition-colors duration-200"
              >
                <Search size={20} />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-black/50 z-50 transition-opacity duration-200 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className={`bg-white h-full w-64 p-6 transition-transform duration-200 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/" 
                    className="block hover:text-spice-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/all-products" 
                    className="block hover:text-spice-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/malanad-special" 
                    className="block hover:text-spice-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Malanad Special
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/herbs" 
                    className="block hover:text-spice-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Herbs
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="block hover:text-spice-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blog" 
                    className="block hover:text-spice-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/recipes" 
                    className="block hover:text-spice-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products/seasonings" 
                    className="block hover:text-spice-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Seasonings
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products/powdered-spices" 
                    className="block hover:text-spice-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Powdered Spices
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products/blended-masala" 
                    className="block hover:text-spice-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blended Masala
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products/whole-spices" 
                    className="block hover:text-spice-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Whole Spices
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products/combo-packs" 
                    className="block hover:text-spice-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Combo Packs
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/products/dry-fruits" 
                    className="block hover:text-spice-200 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dry Fruits
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;