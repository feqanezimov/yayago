'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Shield,
  ShieldOff,
  Trash2,
  Download,
  MoreVertical,
  Car,
  Calendar,
  Mail,
  Phone
} from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'renter' | 'owner' | 'both';
  status: 'active' | 'suspended' | 'pending' | 'verified';
  joinDate: string;
  lastLogin: string;
  carsListed: number;
  bookingsCompleted: number;
  totalEarnings: number;
  rating: number;
  avatar: string;
  location: string;
  verified: boolean;
}

// Mock user data
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Ahmed Al-Rashid',
    email: 'ahmed.alrashid@email.com',
    phone: '+971 50 123 4567',
    role: 'both',
    status: 'verified',
    joinDate: '2023-01-15',
    lastLogin: '2024-01-28',
    carsListed: 3,
    bookingsCompleted: 45,
    totalEarnings: 15600,
    rating: 4.9,
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    location: 'Dubai Marina',
    verified: true
  },
  {
    id: '2',
    name: 'Sarah Mitchell',
    email: 'sarah.mitchell@email.com',
    phone: '+971 50 234 5678',
    role: 'renter',
    status: 'active',
    joinDate: '2023-03-22',
    lastLogin: '2024-01-27',
    carsListed: 0,
    bookingsCompleted: 23,
    totalEarnings: 0,
    rating: 4.8,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    location: 'Business Bay',
    verified: true
  },
  {
    id: '3',
    name: 'Mohammed Hassan',
    email: 'mohammed.hassan@email.com',
    phone: '+971 50 345 6789',
    role: 'owner',
    status: 'verified',
    joinDate: '2022-11-08',
    lastLogin: '2024-01-26',
    carsListed: 5,
    bookingsCompleted: 78,
    totalEarnings: 28400,
    rating: 4.7,
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    location: 'JBR',
    verified: true
  },
  {
    id: '4',
    name: 'Elena Volkova',
    email: 'elena.volkova@email.com',
    phone: '+971 50 456 7890',
    role: 'both',
    status: 'pending',
    joinDate: '2024-01-20',
    lastLogin: '2024-01-25',
    carsListed: 1,
    bookingsCompleted: 2,
    totalEarnings: 450,
    rating: 4.5,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    location: 'Downtown Dubai',
    verified: false
  },
  {
    id: '5',
    name: 'James Thompson',
    email: 'james.thompson@email.com',
    phone: '+971 50 567 8901',
    role: 'renter',
    status: 'suspended',
    joinDate: '2023-07-12',
    lastLogin: '2024-01-15',
    carsListed: 0,
    bookingsCompleted: 8,
    totalEarnings: 0,
    rating: 3.2,
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    location: 'Jumeirah',
    verified: true
  },
  {
    id: '6',
    name: 'Fatima Al-Zahra',
    email: 'fatima.alzahra@email.com',
    phone: '+971 50 678 9012',
    role: 'owner',
    status: 'active',
    joinDate: '2023-09-03',
    lastLogin: '2024-01-28',
    carsListed: 2,
    bookingsCompleted: 34,
    totalEarnings: 9800,
    rating: 4.6,
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    location: 'Al Barsha',
    verified: true
  }
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');

  // Filter users based on search term, status, and role
  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
    const matchesRole = roleFilter === 'all' || user.role === roleFilter;
    
    return matchesSearch && matchesStatus && matchesRole;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'verified':
        return <Badge className="bg-blue-100 text-blue-800">Verified</Badge>;
      case 'pending':
        return <Badge className="bg-orange-100 text-orange-800">Pending</Badge>;
      case 'suspended':
        return <Badge className="bg-red-100 text-red-800">Suspended</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'owner':
        return <Badge variant="outline" className="border-primary text-primary">Car Owner</Badge>;
      case 'renter':
        return <Badge variant="outline" className="border-blue-500 text-blue-600">Renter</Badge>;
      case 'both':
        return <Badge variant="outline" className="border-purple-500 text-purple-600">Both</Badge>;
      default:
        return <Badge variant="outline">{role}</Badge>;
    }
  };

  const handleUserAction = (userId: string, action: string) => {
    console.log(`Action ${action} for user ${userId}`);
    // Implement actual user actions here
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">User Management</h1>
            <p className="text-gray-600">Manage all platform users, their profiles, and account status</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Users
            </Button>
            <Button className="gradient-primary text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add New User
            </Button>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-3xl p-6 shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search users by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          {/* Filters */}
          <div className="flex gap-4">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-40">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="owner">Car Owners</SelectItem>
                <SelectItem value="renter">Renters</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {mockUsers.filter(u => u.status === 'verified').length}
          </div>
          <div className="text-gray-600">Verified Users</div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 rounded-xl">
              <Car className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {mockUsers.filter(u => u.role === 'owner' || u.role === 'both').length}
          </div>
          <div className="text-gray-600">Car Owners</div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-100 rounded-xl">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {mockUsers.filter(u => u.role === 'renter' || u.role === 'both').length}
          </div>
          <div className="text-gray-600">Active Renters</div>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-100 rounded-xl">
              <Shield className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div className="text-2xl font-bold text-gray-900 mb-1">
            {mockUsers.filter(u => u.status === 'pending').length}
          </div>
          <div className="text-gray-600">Pending Approval</div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">
            Users ({filteredUsers.length})
          </h2>
        </div>
        
        {filteredUsers.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role & Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Activity
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Earnings
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-10 h-10 rounded-full object-cover mr-4"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            {user.verified && (
                              <Shield className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{user.location}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-gray-900">
                          <Mail className="h-3 w-3 text-gray-400" />
                          {user.email}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Phone className="h-3 w-3 text-gray-400" />
                          {user.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-2">
                        {getRoleBadge(user.role)}
                        {getStatusBadge(user.status)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="space-y-1">
                        <div>Cars: {user.carsListed}</div>
                        <div>Bookings: {user.bookingsCompleted}</div>
                        <div>Rating: ⭐ {user.rating}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="font-medium">
                        AED {user.totalEarnings.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">Total earnings</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleUserAction(user.id, 'view')}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleUserAction(user.id, 'edit')}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        {user.status === 'suspended' ? (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-green-200 text-green-600 hover:bg-green-50"
                            onClick={() => handleUserAction(user.id, 'activate')}
                          >
                            <Shield className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-red-200 text-red-600 hover:bg-red-50"
                            onClick={() => handleUserAction(user.id, 'suspend')}
                          >
                            <ShieldOff className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No users found</h3>
            <p className="text-gray-600">
              {searchTerm || statusFilter !== 'all' || roleFilter !== 'all'
                ? 'Try adjusting your search criteria'
                : 'No users have been registered yet'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}