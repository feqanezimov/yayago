'use client';

import { Button } from '@/components/ui/button';
import { 
  Linkedin,
  Mail,
  MapPin,
  Users
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Ahmad Al-Rashid',
    role: 'Founder & CEO',
    bio: 'Former automotive industry executive with 15+ years experience in Dubai market.',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: '#'
  },
  {
    name: 'Elena Petrova',
    role: 'Head of Technology',
    bio: 'Tech entrepreneur passionate about building user-friendly platforms.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: '#'
  },
  {
    name: 'James Mitchell',
    role: 'Head of Community',
    bio: 'Community building expert focused on trust and safety in sharing economy.',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    linkedin: '#'
  }
];

export function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The passionate people behind Yayago's mission to transform car sharing in Dubai
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6 inline-block">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto shadow-xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm mb-6">
                {member.bio}
              </p>
              
              <Button variant="outline" size="sm">
                <Linkedin className="h-4 w-4 mr-2" />
                Connect
              </Button>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="text-center">
          <div className="glass rounded-3xl p-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for talented individuals who share our passion for innovation and community building
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white hover:shadow-lg transition-shadow">
                <Mail className="h-5 w-5 mr-2" />
                View Open Positions
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <MapPin className="h-5 w-5 mr-2" />
                Visit Our Office
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              Located in the heart of Dubai's tech hub
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}