
import { Star, Quote, Heart, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mama Grace",
      location: "Local Resident",
      rating: 5,
      text: "Ever since Mwanyakwerigeria opened, I've never missed my daily tea! The chai here reminds me of home, and the mandazi are always fresh. The owner treats everyone like family.",
      service: "Small Hotel"
    },
    {
      id: 2,
      name: "David Kiprotich",
      location: "Truck Driver",
      rating: 5,
      text: "The car wash here leaves my truck spotless every time. The team is professional and the prices are fair. I always stop here when passing through the area.",
      service: "Car Wash"
    },
    {
      id: 3,
      name: "Sarah Wanjiku",
      location: "Local Teacher",
      rating: 5,
      text: "This place has become the heart of our community. Whether it's a quick meal, fuel for my motorbike, or getting my car cleaned, everything is done with care and a smile.",
      service: "All Services"
    },
    {
      id: 4,
      name: "John Mwangi",
      location: "Local Businessman",
      rating: 5,
      text: "The convenience of having all these services in one place is amazing. Quality petrol, great food, and excellent car wash - plus the owner really knows how to run a business!",
      service: "Petrol Station"
    },
    {
      id: 5,
      name: "Mary Akinyi",
      location: "Community Member",
      rating: 5,
      text: "I'm so proud to see a local woman entrepreneur creating jobs and serving our community so well. The ugali and sukuma here taste just like my grandmother used to make.",
      service: "Small Hotel"
    },
    {
      id: 6,
      name: "Peter Ochieng",
      location: "Traveling Salesman",
      rating: 5,
      text: "I travel this route monthly, and Mwanyakwerigeria is always my stop. Reliable fuel, clean restrooms, and if I have time, the best local food around. Highly recommended!",
      service: "Multiple Services"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers", icon: Users },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "98%", label: "Customer Return Rate", icon: Heart },
    { number: "3+", label: "Years of Service", icon: Quote }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-earth-green to-earth-green-light text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            What Our Customers Say
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the amazing people we're proud to serve every day.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-earth-cream dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
                <div className="w-16 h-16 bg-earth-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-earth-green dark:text-earth-green-light mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-earth-green dark:text-earth-green-light">
            Customer Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-earth-green mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs bg-earth-green text-white px-2 py-1 rounded-full">
                        {testimonial.service}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="section-padding bg-earth-cream dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-earth-green dark:text-earth-green-light">
                More Than Just Business
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Our customers aren't just customers - they're our neighbors, our friends, and our extended family. 
                Every review, every smile, and every "thank you" reminds us why we started this journey.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                From the early morning commuters who stop for chai, to the families who bring their cars for weekend washes, 
                to the travelers who fuel up for long journeys - each person has a story, and we're honored to be part of it.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-earth-green" />
                  <span className="text-gray-700 dark:text-gray-300">Personal care for every customer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-earth-green" />
                  <span className="text-gray-700 dark:text-gray-300">Building lasting community relationships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-6 w-6 text-earth-green" />
                  <span className="text-gray-700 dark:text-gray-300">Consistent quality in everything we do</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
              <div className="text-center mb-6">
                <Quote className="h-12 w-12 text-earth-green mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-earth-green dark:text-earth-green-light mb-4">
                  Recent Review
                </h3>
              </div>
              
              <blockquote className="text-gray-600 dark:text-gray-300 text-lg italic text-center mb-6">
                "Mwanyakwerigeria is more than a business - it's a community hub where everyone feels welcome. 
                The owner's vision of serving with love shows in every interaction."
              </blockquote>
              
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">Chief Local Administrator</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Community Leader</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-earth-green text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Happy Customers</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Experience the warmth, quality, and community spirit that makes Mwanyakwerigeria special. 
            We can't wait to serve you and add your story to our growing family of satisfied customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-earth-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Visit Us Today
            </button>
            <button className="bg-earth-brown text-white px-8 py-3 rounded-lg font-semibold hover:bg-earth-brown-light transition-colors duration-200">
              Share Your Experience
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-green-100 text-sm">
              📍 Find us on the main road • 📞 +254 7xx xxx xxx • ⏰ Mon-Sat: 6am-9pm
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
