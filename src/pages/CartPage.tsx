import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNotification } from '../context/NotificationContext';

const CartPage = () => {
  const { state, dispatch } = useApp();
  const { showNotification } = useNotification();

  const updateQuantity = (productId: number, newQuantity: number) => {
    dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { productId, quantity: newQuantity } });
  };

  const removeFromCart = (productId: number) => {
    const cartItem = state.cart.find(item => item.product.id === productId);
    if (cartItem) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
      
      // Show info notification
      showNotification({
        type: 'info',
        title: 'Removed from Cart',
        message: `${cartItem.product.name} has been removed from your cart.`,
        duration: 3000
      });
    }
  };

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalValue = state.cart.reduce((sum, item) => sum + (item.product.originalPrice || 0) * item.quantity, 0);

  if (state.cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Discover amazing free products and start claiming them!</p>
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
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link 
              to="/explore" 
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#65E856] mb-4 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Continue Shopping</span>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600">{totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.cart.map((item) => (
              <div key={item.product.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </Link>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link 
                      to={`/product/${item.product.id}`}
                      className="text-lg font-semibold text-gray-900 hover:text-[#65E856] transition-colors duration-200"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-gray-600 mb-2">{item.product.brand}</p>
                    <div className="flex items-center space-x-4">
                      <span className="text-lg font-bold text-[#65E856]">FREE</span>
                      {item.product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ${item.product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Minus className="h-4 w-4 text-gray-600" />
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Plus className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-200"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Items ({totalItems})</span>
                  <span className="font-medium">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">FREE</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#65E856]">FREE</div>
                      {totalValue > 0 && (
                        <div className="text-sm text-gray-500 line-through">
                          ${totalValue.toFixed(2)} value
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <Link 
                to="/checkout"
                className="w-full py-4 bg-[#65E856] text-white font-bold rounded-lg hover:bg-[#56d947] transition-all duration-200 transform hover:scale-105 shadow-lg text-center block"
              >
                Proceed to Checkout
              </Link>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-4">
                  🎉 You're saving ${totalValue.toFixed(2)} with these free products!
                </p>
                <Link 
                  to="/explore" 
                  className="text-[#65E856] hover:underline text-sm font-medium"
                >
                  Continue shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;