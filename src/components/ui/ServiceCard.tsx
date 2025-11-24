import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  id: string;
  title: string;
  image: string;
  seller: {
    name: string;
    avatar: string;
    rating: number;
  };
  startingPrice: number;
}

export function ServiceCard({
  id,
  title,
  image,
  seller,
  startingPrice,
}: ServiceCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link to={`/gigs/${id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Image Container - 16:9 Aspect Ratio */}
        <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          {/* Heart Overlay */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-sm hover:shadow-md"
            aria-label="Add to favorites"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorite
                  ? 'fill-red-500 text-red-500'
                  : 'text-gray-600 hover:text-red-500'
              }`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Seller Info */}
          <div className="flex items-center gap-3">
            <img
              src={seller.avatar}
              alt={seller.name}
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {seller.name}
              </p>
              <div className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-gray-600">{seller.rating}</span>
              </div>
            </div>
          </div>

          {/* Title - Two Line Clamp */}
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors">
            {title}
          </h3>

          {/* Footer - Price */}
          <div className="flex items-baseline gap-1 pt-2 border-t border-gray-100">
            <span className="text-xs text-gray-600">Starting at</span>
            <span className="text-lg font-bold text-gray-900">
              ${startingPrice}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
