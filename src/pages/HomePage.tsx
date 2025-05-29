import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Award, Truck } from 'lucide-react';
import products from '../data/products';

const ProductCard = lazy(() => import('../components/products/ProductCard'));
const CategoryCard = lazy(() => import('../components/products/CategoryCard'));

const LoadingPlaceholder = () => (
  <div className="animate-pulse">
    <div className="bg-gray-200 rounded-lg h-64 w-full"></div>
  </div>
);

const HomePage = () => {
  const featuredProducts = React.useMemo(() => 
    products.filter(product => product.isFeatured).slice(0, 4),
    []
  );
  
  const bestSellers = React.useMemo(() => 
    products.filter(product => product.isBestSeller).slice(0, 4),
    []
  );

  const categories = [
    {
      id: 'seasonings',
      name: 'Seasonings',
      image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Enhance your dishes with our flavorful seasonings'
    },
    {
      id: 'powdered-spices',
      name: 'Powdered Spices',
      image: 'https://images.pexels.com/photos/6941035/pexels-photo-6941035.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium ground spices for authentic flavors'
    },
    {
      id: 'blended-masala',
      name: 'Blended Masala',
      image: 'https://images.pexels.com/photos/6941087/pexels-photo-6941087.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Perfect spice blends for specific dishes'
    },
    {
      id: 'whole-spices',
      name: 'Whole Spices',
      image: 'https://images.pexels.com/photos/6942003/pexels-photo-6942003.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Aromatic whole spices for maximum flavor'
    },
    {
      id: 'combo-packs',
      name: 'Combo Packs',
      image: 'https://images.pexels.com/photos/6941059/pexels-photo-6941059.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Special combinations at great value'
    },
    {
      id: 'dry-fruits',
      name: 'Dry Fruits',
      image: 'https://images.pexels.com/photos/7439978/pexels-photo-7439978.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium quality nuts and dry fruits'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div 
          className="relative min-h-[80vh] bg-cover bg-center flex items-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/4226805/pexels-photo-4226805.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight text-white drop-shadow-lg animate-fade-in">
                Experience the True Essence of Indian Spices
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-spice-100 drop-shadow-md leading-relaxed animate-fade-in-delay">
                Premium quality spices sourced directly from the spice gardens of Sagara.
                Elevate your culinary creations with Malanad Masala.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
                <Link 
                  to="/all-products" 
                  className="bg-spice-600 hover:bg-spice-500 text-white px-8 py-4 rounded-md font-medium transition-all duration-300 text-lg shadow-lg hover:scale-105"
                >
                  Shop Now
                </Link>
                <Link 
                  to="/about" 
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-md font-medium hover:bg-white/20 transition-all duration-300 text-lg shadow-lg hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Shop By Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of premium spices, masalas, and dry fruits, carefully sorted 
              into categories to help you find exactly what you need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Suspense fallback={<LoadingPlaceholder />}>
              {categories.map(category => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </Suspense>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-serif font-bold">Featured Products</h2>
            <Link 
              to="/products/featured" 
              className="flex items-center text-amber-700 hover:text-amber-900 transition-colors group"
            >
              View All <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Suspense fallback={<LoadingPlaceholder />}>
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Suspense>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Quality Promise</h2>
            <p className="max-w-2xl mx-auto">
              At Malanad Masala, quality is at the heart of everything we do. From sourcing to packaging,
              we ensure that only the finest spices reach your kitchen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-700 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <ShoppingBag size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">Direct from Farms</h3>
              <p>
                We source our spices directly from sustainable farms in Sagara, ensuring freshness and fair trade practices.
              </p>
            </div>
            
            <div className="bg-amber-700 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Award size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p>
                Each batch undergoes rigorous quality checks to ensure purity, aroma, and flavor meet our high standards.
              </p>
            </div>
            
            <div className="bg-amber-700 p-8 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <Truck size={48} />
              </div>
              <h3 className="text-xl font-bold mb-2">Sealed Freshness</h3>
              <p>
                Our special packaging seals in freshness, ensuring your spices maintain their flavor and aroma for longer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-serif font-bold">Best Sellers</h2>
            <Link 
              to="/products/best-sellers" 
              className="flex items-center text-amber-700 hover:text-amber-900 transition-colors"
            >
              View All <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">Join Our Spice Community</h2>
            <p className="mb-8">
              Subscribe to our newsletter for exclusive recipes, spice tips, and special offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none"
                required
              />
              <button 
                type="submit" 
                className="bg-amber-600 hover:bg-amber-500 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;