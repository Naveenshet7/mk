import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import products, { Product } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const ProductsPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('q');

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [sortOption, setSortOption] = useState<string>('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Category display names mapping
  const categoryNames: Record<string, string> = {
    'seasonings': 'Seasonings',
    'powdered-spices': 'Powdered Spices',
    'blended-masala': 'Blended Masala',
    'whole-spices': 'Whole Spices',
    'combo-packs': 'Combo Packs',
    'dry-fruits': 'Dry Fruits',
    'featured': 'Featured Products',
    'best-sellers': 'Best Sellers',
    'search': 'Search Results'
  };

  useEffect(() => {
    // Filter products based on category or search query
    let result = [...products];

    if (searchQuery) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (category === 'featured') {
      result = result.filter(product => product.isFeatured);
    } else if (category === 'best-sellers') {
      result = result.filter(product => product.isBestSeller);
    } else if (category) {
      // Convert URL parameter to product category format if needed
      const categoryKey = category.toLowerCase();
      result = result.filter(product => product.category === categoryKey);
    }

    // Apply price filter
    result = result.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'popularity':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      // 'featured' is default, no sorting needed
      default:
        break;
    }

    setFilteredProducts(result);
  }, [category, searchQuery, sortOption, priceRange]);

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  // Get page title
  const getPageTitle = () => {
    if (searchQuery) {
      return `Search Results for "${searchQuery}"`;
    }
    
    return categoryNames[category || ''] || 'All Products';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-6">{getPageTitle()}</h1>
      
      {/* Filters and Sorting Controls */}
      <div className="flex flex-col md:flex-row justify-between mb-8">
        {/* Mobile Filter Toggle */}
        <button 
          className="md:hidden flex items-center justify-between w-full bg-white p-4 rounded-md shadow mb-4"
          onClick={toggleMobileFilter}
        >
          <span className="flex items-center">
            <Filter size={18} className="mr-2" />
            Filter & Sort
          </span>
          {isMobileFilterOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        
        {/* Filters - Desktop or Mobile when open */}
        <div className={`${isMobileFilterOpen ? 'block' : 'hidden'} md:block bg-white p-6 rounded-md shadow mb-4 md:mb-0 md:mr-6 md:w-1/4`}>
          <h2 className="font-bold text-lg mb-4">Filters</h2>
          
          {/* Price Range Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Price Range</h3>
            <div className="mb-2 flex justify-between">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="1000" 
              value={priceRange[0]} 
              onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
              className="w-full"
            />
            <input 
              type="range" 
              min="0" 
              max="1000" 
              value={priceRange[1]} 
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="w-full"
            />
          </div>
          
          {/* Availability Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Availability</h3>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" defaultChecked />
              <span>In Stock</span>
            </label>
          </div>
          
          {/* Ratings Filter */}
          <div>
            <h3 className="font-medium mb-2">Ratings</h3>
            {[4, 3, 2, 1].map(rating => (
              <label key={rating} className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" defaultChecked={rating >= 4} />
                <span className="flex items-center">
                  {rating}+ <span className="text-amber-500 ml-1">★</span>
                </span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Products and Sorting */}
        <div className={`${isMobileFilterOpen ? 'block' : 'block'} md:w-3/4`}>
          {/* Sort Controls */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">{filteredProducts.length} products</p>
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 hidden sm:inline">Sort by:</label>
              <select 
                id="sort" 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="p-2 border rounded"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="popularity">Most Popular</option>
              </select>
            </div>
          </div>
          
          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-2">No products found</h2>
              <p className="text-gray-600">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;