export interface GarageService {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  category: 'mechanical' | 'electrical' | 'detailing' | 'bodywork' | 'maintenance' | 'wrapping' | 'polishing';
}

export interface Garage {
  id: string;
  name: string;
  type: 'garage' | 'freelancer';
  rating: number;
  reviews: number;
  location: string;
  description: string;
  specialties: string[];
  images: string[];
  services: GarageService[];
  contact: {
    phone: string;
    email: string;
    whatsapp?: string;
  };
  availability: {
    days: string[];
    hours: string;
  };
  owner: {
    name: string;
    experience: string;
    certifications: string[];
    languages: string[];
    avatar: string;
  };
  verified: boolean;
  establishedYear: string;
  badges: string[];
}

export const garageData: Record<string, Garage> = {
  '1': {
    id: '1',
    name: 'Al Madina Auto Center',
    type: 'garage',
    rating: 4.8,
    reviews: 156,
    location: 'Al Quoz, Dubai',
    description: 'Professional automotive service center specializing in luxury and sports cars. Equipped with state-of-the-art diagnostic equipment and certified technicians.',
    specialties: ['BMW Service', 'Mercedes Service', 'Audi Service', 'Engine Diagnostics', 'AC Repair'],
    images: [
      'https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/3752204/pexels-photo-3752204.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/4070850/pexels-photo-4070850.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    services: [
      {
        id: 's1',
        name: 'Complete Engine Diagnostics',
        description: 'Comprehensive computer diagnostics for all car systems',
        price: 150,
        duration: '1-2 hours',
        category: 'mechanical'
      },
      {
        id: 's2',
        name: 'AC Service & Repair',
        description: 'Full air conditioning system service and repair',
        price: 200,
        duration: '2-3 hours',
        category: 'electrical'
      },
      {
        id: 's3',
        name: 'Oil Change Service',
        description: 'Premium oil change with filter replacement',
        price: 120,
        duration: '45 minutes',
        category: 'maintenance'
      }
    ],
    contact: {
      phone: '+971 4 347 8900',
      email: 'info@almadina-auto.ae',
      whatsapp: '+971 50 123 4567'
    },
    availability: {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
      hours: '8:00 AM - 8:00 PM'
    },
    owner: {
      name: 'Ahmed Al Madani',
      experience: '15+ years',
      certifications: ['BMW Certified', 'Mercedes Certified', 'ASE Master Technician'],
      languages: ['Arabic', 'English'],
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    verified: true,
    establishedYear: '2010',
    badges: ['Verified Partner', 'Top Rated', 'Luxury Specialist']
  },
  '2': {
    id: '2',
    name: 'CarCare Pro Detailing',
    type: 'garage',
    rating: 4.9,
    reviews: 234,
    location: 'Dubai Marina, Dubai',
    description: 'Premium car detailing and protection services. Specializing in paint correction, ceramic coating, and luxury car care.',
    specialties: ['Ceramic Coating', 'Paint Correction', 'Interior Detailing', 'Paint Protection Film'],
    images: [
      'https://images.pexels.com/photos/6870310/pexels-photo-6870310.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/6870309/pexels-photo-6870309.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    services: [
      {
        id: 's4',
        name: 'Premium Car Wash & Detail',
        description: 'Complete exterior and interior detailing service',
        price: 180,
        duration: '3-4 hours',
        category: 'detailing'
      },
      {
        id: 's5',
        name: 'Ceramic Coating Application',
        description: '9H ceramic coating for ultimate paint protection',
        price: 800,
        duration: '6-8 hours',
        category: 'detailing'
      },
      {
        id: 's6',
        name: 'Paint Correction',
        description: 'Multi-stage paint correction for swirl removal',
        price: 600,
        duration: '4-6 hours',
        category: 'detailing'
      }
    ],
    contact: {
      phone: '+971 4 398 7654',
      email: 'book@carcarepro.ae',
      whatsapp: '+971 50 987 6543'
    },
    availability: {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      hours: '9:00 AM - 6:00 PM'
    },
    owner: {
      name: 'Michael Roberts',
      experience: '12+ years',
      certifications: ['IDA Certified', 'Ceramic Pro Certified', 'Gtechniq Accredited'],
      languages: ['English', 'Russian'],
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    verified: true,
    establishedYear: '2015',
    badges: ['Premium Partner', 'Detailing Expert', 'Ceramic Pro Certified']
  },
  '3': {
    id: '3',
    name: 'Dmitri Auto Master',
    type: 'freelancer',
    rating: 4.7,
    reviews: 89,
    location: 'Business Bay, Dubai',
    description: 'Mobile auto repair specialist with 20+ years experience. I come to your location for convenient car repairs and maintenance.',
    specialties: ['Mobile Repair', 'Electrical Systems', 'Engine Repair', 'Transmission Service'],
    images: [
      'https://images.pexels.com/photos/3642618/pexels-photo-3642618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/4070850/pexels-photo-4070850.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    services: [
      {
        id: 's7',
        name: 'Mobile Engine Repair',
        description: 'On-site engine diagnostics and repair service',
        price: 250,
        duration: '2-4 hours',
        category: 'mechanical'
      },
      {
        id: 's8',
        name: 'Electrical System Diagnosis',
        description: 'Complete electrical system troubleshooting',
        price: 180,
        duration: '1-2 hours',
        category: 'electrical'
      },
      {
        id: 's9',
        name: 'Brake System Service',
        description: 'Brake pads, rotors, and fluid service',
        price: 220,
        duration: '2-3 hours',
        category: 'mechanical'
      }
    ],
    contact: {
      phone: '+971 50 456 7890',
      email: 'dmitri.automaster@gmail.com',
      whatsapp: '+971 50 456 7890'
    },
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      hours: 'Flexible - 24/7 Emergency'
    },
    owner: {
      name: 'Dmitri Volkov',
      experience: '20+ years',
      certifications: ['ASE Certified', 'Mobile Repair Specialist'],
      languages: ['Russian', 'English', 'Arabic'],
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    verified: true,
    establishedYear: '2018',
    badges: ['Mobile Expert', 'Emergency Service', '24/7 Available']
  },
  '4': {
    id: '4',
    name: 'Dubai Wrap Studio',
    type: 'garage',
    rating: 4.8,
    reviews: 167,
    location: 'Al Quoz Industrial, Dubai',
    description: 'Professional vehicle wrapping and customization studio. Specializing in color change wraps, PPF installation, and custom designs.',
    specialties: ['Vehicle Wrapping', 'Paint Protection Film', 'Custom Graphics', 'Window Tinting'],
    images: [
      'https://images.pexels.com/photos/3752204/pexels-photo-3752204.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/6870310/pexels-photo-6870310.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    ],
    services: [
      {
        id: 's10',
        name: 'Full Car Wrap',
        description: 'Complete vehicle color change wrap',
        price: 2500,
        duration: '2-3 days',
        category: 'wrapping'
      },
      {
        id: 's11',
        name: 'Paint Protection Film',
        description: 'Clear protective film installation',
        price: 1800,
        duration: '1-2 days',
        category: 'wrapping'
      },
      {
        id: 's12',
        name: 'Window Tinting',
        description: 'Premium ceramic window tint installation',
        price: 400,
        duration: '3-4 hours',
        category: 'wrapping'
      }
    ],
    contact: {
      phone: '+971 4 567 8901',
      email: 'info@dubaiwrapstudio.com',
      whatsapp: '+971 50 234 5678'
    },
    availability: {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      hours: '9:00 AM - 7:00 PM'
    },
    owner: {
      name: 'Carlos Mendez',
      experience: '10+ years',
      certifications: ['3M Certified', 'XPEL Certified', 'Avery Dennison Certified'],
      languages: ['English', 'Spanish', 'Arabic'],
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    verified: true,
    establishedYear: '2017',
    badges: ['Wrap Expert', '3M Certified', 'Custom Design']
  }
};