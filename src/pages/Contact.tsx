
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-earth-sky to-earth-sky-dark text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're here to help! Reach out to us for orders, bookings, or any questions about our services.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-earth-green dark:text-earth-green-light">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-earth-green rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone & WhatsApp</h3>
                    <p className="text-earth-green font-semibold text-lg">+254 7xx xxx xxx</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Available during business hours for orders and inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-earth-brown rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-earth-green font-semibold">mwanyakwerigeria@gmail.com</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Send us an email for detailed inquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-earth-sky rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">Mwanyakwerigeria Hub</p>
                    <p className="text-gray-600 dark:text-gray-300">Rural Kenya</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Easy to find on the main road - look for our sign!
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                  <div className="w-12 h-12 bg-earth-green-light rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-gray-600 dark:text-gray-300">
                      <p><strong>Monday - Saturday:</strong> 6:00 AM - 9:00 PM</p>
                      <p><strong>Sunday:</strong> 7:00 AM - 6:00 PM</p>
                      <p className="text-sm text-earth-green">
                        Petrol station available 24/7 (self-service after hours)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-earth-green dark:text-earth-green-light">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-earth-green focus:border-transparent dark:bg-gray-800 dark:text-white"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-earth-green focus:border-transparent dark:bg-gray-800 dark:text-white"
                      placeholder="+254 7xx xxx xxx"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-earth-green focus:border-transparent dark:bg-gray-800 dark:text-white"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-earth-cream dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-earth-green dark:text-earth-green-light">
            Find Us Here
          </h2>
          
          {/* Placeholder for Google Maps */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 text-center">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg h-64 flex items-center justify-center mb-6">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-earth-green mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  Interactive map will be embedded here
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  Google Maps integration coming soon
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-earth-green dark:text-earth-green-light">
                Directions
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We're located on the main road in the heart of our rural community. 
                Look for our green and brown signage - you can't miss us!
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                GPS coordinates and detailed directions available upon request via phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding bg-earth-green text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors duration-200">
              <MessageCircle className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">WhatsApp Order</h3>
              <p className="text-green-100 mb-4">
                Quick food orders via WhatsApp
              </p>
              <button className="bg-white text-earth-green px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Send WhatsApp
              </button>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors duration-200">
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call for Car Wash</h3>
              <p className="text-green-100 mb-4">
                Book your car wash appointment
              </p>
              <button className="bg-white text-earth-green px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Call Now
              </button>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors duration-200">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Get Directions</h3>
              <p className="text-green-100 mb-4">
                Navigate to our location
              </p>
              <button className="bg-white text-earth-green px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Open Maps
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
