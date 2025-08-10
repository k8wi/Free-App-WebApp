import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Brand Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/3">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-[#65E856]">Free</span>ly
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-xs lg:max-w-sm">
              Discover amazing products at zero cost.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-xs lg:max-w-sm">
              Join thousands of users who've already claimed their favorites from our curated collection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#65E856] transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#65E856] transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#65E856] transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#65E856] transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/3 lg:ml-16">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/explore" className="text-gray-300 hover:text-[#65E856] transition-colors duration-200">
                  Explore Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#65E856] transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-[#65E856] transition-colors duration-200">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-300 hover:text-[#65E856] transition-colors duration-200">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-[#65E856] transition-colors duration-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/3 lg:ml-16">
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#65E856] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:hello@freely.com" className="text-white hover:text-[#65E856] transition-colors duration-200">
                    hello@freely.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#65E856] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Phone</p>
                  <a href="tel:+1234567890" className="text-white hover:text-[#65E856] transition-colors duration-200">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#65E856] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Address</p>
                  <p className="text-white">
                    123 Free Street<br />
                    Product City, PC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup - Commented out for future implementation */}
        {/* 
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-6">
              Get notified when new free products are available
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#65E856] focus:border-transparent"
              />
              <button className="px-6 py-3 bg-[#65E856] text-white font-semibold rounded-lg hover:bg-[#56d947] transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        */}
        
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Freely. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-[#65E856] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#65E856] transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/returns" className="text-gray-400 hover:text-[#65E856] transition-colors duration-200">
                Returns Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;