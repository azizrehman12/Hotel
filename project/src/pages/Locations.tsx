import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Users, Shield, Star } from 'lucide-react';

const Locations: React.FC = () => {
  const locations = [
    {
      city: 'Karachi',
      address: 'Near University of Karachi, Gulshan-e-Iqbal',
      phone: '+92 3218760338',
      email: 'Maria.zaib123@gmail.com',
      coordinates: { lat: 24.8607, lng: 67.0011 },
      features: ['Near Universities', 'Public Transport', 'Shopping Centers', 'Medical Facilities'],
      rooms: 25,
      occupancy: '85%',
      image: 'https://images.pexels.com/photos/1434580/pexels-photo-1434580.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      universities: ['University of Karachi', 'NED University', 'Karachi University', 'Sindh University']
    },
    {
      city: 'Lahore',
      address: 'Near LUMS, DHA Phase 5',
      phone: '+92 3218760338',
      email: 'Maria.zaib123@gmail.com',
      coordinates: { lat: 31.5204, lng: 74.3587 },
      features: ['Premium Location', 'Metro Access', 'Food Streets', 'Entertainment'],
      rooms: 30,
      occupancy: '92%',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      universities: ['LUMS', 'University of Punjab', 'UET Lahore', 'Lahore School of Economics']
    },
    {
      city: 'Islamabad',
      address: 'Near NUST, Sector H-12',
      phone: '+92 3218760338',
      email: 'Maria.zaib123@gmail.com',
      coordinates: { lat: 33.7077, lng: 72.9786 },
      features: ['Green Environment', 'Safe Area', 'Government Sector', 'Clean Air'],
      rooms: 20,
      occupancy: '78%',
      image: 'https://images.pexels.com/photos/1547036/pexels-photo-1547036.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      universities: ['NUST', 'COMSATS', 'International Islamic University', 'Quaid-i-Azam University']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic locations across Pakistan's major cities, close to universities and essential services
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src={location.image}
                  alt={location.city}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {location.occupancy} Occupied
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                  {location.city}
                </h3>
                <p className="text-gray-600 mb-4">{location.address}</p>
                
                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2 text-blue-600" />
                    <a href={`tel:${location.phone}`} className="hover:text-blue-600">
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2 text-blue-600" />
                    <a href={`mailto:${location.email}`} className="hover:text-blue-600">
                      {location.email}
                    </a>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{location.rooms}</div>
                    <div className="text-sm text-gray-600">Total Rooms</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{location.occupancy}</div>
                    <div className="text-sm text-gray-600">Occupancy</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Area Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Nearby Universities */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Nearby Universities:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {location.universities.slice(0, 3).map((uni, uniIndex) => (
                      <li key={uniIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {uni}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <a
                    href={`https://wa.me/${location.phone.replace(/\s+/g, '')}`}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors duration-200"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${location.phone}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center transition-colors duration-200"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Us on Map</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-8 mb-4 min-h-[200px] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-2" />
                    <h3 className="text-xl font-semibold text-gray-900">{location.city}</h3>
                    <p className="text-gray-600 text-sm mt-2">{location.address}</p>
                  </div>
                </div>
                <a
                  href={`https://maps.google.com/?q=${location.coordinates.lat},${location.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  View on Google Maps
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Why Our Locations */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Our Locations Are Perfect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Near Universities</h3>
              <p className="text-gray-600">
                All locations are strategically placed near major universities and educational institutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transport Access</h3>
              <p className="text-gray-600">
                Easy access to public transportation, making commuting convenient and affordable.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safe Areas</h3>
              <p className="text-gray-600">
                Located in secure neighborhoods with low crime rates and good lighting.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Services</h3>
              <p className="text-gray-600">
                Access to 24/7 services including medical facilities, pharmacies, and convenience stores.
              </p>
            </div>
          </div>
        </div>

        {/* Contact All Locations */}
        <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions About Our Locations?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our team is ready to help you find the perfect location for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="https://wa.me/923001234567"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;