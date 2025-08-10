import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product, CartItem, WishlistItem, User, Order } from '../types';

interface AppState {
  cart: CartItem[];
  wishlist: WishlistItem[];
  user: User | null;
  orders: Order[];
  searchQuery: string;
  searchResults: Product[];
}

type AppAction =
  | { type: 'ADD_TO_CART'; payload: Product }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { productId: number; quantity: number } }
  | { type: 'ADD_TO_WISHLIST'; payload: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; payload: number }
  | { type: 'MOVE_TO_CART'; payload: number }
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_SEARCH_QUERY'; payload: string }
  | { type: 'SET_SEARCH_RESULTS'; payload: Product[] }
  | { type: 'CLEAR_SEARCH' };

const initialState: AppState = {
  cart: [],
  wishlist: [],
  user: {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    joinDate: new Date('2023-01-15')
  },
  orders: [
    {
      id: 'ORD-001',
      date: new Date('2024-12-01'),
      items: [],
      total: 0,
      status: 'delivered'
    },
    {
      id: 'ORD-002',
      date: new Date('2024-12-15'),
      items: [],
      total: 0,
      status: 'shipped'
    }
  ],
  searchQuery: '',
  searchResults: []
};

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.cart.find(item => item.product.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.product.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { product: action.payload, quantity: 1 }]
      };
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.product.id !== action.payload)
      };

    case 'UPDATE_CART_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.product.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0)
      };

    case 'ADD_TO_WISHLIST': {
      const existingWishlistItem = state.wishlist.find(item => item.product.id === action.payload.id);
      if (existingWishlistItem) return state;
      
      return {
        ...state,
        wishlist: [...state.wishlist, { product: action.payload, dateAdded: new Date() }]
      };
    }

    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.product.id !== action.payload)
      };

    case 'MOVE_TO_CART': {
      const wishlistItem = state.wishlist.find(item => item.product.id === action.payload);
      if (!wishlistItem) return state;

      const newState = appReducer(state, { type: 'ADD_TO_CART', payload: wishlistItem.product });
      return appReducer(newState, { type: 'REMOVE_FROM_WISHLIST', payload: action.payload });
    }

    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      };

    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        searchQuery: action.payload
      };

    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.payload
      };

    case 'CLEAR_SEARCH':
      return {
        ...state,
        searchQuery: '',
        searchResults: []
      };

    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};