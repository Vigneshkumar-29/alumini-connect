import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Star, Heart } from 'lucide-react';
import { gigs } from '../../data/gigs';

export function Gigs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [likedGigs, setLikedGigs] = useState<string[]>([]);

  const categories = Array.from(new Set(gigs.map((g) => g.category)));

  const filteredGigs = gigs.filter((gig) => {
    const matchesSearch =
      gig.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gig.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || gig.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleLike = (gigId: string) => {
    setLikedGigs((prev) =>
      prev.includes(gigId) ? prev.filter((id) => id !== gigId) : [...prev, gigId]
    );
  };

  return (
    <div className="page-container space-y-8">
      {/* Header */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Browse Services
          </h1>
          <p className="text-gray-600">
            Find the perfect service to help you succeed
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-primary pl-12"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedCategory === ''
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filteredGigs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGigs.map((gig) => (
            <Link
              key={gig.id}
              to={`/gigs/${gig.id}`}
              className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-gray-200"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={gig.image}
                  alt={gig.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                {/* Like Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleLike(gig.id);
                  }}
                  className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition shadow-sm"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      likedGigs.includes(gig.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                {/* Seller Info */}
                <div className="flex items-center gap-2">
                  <img
                    src={gig.seller.avatar}
                    alt={gig.seller.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {gig.seller.name}
                    </p>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(gig.seller.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">
                        {gig.seller.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition">
                  {gig.title}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 pt-2 border-t border-gray-200">
                  <span className="text-lg font-bold text-gray-900">
                    ${gig.startingPrice}
                  </span>
                  <span className="text-sm text-gray-600">Starting at</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">No services found</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('');
            }}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
