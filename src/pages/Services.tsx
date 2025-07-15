
import { Phone, Clock, Star, Utensils, Fuel, Car, CheckCircle } from 'lucide-react';

const Services = () => {
  const menuCategories = [
    {
      title: "Main Dishes",
      items: [
        { name: "Ugali + Sukuma Wiki", price: "KSh 120", description: "Traditional cornmeal with collard greens" },
        { name: "Ugali + Matumbo", price: "KSh 180", description: "Cornmeal with seasoned tripe" },
        { name: "Chips Kuku", price: "KSh 250", description: "French fries with grilled chicken" },
        { name: "Fish + Ugali", price: "KSh 200", description: "Fresh fish with cornmeal" },
        { name: "Wet Fry Beef", price: "KSh 220", description: "Tender beef in savory sauce" },
        { name: "Pan Fry Chicken", price: "KSh 200", description: "Crispy pan-fried chicken pieces" },
        { name: "Githeri", price: "KSh 100", description: "Mixed beans and maize" },
        { name: "Nyama Choma", price: "KSh 300", description: "Grilled meat, local style" }
      ]
    },
    {
      title: "Rice & Accompaniments",
      items: [
        { name: "Pilau", price: "KSh 150", description: "Spiced rice with meat" },
        { name: "Rice + Beans", price: "KSh 120", description: "Plain rice with cooked beans" },
        { name: "Chapati (2 pieces)", price: "KSh 40", description: "Soft flatbread" },
        { name: "Mukimo", price: "KSh 130", description: "Mashed potatoes with vegetables" }
      ]
    },
    {
      title: "Breakfast & Snacks",
      items: [
        { name: "Mandazi (4 pieces)", price: "KSh 40", description: "Sweet fried bread" },
        { name: "Traditional Chai", price: "KSh 30", description: "Spiced milk tea" },
        { name: "Black Tea/Coffee", price: "KSh 20", description: "Hot beverages" },
        { name: "Boiled Eggs (2)", price: "KSh 40", description: "Fresh boiled eggs" },
        { name: "Samosa (2 pieces)", price: "KSh 60", description: "Crispy pastries with filling" }
      ]
    },
    {
      title: "Beverages",
      items: [
        { name: "Soda (500ml)", price: "KSh 50", description: "Assorted soft drinks" },
        { name: "Water (500ml)", price: "KSh 30", description: "Bottled drinking water" },
        { name: "Fresh Juice", price: "KSh 80", description: "Seasonal fruit juice" },
        { name: "Uji (Porridge)", price: "KSh 40", description: "Nutritious millet porridge" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-vibrant-blue to-accent text-white section-padding">
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
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <Utensils className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                  🍲 Small Hotel (Restaurant)
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Taste the authentic flavors of home with our freshly prepared local dishes. Every meal is made with love and the finest local ingredients.
              </p>
              
              <div className="bg-card rounded-lg p-6 shadow-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Our Menu</h3>
                
                {menuCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-secondary border-b border-border pb-1">
                      {category.title}
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-start py-2 border-b border-muted last:border-b-0">
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <span className="font-medium text-foreground">{item.name}</span>
                              <span className="font-semibold text-primary ml-4">{item.price}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span className="text-muted-foreground">Daily: 6:00 AM - 9:00 PM</span>
                </div>
              </div>

              <button className="btn-primary flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Call to Order
              </button>
            </div>
            <div>
              <div className="bg-card rounded-lg p-8 text-center shadow-lg">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg h-64 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Utensils className="h-16 w-16 text-primary mx-auto mb-3" />
                    <p className="text-muted-foreground font-medium">
                      Food Photos Coming Soon
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Authentic Local Cuisine</h3>
                <p className="text-muted-foreground">
                  Experience the true taste of Kenyan hospitality with our carefully prepared local dishes.
                </p>
              </div>
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
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                  <Fuel className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                  ⛽ Petrol Station
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Quality fuel and essential vehicle services to keep you moving safely on your journey.
              </p>
              
              <div className="bg-card rounded-lg p-6 shadow-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Available Services</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Premium Petrol</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Quality Diesel</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Oil Level Check</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Tyre Pressure Check</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
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
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span className="text-muted-foreground">24/7 Self-Service Available</span>
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <div className="bg-card rounded-lg p-8 text-center shadow-lg">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg h-64 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Fuel className="h-16 w-16 text-accent mx-auto mb-3" />
                    <p className="text-muted-foreground font-medium">
                      Station Photos Coming Soon
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Quality Fuel Services</h3>
                <p className="text-muted-foreground">
                  Reliable fuel supply and vehicle maintenance services for your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Wash Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-primary">
                  🚗 Car Wash
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Professional car wash services that leave your vehicle spotless and shining. We treat your car like our own.
              </p>
              
              <div className="bg-card rounded-lg p-6 shadow-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Service Packages & Prices</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <div>
                      <span className="font-medium">Exterior Wash</span>
                      <p className="text-sm text-muted-foreground">Body, wheels, and windows</p>
                    </div>
                    <span className="font-semibold text-primary">KSh 300</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <div>
                      <span className="font-medium">Interior Cleaning</span>
                      <p className="text-sm text-muted-foreground">Vacuum, dashboard, seats</p>
                    </div>
                    <span className="font-semibold text-primary">KSh 400</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <div>
                      <span className="font-medium">Engine Wash</span>
                      <p className="text-sm text-muted-foreground">Complete engine cleaning</p>
                    </div>
                    <span className="font-semibold text-primary">KSh 500</span>
                  </div>
                  <div className="flex justify-between items-center py-2 bg-primary/10 rounded-lg px-3">
                    <div>
                      <span className="font-medium text-primary">Full Service</span>
                      <p className="text-sm text-primary">Complete exterior + interior + engine</p>
                    </div>
                    <span className="font-bold text-primary">KSh 1000</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span className="text-muted-foreground">Mon-Sat: 7:00 AM - 6:00 PM</span>
                </div>
              </div>

              <button className="btn-primary flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Call to Book Car Wash
              </button>
            </div>
            <div>
              <div className="bg-card rounded-lg p-8 text-center shadow-lg">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg h-64 flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Car className="h-16 w-16 text-primary mx-auto mb-3" />
                    <p className="text-muted-foreground font-medium">
                      Car Wash Photos Coming Soon
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Professional Car Wash</h3>
                <p className="text-muted-foreground">
                  Your vehicle will receive the care and attention it deserves with our experienced team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Services?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Contact us today to place an order, book a service, or get more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              📞 +254 7xx xxx xxx
            </button>
            <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors duration-200">
              💬 WhatsApp Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
