'use client';

import { Button } from '@/components/ui/button';
import { 
  Car,
  Crown,
  Zap,
  Truck,
  ArrowRight
} from 'lucide-react';

const categories = [
  {
    icon: Car,
    name: 'Economy',
    description: 'Budget-friendly cars shared by local owners for daily needs',
    startingPrice: 89,
    popular: true,
    image: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: Crown,
    name: 'Luxury',
    description: 'High-end vehicles from verified premium car owners',
    startingPrice: 299,
    popular: true,
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    icon: Zap,
    name: 'Sports',
    description: 'Performance cars shared by enthusiasts for special occasions',
    startingPrice: 599,
    popular: false,
    image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    gradient: 'from-red-500 to-red-600'
  },
  {
    icon: Truck,
    name: 'SUV',
    description: 'Family-friendly SUVs from trusted community members',
    startingPrice: 199,
    popular: true,
    image: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
    gradient: 'from-green-500 to-green-600'
  }
];

export function CategoryCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find Your <span className="text-gradient">Perfect Match</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse cars shared by our community - from everyday economy to luxury vehicles for special occasions
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover-scale animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {category.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="gradient-gold text-black text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </span>
                </div>
              )}

              {/* Background Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-80`} />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                  </div>
                  
                  <p className="text-white/90 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <span className="text-xs text-white/70">Starting from</span>
                      <div className="text-xl font-bold">
                        AED {category.startingPrice}
                        <span className="text-sm font-normal">/day</span>
                      </div>
                    </div>
                    
                    <Button
                      size="sm"
                      className="bg-white/20 text-white border-0 hover:bg-white/30 backdrop-blur-sm"
                    >
                      Browse
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to share your car too?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of car owners earning money by sharing their vehicles with 0% commission
            </p>
            <Button size="lg" className="gradient-primary text-white hover:shadow-lg transition-shadow mr-4">
              List Your Car
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}