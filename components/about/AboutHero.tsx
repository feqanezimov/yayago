'use client';

import { Button } from '@/components/ui/button';
import { 
  Users,
  Heart,
  Globe,
  Star
} from 'lucide-react';

export function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-destructive/10 to-destructive/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center animate-fade-in">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                About <span className="text-gradient">Yayago</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dubai's revolutionary car sharing platform that connects car owners with renters through our trusted community marketplace. We're changing the way people think about car rentals with our 0% commission model.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-destructive/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-destructive" />
                </div>
                <div className="text-3xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600">Verified Owners</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">3</div>
                <div className="text-gray-600">Languages</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">4.9</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <Button size="lg" className="gradient-primary text-white hover:shadow-lg transition-shadow px-8">
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </div> {/* <-- Bu div çatışmırdı */}
    </section>
  );
}