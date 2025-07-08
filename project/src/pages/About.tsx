import React from 'react';
import { Users, Award, Heart, Target, Shield, Star } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We prioritize the safety and security of every student with comprehensive safety measures.'
    },
    {
      icon: Heart,
      title: 'Care & Support',
      description: 'Our dedicated team provides personalized care and support to help students thrive.'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'We foster a vibrant community where students can build lasting friendships and memories.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in all our services and continuously improve our offerings.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Students Served' },
    { number: '5+', label: 'Years of Experience' },
    { number: '3', label: 'City Locations' },
    { number: '98%', label: 'Student Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About StudentNest</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating a home away from home for students across Pakistan
          </p>
        </div>

        {/* Owner Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop"
                alt="Owner"
                className="w-full max-w-md mx-auto rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Muhammad Ahmad Khan</h3>
              <p className="text-gray-600 mb-4">
                As a former student who experienced the challenges of finding safe, affordable accommodation, 
                I founded StudentNest with a simple mission: to provide students with a comfortable, secure, 
                and supportive living environment where they can focus on their studies and personal growth.
              </p>
              <p className="text-gray-600 mb-4">
                With over 5 years of experience in student accommodation, I understand the unique needs of 
                students and have designed StudentNest to be more than just a place to stay – it's a 
                community where students can thrive, make lifelong friendships, and create memories that 
                will last a lifetime.
              </p>
              <p className="text-gray-600">
                Our commitment to safety, affordability, and community has made StudentNest the preferred 
                choice for hundreds of students across Karachi, Lahore, and Islamabad.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2019 - The Beginning</h3>
              <p className="text-gray-600">
                Started with a single location in Karachi, driven by the vision to provide quality 
                student accommodation at affordable prices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2021 - Expansion</h3>
              <p className="text-gray-600">
                Expanded to Lahore and Islamabad, serving hundreds of students across Pakistan's 
                major educational hubs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2024 - Recognition</h3>
              <p className="text-gray-600">
                Recognized as a leading student accommodation provider with 98% student satisfaction 
                and numerous positive reviews.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-blue-600 text-white rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-blue-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide safe, comfortable, and affordable accommodation for students, creating 
              an environment that promotes academic success, personal growth, and lifelong friendships. 
              We are committed to delivering exceptional service and maintaining the highest standards 
              of safety and comfort.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be Pakistan's leading student accommodation provider, known for our commitment to 
              student welfare, innovative services, and vibrant community atmosphere. We envision 
              a future where every student has access to quality housing that supports their 
              educational journey and personal development.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose StudentNest?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Experience & Expertise</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 5+ years of experience in student accommodation</li>
                <li>• Deep understanding of student needs and challenges</li>
                <li>• Proven track record of satisfied students</li>
                <li>• Continuous improvement and innovation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Comprehensive Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 24/7 security and support</li>
                <li>• Modern amenities and facilities</li>
                <li>• Flexible accommodation options</li>
                <li>• Community events and activities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Experience the StudentNest difference and make your student life memorable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
            <a
              href="/rooms"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Rooms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;