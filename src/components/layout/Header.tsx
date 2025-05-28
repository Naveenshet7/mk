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
    // Close other menus when opening mobile menu
    setIsProductsOpen(false);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    // Close other menus when opening search
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsSearchOpen(false);
      setIsMenuOpen(false);
    }
  };

  const handleLinkClick = () => {
    // Close all menus when clicking a link
    setIsMenuOpen(false);
    setIsProductsOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-spice-700 to-spice-600 text-white shadow-lg relative z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <span className="font-serif text-2xl font-bold tracking-wider text-spice-50">Malanad Masala</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-spice-200 transition-colors" onClick={handleLinkClick}>Home</Link>
            <div className="relative group">
              <button 
                className="flex items-center hover:text-spice-200 transition-colors"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Products <ChevronDown size={16} className="ml-1" />
              </button>
              <div 
                className={`absolute top-full left-0 w-64 bg-white shadow-lg rounded-md mt-1 py-2 z-50 transform transition-all duration-200 ${
                  isProductsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                {['seasonings', 'powdered-spices', 'blended-masala', 'whole-spices', 'combo-packs', 'dry-fruits'].map(category => (
                  <Link 
                    key={category}
                    to={`/products/${category}`} 
                    className="block px-4 py-2 text-gray-800 hover:bg-spice-50 hover:text-spice-700 transition-colors"
                    onClick={handleLinkClick}
                  >
                    {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/all-products" className="hover:text-spice-200 transition-colors" onClick={handleLinkClick}>All Products</Link>
            <Link to="/malanad-special" className="hover:text-spice-200 transition-colors" onClick={handleLinkClick}>Malanad Special</Link>
            <Link to="/herbs" className="hover:text-spice-200 transition-colors" onClick={handleLinkClick}>Herbs</Link>
            <Link to="/about" className="hover:text-spice-200 transition-colors" onClick={handleLinkClick}>About Us</Link>
            <Link to="/blog" className="hover:text-spice-200 transition-colors" onClick={handleLinkClick}>Blog</Link>
            <Link to="/recipes" className="hover:text-spice-200 transition-colors" onClick={handleLinkClick}>Recipes</Link>
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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
        <div className={`mt-4 transition-all duration-300 ease-in-out ${isSearchOpen ? 'block' : 'hidden'}`}>
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

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleMenu}
        />

        {/* Mobile Menu */}
        <div 
          className={`fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button onClick={toggleMenu} className="text-gray-500">
              <X size={24} />
            </button>
          </div>

          <nav className="overflow-y-auto h-[calc(100%-64px)]">
            <div className="p-4 space-y-4">
              <Link 
                to="/" 
                className="block text-gray-800 hover:text-spice-600"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              
              {['all-products', 'malanad-special', 'herbs', 'about', 'blog', 'recipes'].map(route => (
                <Link 
                  key={route}
                  to={`/${route}`} 
                  className="block text-gray-800 hover:text-spice-600"
                  onClick={handleLinkClick}
                >
                  {route.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Link>
              ))}

              <div className="py-2 border-t border-gray-200">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Categories</h3>
                {['seasonings', 'powdered-spices', 'blended-masala', 'whole-spices', 'combo-packs', 'dry-fruits'].map(category => (
                  <Link 
                    key={category}
                    to={`/products/${category}`} 
                    className="block py-2 text-gray-800 hover:text-spice-600"
                    onClick={handleLinkClick}
                  >
                    {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;