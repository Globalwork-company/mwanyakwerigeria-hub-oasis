
import { Phone, MapPin, Star, Users, Utensils, Fuel, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-vibrant-green to-vibrant-green-light text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto section-padding text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Karibu Mwanyakwerigeria
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Your one-stop hub for Food, Fuel, and Fresh Rides
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="bg-vibrant-orange hover:bg-vibrant-orange-light text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg">
                Order Food
              </Link>
              <Link to="/contact" className="bg-white text-vibrant-green hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg">
                Get Directions
              </Link>
              <Link to="/contact" className="bg-vibrant-blue hover:bg-vibrant-blue-light text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Placeholder for hero image */}
        <div className="mt-12 max-w-4xl mx-auto px-4">
          <div className="bg-vibrant-cream dark:bg-gray-800 rounded-lg p-8 text-center text-gray-600 dark:text-gray-400">
            <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Photo Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-vibrant-cream dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-vibrant-green dark:text-vibrant-green-light">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Small Hotel */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-vibrant-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vibrant-green dark:text-vibrant-green-light">Small Hotel</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Delicious local meals including Ugali, Sukuma, Matumbo, Mandazi, and fresh Chai. Taste the authentic flavors of home.
              </p>
              <Link to="/services" className="text-vibrant-orange hover:text-vibrant-orange-light font-medium">
                View Menu →
              </Link>
            </div>

            {/* Petrol Station */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-vibrant-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Fuel className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vibrant-green dark:text-vibrant-green-light">Petrol Station</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Quality petrol and diesel with additional services like oil checks and tyre pressure. Keep your vehicle running smoothly.
              </p>
              <Link to="/services" className="text-vibrant-orange hover:text-vibrant-orange-light font-medium">
                View Services →
              </Link>
            </div>

            {/* Car Wash */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-vibrant-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-vibrant-green dark:text-vibrant-green-light">Car Wash</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Complete car wash services including interior, exterior, and engine cleaning. Leave with a spotless ride every time.
              </p>
              <Link to="/services" className="text-vibrant-orange hover:text-vibrant-orange-light font-medium">
                Book Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Owner */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-vibrant-green dark:text-vibrant-green-light">
                Meet the Owner
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Welcome to my heart project! I'm a proud local woman who started Mwanyakwerigeria to serve our community's daily needs. What began as a small dream has grown into a hub where neighbors become family.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Every day, we strive to provide not just services, but a warm welcome and genuine care for everyone who walks through our doors. From the early morning tea to the late evening fuel stop, we're here for you.
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-vibrant-green mr-2" />
                  <span>15+ Jobs Created</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-vibrant-green mr-2" />
                  <span>Community Focused</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-vibrant-green mr-2" />
                  <span>Local Suppliers</span>
                </div>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="bg-vibrant-cream dark:bg-gray-800 rounded-lg p-8 text-center">
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Photo Coming Soon</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic">
                  "Building community, one service at a time"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="section-padding bg-vibrant-green text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Visit Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <Phone className="h-8 w-8 mb-4" />
              <p className="font-semibold">Call Us</p>
              <p className="text-white/80">+254 7xx xxx xxx</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 mb-4" />
              <p className="font-semibold">Visit Us</p>
              <p className="text-white/80">Etago-Kenyenya Road, 300m from Etago Stage</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-8 w-8 mb-4" />
              <p className="font-semibold">Hours</p>
              <p className="text-white/80">Mon-Sat: 6am-9pm</p>
            </div>
          </div>
          <Link to="/contact" className="bg-white text-vibrant-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
            Get Directions
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
