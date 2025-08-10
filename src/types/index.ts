export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  brand: string;
  category: string;
  categoryColor: string;
  price?: number;
  originalPrice?: number;
  specifications?: { [key: string]: string };
  features?: string[];
  images?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  dateAdded: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinDate: Date;
}

export interface Order {
  id: string;
  date: Date;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface SuccessStory {
  id: string;
  userName: string;
  userAvatar: string;
  productName: string;
  story: string;
  date: string;
  rating: number;
}