import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Bookmark, Filter, ChevronDown, ChevronUp, Search } from 'lucide-react';

// Mock recipe data
const recipes = [
  {
    id: 1,
    title: 'Butter Chicken (Murgh Makhani)',
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
    time: 45,
    servings: 4,
    difficulty: 'Medium',
    chef: 'Priya Menon',
    category: 'Main Course',
    cuisine: 'North Indian',
    ingredients: [
      'Chicken', 'Tomatoes', 'Cream', 'Butter', 'Garam Masala', 'Kashmiri Chili Powder'
    ],
    description: 'A rich and creamy North Indian curry made with tender chicken in a tomato-based sauce.'
  },
  {
    id: 2,
    title: 'Masala Dosa with Sambar',
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    time: 60,
    servings: 4,
    difficulty: 'Medium',
    chef: 'Arjun Kumar',
    category: 'Breakfast',
    cuisine: 'South Indian',
    ingredients: [
      'Rice', 'Urad Dal', 'Potatoes', 'Turmeric', 'Mustard Seeds', 'Curry Leaves'
    ],
    description: 'Crispy fermented rice crepes filled with spiced potato filling, served with lentil soup.'
  },
  {
    id: 3,
    title: 'Biryani',
    image: 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg',
    time: 90,
    servings: 6,
    difficulty: 'Hard',
    chef: 'Rahul Nair',
    category: 'Main Course',
    cuisine: 'Hyderabadi',
    ingredients: [
      'Basmati Rice', 'Chicken', 'Yogurt', 'Biryani Masala', 'Saffron', 'Mint Leaves'
    ],
    description: 'Fragrant rice dish layered with marinated meat and aromatic spices, slow-cooked to perfection.'
  },
  {
    id: 4,
    title: 'Palak Paneer',
    image: 'https://images.pexels.com/photos/14662600/pexels-photo-14662600.jpeg',
    time: 30,
    servings: 4,
    difficulty: 'Easy',
    chef: 'Priya Menon',
    category: 'Main Course',
    cuisine: 'North Indian',
    ingredients: [
      'Spinach', 'Paneer', 'Onions', 'Tomatoes', 'Garam Masala', 'Cumin Seeds'
    ],
    description: 'Creamy spinach curry with soft chunks of paneer cheese - a vegetarian favorite.'
  },
  {
    id: 5,
    title: 'Chole Bhature',
    image: 'https://images.pexels.com/photos/11522200/pexels-photo-11522200.jpeg',
    time: 75,
    servings: 4,
    difficulty: 'Medium',
    chef: 'Arjun Kumar',
    category: 'Main Course',
    cuisine: 'Punjabi',
    ingredients: [
      'Chickpeas', 'All-Purpose Flour', 'Cumin', 'Coriander Powder', 'Amchur', 'Chaat Masala'
    ],
    description: 'Spicy chickpea curry served with deep-fried bread - a hearty Punjabi comfort food.'
  },
  {
    id: 6,
    title: 'Masala Chai',
    image: 'https://images.pexels.com/photos/5946995/pexels-photo-5946995.jpeg',
    time: 15,
    servings: 2,
    difficulty: 'Easy',
    chef: 'Rahul Nair',
    category: 'Beverages',
    cuisine: 'Indian',
    ingredients: [
      'Black Tea', 'Milk', 'Cardamom', 'Cinnamon', 'Cloves', 'Ginger'
    ],
    description: 'Aromatic spiced tea simmered with milk - perfect for any time of day.'
  }
];

// Mock categories
const categories = [
  'All',
  'Breakfast',
  'Main Course',
  'Side Dishes',
  'Desserts',
  'Beverages',
  'Snacks'
];

// Mock cuisines
const cuisines = [
  'North Indian',
  'South Indian',
  'Punjabi',
  'Bengali',
  'Gujarati',
  'Hyderabadi',
  'Kashmiri',
  'Kerala',
  'Mughlai'
];

// Mock featured recipe
const featuredRecipe = {
  id: 7,
  title: 'Kerala Fish Curry (Meen Curry)',
  image: 'https://images.pexels.com/photos/5695890/pexels-photo-5695890.jpeg',
  time: 40,
  servings: 4,
  difficulty: 'Medium',
  chef: 'Priya Menon',
  category: 'Main Course',
  cuisine: 'Kerala',
  ingredients: [
    'Fish', 'Coconut Milk', 'Turmeric', 'Tamarind', 'Curry Leaves', 'Mustard Seeds', 'Fenugreek Seeds'
  ],
  description: 'Authentic Kerala-style fish curry simmered in coconut milk with tamarind and aromatic spices. This tangy, spicy dish highlights the coastal flavors of South India.'
};

const RecipesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  const filteredRecipes = recipes.filter(recipe => {
    // Filter by category
    const categoryMatch = activeCategory === 'All' || recipe.category === activeCategory;
    
    // Filter by search query
    const searchMatch = 
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some(ingredient => 
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    return categoryMatch && (searchQuery === '' || searchMatch);
  });
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-8">Flavorful Recipes</h1>
      
      {/* Featured Recipe */}
      <div className="relative rounded-lg overflow-hidden mb-12 shadow-md">
        <img 
          src={featuredRecipe.image} 
          alt={featuredRecipe.title} 
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-6 sm:p-8 text-white">
          <div className="flex flex-wrap items-center text-sm mb-2">
            <span className="bg-amber-600 px-2 py-1 rounded text-xs font-medium mr-3">
              Featured
            </span>
            <span className="flex items-center mr-3">
              <Clock size={14} className="mr-1" />
              {featuredRecipe.time} mins
            </span>
            <span className="flex items-center mr-3">
              <User size={14} className="mr-1" />
              {featuredRecipe.chef}
            </span>
            <span>{featuredRecipe.cuisine}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">{featuredRecipe.title}</h2>
          <p className="mb-4 text-gray-200 max-w-2xl">{featuredRecipe.description}</p>
          <Link 
            to={`/recipes/${featuredRecipe.id}`} 
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors inline-flex items-center"
          >
            View Recipe
          </Link>
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search Bar */}
          <div className="md:w-1/3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes, ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          {/* Category Pills - Desktop */}
          <div className="hidden md:flex flex-wrap items-center gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Mobile Filter Toggle */}
          <button
            className="md:hidden flex items-center justify-between w-full bg-white p-3 border rounded-md"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <span className="flex items-center text-gray-700">
              <Filter size={18} className="mr-2" />
              Filter by Category
            </span>
            {isMobileFilterOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
        
        {/* Category Pills - Mobile */}
        {isMobileFilterOpen && (
          <div className="md:hidden grid grid-cols-2 gap-2 mt-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setIsMobileFilterOpen(false);
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* Recipes Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map(recipe => (
            <div key={recipe.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <button 
                    className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Save recipe"
                  >
                    <Bookmark size={18} className="text-amber-600" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white text-amber-800 px-2 py-1 rounded text-xs font-medium">
                    {recipe.cuisine}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>
                
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <span className="flex items-center mr-3">
                    <Clock size={14} className="mr-1" />
                    {recipe.time} mins
                  </span>
                  <span className="flex items-center mr-3">
                    <User size={14} className="mr-1" />
                    {recipe.chef}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    recipe.difficulty === 'Easy' 
                      ? 'bg-green-100 text-green-800' 
                      : recipe.difficulty === 'Medium'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {recipe.difficulty}
                  </span>
                </div>
                
                <Link 
                  to={`/recipes/${recipe.id}`} 
                  className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-medium mb-2">No recipes found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search or filter criteria.
          </p>
          <button 
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('All');
            }}
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
      
      {/* Recipe Collections */}
      <section className="mt-16">
        <h2 className="text-2xl font-serif font-bold mb-8">Recipe Collections</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-lg overflow-hidden h-64 group">
            <img 
              src="https://images.pexels.com/photos/4577379/pexels-photo-4577379.jpeg" 
              alt="Quick Weeknight Dinners" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-1">Quick Weeknight Dinners</h3>
              <p className="text-sm">30-minute meals for busy days</p>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-64 group">
            <img 
              src="https://images.pexels.com/photos/5409009/pexels-photo-5409009.jpeg" 
              alt="Festival Favorites" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-1">Festival Favorites</h3>
              <p className="text-sm">Traditional recipes for celebrations</p>
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden h-64 group">
            <img 
              src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg" 
              alt="Cooking with Kids" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-1">Cooking with Kids</h3>
              <p className="text-sm">Fun, easy recipes for the whole family</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="mt-16 bg-amber-50 rounded-lg shadow-md p-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-serif font-bold mb-3">Get New Recipes in Your Inbox</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter and receive fresh recipes, cooking tips, and special offers.
          </p>
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              required
            />
            <button 
              type="submit" 
              className="bg-amber-600 text-white px-6 py-2 rounded-md hover:bg-amber-700 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipesPage;