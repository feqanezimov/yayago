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
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  Shield,
  CreditCard,
  Bell,
  Globe,
  Save,
  Edit,
  Trash2
} from 'lucide-react';

export function ProfileSettings() {
  const [activeTab, setActiveTab] = useState('personal');
  const [profileData, setProfileData] = useState({
    firstName: 'Ahmed',
    lastName: 'Al-Rashid',
    email: 'ahmed.alrashid@email.com',
    phone: '+971 50 123 4567',
    bio: 'Car enthusiast and owner of luxury vehicles. Love sharing my cars with the community.',
    location: 'Dubai Marina, Dubai',
    language: 'english',
    userType: 'both'
  });

  const paymentMethods = [
    {
      id: 1,
      type: 'card',
      last4: '4242',
      brand: 'Visa',
      isDefault: true
    },
    {
      id: 2,
      type: 'card',
      last4: '8888',
      brand: 'Mastercard',
      isDefault: false
    }
  ];

  const notifications = [
    { id: 'booking_requests', label: 'New booking requests', enabled: true },
    { id: 'booking_confirmations', label: 'Booking confirmations', enabled: true },
    { id: 'payment_notifications', label: 'Payment notifications', enabled: true },
    { id: 'review_reminders', label: 'Review reminders', enabled: false },
    { id: 'promotional_emails', label: 'Promotional emails', enabled: true }
  ];

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'payments', label: 'Payment Methods', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell }
  ];

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const renderPersonalInfo = () => (
    <div className="space-y-8">
      {/* Profile Picture */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Picture</h3>
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-gradient-to-r from-destructive to-red-600 rounded-full flex items-center justify-center">
            <User className="h-12 w-12 text-white" />
          </div>
          <div className="space-y-2">
            <Button className="gradient-primary text-white">
              <Camera className="h-4 w-4 mr-2" />
              Upload New Photo
            </Button>
            <p className="text-sm text-gray-500">JPG, PNG or GIF. Max size 5MB.</p>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Personal Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              value={profileData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              value={profileData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={profileData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={profileData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              value={profileData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              value={profileData.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              rows={4}
            />
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Preferences</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="language">Preferred Language</Label>
            <Select value={profileData.language} onValueChange={(value) => handleInputChange('language', value)}>
              <SelectTrigger>
                <Globe className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="arabic">العربية (Arabic)</SelectItem>
                <SelectItem value="russian">Русский (Russian)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="userType">Account Type</Label>
            <Select value={profileData.userType} onValueChange={(value) => handleInputChange('userType', value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rent">Rent Cars</SelectItem>
                <SelectItem value="list">List My Cars</SelectItem>
                <SelectItem value="both">Both Rent & List</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button className="gradient-primary text-white px-8">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-8">
      {/* Change Password */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Change Password</h3>
        <div className="space-y-4 max-w-md">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input id="currentPassword" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input id="newPassword" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input id="confirmPassword" type="password" />
          </div>
          <Button className="gradient-primary text-white">Update Password</Button>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Two-Factor Authentication</h3>
        <p className="text-gray-600 mb-4">Add an extra layer of security to your account</p>
        <Button variant="outline">Enable 2FA</Button>
      </div>

      {/* Login History */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Login Activity</h3>
        <div className="space-y-4">
          {[
            { device: 'iPhone 14 Pro', location: 'Dubai, UAE', time: '2 hours ago', current: true },
            { device: 'MacBook Pro', location: 'Dubai, UAE', time: '1 day ago', current: false },
            { device: 'Chrome Browser', location: 'Abu Dhabi, UAE', time: '3 days ago', current: false }
          ].map((login, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <div className="font-medium text-gray-900">{login.device}</div>
                <div className="text-sm text-gray-500">{login.location} • {login.time}</div>
              </div>
              {login.current && (
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Current</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPaymentMethods = () => (
    <div className="space-y-8">
      {/* Payment Methods */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Payment Methods</h3>
          <Button className="gradient-primary text-white">
            <CreditCard className="h-4 w-4 mr-2" />
            Add New Card
          </Button>
        </div>
        
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div key={method.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-gradient-to-r from-destructive to-red-600 rounded flex items-center justify-center">
                  <CreditCard className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    {method.brand} ending in {method.last4}
                  </div>
                  {method.isDefault && (
                    <span className="text-xs bg-destructive/20 text-destructive px-2 py-1 rounded-full">Default</span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Billing Information */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Billing Information</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="billingName">Full Name</Label>
            <Input id="billingName" value="Ahmed Al-Rashid" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="billingEmail">Email</Label>
            <Input id="billingEmail" value="ahmed.alrashid@email.com" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="billingAddress">Address</Label>
            <Input id="billingAddress" value="Dubai Marina, Dubai, UAE" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotifications = () => (
    <div className="space-y-8">
      {/* Email Notifications */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Email Notifications</h3>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <div className="font-medium text-gray-900">{notification.label}</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={notification.enabled}
                  onChange={() => {/* Handle toggle */}}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-destructive/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-destructive"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Push Notifications */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Push Notifications</h3>
        <p className="text-gray-600 mb-4">Get instant notifications on your mobile device</p>
        <Button variant="outline">Enable Push Notifications</Button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'text-destructive border-b-2 border-destructive'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-8">
          {activeTab === 'personal' && renderPersonalInfo()}
          {activeTab === 'security' && renderSecurity()}
          {activeTab === 'payments' && renderPaymentMethods()}
          {activeTab === 'notifications' && renderNotifications()}
        </div>
      </div>
    </div>
  );
}
