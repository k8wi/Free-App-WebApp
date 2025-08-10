import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, ShoppingCart, Heart, User, X as CloseIcon, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useAuth } from '../hooks/useAuth';
import { products } from '../data/products';
import { searchProducts, getSearchSuggestions } from '../utils/search';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { state, dispatch } = useApp();
  const { user, logout } = useAuth();
  const location = useLocation();

  // Clear search when location changes (navigating to different pages)
  useEffect(() => {
    setSearchInput('');
    setShowSuggestions(false);
    dispatch({ type: 'CLEAR_SEARCH' });
  }, [location.pathname, dispatch]);

  // Update search results when search query changes
  useEffect(() => {
    const results = searchProducts(products, searchInput);
    dispatch({ type: 'SET_SEARCH_RESULTS', payload: results });
  }, [searchInput, dispatch]);

  // Handle click outside search to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    dispatch({ type: 'SET_SEARCH_QUERY', payload: value });
    setShowSuggestions(value.length > 0);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchInput(suggestion);
    dispatch({ type: 'SET_SEARCH_QUERY', payload: suggestion });
    setShowSuggestions(false);
  };

  const handleSearchFocus = () => {
    setShowSuggestions(searchInput.length > 0);
  };

  const clearSearch = () => {
    setSearchInput('');
    dispatch({ type: 'CLEAR_SEARCH' });
    setShowSuggestions(false);
  };

  const handleResultClick = () => {
    setShowSuggestions(false);
  };

  const suggestions = getSearchSuggestions(products, searchInput);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-gray-900">
                <span className="text-[#65E856]">Free</span>ly
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/explore" 
              className={`text-gray-700 hover:text-[#65E856] transition-colors duration-200 font-medium ${
                location.pathname === '/explore' ? 'text-[#65E856]' : ''
              }`}
            >
              Explore
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-[#65E856] transition-colors duration-200 font-medium ${
                location.pathname === '/about' ? 'text-[#65E856]' : ''
              }`}
            >
              About Us
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8 relative" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for free products..."
                value={searchInput}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#65E856] focus:border-transparent outline-none transition-all duration-200"
              />
              {searchInput && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <CloseIcon className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </form>

            {/* Search Suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 hover:text-[#65E856] transition-colors duration-200"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Search Results Count */}
            {searchInput && state.searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="px-4 py-2 text-sm text-gray-600 border-b border-gray-100">
                  {state.searchResults.length} result{state.searchResults.length !== 1 ? 's' : ''} found
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {state.searchResults.slice(0, 5).map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      onClick={handleResultClick}
                      className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 object-cover rounded mr-3"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">
                          {product.name}
                        </div>
                        <div className="text-xs text-gray-500 truncate">
                          {product.brand} • {product.category}
                        </div>
                      </div>
                    </Link>
                  ))}
                  {state.searchResults.length > 5 && (
                    <div className="px-4 py-2 text-sm text-[#65E856] hover:bg-gray-50 cursor-pointer">
                      View all {state.searchResults.length} results
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Cart Button */}
            <Link 
              to="/cart" 
              className="relative p-2 text-gray-700 hover:text-[#65E856] transition-colors duration-200"
            >
              <ShoppingCart className="h-6 w-6" />
              {state.cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#65E856] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>

            {/* Wishlist Button */}
            <Link 
              to="/wishlist" 
              className="relative p-2 text-gray-700 hover:text-[#65E856] transition-colors duration-200"
            >
              <Heart className="h-6 w-6" />
              {state.wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#65E856] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.wishlist.length}
                </span>
              )}
            </Link>

            {/* Profile Button */}
            <Link 
              to="/profile" 
              className="p-2 text-gray-700 hover:text-[#65E856] transition-colors duration-200"
            >
              <User className="h-6 w-6" />
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">Hi, {user.name}</span>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="px-6 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
                  Log In
                </Link>
                <Link to="/signup" className="px-6 py-2 bg-[#65E856] text-white font-medium rounded-full hover:bg-[#56d947] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for free products..."
                  value={searchInput}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#65E856] focus:border-transparent outline-none"
                />
              </div>
              <Link to="/explore" className="block px-3 py-2 text-gray-700 font-medium hover:text-[#65E856] transition-colors duration-200">
                Explore
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 font-medium hover:text-[#65E856] transition-colors duration-200">
                About Us
              </Link>
              
              {/* Mobile Action Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-2">
                <Link to="/cart" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-[#65E856] transition-colors duration-200">
                  <ShoppingCart className="h-5 w-5" />
                  <span>Cart ({state.cart.reduce((sum, item) => sum + item.quantity, 0)})</span>
                </Link>
                <Link to="/wishlist" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-[#65E856] transition-colors duration-200">
                  <Heart className="h-5 w-5" />
                  <span>Wishlist ({state.wishlist.length})</span>
                </Link>
                <Link to="/profile" className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-[#65E856] transition-colors duration-200">
                  <User className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
              </div>
              
              <div className="flex flex-col space-y-2 pt-2">
                {user ? (
                  <>
                    <div className="px-4 py-2 text-sm text-gray-700">
                      Hi, {user.name}
                    </div>
                    <button
                      onClick={logout}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-700 font-medium text-left hover:text-gray-900 transition-colors duration-200"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="px-4 py-2 text-gray-700 font-medium text-left hover:text-gray-900 transition-colors duration-200">
                      Log In
                    </Link>
                    <Link to="/signup" className="px-4 py-2 bg-[#65E856] text-white font-medium rounded-full hover:bg-[#56d947] transition-all duration-200">
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;