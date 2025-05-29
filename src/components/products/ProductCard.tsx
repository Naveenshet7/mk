import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { Product } from '../../data/products';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = memo(({ product }) => {
  const { addToCart, cartItems, updateQuantity } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const cartItem = cartItems.find(item => item.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (quantity === 0) {
      const { id, name, price, image, category, weight } = product;
      addToCart({ id, name, price, image, category, weight });
    }
  };

  const handleQuantityChange = (e: React.MouseEvent, newQuantity: number) => {
    e.preventDefault();
    e.stopPropagation();
    
    const { id, name, price, image, category, weight } = product;
    if (newQuantity === 0) {
      updateQuantity(id, 0);
    } else {
      if (quantity === 0) {
        addToCart({ id, name, price, image, category, weight });
      }
      updateQuantity(id, newQuantity);
    }
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
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-gray-800 line-clamp-2">{product.name}</h3>
          <span className="text-amber-700 font-medium">₹{product.price}</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-600">{product.weight}</span>
          <div className="flex items-center">
            <span className="text-amber-500">{product.rating} ★</span>
            <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center justify-between mt-4 border-t pt-4">
          {quantity > 0 ? (
            <div className="flex items-center justify-between w-full">
              <button
                onClick={(e) => handleQuantityChange(e, Math.max(0, quantity - 1))}
                className="p-2 hover:bg-gray-100 text-amber-600 rounded-md"
                aria-label="Decrease quantity"
              >
                <Minus size={20} />
              </button>
              <span className="font-medium">{quantity}</span>
              <button
                onClick={(e) => handleQuantityChange(e, quantity + 1)}
                className="p-2 hover:bg-gray-100 text-amber-600 rounded-md"
                aria-label="Increase quantity"
              >
                <Plus size={20} />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 transition-colors"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </Link>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;