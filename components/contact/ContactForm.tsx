'use client';

import { useState } from 'react';
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
  Send,
  CheckCircle,
  User,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    language: 'english',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 border border-green-200 rounded-3xl p-12">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for contacting Yayago. Our support team will respond within 2 hours during business hours.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="gradient-primary text-white hover:shadow-lg transition-shadow"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Send Us a <span className="text-gradient">Message</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you need help with a booking, want to list your car, or have questions about our 0% commission model, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+971 50 123 4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    Preferred Language
                  </Label>
                  <Select value={formData.language} onValueChange={(value) => handleInputChange('language', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="arabic">العربية (Arabic)</SelectItem>
                      <SelectItem value="russian">Русский (Russian)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="What can we help you with?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="booking-help">Help with Booking</SelectItem>
                    <SelectItem value="list-car">List My Car</SelectItem>
                    <SelectItem value="payment-issue">Payment Issue</SelectItem>
                    <SelectItem value="account-problem">Account Problem</SelectItem>
                    <SelectItem value="technical-support">Technical Support</SelectItem>
                    <SelectItem value="partnership">Business Partnership</SelectItem>
                    <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Please describe your question or issue in detail..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-primary text-white hover:shadow-lg transition-shadow py-6 text-lg"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>

              <p className="text-sm text-gray-500 text-center">
                We typically respond within 2 hours during business hours (9 AM - 9 PM UAE time)
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Quick Contact Options
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600 mb-2">Speak directly with our support team</p>
                    <a href="tel:+97144242424" className="text-primary font-medium hover:underline">
                      +971 4 YAY-AGO1
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                    <p className="text-gray-600 mb-2">Quick messaging support</p>
                    <a href="https://wa.me/971501234567" className="text-green-600 font-medium hover:underline">
                      +971 50 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Support</h4>
                    <p className="text-gray-600 mb-2">For detailed inquiries</p>
                    <a href="mailto:support@yayago.ae" className="text-blue-600 font-medium hover:underline">
                      support@yayago.ae
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
              <h4 className="font-semibold text-gray-900 mb-3">0% Commission Questions?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Have questions about our commission-free model? Our team can explain how car owners keep 100% of their rental earnings.
              </p>
              <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/5">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}