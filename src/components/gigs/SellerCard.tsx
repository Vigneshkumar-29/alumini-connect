import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';
import { Seller } from '../../data/gigs';

interface SellerCardProps {
  seller: Seller;
}

export function SellerCard({ seller }: SellerCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
      {/* Seller Header */}
      <div className="flex items-start gap-4">
        <div className="relative">
          <img
            src={seller.avatar}
            alt={seller.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          {seller.isOnline && (
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{seller.name}</h3>
          <div className="flex items-center gap-1 mt-1">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(seller.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">{seller.rating}</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-600 mb-1">Reviews</p>
          <p className="text-lg font-semibold text-gray-900">{seller.reviews}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-600 mb-1">Orders</p>
          <p className="text-lg font-semibold text-gray-900">{seller.orders}</p>
        </div>
      </div>

      {/* Seller Info */}
      {seller.location && (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span>{seller.location}</span>
        </div>
      )}

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <Clock className="w-4 h-4 flex-shrink-0" />
        <span>Member since {seller.memberSince}</span>
      </div>

      {/* Bio */}
      {seller.bio && (
        <p className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">{seller.bio}</p>
      )}

      {/* Contact Button */}
      <button className="w-full py-2 px-4 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition font-medium">
        Contact Seller
      </button>
    </div>
  );
}
