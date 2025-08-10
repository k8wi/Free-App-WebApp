import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    description: 'High-quality sound with noise cancellation and premium comfort for all-day listening.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 256,
    brand: 'AudioTech',
    category: 'Electronics',
    categoryColor: 'bg-blue-100 text-blue-800',
    price: 0,
    originalPrice: 299,
    specifications: {
      'Battery Life': '30 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Weight': '250g',
      'Noise Cancellation': 'Active ANC'
    },
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Quick charge (5 min = 2 hours)',
      'Premium leather ear cups',
      'Voice assistant compatible'
    ],
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8534088/pexels-photo-8534088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 2,
    name: 'Organic Skincare Set',
    description: 'Natural ingredients for healthy, glowing skin with eco-friendly packaging.',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.9,
    reviews: 189,
    brand: 'NaturalGlow',
    category: 'Beauty',
    categoryColor: 'bg-pink-100 text-pink-800',
    price: 0,
    originalPrice: 89,
    specifications: {
      'Skin Type': 'All skin types',
      'Ingredients': '100% Natural',
      'Packaging': 'Eco-friendly',
      'Shelf Life': '24 months'
    },
    features: [
      'Organic certified ingredients',
      'Cruelty-free testing',
      'Sustainable packaging',
      'Suitable for sensitive skin',
      'Dermatologist approved'
    ],
    images: [
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 3,
    name: 'Smart Fitness Tracker',
    description: 'Track your health metrics with advanced sensors and long battery life.',
    image: 'https://images.pexels.com/photos/1878714/pexels-photo-1878714.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 423,
    brand: 'FitSmart',
    category: 'Electronics',
    categoryColor: 'bg-blue-100 text-blue-800',
    price: 0,
    originalPrice: 199,
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery': '7 days',
      'Water Resistance': '5ATM',
      'Sensors': 'Heart rate, GPS, SpO2'
    },
    features: [
      '24/7 heart rate monitoring',
      'Built-in GPS tracking',
      'Sleep quality analysis',
      'Stress level monitoring',
      '100+ workout modes'
    ],
    images: [
      'https://images.pexels.com/photos/1878714/pexels-photo-1878714.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 4,
    name: 'Artisan Coffee Beans',
    description: 'Premium roasted coffee beans sourced directly from sustainable farms.',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 312,
    brand: 'BrewMaster',
    category: 'Food',
    categoryColor: 'bg-amber-100 text-amber-800',
    price: 0,
    originalPrice: 24,
    specifications: {
      'Origin': 'Colombian Highlands',
      'Roast Level': 'Medium',
      'Weight': '500g',
      'Processing': 'Washed'
    },
    features: [
      'Single-origin Colombian beans',
      'Fair trade certified',
      'Freshly roasted weekly',
      'Rich chocolate notes',
      'Sustainable farming practices'
    ],
    images: [
      'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 5,
    name: 'Yoga Mat & Accessories',
    description: 'Non-slip yoga mat with alignment guides and matching accessories set.',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.5,
    reviews: 167,
    brand: 'ZenFlow',
    category: 'Sports',
    categoryColor: 'bg-green-100 text-green-800',
    price: 0,
    originalPrice: 79,
    specifications: {
      'Material': 'Natural rubber',
      'Thickness': '6mm',
      'Size': '183cm x 61cm',
      'Weight': '2.5kg'
    },
    features: [
      'Non-slip surface texture',
      'Alignment guide lines',
      'Eco-friendly materials',
      'Includes carrying strap',
      'Machine washable'
    ],
    images: [
      'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 6,
    name: 'Designer Notebook Set',
    description: 'Beautiful hardcover notebooks with premium paper for writing and sketching.',
    image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.4,
    reviews: 98,
    brand: 'PaperCraft',
    category: 'Stationery',
    categoryColor: 'bg-purple-100 text-purple-800',
    price: 0,
    originalPrice: 45,
    specifications: {
      'Pages': '200 pages each',
      'Paper': '120gsm cream',
      'Size': 'A5 (14.8 x 21cm)',
      'Binding': 'Thread-bound'
    },
    features: [
      'Premium hardcover design',
      'Dotted and lined pages',
      'Elastic band closure',
      'Ribbon bookmark',
      'Acid-free paper'
    ],
    images: [
      'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 7,
    name: 'Wireless Bluetooth Speaker',
    description: 'Portable speaker with 360-degree sound and waterproof design for outdoor adventures.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 342,
    brand: 'SoundWave',
    category: 'Electronics',
    categoryColor: 'bg-blue-100 text-blue-800',
    price: 0,
    originalPrice: 159,
    specifications: {
      'Battery Life': '20 hours',
      'Water Resistance': 'IPX7',
      'Connectivity': 'Bluetooth 5.0',
      'Weight': '1.2kg'
    },
    features: [
      '360-degree sound output',
      'Waterproof and dustproof',
      'Built-in microphone',
      'Party mode for multiple speakers',
      'Quick charge technology'
    ],
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 8,
    name: 'Anti-Aging Serum',
    description: 'Advanced formula with retinol and hyaluronic acid for youthful, radiant skin.',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 567,
    brand: 'YouthGlow',
    category: 'Beauty',
    categoryColor: 'bg-pink-100 text-pink-800',
    price: 0,
    originalPrice: 129,
    specifications: {
      'Volume': '30ml',
      'Skin Type': 'All skin types',
      'Active Ingredients': 'Retinol, Hyaluronic Acid',
      'Shelf Life': '12 months'
    },
    features: [
      'Clinically proven results',
      'Gentle formula for sensitive skin',
      'Reduces fine lines and wrinkles',
      'Improves skin texture',
      'Dermatologist recommended'
    ],
    images: [
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 9,
    name: 'Gourmet Chocolate Box',
    description: 'Artisan chocolates crafted with premium cocoa and unique flavor combinations.',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.9,
    reviews: 234,
    brand: 'ChocoLuxe',
    category: 'Food',
    categoryColor: 'bg-amber-100 text-amber-800',
    price: 0,
    originalPrice: 45,
    specifications: {
      'Weight': '250g',
      'Cocoa Content': '70%',
      'Origin': 'Belgian',
      'Allergens': 'Contains nuts'
    },
    features: [
      'Handcrafted in small batches',
      'Single-origin cocoa beans',
      'Unique flavor combinations',
      'Elegant gift packaging',
      'Fair trade certified'
    ],
    images: [
      'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 10,
    name: 'Running Shoes',
    description: 'Lightweight performance running shoes with superior cushioning and breathability.',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 789,
    brand: 'RunFast',
    category: 'Sports',
    categoryColor: 'bg-green-100 text-green-800',
    price: 0,
    originalPrice: 189,
    specifications: {
      'Weight': '280g per shoe',
      'Drop': '8mm',
      'Cushioning': 'Responsive foam',
      'Upper': 'Breathable mesh'
    },
    features: [
      'Energy return technology',
      'Breathable mesh upper',
      'Reflective details',
      'Removable foam insole',
      'Durable rubber outsole'
    ],
    images: [
      'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 11,
    name: 'Calligraphy Pen Set',
    description: 'Professional calligraphy pens with various nib sizes and premium ink bottles.',
    image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.5,
    reviews: 156,
    brand: 'InkMaster',
    category: 'Stationery',
    categoryColor: 'bg-purple-100 text-purple-800',
    price: 0,
    originalPrice: 67,
    specifications: {
      'Nib Sizes': '3 sizes included',
      'Ink Colors': '5 colors',
      'Material': 'Brass and resin',
      'Weight': '45g per pen'
    },
    features: [
      'Professional quality nibs',
      'Smooth ink flow',
      'Ergonomic design',
      'Includes practice paper',
      'Travel case included'
    ],
    images: [
      'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 12,
    name: 'Smartphone Stand',
    description: 'Adjustable smartphone stand with wireless charging and cable management.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.4,
    reviews: 298,
    brand: 'TechPro',
    category: 'Electronics',
    categoryColor: 'bg-blue-100 text-blue-800',
    price: 0,
    originalPrice: 89,
    specifications: {
      'Charging': '15W wireless',
      'Compatibility': 'All smartphones',
      'Material': 'Aluminum',
      'Height': 'Adjustable 10-20cm'
    },
    features: [
      'Fast wireless charging',
      'Adjustable viewing angles',
      'Cable management system',
      'Anti-slip base',
      'LED charging indicator'
    ],
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 13,
    name: 'Facial Mask Set',
    description: 'Hydrating sheet masks with natural ingredients for different skin concerns.',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 445,
    brand: 'SkinRevive',
    category: 'Beauty',
    categoryColor: 'bg-pink-100 text-pink-800',
    price: 0,
    originalPrice: 34,
    specifications: {
      'Quantity': '10 masks',
      'Material': 'Bamboo fiber',
      'Active Ingredients': 'Hyaluronic Acid, Vitamin C',
      'Duration': '15-20 minutes'
    },
    features: [
      'Different masks for different concerns',
      'Bamboo fiber material',
      'No harmful chemicals',
      'Suitable for sensitive skin',
      'Quick and easy application'
    ],
    images: [
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 14,
    name: 'Organic Tea Collection',
    description: 'Premium loose-leaf teas sourced from organic farms around the world.',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 323,
    brand: 'TeaLeaf',
    category: 'Food',
    categoryColor: 'bg-amber-100 text-amber-800',
    price: 0,
    originalPrice: 56,
    specifications: {
      'Quantity': '100g each variety',
      'Types': '5 different teas',
      'Origin': 'Various countries',
      'Certification': 'Organic certified'
    },
    features: [
      'Single-origin teas',
      'Organic certification',
      'Eco-friendly packaging',
      'Includes brewing guide',
      'Gift-ready presentation'
    ],
    images: [
      'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 15,
    name: 'Resistance Bands Set',
    description: 'Complete set of resistance bands for home workouts and strength training.',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.5,
    reviews: 267,
    brand: 'FitBand',
    category: 'Sports',
    categoryColor: 'bg-green-100 text-green-800',
    price: 0,
    originalPrice: 42,
    specifications: {
      'Resistance Levels': '5 bands',
      'Material': 'Natural latex',
      'Length': '200cm each',
      'Weight': '1.2kg total'
    },
    features: [
      '5 different resistance levels',
      'Natural latex material',
      'Includes workout guide',
      'Travel-friendly storage bag',
      'Suitable for all fitness levels'
    ],
    images: [
      'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 16,
    name: 'Desk Organizer',
    description: 'Multi-compartment desk organizer to keep your workspace tidy and organized.',
    image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.3,
    reviews: 189,
    brand: 'OrganizePro',
    category: 'Stationery',
    categoryColor: 'bg-purple-100 text-purple-800',
    price: 0,
    originalPrice: 38,
    specifications: {
      'Compartments': '8 sections',
      'Material': 'Bamboo wood',
      'Dimensions': '25 x 15 x 8cm',
      'Weight': '850g'
    },
    features: [
      'Natural bamboo construction',
      'Multiple compartments',
      'Phone and tablet stand',
      'Cable management',
      'Easy to assemble'
    ],
    images: [
      'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 17,
    name: 'Portable Power Bank',
    description: 'High-capacity power bank with fast charging and multiple USB ports.',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.6,
    reviews: 512,
    brand: 'PowerMax',
    category: 'Electronics',
    categoryColor: 'bg-blue-100 text-blue-800',
    price: 0,
    originalPrice: 129,
    specifications: {
      'Capacity': '20,000mAh',
      'Output': '3 USB ports',
      'Charging Speed': '18W fast charging',
      'Weight': '350g'
    },
    features: [
      'High capacity battery',
      'Fast charging technology',
      'Multiple device charging',
      'LED power indicator',
      'Compact and portable'
    ],
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 18,
    name: 'Makeup Brush Set',
    description: 'Professional makeup brush set with synthetic bristles and ergonomic handles.',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.7,
    reviews: 378,
    brand: 'BeautyPro',
    category: 'Beauty',
    categoryColor: 'bg-pink-100 text-pink-800',
    price: 0,
    originalPrice: 78,
    specifications: {
      'Brushes': '12 pieces',
      'Bristles': 'Synthetic',
      'Handle': 'Rose gold',
      'Case': 'Included'
    },
    features: [
      'Professional quality brushes',
      'Synthetic cruelty-free bristles',
      'Rose gold handles',
      'Travel case included',
      'Suitable for all skin types'
    ],
    images: [
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 19,
    name: 'Protein Powder Mix',
    description: 'Plant-based protein powder with essential amino acids and natural flavors.',
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.8,
    reviews: 456,
    brand: 'VeganFuel',
    category: 'Food',
    categoryColor: 'bg-amber-100 text-amber-800',
    price: 0,
    originalPrice: 89,
    specifications: {
      'Protein Content': '25g per serving',
      'Flavors': '3 varieties',
      'Size': '1kg container',
      'Dietary': 'Vegan, gluten-free'
    },
    features: [
      'Complete amino acid profile',
      'Natural flavoring',
      'No artificial sweeteners',
      'Easy to mix',
      'Suitable for vegans'
    ],
    images: [
      'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  },
  {
    id: 20,
    name: 'Yoga Block Set',
    description: 'High-density foam yoga blocks for support and alignment during practice.',
    image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=500',
    rating: 4.4,
    reviews: 234,
    brand: 'YogaEssentials',
    category: 'Sports',
    categoryColor: 'bg-green-100 text-green-800',
    price: 0,
    originalPrice: 28,
    specifications: {
      'Quantity': '2 blocks',
      'Material': 'High-density foam',
      'Dimensions': '23 x 15 x 7.5cm',
      'Weight': '400g total'
    },
    features: [
      'High-density foam construction',
      'Lightweight and durable',
      'Non-slip surface',
      'Easy to clean',
      'Suitable for all levels'
    ],
    images: [
      'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  }
];