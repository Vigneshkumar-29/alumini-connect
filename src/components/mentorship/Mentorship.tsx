import React from 'react';
import { Users, Calendar, MessageSquare, Star } from 'lucide-react';

export function Mentorship() {
  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      role: 'Senior Software Engineer at Google',
      expertise: ['Machine Learning', 'System Design', 'Career Growth'],
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      rating: 4.9,
      reviews: 24,
      available: true
    },
    {
      id: 2,
      name: 'James Wilson',
      role: 'Product Manager at Microsoft',
      expertise: ['Product Strategy', 'UX Design', 'Agile'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      rating: 4.8,
      reviews: 18,
      available: true
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Connect with Industry Leaders</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get personalized guidance from experienced alumni who've walked your path
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Users className="w-8 h-8 text-blue-600" />, stat: '200+', label: 'Active Mentors' },
          { icon: <Calendar className="w-8 h-8 text-blue-600" />, stat: '1,000+', label: 'Sessions Completed' },
          { icon: <MessageSquare className="w-8 h-8 text-blue-600" />, stat: '95%', label: 'Satisfaction Rate' }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-xl p-6 text-center shadow-sm">
            {item.icon}
            <div className="text-3xl font-bold mt-2">{item.stat}</div>
            <div className="text-gray-600">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Mentor List */}
      <div className="grid md:grid-cols-2 gap-6">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{mentor.name}</h3>
                      <p className="text-gray-600">{mentor.role}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-semibold">{mentor.rating}</span>
                      <span className="text-gray-500">({mentor.reviews})</span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {mentor.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  mentor.available
                    ? 'bg-green-50 text-green-600'
                    : 'bg-gray-50 text-gray-600'
                }`}>
                  {mentor.available ? 'Available for Mentoring' : 'Currently Busy'}
                </span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Schedule Session
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}