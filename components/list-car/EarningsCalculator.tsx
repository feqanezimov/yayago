'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calculator, TrendingUp } from 'lucide-react';

export function EarningsCalculator() {
  const [carType, setCarType] = useState('economy');
  const [dailyRate, setDailyRate] = useState([150]);
  const [availability, setAvailability] = useState([20]);

  const carTypeRates = {
    economy: { min: 80, max: 150, avg: 115 },
    midsize: { min: 120, max: 200, avg: 160 },
    luxury: { min: 250, max: 500, avg: 375 },
    suv: { min: 180, max: 350, avg: 265 }
  };

  const currentRate = dailyRate[0];
  const daysPerMonth = availability[0];
  const monthlyEarnings = currentRate * daysPerMonth;
  const yearlyEarnings = monthlyEarnings * 12;

  const comparisonEarnings = monthlyEarnings * 0.8; // 20% commission deducted

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Calculate Your <span className="text-gradient">Earning Potential</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Use our calculator to see how much you could earn by sharing your car on Yayago
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="h-6 w-6 text-destructive" />
                <h3 className="text-xl font-bold text-gray-900">Earnings Calculator</h3>
              </div>

              <div className="space-y-6">
                {/* Car Type */}
                <div>
                  <Label className="text-base font-medium mb-4 block">Car Type</Label>
                  <Select value={carType} onValueChange={setCarType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select car type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="economy">Economy (Altima, Camry)</SelectItem>
                      <SelectItem value="midsize">Midsize (Accord, Maxima)</SelectItem>
                      <SelectItem value="luxury">Luxury (BMW, Mercedes)</SelectItem>
                      <SelectItem value="suv">SUV (Patrol, Land Cruiser)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-sm text-gray-500 mt-2">
                    Average rate: AED 0/day
                  </p>
                </div>

                {/* Daily Rate */}
                <div>
                  <Label className="text-base font-medium mb-4 block">
                    Daily Rate: AED {currentRate}
                  </Label>
                  <Slider
                    value={dailyRate}
                    onValueChange={setDailyRate}
                    max={500}
                    min={50}
                    step={10}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>AED 50</span>
                    <span>AED 500</span>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <Label className="text-base font-medium mb-4 block">
                    Available Days per Month: {daysPerMonth}
                  </Label>
                  <Slider
                    value={availability}
                    onValueChange={setAvailability}
                    max={30}
                    min={5}
                    step={1}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>5 days</span>
                    <span>30 days</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="gradient-primary text-white px-8">
                <TrendingUp className="h-5 w-5 mr-2" />
                Start Listing Your Car
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Yayago Earnings */}
            <div className="bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-3xl p-8">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-destructive text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                  With Yayago (0% Commission)
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-4xl font-bold text-destructive mb-2">
                      AED {monthlyEarnings.toLocaleString()}
                    </div>
                    <div className="text-gray-600">Monthly earnings</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4">
                      <div className="text-xl font-bold text-gray-900">
                        AED {yearlyEarnings.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500">Yearly</div>
                    </div>
                    <div className="bg-white rounded-xl p-4">
                      <div className="text-xl font-bold text-green-600">
