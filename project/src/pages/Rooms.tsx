import React from 'react';
import { Wifi, Car, Utensils, Shield, BookOpen, Snowflake, Users, Clock } from 'lucide-react';

const Rooms: React.FC = () => {
  const roomTypes = [
    {
      id: 1,
      title: 'Daily Stay Room',
      price: 'PKR 1,500',
      period: 'per day',
      availability: 'Available',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Single Bed', 'Shared Bathroom', 'WiFi', 'AC', 'Study Desk', 'Locker'],
      description: 'Perfect for short-term stays with all basic amenities included.'
    },
    {
      id: 2,
      title: 'Weekly Stay Room',
      price: 'PKR 9,000',
      period: 'per week',
      availability: 'Available',
      image: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Single Bed', 'Shared Bathroom', 'WiFi', 'AC', 'Study Desk', 'Locker', 'Laundry'],
      description: 'Ideal for students needing accommodation for exam periods or short courses.'
    },
    {
      id: 3,
      title: 'Monthly Stay Room',
      price: 'PKR 25,000',
      period: 'per month',
      availability: 'Available',
      image: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Single Bed', 'Shared Bathroom', 'WiFi', 'AC', 'Study Desk', 'Locker', 'Laundry', 'Kitchen Access'],
      description: 'Best value for semester-long stays with full access to all facilities.'
    },
    {
      id: 4,
      title: 'Premium Room',
      price: 'PKR 35,000',
      period: 'per month',
      availability: 'Limited',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Single Bed', 'Private Bathroom', 'WiFi', 'AC', 'Study Desk', 'Wardrobe', 'Balcony', 'Room Service'],
      description: 'Premium accommodation with private bathroom and additional amenities.'
    },
    {
      id: 5,
      title: 'Shared Room',
      price: 'PKR 15,000',
      period: 'per month',
      availability: 'Available',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Twin Beds', 'Shared Bathroom', 'WiFi', 'AC', 'Study Desks', 'Lockers', 'Common Area'],
      description: 'Affordable option for budget-conscious students who enjoy company.'
    },
    {
      id: 6,
      title: 'Executive Room',
      price: 'PKR 45,000',
      period: 'per month',
      availability: 'Occupied',
      image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: ['Queen Bed', 'Private Bathroom', 'WiFi', 'AC', 'Study Desk', 'Wardrobe', 'Mini Fridge', 'Room Service'],
      description: 'Luxury accommodation with premium amenities and services.'
    }
  ];

  const amenityIcons = {
    'WiFi': Wifi,
    'AC': Snowflake,
    'Study Desk': BookOpen,
    'Locker': Shield,
    'Kitchen Access': Utensils,
    'Laundry': Clock,
    'Common Area': Users
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Rooms</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our variety of accommodation options designed to meet every student's needs and budget
          </p>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomTypes.map((room) => (
            <div key={room.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    room.availability === 'Available' 
                      ? 'bg-green-100 text-green-800' 
                      : room.availability === 'Limited'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {room.availability}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">{room.price}</span>
                    <span className="text-gray-500 ml-2">{room.period}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature, index) => {
                      const IconComponent = amenityIcons[feature as keyof typeof amenityIcons];
                      return (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {IconComponent && <IconComponent className="w-3 h-3 mr-1" />}
                          {feature}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                      room.availability === 'Occupied'
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    disabled={room.availability === 'Occupied'}
                  >
                    {room.availability === 'Occupied' ? 'Occupied' : 'Book Now'}
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Room Policies & Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Policy</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Advance payment required for all bookings</li>
                <li>• ID verification mandatory for check-in</li>
                <li>• Check-in time: 12:00 PM - 10:00 PM</li>
                <li>• Check-out time: 11:00 AM</li>
                <li>• Security deposit: PKR 5,000 (refundable)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Included Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 24/7 security and CCTV monitoring</li>
                <li>• High-speed internet (WiFi)</li>
                <li>• Weekly housekeeping</li>
                <li>• Common area access</li>
                <li>• Emergency support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Book Your Room?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to reserve your preferred accommodation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/923218760338"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              WhatsApp Booking
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
            <a
              href="tel:+923001234567"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Call Now
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;