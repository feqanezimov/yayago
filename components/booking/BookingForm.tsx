'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  CreditCard,
  CheckCircle,
  Car,
  User,
  Phone,
  Mail,
  Shield,
  Info
} from 'lucide-react';
import { carData } from '@/lib/car-data';

interface BookingFormProps {
  carId: string;
  initialFormData?: {
    pickupDate: string;
    dropoffDate: string;
    pickupTime: string;
    dropoffTime: string;
    pickupLocation: string;
    dropoffLocation: string;
  };
}

export function BookingForm({ carId, initialFormData }: BookingFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    pickupDate: initialFormData?.pickupDate || '',
    dropoffDate: initialFormData?.dropoffDate || '',
    pickupTime: initialFormData?.pickupTime || '10:00',
    dropoffTime: initialFormData?.dropoffTime || '10:00',
    pickupLocation: initialFormData?.pickupLocation || '',
    dropoffLocation: initialFormData?.dropoffLocation || '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    licenseNumber: '',
    specialRequests: '',
    paymentMethod: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingName: '',
    agreeToTerms: false
  });

  const car = carData[carId as keyof typeof carData];

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Car className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Car Not Found</h2>
          <p className="text-gray-600 mb-6">The car you're trying to book doesn't exist.</p>
          <Link href="/cars">
            <Button className="gradient-primary text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cars
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculatePrice = () => {
    if (!formData.pickupDate || !formData.dropoffDate) return 0;
    
    const pickup = new Date(formData.pickupDate);
    const dropoff = new Date(formData.dropoffDate);
    const timeDiff = dropoff.getTime() - pickup.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    return Math.max(1, daysDiff) * car.price;
  };

  const totalPrice = calculatePrice();
  const serviceFee = 0; // 0% commission
  const finalTotal = totalPrice + serviceFee;

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 4) {
      // Handle booking completion
      console.log('Booking completed:', formData);
    } else {
      nextStep();
    }
  };

  const steps = [
    { number: 1, title: 'Dates & Location', icon: Calendar },
    { number: 2, title: 'Your Details', icon: User },
    { number: 3, title: 'Payment', icon: CreditCard },
    { number: 4, title: 'Confirmation', icon: CheckCircle }
  ];

  return (
    <section className="py-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href={`/cars/${carId}`} className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Car Details
        </Link>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
                  currentStep >= step.number
                    ? 'bg-primary border-primary text-white'
                    : 'border-gray-300 text-gray-500'
                }`}>
                  <step.icon className="h-5 w-5" />
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step.number ? 'text-primary' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-primary' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Dates & Location */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        When do you need the car?
                      </h2>
                      <p className="text-gray-600">Select your pickup and drop-off dates and times</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="pickupDate" className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          Pickup Date *
                        </Label>
                        <Input
                          id="pickupDate"
                          type="date"
                          value={formData.pickupDate}
                          onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="pickupTime" className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-primary" />
                          Pickup Time
                        </Label>
                        <Input
                          id="pickupTime"
                          type="time"
                          value={formData.pickupTime}
                          onChange={(e) => handleInputChange('pickupTime', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="dropoffDate">Drop-off Date *</Label>
                        <Input
                          id="dropoffDate"
                          type="date"
                          value={formData.dropoffDate}
                          onChange={(e) => handleInputChange('dropoffDate', e.target.value)}
                          min={formData.pickupDate || new Date().toISOString().split('T')[0]}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dropoffTime">Drop-off Time</Label>
                        <Input
                          id="dropoffTime"
                          type="time"
                          value={formData.dropoffTime}
                          onChange={(e) => handleInputChange('dropoffTime', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="pickupLocation" className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          Pickup Location *
                        </Label>
                        <Select value={formData.pickupLocation} onValueChange={(value) => handleInputChange('pickupLocation', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select pickup location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dubai-mall">Dubai Mall</SelectItem>
                            <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
                            <SelectItem value="jbr">JBR Beach</SelectItem>
                            <SelectItem value="business-bay">Business Bay</SelectItem>
                            <SelectItem value="dubai-airport">Dubai Airport</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dropoffLocation">Drop-off Location</Label>
                        <Select value={formData.dropoffLocation} onValueChange={(value) => handleInputChange('dropoffLocation', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select drop-off location (or same as pickup)" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="same">Same as pickup</SelectItem>
                            <SelectItem value="dubai-mall">Dubai Mall</SelectItem>
                            <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
                            <SelectItem value="jbr">JBR Beach</SelectItem>
                            <SelectItem value="business-bay">Business Bay</SelectItem>
                            <SelectItem value="dubai-airport">Dubai Airport</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Your Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Your Information
                      </h2>
                      <p className="text-gray-600">Please provide your details for the rental</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-primary" />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+971 50 123 4567"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="licenseNumber">Driving License Number *</Label>
                      <Input
                        id="licenseNumber"
                        type="text"
                        placeholder="UAE License Number"
                        value={formData.licenseNumber}
                        onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                      <Textarea
                        id="specialRequests"
                        placeholder="Any special requirements or messages for the car owner..."
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                        rows={4}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Payment */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Payment Information
                      </h2>
                      <p className="text-gray-600">Secure payment processing</p>
                    </div>

                    <div className="space-y-4">
                      <Label>Payment Method *</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div
                          className={`p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                            formData.paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-gray-200'
                          }`}
                          onClick={() => handleInputChange('paymentMethod', 'card')}
                        >
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-5 w-5 text-primary" />
                            <span className="font-medium">Credit/Debit Card</span>
                          </div>
                        </div>
                        <div
                          className={`p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                            formData.paymentMethod === 'cash' ? 'border-primary bg-primary/5' : 'border-gray-200'
                          }`}
                          onClick={() => handleInputChange('paymentMethod', 'cash')}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs">$</span>
                            </div>
                            <span className="font-medium">Cash Payment</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {formData.paymentMethod === 'card' && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number *</Label>
                          <Input
                            id="cardNumber"
                            type="text"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiryDate">Expiry Date *</Label>
                            <Input
                              id="expiryDate"
                              type="text"
                              placeholder="MM/YY"
                              value={formData.expiryDate}
                              onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input
                              id="cvv"
                              type="text"
                              placeholder="123"
                              value={formData.cvv}
                              onChange={(e) => handleInputChange('cvv', e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="billingName">Name on Card *</Label>
                          <Input
                            id="billingName"
                            type="text"
                            value={formData.billingName}
                            onChange={(e) => handleInputChange('billingName', e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    )}

                    <div className="bg-blue-50 rounded-2xl p-4">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-blue-900 mb-1">Secure Payment</h4>
                          <p className="text-sm text-blue-700">
                            Your payment information is encrypted and secure. We use industry-standard SSL encryption.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        className="mt-1"
                        checked={formData.agreeToTerms}
                        onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                        required
                      />
                      <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                        I agree to the{' '}
                        <Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link>
                        {' '}and{' '}
                        <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                      </label>
                    </div>
                  </div>
                )}

                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <div className="space-y-6 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        Booking Confirmed!
                      </h2>
                      <p className="text-gray-600">
                        Your rental request has been sent to
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6 text-left">
                      <h3 className="font-bold text-gray-900 mb-4">Booking Details</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Booking ID:</span>
                          <span className="font-medium">YG-2024-{Math.random().toString(36).substring(7).toUpperCase()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Car:</span>
                          <span className="font-medium">{car.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Dates:</span>
                          <span className="font-medium">{formData.pickupDate} to {formData.dropoffDate}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Amount:</span>
                          <span className="font-bold text-lg">AED {finalTotal}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-2xl p-4">
                      <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                        <div className="text-left">
                          <h4 className="font-medium text-blue-900 mb-1">Next Steps</h4>
                          <p className="text-sm text-blue-700">
                            The car owner will review your request and respond within 2 hours. You'll receive email and SMS notifications about the status.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Link href="/dashboard/my-rentals">
                        <Button className="gradient-primary text-white">
                          View My Rentals
                        </Button>
                      </Link>
                      <Link href="/cars">
                        <Button variant="outline">
                          Browse More Cars
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                {currentStep < 4 && (
                  <div className="flex justify-between pt-8 border-t">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                    >
                      Previous
                    </Button>
                    <Button
                      type="submit"
                      className="gradient-primary text-white"
                      disabled={currentStep === 3 && !formData.agreeToTerms}
                    >
                      {currentStep === 3 ? 'Complete Booking' : 'Next Step'}
                    </Button>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="space-y-6">
            {/* Car Summary */}
            <div className="bg-white rounded-3xl p-6 shadow-lg sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Booking Summary</h3>
              
              <div className="flex gap-4 mb-6">
                <img
                  src={car.images?.[0]}
                  alt={car.name}
                  className="w-20 h-16 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900">{car.name}</h4>
                  <p className="text-sm text-gray-600">{car.category}</p>
                  <p className="text-sm text-gray-500">Owner</p>
                </div>
              </div>

              {totalPrice > 0 && (
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Rental ({Math.ceil((new Date(formData.dropoffDate).getTime() - new Date(formData.pickupDate).getTime()) / (1000 * 3600 * 24))} days)</span>
                    <span>AED {totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Service Fee</span>
                    <span className="text-green-600">AED 0 (0%)</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-3 border-t">
                    <span>Total</span>
                    <span>AED {finalTotal}</span>
                  </div>
                </div>
              )}

              <div className="mt-6 bg-green-50 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-green-800 text-sm">0% Commission</span>
                </div>
                <p className="text-xs text-green-700">
                  No hidden fees or extra charges. You pay exactly what you see.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}