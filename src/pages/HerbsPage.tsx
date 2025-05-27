import React, { useMemo } from 'react';
import products from '../data/products';
import ProductCard from '../components/products/ProductCard';

const HerbsPage = () => {
  const herbProducts = useMemo(() => 
    products.filter(product => product.category === 'herbs'),
    []
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Herbal Products</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our collection of traditional Indian herbal powders, carefully sourced and processed 
            to maintain their natural healing properties and benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {herbProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {herbProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No herbal products available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HerbsPage; 