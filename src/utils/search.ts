import { Product } from '../types';

export const searchProducts = (products: Product[], query: string): Product[] => {
  if (!query.trim()) {
    return products;
  }

  const searchTerm = query.toLowerCase().trim();
  
  return products.filter(product => {
    // Search in product name
    if (product.name.toLowerCase().includes(searchTerm)) {
      return true;
    }
    
    // Search in product description
    if (product.description.toLowerCase().includes(searchTerm)) {
      return true;
    }
    
    // Search in brand name
    if (product.brand.toLowerCase().includes(searchTerm)) {
      return true;
    }
    
    // Search in category
    if (product.category.toLowerCase().includes(searchTerm)) {
      return true;
    }
    
    // Search in features
    if (product.features.some(feature => 
      feature.toLowerCase().includes(searchTerm)
    )) {
      return true;
    }
    
    return false;
  });
};

export const getSearchSuggestions = (products: Product[], query: string): string[] => {
  if (!query.trim()) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const suggestions = new Set<string>();
  
  products.forEach(product => {
    // Add product names that match
    if (product.name.toLowerCase().includes(searchTerm)) {
      suggestions.add(product.name);
    }
    
    // Add brand names that match
    if (product.brand.toLowerCase().includes(searchTerm)) {
      suggestions.add(product.brand);
    }
    
    // Add categories that match
    if (product.category.toLowerCase().includes(searchTerm)) {
      suggestions.add(product.category);
    }
  });
  
  return Array.from(suggestions).slice(0, 5); // Limit to 5 suggestions
};



