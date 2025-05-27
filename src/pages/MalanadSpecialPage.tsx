import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

interface MalanadSpecialProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  weight: string;
}

const malanadSpecialProducts: MalanadSpecialProduct[] = [
  {
    id: 'ms-1',
    name: 'Premium Areca Nuts',
    description: 'High-quality areca nuts sourced directly from Malanad farms. Known for their superior taste and quality.',
    price: 250,
    image: '/images/products/areca-nuts.jpg',
    weight: '500g'
  },
  {
    id: 'ms-2',
    name: 'Malanad Coffee Powder',
    description: 'Freshly ground coffee powder from the finest coffee beans of Malanad region. Rich in aroma and flavor.',
    price: 300,
    image: '/images/products/coffee-powder.jpg',
    weight: '250g'
  },
  {
    id: 'ms-3',
    name: 'Pure Forest Honey',
    description: 'Natural and pure honey collected from the forests of Malanad. Raw, unprocessed, and full of nutrients.',
    price: 450,
    image: '/images/products/honey.jpg',
    weight: '500g'
  },
  {
    id: 'ms-4',
    name: 'Traditional Ghee',
    description: 'Pure cow ghee made using traditional methods. Perfect for cooking and religious purposes.',
    price: 600,
    image: '/images/products/ghee.jpg',
    weight: '500g'
  }
];

const MalanadSpecialPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif font-bold mb-4">Malanad Special</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our exclusive collection of premium products sourced directly from the Malanad region.
          Each product is carefully selected to bring you the authentic taste and quality of our homeland.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {malanadSpecialProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-amber-600">₹{product.price}</span>
                  <span className="text-gray-500 ml-2">/ {product.weight}</span>
                </div>
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MalanadSpecialPage; 