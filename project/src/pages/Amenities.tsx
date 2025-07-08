import React from 'react';
import { Wifi, Shield, Utensils, BookOpen, Snowflake, Car, Clock, Users, Zap, Shirt, Camera, Phone } from 'lucide-react';

const Amenities: React.FC = () => {
  const amenities = [
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description: 'Unlimited high-speed internet access throughout the hostel for all your academic and personal needs.',
      features: ['24/7 connectivity', 'High bandwidth', 'Multiple access points', 'Tech support available']
    },
    {
      icon: Shield,
      title: '24/7 Security',
      description: 'Round-the-clock security with CCTV monitoring and trained security personnel for your safety.',
      features: ['CCTV surveillance', 'Security guards', 'Access control', 'Emergency response']
    },
    {
      icon: Utensils,
      title: 'Modern Kitchen',
      description: 'Fully equipped shared kitchen with modern appliances for cooking your favorite meals.',
      features: ['Refrigerator', 'Microwave', 'Stove & oven', 'Cooking utensils provided']
    },
    {
      icon: BookOpen,
      title: 'Study Lounge',
      description: 'Quiet, well-lit study areas designed to enhance your academic performance and focus.',
      features: ['Comfortable seating', 'Good lighting', 'Wi-Fi access', 'Quiet environment']
    },
    {
      icon: Snowflake,
      title: 'Air Conditioning',
      description: 'Climate-controlled rooms with individual AC units for your comfort year-round.',
      features: ['Individual controls', 'Energy efficient', 'Regular maintenance', 'Optimal temperature']
    },
    {
      icon: Shirt,
      title: 'Laundry Service',
      description: 'Convenient laundry facilities with washing machines and drying areas.',
      features: ['Washing machines', 'Drying area', 'Detergent available', 'Scheduled timings']
    },
    {
      icon: Car,
      title: 'Parking Space',
      description: 'Secure parking facilities for motorcycles and bicycles with 24/7 monitoring.',
      features: ['Covered parking', 'Security cameras', 'Designated spots', 'Easy access']
    },
    {
      icon: Users,
      title: 'Common Areas',
      description: 'Spacious common areas for socializing, relaxation, and building friendships.',
      features: ['TV lounge', 'Gaming area', 'Social spaces', 'Event hosting']
    },
    {
      icon: Zap,
      title: 'Power Backup',
      description: 'Uninterrupted power supply with backup generators for continuous electricity.',
      features: ['UPS systems', 'Generator backup', 'Automatic switching', 'Maintenance included']
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Flexible entry and exit timings to accommodate your study and work schedule.',
      features: ['24/7 access', 'Key card system', 'No curfew', 'Respectful policies']
    },
    {
      icon: Camera,
      title: 'Recreation Room',
      description: 'Entertainment facilities including games, TV, and relaxation areas.',
      features: ['Indoor games', 'TV entertainment', 'Comfortable seating', 'Social activities']
    },
    {
      icon: Phone,
      title: 'Emergency Support',
      description: 'Round-the-clock emergency support and maintenance services.',
      features: ['Emergency hotline', 'First aid', 'Quick response', 'Professional staff']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Amenities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience comfortable student living with our comprehensive range of modern amenities and services
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{amenity.title}</h3>
                <p className="text-gray-600 mb-4">{amenity.description}</p>
                <ul className="space-y-2">
                  {amenity.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Featured Amenities Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Makes Us Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">
                Your security is our top priority with comprehensive safety measures and 24/7 monitoring.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focus</h3>
              <p className="text-gray-600">
                Build lasting friendships in our vibrant community designed for student interaction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Study Support</h3>
              <p className="text-gray-600">
                Dedicated study spaces and quiet environments to support your academic success.
              </p>
            </div>
          </div>
        </div>

        {/* Amenities Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Facility Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="/src/Pictures/study2.jpg"
                alt="Study Lounge"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Study Lounge</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="/src/Pictures/study3.jpg"
                alt="Modern Exterior"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Modern Exterior</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="/src/Pictures/common.jpg"
                alt="Common Area"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Common Area</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="/src/Pictures/washrooms.jpg"
                alt="Laundry Area"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Washrooms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Premium Student Living</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of satisfied Guests who enjoy our world-class amenities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Tour
            </a>
            <a
              href="https://wa.me/923218760338"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;