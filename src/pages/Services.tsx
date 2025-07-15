
import { Phone, Clock, Star, Utensils, Fuel, Car, CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-earth-sky to-earth-sky-dark text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Everything you need, all in one convenient location. Quality services with a personal touch.
          </p>
        </div>
      </section>

      {/* Small Hotel Section */}
      <section className="section-padding bg-earth-cream dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-earth-brown rounded-full flex items-center justify-center mr-4">
                  <Utensils className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-earth-green dark:text-earth-green-light">
                  🍲 Small Hotel
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Taste the authentic flavors of home with our freshly prepared local dishes. Every meal is made with love and the finest local ingredients.
              </p>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-earth-green dark:text-earth-green-light">Popular Menu Items</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span>Ugali + Sukuma Wiki</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span>Matumbo (Tripe)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span>Fresh Mandazi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span>Traditional Chai</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span>Nyama Choma</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span>Githeri</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-earth-green mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Daily: 6:00 AM - 9:00 PM</span>
                </div>
              </div>

              <button className="btn-primary flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Call to Order
              </button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac" 
                alt="Local food preparation area" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Petrol Station Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-earth-sky rounded-full flex items-center justify-center mr-4">
                  <Fuel className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-earth-green dark:text-earth-green-light">
                  ⛽ Petrol Station
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Quality fuel and essential vehicle services to keep you moving safely on your journey.
              </p>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-earth-green dark:text-earth-green-light">Available Services</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-earth-green" />
                    <span>Premium Petrol</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-earth-green" />
                    <span>Quality Diesel</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-earth-green" />
                    <span>Oil Level Check</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-earth-green" />
                    <span>Tyre Pressure Check</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-earth-green" />
                    <span>Windscreen Cleaning</span>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  💡 <strong>Pricing Note:</strong> Current fuel prices are displayed at our station and updated daily according to market rates.
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-earth-green mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">24/7 Self-Service Available</span>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1469041797191-50ace28483c3" 
                alt="Rural landscape with vehicles" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Car Wash Section */}
      <section className="section-padding bg-earth-cream dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-earth-green rounded-full flex items-center justify-center mr-4">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-earth-green dark:text-earth-green-light">
                  🚗 Car Wash
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Professional car wash services that leave your vehicle spotless and shining. We treat your car like our own.
              </p>
              
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-earth-green dark:text-earth-green-light">Service Packages & Prices</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <span className="font-medium">Exterior Wash</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Body, wheels, and windows</p>
                    </div>
                    <span className="font-semibold text-earth-green">KSh 300</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <span className="font-medium">Interior Cleaning</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Vacuum, dashboard, seats</p>
                    </div>
                    <span className="font-semibold text-earth-green">KSh 400</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
                    <div>
                      <span className="font-medium">Engine Wash</span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Complete engine cleaning</p>
                    </div>
                    <span className="font-semibold text-earth-green">KSh 500</span>
                  </div>
                  <div className="flex justify-between items-center py-2 bg-earth-green/10 rounded-lg px-3">
                    <div>
                      <span className="font-medium text-earth-green">Full Service</span>
                      <p className="text-sm text-earth-green">Complete exterior + interior + engine</p>
                    </div>
                    <span className="font-bold text-earth-green">KSh 1000</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-earth-green mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">Mon-Sat: 7:00 AM - 6:00 PM</span>
                </div>
              </div>

              <button className="btn-primary flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Call to Book Car Wash
              </button>
            </div>
            <div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-8 text-center shadow-lg">
                <Car className="h-24 w-24 text-earth-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Professional Car Wash</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your vehicle will receive the care and attention it deserves with our experienced team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-earth-green text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Services?</h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today to place an order, book a service, or get more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-earth-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              📞 +254 7xx xxx xxx
            </button>
            <button className="bg-earth-brown text-white px-8 py-3 rounded-lg font-semibold hover:bg-earth-brown-light transition-colors duration-200">
              💬 WhatsApp Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
