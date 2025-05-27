import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, Star, ChevronRight } from 'lucide-react';
import products, { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/products/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'description' | 'details' | 'reviews'>('description');
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find(p => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Find related products from the same category
        const related = products
          .filter(p => p.category === foundProduct.category && p.id !== id)
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);
        setRelatedProducts(related);
      }
    }
    
    // Reset quantity when product changes
    setQuantity(1);
    
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-medium mb-4">Product not found</h2>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/products/seasonings" 
          className="bg-amber-600 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-700 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    const { id, name, price, image, category, weight } = product;
    for (let i = 0; i < quantity; i++) {
      addToCart({ id, name, price, image, category, weight });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-amber-700">Home</Link>
        <ChevronRight size={14} className="mx-2" />
        <Link to={`/products/${product.category}`} className="hover:text-amber-700">
          {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </Link>
        <ChevronRight size={14} className="mx-2" />
        <span className="text-gray-800">{product.name}</span>
      </div>
      
      {/* Product Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          {/* Ratings */}
          <div className="flex items-center mb-4">
            <div className="flex text-amber-500 mr-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star 
                  key={index} 
                  size={18} 
                  fill={index < Math.floor(product.rating) ? 'currentColor' : 'none'} 
                  className={index < Math.floor(product.rating) ? '' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-gray-600">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>
          
          {/* Price and Weight */}
          <div className="mb-6">
            <div className="text-2xl font-bold text-amber-800 mb-1">₹{product.price}</div>
            <span className="text-gray-600">{product.weight}</span>
          </div>
          
          {/* Stock Status */}
          <div className="mb-6">
            {product.stock > 0 ? (
              <span className="text-green-600 font-medium">
                In Stock ({product.stock} available)
              </span>
            ) : (
              <span className="text-red-600 font-medium">Out of Stock</span>
            )}
          </div>
          
          {/* Short Description */}
          <p className="text-gray-700 mb-8">{product.description}</p>
          
          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <div className="flex items-center border rounded-md">
              <button 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="px-4 py-2 text-xl"
                disabled={quantity <= 1}
              >
                -
              </button>
              <input 
                type="number" 
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} 
                className="w-16 text-center border-x py-2"
              />
              <button 
                onClick={() => setQuantity(prev => prev + 1)}
                className="px-4 py-2 text-xl"
              >
                +
              </button>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="flex-grow bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
              disabled={product.stock <= 0}
            >
              <ShoppingCart size={20} className="mr-2" />
              Add to Cart
            </button>
          </div>
          
          {/* Wishlist and Share */}
          <div className="flex gap-4 mb-8">
            <button className="flex items-center text-gray-600 hover:text-amber-700 transition-colors">
              <Heart size={20} className="mr-2" />
              Add to Wishlist
            </button>
            <button className="flex items-center text-gray-600 hover:text-amber-700 transition-colors">
              <Share2 size={20} className="mr-2" />
              Share
            </button>
          </div>
          
          {/* Additional Info */}
          <div className="border-t pt-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-gray-600">Category:</span>
                <Link 
                  to={`/products/${product.category}`} 
                  className="ml-2 text-amber-700 hover:underline"
                >
                  {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Link>
              </div>
              <div>
                <span className="text-gray-600">SKU:</span>
                <span className="ml-2">{product.id}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Tabs */}
      <div className="mb-16">
        {/* Tab Headers */}
        <div className="flex border-b">
          <button 
            className={`px-6 py-3 font-medium ${activeTab === 'description' ? 'text-amber-700 border-b-2 border-amber-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={`px-6 py-3 font-medium ${activeTab === 'details' ? 'text-amber-700 border-b-2 border-amber-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('details')}
          >
            Additional Information
          </button>
          <button 
            className={`px-6 py-3 font-medium ${activeTab === 'reviews' ? 'text-amber-700 border-b-2 border-amber-700' : 'text-gray-600'}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({product.reviewCount})
          </button>
        </div>
        
        {/* Tab Content */}
        <div className="py-8">
          {activeTab === 'description' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Product Description</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-gray-700 mb-4">
                Our {product.name} is carefully sourced from the finest farms in Kerala, ensuring premium quality and authentic flavor. Each batch undergoes rigorous quality checks to maintain our high standards.
              </p>
              <p className="text-gray-700">
                The spices are packed in airtight containers to preserve their aroma and flavor. For best results, store in a cool, dry place away from direct sunlight.
              </p>
            </div>
          )}
          
          {activeTab === 'details' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Additional Information</h2>
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-gray-600">Weight</th>
                    <td className="py-3 px-4">{product.weight}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-gray-600">Origin</th>
                    <td className="py-3 px-4">Kerala, India</td>
                  </tr>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-gray-600">Ingredients</th>
                    <td className="py-3 px-4">100% Pure {product.name}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-gray-600">Shelf Life</th>
                    <td className="py-3 px-4">12 months from manufacturing date</td>
                  </tr>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-gray-600">Storage</th>
                    <td className="py-3 px-4">Store in a cool, dry place away from direct sunlight</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div>
              <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <div className="text-3xl font-bold text-amber-700">{product.rating}</div>
                  <div className="flex text-amber-500">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star 
                        key={index} 
                        size={16} 
                        fill={index < Math.floor(product.rating) ? 'currentColor' : 'none'} 
                        className={index < Math.floor(product.rating) ? '' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">{product.reviewCount} reviews</div>
                </div>
                <div>
                  {/* Review Distribution */}
                  <div className="space-y-1">
                    {[5, 4, 3, 2, 1].map(star => (
                      <div key={star} className="flex items-center">
                        <span className="text-sm w-8">{star} star</span>
                        <div className="w-48 bg-gray-200 rounded-full h-2 mx-2">
                          <div 
                            className="bg-amber-500 h-2 rounded-full" 
                            style={{ width: `${Math.random() * 50 + 50}%` }} 
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Sample Reviews */}
              <div className="space-y-6">
                <div className="border-b pb-6">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">
                      <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold">
                        SA
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Sneha Agarwal</h4>
                      <div className="flex text-amber-500">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star 
                            key={index} 
                            size={14} 
                            fill="currentColor" 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    This is the best {product.name} I've ever used! The aroma is amazing, and it adds so much flavor to my dishes. Will definitely buy again.
                  </p>
                  <div className="text-sm text-gray-500 mt-2">Posted 2 weeks ago</div>
                </div>
                
                <div className="border-b pb-6">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">
                      <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold">
                        VK
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Vikram Kumar</h4>
                      <div className="flex text-amber-500">
                        {Array.from({ length: 4 }).map((_, index) => (
                          <Star 
                            key={index} 
                            size={14} 
                            fill="currentColor" 
                          />
                        ))}
                        <Star size={14} className="text-gray-300" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Good quality product. The packaging is secure and preserves the aroma well. I just wish it came in a larger size option.
                  </p>
                  <div className="text-sm text-gray-500 mt-2">Posted 1 month ago</div>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <div className="mr-2">
                      <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold">
                        RP
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Rajesh Patel</h4>
                      <div className="flex text-amber-500">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star 
                            key={index} 
                            size={14} 
                            fill="currentColor" 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Authentic flavor that reminds me of home. You can really taste the difference compared to store brands. Fast shipping too!
                  </p>
                  <div className="text-sm text-gray-500 mt-2">Posted 3 months ago</div>
                </div>
              </div>
              
              {/* Write a Review Button */}
              <button className="mt-8 border border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-md font-medium transition-colors">
                Write a Review
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-serif font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;