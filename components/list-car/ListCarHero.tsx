'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DollarSign,
  Car,
  TrendingUp,
  Shield
} from 'lucide-react';

export function ListCarHero() {
  const [carValue, setCarValue] = useState('50000');
  const monthlyEarnings = Math.round((parseInt(carValue) * 0.02) * 0.7);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                <DollarSign className="h-4 w-4" />
                Earn up to AED 3,000/month
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Turn Your Car Into
                <span className="block text-gradient">Steady Income</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg">
                Join 1000+ car owners earning money by sharing their vehicles on Dubai's only 0% commission platform. Keep 100% of your rental earnings.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">0% Commission</div>
                    <div className="text-sm text-gray-500">Keep all earnings</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Full Insurance</div>
                    <div className="text-sm text-gray-500">Covered rentals</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-white hover:shadow-lg transition-shadow px-8 py-6 text-lg">
                <Car className="h-5 w-5 mr-2" />
                List Your Car Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg">
                Calculate Earnings
              </Button>
            </div>
          </div>

          {/* Right Content - Earnings Preview */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Quick Earnings Estimate
                  </h3>
                  <p className="text-gray-600">
                    See how much you could earn monthly
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Car Value (AED)
                    </label>
                    <Input
                      type="number"
                      value={carValue}
                      onChange={(e) => setCarValue(e.target.value)}
                      className="text-lg"
                      placeholder="50000"
                    />
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        AED {monthlyEarnings.toLocaleString()}
                      </div>
                      <div className="text-gray-600">
                        Estimated monthly earnings
                      </div>
                      <div className="text-sm text-gray-500 mt-2">
                        Based on 70% utilization rate
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-lg font-bold text-gray-900">
                        AED {Math.round(monthlyEarnings * 12).toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">Yearly</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-lg font-bold text-green-600">100%</div>
                      <div className="text-sm text-gray-500">You keep</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full gradient-primary text-white py-3">
                  Start Earning Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}