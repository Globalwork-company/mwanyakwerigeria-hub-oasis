
import { Heart, Users, TrendingUp, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our Story
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Born from a dream to serve our community, Mwanyakwerigeria has become the heart of our neighborhood.
          </p>
        </div>
      </section>

      {/* Backstory */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">
                A Woman's Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                It all started with a simple desire: to support my family while serving my community. As a local woman with big dreams and determination, I saw the need for a place where neighbors could find everything they needed close to home.
              </p>
              <p className="text-muted-foreground mb-6">
                What began as a small idea grew into Mwanyakwerigeria - a name that represents our roots and our commitment to being here for our people. From the first cup of tea served to the first car washed, every moment has been about building something meaningful.
              </p>
              <p className="text-muted-foreground">
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
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-primary">
            Our Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Community First</h3>
              <p className="text-muted-foreground">
                Providing essential services with genuine care and local pride, treating every customer like family.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Local Employment</h3>
              <p className="text-muted-foreground">
                Creating meaningful job opportunities for our neighbors and supporting local economic growth.
              </p>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Quality Service</h3>
              <p className="text-muted-foreground">
                Delivering consistent, reliable services that meet the daily needs of our community members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Our Community Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">15+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Jobs Created</h3>
              <p className="text-muted-foreground">
                Local employment opportunities for community members
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-foreground">50+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Daily Customers</h3>
              <p className="text-muted-foreground">
                Neighbors and travelers we serve every day
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">10+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Local Suppliers</h3>
              <p className="text-muted-foreground">
                Supporting local farmers and businesses
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Years Strong</h3>
              <p className="text-muted-foreground">
                Building trust and relationships in our community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Award className="h-8 w-8 text-primary-foreground/80 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Excellence in Service</h3>
                <p className="text-primary-foreground/80">
                  We take pride in every meal served, every tank filled, and every car cleaned. Quality is never an accident.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Heart className="h-8 w-8 text-primary-foreground/80 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Genuine Care</h3>
                <p className="text-primary-foreground/80">
                  Every interaction is personal. We remember your name, your preferences, and your story.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="h-8 w-8 text-primary-foreground/80 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                <p className="text-primary-foreground/80">
                  We're more than a business - we're neighbors helping neighbors, building stronger communities together.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <TrendingUp className="h-8 w-8 text-primary-foreground/80 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuous Growth</h3>
                <p className="text-primary-foreground/80">
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
