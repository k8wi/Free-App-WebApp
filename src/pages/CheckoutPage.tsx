import React, { useState } from 'react';
import { ArrowLeft, MapPin, Plus, Check, Edit, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useNotification } from '../context/NotificationContext';

interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
}

const CheckoutPage = () => {
  const { state } = useApp();
  const { showNotification } = useNotification();
  const navigate = useNavigate();
  
  const [selectedAddressId, setSelectedAddressId] = useState<string>('');
  const [showNewAddressForm, setShowNewAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState<Omit<Address, 'id' | 'isDefault'>>({
    type: 'home',
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: ''
  });

  // Mock saved addresses - in a real app, these would come from user profile/context
  const savedAddresses: Address[] = [
    {
      id: '1',
      type: 'home',
      name: 'John Doe',
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '+1 (555) 123-4567',
      isDefault: true
    },
    {
      id: '2',
      type: 'work',
      name: 'John Doe',
      street: '456 Business Ave',
      city: 'New York',
      state: 'NY',
      zipCode: '10002',
      country: 'United States',
      phone: '+1 (555) 987-6543',
      isDefault: false
    }
  ];

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalValue = state.cart.reduce((sum, item) => sum + (item.product.originalPrice || 0) * item.quantity, 0);

  const handleAddressSelect = (addressId: string) => {
    setSelectedAddressId(addressId);
    setShowNewAddressForm(false);
  };

  const handleNewAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save the address to the user's profile
    const addressToUse = {
      ...newAddress,
      id: 'new',
      isDefault: false
    };
    setSelectedAddressId('new');
    setShowNewAddressForm(false);
    showNotification({
      type: 'success',
      title: 'Address Added!',
      message: 'Your new address has been added and selected.',
      duration: 3000
    });
  };

  const handleRemoveAddress = () => {
    setSelectedAddressId('');
    showNotification({
      type: 'info',
      title: 'Address Removed',
      message: 'Shipping address has been removed. Please select or add a new address.',
      duration: 3000
    });
  };

  const handlePlaceOrder = () => {
    if (!selectedAddressId) {
      showNotification({
        type: 'error',
        title: 'Address Required',
        message: 'Please select or enter a shipping address.',
        duration: 3000
      });
      return;
    }

    // In a real app, this would process the order
    showNotification({
      type: 'success',
      title: 'Order Placed!',
      message: 'Your order has been successfully placed. You will receive a confirmation email shortly.',
      duration: 5000
    });

    // Redirect to order confirmation or profile page
    setTimeout(() => {
      navigate('/profile');
    }, 2000);
  };

  const getSelectedAddress = () => {
    if (selectedAddressId === 'new') {
      return { ...newAddress, id: 'new', isDefault: false };
    }
    return savedAddresses.find(addr => addr.id === selectedAddressId);
  };

  const selectedAddress = getSelectedAddress();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link 
              to="/cart" 
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Address Selection */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <MapPin className="h-5 w-5 text-[#65E856] mr-2" />
                  Shipping Address
                </h2>
                <button
                  onClick={() => setShowNewAddressForm(!showNewAddressForm)}
                  className="flex items-center space-x-2 px-4 py-2 text-[#65E856] hover:bg-[#65E856]/10 rounded-lg transition-colors duration-200"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add New Address</span>
                </button>
              </div>

              {/* Saved Addresses */}
              <div className="space-y-3 mb-6">
                {savedAddresses.map((address) => (
                  <div
                    key={address.id}
                    className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                      selectedAddressId === address.id
                        ? 'border-[#65E856] bg-[#65E856]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleAddressSelect(address.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            address.type === 'home' ? 'bg-blue-100 text-blue-800' :
                            address.type === 'work' ? 'bg-purple-100 text-purple-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {address.type.charAt(0).toUpperCase() + address.type.slice(1)}
                          </span>
                          {address.isDefault && (
                            <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="font-medium text-gray-900">{address.name}</p>
                        <p className="text-gray-600">{address.street}</p>
                        <p className="text-gray-600">{address.city}, {address.state} {address.zipCode}</p>
                        <p className="text-gray-600">{address.country}</p>
                        <p className="text-gray-600">{address.phone}</p>
                      </div>
                      {selectedAddressId === address.id && (
                        <Check className="h-6 w-6 text-[#65E856]" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* New Address Form */}
              {showNewAddressForm && (
                <div className="border-2 border-dashed border-[#65E856] rounded-lg p-6 bg-[#65E856]/5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Address</h3>
                  <form onSubmit={handleNewAddressSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Address Type</label>
                        <select
                          value={newAddress.type}
                          onChange={(e) => setNewAddress({...newAddress, type: e.target.value as 'home' | 'work' | 'other'})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65E856] focus:border-transparent"
                        >
                          <option value="home">Home</option>
                          <option value="work">Work</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          value={newAddress.name}
                          onChange={(e) => setNewAddress({...newAddress, name: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65E856] focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                      <input
                        type="text"
                        value={newAddress.street}
                        onChange={(e) => setNewAddress({...newAddress, street: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65E856] focus:border-transparent"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                        <input
                          type="text"
                          value={newAddress.city}
                          onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65E856] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                        <input
                          type="text"
                          value={newAddress.state}
                          onChange={(e) => setNewAddress({...newAddress, state: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65E856] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
                        <input
                          type="text"
                          value={newAddress.zipCode}
                          onChange={(e) => setNewAddress({...newAddress, zipCode: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65E856] focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                        <input
                          type="text"
                          value={newAddress.country}
                          onChange={(e) => setNewAddress({...newAddress, country: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65E856] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          value={newAddress.phone}
                          onChange={(e) => setNewAddress({...newAddress, phone: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#65E856] focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        type="submit"
                        className="px-6 py-2 bg-[#65E856] text-white font-medium rounded-lg hover:bg-[#56d947] transition-colors duration-200"
                      >
                        Save Address
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowNewAddressForm(false)}
                        className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Items</h2>
              <div className="space-y-4">
                {state.cart.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.product.name}</h3>
                      <p className="text-sm text-gray-600">{item.product.brand}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-[#65E856]">FREE</span>
                      {item.product.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">
                          ${(item.product.originalPrice * item.quantity).toFixed(2)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Address - Separate Section */}
            {selectedAddress && !showNewAddressForm && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <MapPin className="h-5 w-5 text-[#65E856] mr-2" />
                    Selected Shipping Address
                  </h2>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setSelectedAddressId('')}
                      className="text-[#65E856] hover:text-[#56d947] font-medium transition-colors duration-200"
                    >
                      Change Address
                    </button>
                    <button
                      onClick={handleRemoveAddress}
                      className="text-red-600 hover:text-red-700 font-medium transition-colors duration-200 flex items-center space-x-1"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
                <div className="border-2 border-[#65E856] rounded-lg p-4 bg-[#65E856]/5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          selectedAddress.type === 'home' ? 'bg-blue-100 text-blue-800' :
                          selectedAddress.type === 'work' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {selectedAddress.type.charAt(0).toUpperCase() + selectedAddress.type.slice(1)}
                        </span>
                        {selectedAddress.isDefault && (
                          <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="font-medium text-gray-900">{selectedAddress.name}</p>
                      <p className="text-gray-600">{selectedAddress.street}</p>
                      <p className="text-gray-600">{selectedAddress.city}, {selectedAddress.state} {selectedAddress.zipCode}</p>
                      <p className="text-gray-600">{selectedAddress.country}</p>
                      <p className="text-gray-600">{selectedAddress.phone}</p>
                    </div>
                    <Check className="h-6 w-6 text-[#65E856]" />
                  </div>
                </div>
              </div>
            )}
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

              <button
                onClick={handlePlaceOrder}
                disabled={!selectedAddress}
                className={`w-full py-4 font-bold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg ${
                  selectedAddress
                    ? 'bg-[#65E856] text-white hover:bg-[#56d947]'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {selectedAddress ? 'Place Order' : 'Select Address to Continue'}
              </button>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-4">
                  🎉 You're saving ${totalValue.toFixed(2)} with these free products!
                </p>
                <Link 
                  to="/cart" 
                  className="text-[#65E856] hover:underline text-sm font-medium"
                >
                  Back to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
