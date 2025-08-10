import React from 'react';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { useApp } from '../context/AppContext';

const ProductGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visibleProducts, setVisibleProducts] = useState(8);
  const { state, dispatch } = useApp();

  // Reset visible products when search query changes
  useEffect(() => {
    setVisibleProducts(8);
  }, [state.searchQuery]);

  // Use search results if there's a search query, otherwise use filtered products
  const baseProducts = state.searchQuery ? state.searchResults : products;
  
  // Filter products based on active category (only if not searching)
  const filteredProducts = state.searchQuery 
    ? baseProducts 
    : (activeFilter === 'All' 
        ? baseProducts 
        : baseProducts.filter(product => product.category === activeFilter));

  // Get visible products based on current limit
  const displayedProducts = filteredProducts.slice(0, visibleProducts);

  // Check if there are more products to load
  const hasMoreProducts = visibleProducts < filteredProducts.length;

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setVisibleProducts(8); // Reset to initial count when changing filter
  };

  const handleLoadMore = () => {
    setVisibleProducts(prev => prev + 8);
  };

  const clearSearch = () => {
    dispatch({ type: 'CLEAR_SEARCH' });
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="explore">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            {state.searchQuery ? (
              <>
                Search Results for "
                <span className="text-[#65E856]">{state.searchQuery}</span>"
              </>
            ) : (
              <>
                Discover Amazing 
                <span className="text-[#65E856]"> Free Products</span>
              </>
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {state.searchQuery ? (
              `Found ${state.searchResults.length} product${state.searchResults.length !== 1 ? 's' : ''} matching your search.`
            ) : (
              'Browse through our carefully curated collection of high-quality products available at no cost. New items added daily from trusted brands.'
            )}
          </p>
        </div>

        {/* Search Results Summary */}
        {state.searchQuery && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
              <span className="text-gray-600">
                {state.searchResults.length} result{state.searchResults.length !== 1 ? 's' : ''} found
              </span>
              <button
                onClick={clearSearch}
                className="text-[#65E856] hover:text-[#56d947] font-medium"
              >
                Clear search
              </button>
            </div>
          </div>
        )}

        {/* Filter Tabs - Only show when not searching */}
        {!state.searchQuery && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Electronics', 'Beauty', 'Food', 'Sports', 'Stationery'].map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  filter === activeFilter 
                    ? 'bg-[#65E856] text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        {/* Products Grid */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* No Results Message */
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No products found
              </h3>
              <p className="text-gray-600 mb-8">
                {state.searchQuery 
                  ? `We couldn't find any products matching "${state.searchQuery}". Try different keywords or browse all products.`
                  : 'No products available in this category at the moment.'
                }
              </p>
              {state.searchQuery && (
                <button
                  onClick={clearSearch}
                  className="px-6 py-3 bg-[#65E856] text-white font-medium rounded-full hover:bg-[#56d947] transition-colors duration-200"
                >
                  Browse All Products
                </button>
              )}
            </div>
          </div>
        )}

        {/* Load More Button - Show when there are more products to load */}
        {hasMoreProducts && (
          <div className="text-center mt-16">
            <button 
              onClick={handleLoadMore}
              className="px-8 py-4 bg-white text-[#65E856] font-bold text-lg rounded-full border-2 border-[#65E856] hover:bg-[#65E856] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Load More Products ({filteredProducts.length - visibleProducts} remaining)
            </button>
          </div>
        )}

        {/* No More Products Message - Show when all products are displayed */}
        {!hasMoreProducts && filteredProducts.length > 8 && (
          <div className="text-center mt-16">
            <p className="text-gray-600 text-lg">
              {state.searchQuery 
                ? `You've seen all ${filteredProducts.length} search results!`
                : `You've seen all ${filteredProducts.length} products !`
              }
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;