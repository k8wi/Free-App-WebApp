import React from 'react';
import { Star, Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useNotification } from '../context/NotificationContext';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { state, dispatch } = useApp();
  const { showNotification } = useNotification();
  
  const isInWishlist = state.wishlist.some(item => item.product.id === product.id);
  
  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist) {
      dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product.id });
    } else {
      dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    }
  };

  const handleClaimNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'ADD_TO_CART', payload: product });
    
    // Show success notification
    showNotification({
      type: 'success',
      title: 'Added to Cart!',
      message: `${product.name} has been successfully added to your cart.`,
      duration: 3000
    });
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

  return (
    <Link to={`/product/${product.id}`} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden block">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay with actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
            <button 
              onClick={handleAddToWishlist}
              className={`p-2 rounded-full shadow-lg transition-colors duration-200 ${
                isInWishlist 
                  ? 'bg-[#65E856] text-white hover:bg-[#56d947]' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
            </button>
            <Link 
              to={`/product/${product.id}`}
              className="p-2 bg-[#65E856] rounded-full shadow-lg hover:bg-[#56d947] transition-colors duration-200"
            >
              <ExternalLink className="h-5 w-5 text-white" />
            </Link>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${product.categoryColor}`}>
            {product.category}
          </span>
        </div>

        {/* Free Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 text-xs font-bold bg-[#65E856] text-white rounded-full shadow-lg">
            FREE
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Brand */}
        <div className="text-sm text-[#65E856] font-semibold mb-2">
          {product.brand}
        </div>

        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* Rating and Reviews */}
        <div className="flex items-center mb-4">
          <div className="flex items-center space-x-1">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm font-semibold text-gray-900 ml-2">
            {product.rating}
          </span>
          <span className="text-sm text-gray-500 ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* Action Button */}
        <button 
          onClick={handleClaimNow}
          className="w-full py-3 bg-[#65E856] text-white font-bold rounded-lg hover:bg-[#56d947] transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
        >
          Claim Now
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;