import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNotification } from '../context/NotificationContext';

const WishlistPage = () => {
  const { state, dispatch } = useApp();
  const { showNotification } = useNotification();

  const moveToCart = (productId: number) => {
    const wishlistItem = state.wishlist.find(item => item.product.id === productId);
    if (wishlistItem) {
      dispatch({ type: 'ADD_TO_CART', payload: wishlistItem.product });
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
      
      // Show success notification
      showNotification({
        type: 'success',
        title: 'Moved to Cart!',
        message: `${wishlistItem.product.name} has been moved from wishlist to cart.`,
        duration: 3000
      });
    }
  };

  const removeFromWishlist = (productId: number) => {
    const wishlistItem = state.wishlist.find(item => item.product.id === productId);
    if (wishlistItem) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
      
      // Show info notification
      showNotification({
        type: 'info',
        title: 'Removed from Wishlist',
        message: `${wishlistItem.product.name} has been removed from your wishlist.`,
        duration: 3000
      });
    }
  };

  if (state.wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h1>
          <p className="text-gray-600 mb-8">Save products you love for later by clicking the heart icon!</p>
          <Link 
            to="/explore" 
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#65E856] text-white font-medium rounded-lg hover:bg-[#56d947] transition-colors duration-200"
          >
            <span>Explore Products</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/explore" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#65E856] mb-4 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Continue Shopping</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
          <p className="text-gray-600">{state.wishlist.length} {state.wishlist.length === 1 ? 'item' : 'items'} saved</p>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {state.wishlist.map((item) => (
            <div key={item.product.id} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-lg transition-shadow duration-200">
              {/* Product Image */}
              <div className="relative">
                <Link to={`/product/${item.product.id}`}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </Link>
                
                {/* Remove from Wishlist Button */}
                <button
                  onClick={() => removeFromWishlist(item.product.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors duration-200"
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </button>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${item.product.categoryColor}`}>
                    {item.product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="text-sm text-[#65E856] font-semibold mb-1">
                  {item.product.brand}
                </div>
                
                <Link 
                  to={`/product/${item.product.id}`}
                  className="text-lg font-semibold text-gray-900 hover:text-[#65E856] transition-colors duration-200 line-clamp-2 mb-2"
                >
                  {item.product.name}
                </Link>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.product.description}
                </p>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-lg font-bold text-[#65E856]">FREE</span>
                  {item.product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ${item.product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Date Added */}
                <p className="text-xs text-gray-500 mb-4">
                  Added {item.dateAdded.toLocaleDateString()}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => moveToCart(item.product.id)}
                    className="flex-1 flex items-center justify-center space-x-2 py-2 bg-[#65E856] text-white font-medium rounded-lg hover:bg-[#56d947] transition-colors duration-200"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                  
                  <Link
                    to={`/product/${item.product.id}`}
                    className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-[#65E856] hover:text-[#65E856] transition-colors duration-200"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-sm p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Love everything?</h3>
            <p className="text-gray-600 mb-4">Add all wishlist items to your cart at once!</p>
            <button
              onClick={() => {
                const itemCount = state.wishlist.length;
                if (itemCount > 0) {
                  state.wishlist.forEach(item => {
                    dispatch({ type: 'ADD_TO_CART', payload: item.product });
                  });
                  dispatch({ type: 'CLEAR_CART' });
                  state.wishlist.forEach(item => {
                    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: item.product.id });
                  });
                  
                  // Show success notification
                  showNotification({
                    type: 'success',
                    title: 'All Items Added!',
                    message: `${itemCount} item${itemCount > 1 ? 's' : ''} have been moved from wishlist to cart.`,
                    duration: 4000
                  });
                }
              }}
              className="w-full py-3 bg-[#65E856] text-white font-bold rounded-lg hover:bg-[#56d947] transition-colors duration-200"
            >
              Add All to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;