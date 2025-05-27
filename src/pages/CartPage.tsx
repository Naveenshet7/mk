import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  
  // Calculate subtotal, shipping, and total
  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? (subtotal > 500 ? 0 : 50) : 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <ShoppingBag size={64} className="text-amber-300" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added any spices to your cart yet.
        </p>
        <Link 
          to="/products/seasonings" 
          className="bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors inline-flex items-center"
        >
          Start Shopping <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-8">Your Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {/* Table Header - Desktop */}
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b text-gray-600 font-medium">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-right">Subtotal</div>
          </div>
          
          {/* Cart Items */}
          <div className="space-y-6 mt-6">
            {cartItems.map(item => (
              <div key={item.id} className="grid md:grid-cols-12 gap-4 items-center border-b pb-6">
                {/* Product Image and Info */}
                <div className="md:col-span-6 grid grid-cols-3 md:grid-cols-4 gap-4 items-center">
                  <div className="col-span-1">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-24 object-cover rounded"
                    />
                  </div>
                  <div className="col-span-2 md:col-span-3">
                    <Link to={`/product/${item.id}`} className="font-medium hover:text-amber-700 transition-colors">
                      {item.name}
                    </Link>
                    <div className="text-sm text-gray-500 mt-1">
                      {item.weight} • {item.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </div>
                  </div>
                </div>
                
                {/* Price */}
                <div className="md:col-span-2 text-center">
                  <div className="md:hidden text-gray-600 text-sm">Price:</div>
                  <div>₹{item.price}</div>
                </div>
                
                {/* Quantity */}
                <div className="md:col-span-2">
                  <div className="md:hidden text-gray-600 text-sm mb-1">Quantity:</div>
                  <div className="flex items-center justify-center">
                    <button 
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="w-8 h-8 border rounded-l flex items-center justify-center"
                    >
                      -
                    </button>
                    <input 
                      type="number" 
                      min="1" 
                      value={item.quantity} 
                      onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))} 
                      className="w-12 h-8 border-t border-b text-center"
                    />
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 border rounded-r flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                {/* Subtotal */}
                <div className="md:col-span-2 flex items-center justify-between md:justify-end">
                  <div className="md:hidden text-gray-600 text-sm">Subtotal:</div>
                  <div className="flex items-center">
                    <span className="font-medium mr-4">₹{item.price * item.quantity}</span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-500 hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Cart Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
            <div className="w-full sm:w-auto mb-4 sm:mb-0">
              <Link 
                to="/products/seasonings" 
                className="block w-full sm:w-auto text-center border border-amber-600 text-amber-600 px-6 py-3 rounded-md font-medium hover:bg-amber-50 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
            <button 
              className="w-full sm:w-auto bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors"
              onClick={() => {/* Clear cart */}}
            >
              Update Cart
            </button>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="bg-amber-50 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between pb-4 border-b">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">₹{subtotal.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between pb-4 border-b">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">
                {shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}
              </span>
            </div>
            
            {subtotal < 500 && shipping > 0 && (
              <div className="text-sm text-amber-700 pb-4">
                Add ₹{(500 - subtotal).toFixed(2)} more to get free shipping!
              </div>
            )}
            
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            
            <div className="pt-6">
              <button 
                className="w-full bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
            
            {/* Payment Methods */}
            <div className="pt-4 text-center text-sm text-gray-600">
              <p className="mb-2">We accept:</p>
              <div className="flex justify-center space-x-2">
                <span className="bg-white px-2 py-1 rounded border">Visa</span>
                <span className="bg-white px-2 py-1 rounded border">Mastercard</span>
                <span className="bg-white px-2 py-1 rounded border">PayTM</span>
                <span className="bg-white px-2 py-1 rounded border">UPI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;