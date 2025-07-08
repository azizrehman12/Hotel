import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: '/src/Pictures/room1.jpg',
      category: 'Rooms',
      title: 'Single Room'
    },
    {
      url: '/src/Pictures/double.jpg',
      category: 'Rooms',
      title: 'Double Room'
    },
    {
      url: '/src/Pictures/KITCHEN.jpg',
      category: 'Kitchen',
      title: 'Modern Kitchen'
    },
    {
      url: '/src/Pictures/STUDY.jpg',
      category: 'Study Area',
      title: 'Study Lounge'
    },
    {
      url: '/src/Pictures/tv.jpg',
      category: 'Common Area',
      title: 'TV Lounge'
    },
    {
      url: '/src/Pictures/lauch.jpg',
      category: 'Facilities',
      title: ' Area'
    },
    {
      url: '/src/Pictures/rooms.jpg',
      category: 'Rooms',
      title: 'Premium Room'
    },
    {
      url: '/src/Pictures/pr.jpg',
      category: 'Rooms',
      title: 'Executive Room'
    },
    {
      url: '/src/Pictures/db.jpg',
      category: 'Rooms',
      title: 'Shared Room'
    },
    {
      url: '/src/Pictures/washrooms.jpg',
      category: 'Exterior',
      title: 'Hostel Building'
    },
    {
      url: '/src/Pictures/interence.jpg',
      category: 'Exterior',
      title: 'Entrance'
    },
    
    {
      url: '/src/Pictures/interence.jpg',
      category: 'Common Area',
      title: 'Reception Area'
    },
    {
      url: '/src/Pictures/d.jpg',
      category: 'Rooms',
      title: 'Deluxe Room'
    },
    
    {
      url: '/src/Pictures/KITCHEN.jpg',
      category: 'Kitchen',
      title: 'Dining Area'
    }
  ];

  const categories = ['All', 'Rooms', 'Kitchen', 'Study Area', 'Common Area', 'Facilities', 'Exterior'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our beautiful hostel facilities and see what makes StudentNest your perfect home away from home
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              onClick={() => openModal(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold text-lg">{image.title}</p>
                  <p className="text-sm text-gray-300">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <img
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
              
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-semibold">{filteredImages[selectedImage].title}</p>
                <p className="text-sm text-gray-300">{filteredImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Rooms Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600">City Locations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make StudentNest Your Home?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a visit to see our facilities in person
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Tour
            </a>
            <a
              href="https://wa.me/923001234567"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;