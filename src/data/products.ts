// Mock product data for our spice e-commerce website

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  weight: string;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  stock: number;
  isNew?: boolean;
  isFeatured?: boolean;
  isPopular?: boolean;
  isBestSeller?: boolean;
}

const products: Product[] = [
  // Seasonings
  {
    id: 'seasonings-001',
    name: 'Ginger Garlic Paste',
    category: 'seasonings',
    price: 125,
    weight: '200g',
    image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg',
    description: 'Fresh ginger and garlic ground into a smooth paste. Perfect for marinating meat or adding flavor to curries.',
    rating: 4.8,
    reviewCount: 124,
    stock: 50,
    isPopular: true
  },
  {
    id: 'seasonings-002',
    name: 'Red Chilli Flakes',
    category: 'seasonings',
    price: 95,
    weight: '100g',
    image: 'https://images.pexels.com/photos/6941042/pexels-photo-6941042.jpeg',
    description: 'Crushed red chilli flakes with seeds for a fiery kick to any dish. Perfect for pizzas, pastas, and more.',
    rating: 4.6,
    reviewCount: 86,
    stock: 35
  },
  {
    id: 'seasonings-003',
    name: 'Oregano',
    category: 'seasonings',
    price: 85,
    weight: '50g',
    image: 'https://images.pexels.com/photos/4198370/pexels-photo-4198370.jpeg',
    description: 'Dried oregano leaves with an intense, aromatic flavor. Essential for Mediterranean and Italian cuisine.',
    rating: 4.7,
    reviewCount: 92,
    stock: 40
  },
  {
    id: 'seasonings-004',
    name: 'Peri Peri Masala',
    category: 'seasonings',
    price: 145,
    weight: '80g',
    image: 'https://images.pexels.com/photos/6941016/pexels-photo-6941016.jpeg',
    description: 'African-inspired hot spice blend with paprika, bird\'s eye chilli, and citrus notes. Perfect for grilled meats and vegetables.',
    rating: 4.9,
    reviewCount: 105,
    stock: 30,
    isNew: true,
    isBestSeller: true
  },

  // Powdered Spices
  {
    id: 'powdered-001',
    name: 'Turmeric Powder',
    category: 'powdered-spices',
    price: 95,
    weight: '100g',
    image: 'https://images.pexels.com/photos/6941023/pexels-photo-6941023.jpeg',
    description: 'Pure ground turmeric with vibrant color and earthy flavor. Essential for Indian curries and health remedies.',
    rating: 4.8,
    reviewCount: 130,
    stock: 60,
    isBestSeller: true
  },
  {
    id: 'powdered-002',
    name: 'Vegetable Masala',
    category: 'powdered-spices',
    price: 125,
    weight: '100g',
    image: 'https://images.pexels.com/photos/8541766/pexels-photo-8541766.jpeg',
    description: 'Special blend of spices designed to enhance the flavor of vegetable dishes. Perfect for vegetable curries and stir-fries.',
    rating: 4.5,
    reviewCount: 78,
    stock: 45
  },
  {
    id: 'powdered-003',
    name: 'Black Salt',
    category: 'powdered-spices',
    price: 65,
    weight: '100g',
    image: 'https://images.pexels.com/photos/5765844/pexels-photo-5765844.jpeg',
    description: 'Himalayan black salt with a distinct sulfurous flavor. Popular in chaat, fruits, and vegan egg dishes.',
    rating: 4.6,
    reviewCount: 62,
    stock: 55
  },
  {
    id: 'powdered-004',
    name: 'Chicken Masala',
    category: 'powdered-spices',
    price: 135,
    weight: '100g',
    image: 'https://images.pexels.com/photos/5765796/pexels-photo-5765796.jpeg',
    description: 'Aromatic blend of spices specially formulated for chicken dishes. Creates rich, flavorful curries and marinades.',
    rating: 4.9,
    reviewCount: 142,
    stock: 40,
    isPopular: true
  },
  {
    id: 'powdered-005',
    name: 'Meat Masala',
    category: 'powdered-spices',
    price: 145,
    weight: '100g',
    image: 'https://images.pexels.com/photos/6941020/pexels-photo-6941020.jpeg',
    description: 'Robust spice blend perfect for red meat dishes. Enhances the flavor of mutton, beef, and lamb.',
    rating: 4.7,
    reviewCount: 98,
    stock: 35
  },
  {
    id: 'powdered-006',
    name: 'Pav Bhaji Masala',
    category: 'powdered-spices',
    price: 110,
    weight: '100g',
    image: 'https://images.pexels.com/photos/8541763/pexels-photo-8541763.jpeg',
    description: 'Authentic Mumbai-style spice blend for making the perfect pav bhaji. Flavorful mix of coriander, cumin, and more.',
    rating: 4.8,
    reviewCount: 76,
    stock: 50,
    isFeatured: true
  },
  {
    id: 'powdered-007',
    name: 'Coriander Powder',
    category: 'powdered-spices',
    price: 85,
    weight: '100g',
    image: 'https://images.pexels.com/photos/6941123/pexels-photo-6941123.jpeg',
    description: 'Freshly ground coriander seeds with a citrusy, nutty flavor. Essential base for curries and spice blends.',
    rating: 4.6,
    reviewCount: 84,
    stock: 65
  },
  {
    id: 'powdered-008',
    name: 'Sambar Masala',
    category: 'powdered-spices',
    price: 120,
    weight: '100g',
    image: 'https://images.pexels.com/photos/5765950/pexels-photo-5765950.jpeg',
    description: 'South Indian spice blend for authentic sambar. Perfect balance of spices for this classic lentil dish.',
    rating: 4.7,
    reviewCount: 92,
    stock: 40
  },
  {
    id: 'powdered-009',
    name: 'Garam Masala',
    category: 'powdered-spices',
    price: 130,
    weight: '100g',
    image: 'https://images.pexels.com/photos/6941035/pexels-photo-6941035.jpeg',
    description: 'Aromatic blend of warming spices like cardamom, cinnamon, and cloves. Adds depth and flavor to any dish.',
    rating: 4.9,
    reviewCount: 156,
    stock: 70,
    isBestSeller: true
  },
  {
    id: 'powdered-010',
    name: 'Chaat Masala',
    category: 'powdered-spices',
    price: 95,
    weight: '80g',
    image: 'https://images.pexels.com/photos/8542275/pexels-photo-8542275.jpeg',
    description: 'Tangy, spicy blend for Indian street food. Perfect for sprinkling on fruits, salads, and snacks.',
    rating: 4.8,
    reviewCount: 110,
    stock: 45,
    isPopular: true
  },

  // Blended Masala
  {
    id: 'blended-001',
    name: 'Haldi Chilli Blend',
    category: 'blended-masala',
    price: 135,
    weight: '100g',
    image: 'https://images.pexels.com/photos/6941087/pexels-photo-6941087.jpeg',
    description: 'Perfect blend of turmeric and chili for a balanced flavor and health benefits. Great for everyday cooking.',
    rating: 4.7,
    reviewCount: 84,
    stock: 50
  },
  {
    id: 'blended-002',
    name: 'Kerala Curry Blend',
    category: 'blended-masala',
    price: 165,
    weight: '120g',
    image: 'https://images.pexels.com/photos/6941045/pexels-photo-6941045.jpeg',
    description: 'Authentic Kerala-style spice blend with coconut, curry leaves, and a perfect balance of heat. Ideal for fish curries.',
    rating: 4.9,
    reviewCount: 102,
    stock: 35,
    isFeatured: true
  },
  {
    id: 'blended-003',
    name: 'Malabari Mix',
    category: 'blended-masala',
    price: 155,
    weight: '100g',
    image: 'https://images.pexels.com/photos/6941087/pexels-photo-6941087.jpeg',
    description: 'Special blend of spices from the Malabar coast. Perfect for meat and seafood dishes with a coastal flavor.',
    rating: 4.8,
    reviewCount: 76,
    stock: 40,
    isNew: true
  },

  // Whole Spices
  {
    id: 'whole-001',
    name: 'Green Cardamom',
    category: 'whole-spices',
    price: 245,
    weight: '50g',
    image: 'https://images.pexels.com/photos/6942003/pexels-photo-6942003.jpeg',
    description: 'Premium green cardamom pods with intense aroma. Essential for biryanis, desserts, and masala chai.',
    rating: 4.8,
    reviewCount: 114,
    stock: 30,
    isBestSeller: true
  },
  {
    id: 'whole-002',
    name: 'Cloves',
    category: 'whole-spices',
    price: 145,
    weight: '50g',
    image: 'https://images.pexels.com/photos/5765856/pexels-photo-5765856.jpeg',
    description: 'Aromatic whole cloves with intense flavor. Used in savory dishes, desserts, and spice blends.',
    rating: 4.7,
    reviewCount: 86,
    stock: 45
  },
  {
    id: 'whole-003',
    name: 'Fennel Seeds',
    category: 'whole-spices',
    price: 85,
    weight: '100g',
    image: 'https://images.pexels.com/photos/7412108/pexels-photo-7412108.jpeg',
    description: 'Sweet, anise-flavored seeds used in both sweet and savory dishes. Also great as a mouth freshener.',
    rating: 4.6,
    reviewCount: 72,
    stock: 60
  },
  {
    id: 'whole-004',
    name: 'Cumin Seeds',
    category: 'whole-spices',
    price: 95,
    weight: '100g',
    image: 'https://images.pexels.com/photos/8541756/pexels-photo-8541756.jpeg',
    description: 'Earthy, nutty cumin seeds essential for tempering dishes. Foundational spice in Indian cuisine.',
    rating: 4.7,
    reviewCount: 92,
    stock: 70
  },
  {
    id: 'whole-005',
    name: 'Dried Red Chillies',
    category: 'whole-spices',
    price: 75,
    weight: '100g',
    image: 'https://images.pexels.com/photos/6941094/pexels-photo-6941094.jpeg',
    description: 'Sun-dried red chillies with moderate heat. Perfect for tempering and making spice blends.',
    rating: 4.5,
    reviewCount: 68,
    stock: 55
  },
  {
    id: 'whole-006',
    name: 'Star Anise',
    category: 'whole-spices',
    price: 185,
    weight: '50g',
    image: 'https://images.pexels.com/photos/8541742/pexels-photo-8541742.jpeg',
    description: 'Star-shaped spice with a licorice-like flavor. Used in biryanis, masala chai, and Chinese five-spice.',
    rating: 4.8,
    reviewCount: 76,
    stock: 40
  },
  {
    id: 'whole-007',
    name: 'Black Peppercorns',
    category: 'whole-spices',
    price: 135,
    weight: '100g',
    image: 'https://images.pexels.com/photos/10915246/pexels-photo-10915246.jpeg',
    description: 'Pungent black peppercorns with complex flavor. The king of spices and essential for any kitchen.',
    rating: 4.7,
    reviewCount: 104,
    stock: 65
  },
  {
    id: 'whole-008',
    name: 'Mustard Seeds',
    category: 'whole-spices',
    price: 65,
    weight: '100g',
    image: 'https://images.pexels.com/photos/5765851/pexels-photo-5765851.jpeg',
    description: 'Small, round black mustard seeds with a pungent flavor. Essential for tempering South Indian dishes.',
    rating: 4.6,
    reviewCount: 78,
    stock: 80
  },
  {
    id: 'whole-009',
    name: 'Bay Leaves',
    category: 'whole-spices',
    price: 75,
    weight: '25g',
    image: 'https://images.pexels.com/photos/6942002/pexels-photo-6942002.jpeg',
    description: 'Aromatic dried bay leaves that add depth to curries, rice dishes, and soups. Remove before serving.',
    rating: 4.5,
    reviewCount: 62,
    stock: 50
  },
  {
    id: 'whole-010',
    name: 'Fenugreek Seeds',
    category: 'whole-spices',
    price: 95,
    weight: '100g',
    image: 'https://images.pexels.com/photos/6941060/pexels-photo-6941060.jpeg',
    description: 'Slightly bitter seeds used in pickles, spice blends, and vegetable dishes. Also known for health benefits.',
    rating: 4.6,
    reviewCount: 72,
    stock: 60
  },

  // Combo Packs
  {
    id: 'combo-001',
    name: 'Essential Spices Combo',
    category: 'combo-packs',
    price: 495,
    weight: '500g',
    image: 'https://images.pexels.com/photos/6941059/pexels-photo-6941059.jpeg',
    description: 'Set of 10 essential everyday spices for Indian cooking. Perfect starter kit or gift for spice lovers.',
    rating: 4.9,
    reviewCount: 145,
    stock: 25,
    isFeatured: true,
    isBestSeller: true
  },
  {
    id: 'combo-002',
    name: 'Chilli & Turmeric Duo',
    category: 'combo-packs',
    price: 175,
    weight: '200g',
    image: 'https://images.pexels.com/photos/6941083/pexels-photo-6941083.jpeg',
    description: 'Premium quality red chilli powder and turmeric powder combo. Everyday essentials at a special price.',
    rating: 4.7,
    reviewCount: 86,
    stock: 40
  },
  {
    id: 'combo-003',
    name: 'Whole Masala Collection',
    category: 'combo-packs',
    price: 595,
    weight: '350g',
    image: 'https://images.pexels.com/photos/6941057/pexels-photo-6941057.jpeg',
    description: 'Complete set of whole spices for authentic Indian cooking. Includes all essential whole spices in a beautiful box.',
    rating: 4.8,
    reviewCount: 112,
    stock: 20,
    isPopular: true
  },

  // Dry Fruits
  {
    id: 'dryfruits-001',
    name: 'Golden Raisins',
    category: 'dry-fruits',
    price: 185,
    weight: '200g',
    image: 'https://images.pexels.com/photos/7439978/pexels-photo-7439978.jpeg',
    description: 'Sweet, tender golden raisins. Perfect for baking, cooking, or as a healthy snack.',
    rating: 4.7,
    reviewCount: 82,
    stock: 50
  },
  {
    id: 'dryfruits-002',
    name: 'Cashew Nuts',
    category: 'dry-fruits',
    price: 425,
    weight: '250g',
    image: 'https://images.pexels.com/photos/5964/food-apple-nuts-cashew.jpg',
    description: 'Premium quality whole cashew nuts. Great for snacking, cooking, or making cashew butter.',
    rating: 4.8,
    reviewCount: 126,
    stock: 35,
    isBestSeller: true
  },
  {
    id: 'dryfruits-003',
    name: 'Almonds',
    category: 'dry-fruits',
    price: 495,
    weight: '250g',
    image: 'https://images.pexels.com/photos/16477221/pexels-photo-16477221/free-photo-of-almonds.jpeg',
    description: 'Raw, unsalted almonds rich in nutrients. Versatile for snacking, baking, and cooking.',
    rating: 4.8,
    reviewCount: 138,
    stock: 40
  },
  {
    id: 'dryfruits-004',
    name: 'Saffron Threads',
    category: 'dry-fruits',
    price: 795,
    weight: '2g',
    image: 'https://images.pexels.com/photos/5946640/pexels-photo-5946640.jpeg',
    description: 'Premium quality Kashmiri saffron threads. Adds color, aroma, and flavor to biryanis and desserts.',
    rating: 4.9,
    reviewCount: 92,
    stock: 15,
    isPopular: true
  },
  {
    id: 'dryfruits-005',
    name: 'Pistachios',
    category: 'dry-fruits',
    price: 595,
    weight: '200g',
    image: 'https://images.pexels.com/photos/2260291/pexels-photo-2260291.jpeg',
    description: 'Roasted and lightly salted pistachios. Perfect for snacking or adding to desserts.',
    rating: 4.7,
    reviewCount: 84,
    stock: 30
  },
  {
    id: 'dryfruits-006',
    name: 'Walnuts',
    category: 'dry-fruits',
    price: 545,
    weight: '250g',
    image: 'https://images.pexels.com/photos/6783993/pexels-photo-6783993.jpeg',
    description: 'Halved walnuts with a rich, nutty flavor. Great for baking, cooking, or snacking.',
    rating: 4.6,
    reviewCount: 76,
    stock: 35
  },
  {
    id: 'dryfruits-007',
    name: 'Fox Nuts (Makhana)',
    category: 'dry-fruits',
    price: 245,
    weight: '200g',
    image: 'https://images.pexels.com/photos/8541768/pexels-photo-8541768.jpeg',
    description: 'Roasted fox nuts, a healthy low-calorie snack rich in protein and minerals.',
    rating: 4.7,
    reviewCount: 68,
    stock: 45,
    isNew: true
  },
  {
    id: 'herbs-001',
    name: 'Neem Powder',
    category: 'herbs',
    price: 120,
    weight: '100g',
    image: '/images/products/neem-powder.jpg',
    description: 'Pure neem leaf powder known for its medicinal properties and natural healing benefits.',
    rating: 4.7,
    reviewCount: 45,
    stock: 50
  },
  {
    id: 'herbs-002',
    name: 'Curry Leaf Powder',
    category: 'herbs',
    price: 95,
    weight: '50g',
    image: '/images/products/curry-leaf-powder.jpg',
    description: 'Finely ground curry leaves, rich in antioxidants and essential nutrients.',
    rating: 4.6,
    reviewCount: 38,
    stock: 45
  },
  {
    id: 'herbs-003',
    name: 'Brahmi Powder',
    category: 'herbs',
    price: 150,
    weight: '100g',
    image: '/images/products/brahmi-powder.jpg',
    description: 'Traditional Ayurvedic herb known for supporting mental clarity and cognitive function.',
    rating: 4.8,
    reviewCount: 52,
    stock: 40
  },
  {
    id: 'herbs-004',
    name: 'Hibiscus Powder',
    category: 'herbs',
    price: 110,
    weight: '100g',
    image: '/images/products/hibiscus-powder.jpg',
    description: 'Natural hibiscus flower powder, perfect for hair care and herbal teas.',
    rating: 4.7,
    reviewCount: 41,
    stock: 35
  },
  {
    id: 'herbs-005',
    name: 'Amla Powder',
    category: 'herbs',
    price: 130,
    weight: '100g',
    image: '/images/products/amla-powder.jpg',
    description: 'Rich in Vitamin C, amla powder supports immunity and overall health.',
    rating: 4.8,
    reviewCount: 63,
    stock: 55
  },
  {
    id: 'herbs-006',
    name: 'Tulasi Powder',
    category: 'herbs',
    price: 140,
    weight: '100g',
    image: '/images/products/tulasi-powder.jpg',
    description: 'Holy basil powder known for its medicinal properties and immune-boosting benefits.',
    rating: 4.9,
    reviewCount: 57,
    stock: 40
  },
  {
    id: 'herbs-007',
    name: 'Indian Bael Powder',
    category: 'herbs',
    price: 160,
    weight: '100g',
    image: '/images/products/bael-powder.jpg',
    description: 'Traditional bilva powder known for its digestive and healing properties.',
    rating: 4.7,
    reviewCount: 34,
    stock: 30
  },
  {
    id: 'herbs-008',
    name: 'Vetiver Root Powder',
    category: 'herbs',
    price: 180,
    weight: '50g',
    image: '/images/products/vetiver-powder.jpg',
    description: 'Aromatic lavancha powder from vetiver roots, known for its cooling properties.',
    rating: 4.6,
    reviewCount: 29,
    stock: 25
  },
  {
    id: 'herbs-009',
    name: 'Giloy Powder',
    category: 'herbs',
    price: 145,
    weight: '100g',
    image: '/images/products/giloy-powder.jpg',
    description: 'Dried and powdered amruta balli (giloy), known for boosting immunity.',
    rating: 4.8,
    reviewCount: 48,
    stock: 45
  },
  {
    id: 'herbs-010',
    name: 'Betel Leaf Powder',
    category: 'herbs',
    price: 135,
    weight: '50g',
    image: '/images/products/betel-powder.jpg',
    description: 'Traditional betel leaf powder with digestive and antibacterial properties.',
    rating: 4.5,
    reviewCount: 31,
    stock: 35
  },
  {
    id: 'herbs-011',
    name: 'Flaxseed Powder',
    category: 'herbs',
    price: 125,
    weight: '200g',
    image: '/images/products/flaxseed-powder.jpg',
    description: 'Ground flaxseeds rich in omega-3 fatty acids and dietary fiber.',
    rating: 4.7,
    reviewCount: 54,
    stock: 60
  },
  {
    id: 'herbs-012',
    name: 'Bhringaraj Powder',
    category: 'herbs',
    price: 155,
    weight: '100g',
    image: '/images/products/bhringaraj-powder.jpg',
    description: 'False daisy powder known for promoting hair growth and hair health.',
    rating: 4.8,
    reviewCount: 43,
    stock: 40
  }
];

export default products;