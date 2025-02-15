import React from 'react';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

export function Events() {
  const events = [
    {
      id: 1,
      title: 'Tech Career Fair 2024',
      date: 'March 25, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'University Main Hall',
      type: 'In-Person',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
      attendees: 150,
      description: 'Connect with top tech companies and alumni recruiters. Bring your resume!'
    },
    {
      id: 2,
      title: 'Machine Learning Workshop',
      date: 'March 28, 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Virtual',
      type: 'Online',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
      attendees: 75,
      description: 'Learn practical ML applications from industry experts. Hands-on coding session included.'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Featured Event */}
      <div className="relative h-[400px] rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80"
          alt="Featured Event"
          className="absolute inset-0 w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Alumni Networking Night</h1>
            <p className="text-lg mb-6">
              Join us for an evening of networking, insights, and opportunities with successful alumni
              from various industries.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    event.type === 'Online'
                      ? 'bg-green-50 text-green-600'
                      : 'bg-blue-50 text-blue-600'
                  }`}>
                    {event.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{event.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Register
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}