
import { useState } from 'react';

const Gallery = () => {
  const galleryItems = [
    { title: "Fresh Ugali & Sukuma", category: "Food" },
    { title: "Chips Kuku Special", category: "Food" },
    { title: "Traditional Chai Service", category: "Food" },
    { title: "Matumbo Delicacy", category: "Food" },
    { title: "Fish & Ugali", category: "Food" },
    { title: "Mandazi & Local Snacks", category: "Food" },
    { title: "Spotless Car After Wash", category: "Car Wash" },
    { title: "Interior Cleaning Service", category: "Car Wash" },
    { title: "Engine Wash Process", category: "Car Wash" },
    { title: "Full Service Results", category: "Car Wash" },
    { title: "Fuel Station in Action", category: "Petrol Station" },
    { title: "Quality Service Delivery", category: "Petrol Station" },
    { title: "24/7 Self Service", category: "Petrol Station" },
    { title: "Our Dedicated Staff", category: "Staff" },
    { title: "Kitchen Team at Work", category: "Staff" },
    { title: "Car Wash Team", category: "Staff" },
    { title: "Community Gathering", category: "Community" },
    { title: "Local Customers", category: "Community" },
    { title: "Business Exterior", category: "Location" },
    { title: "Dining Area", category: "Location" }
  ];

  const categories = ["All", "Food", "Car Wash", "Petrol Station", "Staff", "Location", "Community"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-secondary to-vibrant-orange text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our Gallery
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            See our services in action and the smiling faces of our satisfied customers.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8 text-primary">
              Services Gallery
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">
                        {item.category === 'Food' && '🍲'}
                        {item.category === 'Car Wash' && '🚗'}
                        {item.category === 'Petrol Station' && '⛽'}
                        {item.category === 'Staff' && '👥'}
                        {item.category === 'Community' && '🤝'}
                        {item.category === 'Location' && '🏪'}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      Photo Coming Soon
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-card-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-primary">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">More Photos Coming Soon!</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            We're constantly updating our gallery with new photos of our delicious food, sparkling clean vehicles, and happy customers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <span className="text-4xl mb-4 block">📸</span>
              <h3 className="text-lg font-semibold mb-2">Food Gallery</h3>
              <p className="text-primary-foreground/70">Fresh photos of our delicious local dishes</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">✨</span>
              <h3 className="text-lg font-semibold mb-2">Car Wash Results</h3>
              <p className="text-primary-foreground/70">Before and after shots of our car wash services</p>
            </div>
            <div className="text-center">
              <span className="text-4xl mb-4 block">👨‍👩‍👧‍👦</span>
              <h3 className="text-lg font-semibold mb-2">Our Team</h3>
              <p className="text-primary-foreground/70">Meet the friendly faces behind our services</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
