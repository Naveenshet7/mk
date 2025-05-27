import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = memo(({ product }) => {
  const { addToCart } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const { id, name, price, image, category, weight } = product;
    addToCart({ id, name, price, image, category, weight });
  };

  return (
    <Link 
      to={`/product/${product.id}`} 
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-w-1 aspect-h-1">
        <div className={`absolute inset-0 bg-gray-200 ${!imageLoaded ? 'animate-pulse' : ''}`} />
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">New</span>
          )}
          {product.isBestSeller && (
            <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded">Bestseller</span>
          )}
        </div>
        
        {/* Quick add to cart button */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-full shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
          aria-label="Add to cart"
        >
          <ShoppingCart size={20} />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-gray-800 line-clamp-2">{product.name}</h3>
          <span className="text-amber-700 font-medium">₹{product.price}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">{product.weight}</span>
          <div className="flex items-center">
            <span className="text-amber-500">{product.rating} ★</span>
            <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </Link>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;