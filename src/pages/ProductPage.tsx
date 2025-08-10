import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart, ArrowLeft, Check, Truck, Shield, RotateCcw, MessageCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useNotification } from '../context/NotificationContext';
import { products } from '../data/products';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useApp();
  const { showNotification } = useNotification();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'features' | 'specifications' | 'reviews'>('features');

  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/" className="text-[#65E856] hover:underline">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const isInWishlist = state.wishlist.some(item => item.product.id === product.id);
  const isInCart = state.cart.some(item => item.product.id === product.id);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
    
    // Show success notification
    showNotification({
      type: 'success',
      title: 'Added to Cart!',
      message: `${quantity > 1 ? `${quantity}x ` : ''}${product.name} has been successfully added to your cart.`,
      duration: 3000
    });
  };

  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
    } else {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    }
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-4 w-4 fill-[#65E856] text-[#65E856]" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-gray-300" />
          <Star className="h-4 w-4 fill-[#65E856] text-[#65E856] absolute top-0 left-0 clip-half" />
        </div>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
      );
    }

    return stars;
  };

  // Mock reviews data - in a real app, this would come from an API
  const mockReviews = [
    {
      id: 1,
      userName: 'Sarah M.',
      rating: 5,
      date: '2024-01-15',
      comment: 'Absolutely love this product! The quality is outstanding and it exceeded my expectations.'
    },
    {
      id: 2,
      userName: 'Mike R.',
      rating: 4,
      date: '2024-01-10',
      comment: 'Great product overall. Very satisfied with the purchase and would recommend to others.'
    },
    {
      id: 3,
      userName: 'Emily T.',
      rating: 5,
      date: '2024-01-05',
      comment: 'This is exactly what I was looking for. Fast shipping and excellent customer service.'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'features':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-[#65E856] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose This Product?</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} out of 5 ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'specifications':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Specifications</h3>
              <div className="bg-gray-50 rounded-lg p-6">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <dt className="text-gray-600 font-medium">{key}:</dt>
                      <dd className="text-gray-900 font-semibold">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Product Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600">Brand</p>
                  <p className="text-lg font-semibold text-gray-900">{product.brand}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600">Category</p>
                  <p className="text-lg font-semibold text-gray-900">{product.category}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-600">Product ID</p>
                  <p className="text-lg font-semibold text-gray-900">#{product.id}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'reviews':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Customer Reviews</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  {renderStars(product.rating)}
                  <span className="text-lg font-semibold text-gray-900">{product.rating}</span>
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
            </div>

            {product.reviews > 0 ? (
              <div className="space-y-4">
                {mockReviews.map((review) => (
                  <div key={review.id} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#65E856] rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">
                            {review.userName.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{review.userName}</p>
                          <div className="flex items-center space-x-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">No Reviews Yet</h4>
                <p className="text-gray-600">Be the first to review this product!</p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const productImages = product.images || [product.image];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-[#65E856]">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#65E856] mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {productImages.length > 1 && (
              <div className="flex space-x-4 overflow-x-auto">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${
                      selectedImage === index ? 'border-[#65E856]' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category Badge */}
            <div>
              <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${product.categoryColor}`}>
                {product.category}
              </span>
            </div>

            {/* Product Name & Brand */}
            <div>
              <p className="text-[#65E856] font-semibold mb-2">{product.brand}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {renderStars(product.rating)}
              </div>
              <span className="text-lg font-semibold text-gray-900">{product.rating}</span>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-[#65E856]">FREE</span>
              {product.originalPrice && (
                <span className="text-2xl text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <label className="text-gray-700 font-medium">Quantity:</label>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-600 hover:text-gray-900"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center space-x-2 py-4 bg-[#65E856] text-white font-bold rounded-lg hover:bg-[#56d947] transition-all duration-200 transform hover:scale-105"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>{isInCart ? 'Add More to Cart' : 'Claim Now'}</span>
              </button>
              
              <button
                onClick={handleToggleWishlist}
                className={`px-6 py-4 border-2 rounded-lg font-medium transition-all duration-200 ${
                  isInWishlist
                    ? 'border-[#65E856] bg-[#65E856] text-white'
                    : 'border-gray-300 text-gray-700 hover:border-[#65E856] hover:text-[#65E856]'
                }`}
              >
                <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
              <div className="text-center">
                <Truck className="h-8 w-8 text-[#65E856] mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Free Shipping</p>
                <p className="text-xs text-gray-500">On all orders</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-[#65E856] mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Quality Guarantee</p>
                <p className="text-xs text-gray-500">100% authentic</p>
              </div>
              <div className="text-center">
                <RotateCcw className="h-8 w-8 text-[#65E856] mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-900">Easy Returns</p>
                <p className="text-xs text-gray-500">30-day policy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button 
                onClick={() => setActiveTab('features')}
                className={`py-4 px-1 border-b-2 transition-colors duration-200 ${
                  activeTab === 'features'
                    ? 'border-[#65E856] text-[#65E856]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Features
              </button>
              <button 
                onClick={() => setActiveTab('specifications')}
                className={`py-4 px-1 border-b-2 transition-colors duration-200 ${
                  activeTab === 'specifications'
                    ? 'border-[#65E856] text-[#65E856]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Specifications
              </button>
              <button 
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 border-b-2 transition-colors duration-200 ${
                  activeTab === 'reviews'
                    ? 'border-[#65E856] text-[#65E856]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Reviews
              </button>
            </nav>
          </div>

          <div className="py-8">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;