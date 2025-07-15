
import { Heart, Users, TrendingUp, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-earth-brown to-earth-brown-light text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Born from a dream to serve our community, Mwanyakwerigeria has become the heart of our neighborhood.
          </p>
        </div>
      </section>

      {/* Backstory */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-earth-green dark:text-earth-green-light">
                A Woman's Vision
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                It all started with a simple desire: to support my family while serving my community. As a local woman with big dreams and determination, I saw the need for a place where neighbors could find everything they needed close to home.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                What began as a small idea grew into Mwanyakwerigeria - a name that represents our roots and our commitment to being here for our people. From the first cup of tea served to the first car washed, every moment has been about building something meaningful.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, we're proud to be a cornerstone of our community, employing local people, supporting local suppliers, and creating a space where everyone feels welcome.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1493962853295-0fd70327578a" 
                alt="Ox on mountain representing rural life" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-earth-cream dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-earth-green dark:text-earth-green-light">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
              <Heart className="h-12 w-12 text-earth-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Community First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Providing essential services with genuine care and local pride, treating every customer like family.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
              <Users className="h-12 w-12 text-earth-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Local Employment</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creating meaningful job opportunities for our neighbors and supporting local economic growth.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
              <TrendingUp className="h-12 w-12 text-earth-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Quality Service</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Delivering consistent, reliable services that meet the daily needs of our community members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-earth-green dark:text-earth-green-light">
            Our Community Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-earth-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">15+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Jobs Created</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Local employment opportunities for community members
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-earth-brown rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">50+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Daily Customers</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Neighbors and travelers we serve every day
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-earth-sky rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">10+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Suppliers</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Supporting local farmers and businesses
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-earth-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Years Strong</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building trust and relationships in our community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-earth-green text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-green-200 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Excellence in Service</h3>
                <p className="text-green-100">
                  We take pride in every meal served, every tank filled, and every car cleaned. Quality is never an accident.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Heart className="h-8 w-8 text-green-200 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Genuine Care</h3>
                <p className="text-green-100">
                  Every interaction is personal. We remember your name, your preferences, and your story.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="h-8 w-8 text-green-200 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                <p className="text-green-100">
                  We're more than a business - we're neighbors helping neighbors, building stronger communities together.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <TrendingUp className="h-8 w-8 text-green-200 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuous Growth</h3>
                <p className="text-green-100">
                  We're always looking for ways to serve you better and contribute more to our community's prosperity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
