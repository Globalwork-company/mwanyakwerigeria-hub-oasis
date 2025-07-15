
import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      alt: "Beautiful rural landscape with trees and mountains",
      category: "Location"
    },
    {
      src: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
      alt: "Local wildlife in natural setting",
      category: "Environment"
    },
    {
      src: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
      alt: "Ox grazing on mountain slope",
      category: "Local Life"
    },
    {
      src: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac",
      alt: "Cattle in natural forest setting",
      category: "Rural Setting"
    },
    {
      src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
      alt: "Camels in open field",
      category: "Local Wildlife"
    }
  ];

  const placeholderItems = [
    { title: "Fresh Ugali & Sukuma", category: "Food" },
    { title: "Traditional Chai Service", category: "Food" },
    { title: "Mandazi & Local Snacks", category: "Food" },
    { title: "Spotless Car After Wash", category: "Car Wash" },
    { title: "Interior Cleaning Service", category: "Car Wash" },
    { title: "Engine Wash Process", category: "Car Wash" },
    { title: "Fuel Station in Action", category: "Petrol Station" },
    { title: "Quality Service Delivery", category: "Petrol Station" },
    { title: "Our Dedicated Staff", category: "Staff" },
    { title: "Community Gathering", category: "Community" }
  ];

  const categories = ["All", "Food", "Car Wash", "Petrol Station", "Staff", "Location"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPlaceholders = activeCategory === "All" 
    ? placeholderItems 
    : placeholderItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-earth-brown to-earth-brown-light text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our Gallery
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            See our services in action and the smiling faces of our satisfied customers.
          </p>
        </div>
      </section>

      {/* Real Images Section */}
      <section className="section-padding bg-earth-cream dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-earth-green dark:text-earth-green-light">
            Our Community & Setting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-end">
                  <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <p className="text-sm font-medium">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8 text-earth-green dark:text-earth-green-light">
              Services Gallery
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                    activeCategory === category
                      ? 'bg-earth-green text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-earth-green hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Placeholder Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlaceholders.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 bg-gradient-to-br from-earth-green/20 to-earth-brown/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-earth-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">
                        {item.category === 'Food' && '🍲'}
                        {item.category === 'Car Wash' && '🚗'}
                        {item.category === 'Petrol Station' && '⛽'}
                        {item.category === 'Staff' && '👥'}
                        {item.category === 'Community' && '🤝'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                      Photo Coming Soon
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{item.title}</h3>
                  <p className="text-sm text-earth-green">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="section-padding bg-earth-green text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">More Photos Coming Soon!</h2>
          <p className="text-xl text-green-100 mb-8">
            We're constantly updating our gallery with new photos of our delicious food, sparkling clean vehicles, and happy customers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <span className="text-4xl mb-4 block">📸</span>
              <h3 className="text-lg font-semibold mb-2">Food Gallery</h3>
              <p className="text-green-100">Fresh photos of our delicious local dishes</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">✨</span>
              <h3 className="text-lg font-semibold mb-2">Car Wash Results</h3>
              <p className="text-green-100">Before and after shots of our car wash services</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">👨‍👩‍👧‍👦</span>
              <h3 className="text-lg font-semibold mb-2">Our Team</h3>
              <p className="text-green-100">Meet the friendly faces behind our services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
