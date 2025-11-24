import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { gigs } from '../../data/gigs';

// Mock user data - in a real app this would come from API
const currentUser = {
  id: 'user1',
  name: 'Sarah Johnson',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
  location: 'New York, USA',
  memberSince: 'January 2022',
  bio: 'Professional career coach with 10+ years of experience helping job seekers land their dream positions.',
  isOnline: true,
  stats: {
    reviews: 127,
    rating: 4.9,
    orders: 89,
    completion: 98,
  },
  gigsIds: ['1'],
};

export function Profile() {
  const userGigs = gigs.filter((g) => currentUser.gigsIds.includes(g.id));

  return (
    <div className="page-container space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header Background */}
        <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600" />

        {/* Profile Content */}
        <div className="px-6 md:px-8 pb-6">
          {/* Avatar and Basic Info */}
          <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-16 mb-6">
            <div className="relative flex-shrink-0">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
              />
              {currentUser.isOnline && (
                <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {currentUser.name}
              </h1>
              <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-600">
                {currentUser.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{currentUser.location}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <span>Member since {currentUser.memberSince}</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full md:w-auto px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
              Contact
            </button>
          </div>

          {/* Bio */}
          {currentUser.bio && (
            <p className="text-gray-700 max-w-2xl leading-relaxed">{currentUser.bio}</p>
          )}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
            {currentUser.stats.reviews}
          </p>
          <p className="text-sm text-gray-600">Reviews</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <div className="flex items-center justify-center gap-1 mb-1">
            <p className="text-3xl md:text-4xl font-bold text-yellow-500">
              {currentUser.stats.rating}
            </p>
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          </div>
          <p className="text-sm text-gray-600">Rating</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <p className="text-3xl md:text-4xl font-bold text-green-600 mb-1">
            {currentUser.stats.orders}
          </p>
          <p className="text-sm text-gray-600">Total Orders</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 text-center">
          <p className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">
            {currentUser.stats.completion}%
          </p>
          <p className="text-sm text-gray-600">Completion</p>
        </div>
      </div>

      {/* Gigs Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          My Gigs ({userGigs.length})
        </h2>

        {userGigs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userGigs.map((gig) => (
              <div
                key={gig.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition border border-gray-100 hover:border-gray-200"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={gig.image}
                    alt={gig.title}
                    className="w-full aspect-video object-cover hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                  {/* Category Badge */}
                  <div>
                    <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded">
                      {gig.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-gray-900 line-clamp-2">
                    {gig.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.floor(gig.seller.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({gig.reviews.length})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 pt-2 border-t border-gray-200">
                    <span className="text-lg font-bold text-gray-900">
                      ${gig.startingPrice}
                    </span>
                    <span className="text-sm text-gray-600">Starting at</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="px-4 pb-4 flex gap-2">
                  <button className="flex-1 py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-lg text-sm font-medium transition">
                    Edit
                  </button>
                  <button className="flex-1 py-2 px-3 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-sm font-medium transition">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <p className="text-gray-600 mb-4">No gigs yet</p>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
              Create Your First Gig
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
