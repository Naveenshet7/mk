import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

// Mock blog post data
const blogPosts = [
  {
    id: 1,
    title: 'The Secret History of Garam Masala',
    excerpt: 'Discover the rich cultural history behind one of India\'s most beloved spice blends and how it varies across different regions.',
    image: 'https://images.pexels.com/photos/6941035/pexels-photo-6941035.jpeg',
    date: '2023-05-12',
    author: 'Priya Menon',
    category: 'Spice History',
    readTime: 6
  },
  {
    id: 2,
    title: 'How to Store Spices for Maximum Freshness',
    excerpt: 'Learn the best practices for storing your spices to preserve their flavor, aroma, and nutritional benefits for longer periods.',
    image: 'https://images.pexels.com/photos/6942068/pexels-photo-6942068.jpeg',
    date: '2023-04-28',
    author: 'Rahul Nair',
    category: 'Tips & Tricks',
    readTime: 4
  },
  {
    id: 3,
    title: 'The Health Benefits of Turmeric: Beyond the Hype',
    excerpt: 'An evidence-based look at turmeric\'s proven health benefits and how to incorporate this golden spice into your daily routine.',
    image: 'https://images.pexels.com/photos/6941023/pexels-photo-6941023.jpeg',
    date: '2023-04-15',
    author: 'Dr. Anjali Patel',
    category: 'Health & Wellness',
    readTime: 8
  },
  {
    id: 4,
    title: 'Sustainable Spice Farming in Kerala',
    excerpt: 'Explore how traditional farming practices are being combined with modern sustainable techniques in the spice gardens of Kerala.',
    image: 'https://images.pexels.com/photos/4197493/pexels-photo-4197493.jpeg',
    date: '2023-03-22',
    author: 'Arjun Kumar',
    category: 'Sustainability',
    readTime: 5
  },
  {
    id: 5,
    title: 'The Art of Spice Blending: Creating Your Own Masalas',
    excerpt: 'Master the fundamentals of spice blending and learn how to create custom masala mixes tailored to your taste preferences.',
    image: 'https://images.pexels.com/photos/6941087/pexels-photo-6941087.jpeg',
    date: '2023-03-10',
    author: 'Priya Menon',
    category: 'Cooking Techniques',
    readTime: 7
  },
  {
    id: 6,
    title: 'From East to West: How Indian Spices Changed Global Cuisine',
    excerpt: 'Trace the journey of Indian spices across trade routes and discover how they transformed cooking traditions around the world.',
    image: 'https://images.pexels.com/photos/1438516/pexels-photo-1438516.jpeg',
    date: '2023-02-24',
    author: 'Rahul Nair',
    category: 'Spice History',
    readTime: 9
  }
];

// Mock categories
const categories = [
  { name: 'Spice History', count: 7 },
  { name: 'Cooking Techniques', count: 12 },
  { name: 'Health & Wellness', count: 9 },
  { name: 'Tips & Tricks', count: 15 },
  { name: 'Sustainability', count: 6 },
  { name: 'Recipes', count: 23 }
];

// Mock featured post
const featuredPost = {
  id: 7,
  title: 'The Ultimate Guide to Indian Spices: Essential Varieties and Their Uses',
  excerpt: 'Navigate the vibrant world of Indian spices with our comprehensive guide. From aromatic cardamom to fiery chillies, learn how to identify, select, and use over 30 essential spices that form the backbone of Indian cuisine.',
  image: 'https://images.pexels.com/photos/6941059/pexels-photo-6941059.jpeg',
  date: '2023-05-20',
  author: 'Rahul Nair',
  category: 'Spice History',
  readTime: 12
};

const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-8">Spice Chronicles</h1>
      
      {/* Featured Post */}
      <div className="bg-white rounded-lg overflow-hidden shadow-md mb-12">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                {featuredPost.category}
              </span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <Calendar size={14} className="mr-1" />
                {new Date(featuredPost.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="mx-2">•</span>
              <span>{featuredPost.readTime} min read</span>
            </div>
            
            <h2 className="text-2xl font-bold mb-3">{featuredPost.title}</h2>
            <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold mr-2">
                  {featuredPost.author.charAt(0)}
                </div>
                <span className="text-sm">{featuredPost.author}</span>
              </div>
              <Link 
                to={`/blog/${featuredPost.id}`} 
                className="text-amber-600 hover:text-amber-700 flex items-center"
              >
                Read More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Blog Posts */}
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime} min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-xs text-gray-500">
                      <User size={12} className="mr-1" />
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <Calendar size={12} className="mr-1" />
                      <span>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-amber-600 hover:text-amber-700 text-sm flex items-center"
                    >
                      Read <ArrowRight size={12} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="inline-flex rounded-md shadow-sm">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-l-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-amber-600 text-white border border-amber-600 text-sm font-medium">
                1
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-r-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="md:w-1/3">
          {/* Search */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-bold mb-4">Search</h3>
            <div className="flex">
              <input 
                type="text" 
                placeholder="Search blog posts..." 
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              />
              <button className="bg-amber-600 text-white px-4 py-2 rounded-r-md hover:bg-amber-700 transition-colors">
                Search
              </button>
            </div>
          </div>
          
          {/* Categories */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.name}>
                  <Link 
                    to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex justify-between items-center hover:text-amber-600 transition-colors"
                  >
                    <span>{category.name}</span>
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs">
                      {category.count}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="bg-amber-50 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get the latest blog posts, recipes, and special offers delivered directly to your inbox.
            </p>
            <form>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;