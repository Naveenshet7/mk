import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Leaf, Truck } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-600 opacity-90"></div>
        <div className="relative py-24">
          <img 
            src="https://images.pexels.com/photos/1028598/pexels-photo-1028598.jpeg"
            alt="About Us Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Our Story</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              From the spice gardens of Malanad Sagara to your kitchen - discover the journey behind Malanad Masala.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Journey */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6">The Malanad Masala Journey</h2>
            <p className="text-lg mb-6 text-gray-700">
              Malanad Masala was born in 2001 from a simple passion: to bring authentic, high-quality spices from the verdant hills of Sagara to kitchens around the worlnd. What started as a small family business has grown into a trusted name in premium spices, while still maintaining our commitment to quality and tradition.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Our founder, Naveen, grew up surrounded by the rich aromas of his grandmother's kitchen in the Sagara region. He recognized that the vibrant flavors he experienced were becoming increasingly rare in commercially available spices. This realization sparked a mission to preserve traditional spice farming and processing methods while making them accessible to modern cooks.
            </p>
            <p className="text-lg text-gray-700">
              Today, Malanad Masala works directly with over 200 small-scale farmers across Karnataka, ensuring fair prices for growers and exceptional quality for our customers. Each spice in our collection tells a story of rich cultural heritage, sustainable farming practices, and culinary excellence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-800 mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our spices, from cultivation to packaging.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-800 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600">
                We support farming communities through fair trade practices and sustainable partnerships.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-800 mb-4">
                <Leaf size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We promote eco-friendly farming techniques and environmentally conscious packaging.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-800 mb-4">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Authenticity</h3>
              <p className="text-gray-600">
                We preserve traditional methods to deliver genuine, unadulterated flavors.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">From Garden to Table</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-amber-100 rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/4197493/pexels-photo-4197493.jpeg" 
                  alt="Spice Cultivation" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="absolute top-2 left-2 bg-amber-800 text-white text-lg w-10 h-10 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Cultivation</h3>
              <p className="text-gray-600">
                Our spices are grown in carefully selected farms across Kerala, where the climate and soil conditions are ideal for each variety.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-amber-100 rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/6941048/pexels-photo-6941048.jpeg" 
                  alt="Spice Processing" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="absolute top-2 left-2 bg-amber-800 text-white text-lg w-10 h-10 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Processing</h3>
              <p className="text-gray-600">
                We use both traditional and modern techniques to clean, dry, and grind our spices, preserving their essential oils and flavor compounds.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-amber-100 rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.pexels.com/photos/6941059/pexels-photo-6941059.jpeg" 
                  alt="Spice Packaging" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="absolute top-2 left-2 bg-amber-800 text-white text-lg w-10 h-10 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Packaging</h3>
              <p className="text-gray-600">
                Our spices are carefully packaged in airtight containers to protect their freshness, aroma, and flavor until they reach your kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                alt="Rahul Nair" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Naveen</h3>
                <p className="text-amber-600 mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  With a passion for preserving Sagara's spice heritage, Naveen founded Malanad Masala to share authentic flavors with the world.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
                alt="Priya Menon" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Pundu praveena</h3>
                <p className="text-amber-600 mb-4">Master Blender</p>
                <p className="text-gray-600">
                  With 15 years of experience, Pundu praveena oversees our spice blending process, creating perfectly balanced masalas for every palate.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                alt="Arjun Kumar" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Shetty</h3>
                <p className="text-amber-600 mb-4">Head of Sustainability</p>
                <p className="text-gray-600">
                  Shetty works directly with our farming partners to implement sustainable practices and ensure fair compensation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Experience the Malanad Difference</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Taste the authentic flavors of Sagara with our premium spices, sourced directly from farmers and processed with care.
          </p>
          <Link 
            to="/products/seasonings" 
            className="bg-white text-amber-800 px-6 py-3 rounded-md font-medium hover:bg-amber-100 transition-colors inline-block"
          >
            Shop Our Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;