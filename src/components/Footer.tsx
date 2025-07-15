
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-earth-green dark:bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Business Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-earth-green font-bold">M</span>
              </div>
              <h3 className="text-lg font-bold">Mwanyakwerigeria</h3>
            </div>
            <p className="text-green-100">
              Your one-stop hub for Food, Fuel, and Fresh Rides. Serving the community with pride since day one.
            </p>
            <p className="text-sm text-green-200 italic">
              "Serving You Better, All in One Stop"
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/services" className="block text-green-100 hover:text-white transition-colors">
                Our Services
              </Link>
              <Link to="/gallery" className="block text-green-100 hover:text-white transition-colors">
                Gallery
              </Link>
              <Link to="/about" className="block text-green-100 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/testimonials" className="block text-green-100 hover:text-white transition-colors">
                Testimonials
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="space-y-2 text-green-100">
              <p>🍲 Small Hotel & Restaurant</p>
              <p>⛽ Petrol Station</p>
              <p>🚗 Car Wash Services</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-green-100">+254 7xx xxx xxx</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-green-100">mwanyakwerigeria@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span className="text-green-100">Rural Kenya<br />County Location</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-green-100">Mon-Sat: 6am-9pm</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-12 pt-8 text-center">
          <p className="text-green-100">
            © 2024 Mwanyakwerigeria. All rights reserved. Built with ❤️ for our community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
