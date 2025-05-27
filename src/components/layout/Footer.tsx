import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-spice-800 to-spice-700 text-spice-50 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-white">Malanad Masala</h3>
            <p className="mb-4 text-spice-100">Bringing authentic flavors from our farms to your kitchen. Premium quality spices sourced directly from the spice gardens of Sagara.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="text-spice-200 hover:text-white transition-colors duration-200" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-spice-200 hover:text-white transition-colors duration-200" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-spice-200 hover:text-white transition-colors duration-200" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-spice-100 hover:text-white transition-colors duration-200">About Us</Link>
              </li>
              <li>
                <Link to="/products/seasonings" className="text-spice-100 hover:text-white transition-colors duration-200">Products</Link>
              </li>
              <li>
                <Link to="/blog" className="text-spice-100 hover:text-white transition-colors duration-200">Blog</Link>
              </li>
              <li>
                <Link to="/recipes" className="text-spice-100 hover:text-white transition-colors duration-200">Recipes</Link>
              </li>
              <li>
                <Link to="/contact" className="text-spice-100 hover:text-white transition-colors duration-200">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/seasonings" className="text-spice-100 hover:text-white transition-colors duration-200">Seasonings</Link>
              </li>
              <li>
                <Link to="/products/powdered-spices" className="text-spice-100 hover:text-white transition-colors duration-200">Powdered Spices</Link>
              </li>
              <li>
                <Link to="/products/blended-masala" className="text-spice-100 hover:text-white transition-colors duration-200">Blended Masala</Link>
              </li>
              <li>
                <Link to="/products/whole-spices" className="text-spice-100 hover:text-white transition-colors duration-200">Whole Spices</Link>
              </li>
              <li>
                <Link to="/products/combo-packs" className="text-spice-100 hover:text-white transition-colors duration-200">Combo Packs</Link>
              </li>
              <li>
                <Link to="/products/dry-fruits" className="text-spice-100 hover:text-white transition-colors duration-200">Dry Fruits</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-spice-100">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-spice-200" />
                <span>123 Spice Garden Road, Sagara, Karnataka, India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-spice-200" />
                <span>+91 9482345701</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-spice-200" />
                <span>info@malanadmasala.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-spice-600 mt-8 pt-8 text-center text-sm">
          <p className="text-spice-200">&copy; {new Date().getFullYear()} Malanad Masala. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="text-spice-100 hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-spice-100 hover:text-white transition-colors duration-200">Terms of Service</Link>
            <Link to="/shipping-policy" className="text-spice-100 hover:text-white transition-colors duration-200">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;