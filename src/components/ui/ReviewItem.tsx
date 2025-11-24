import React from 'react';
import { Star } from 'lucide-react';

interface ReviewItemProps {
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

export function ReviewItem({
  author,
  avatar,
  rating,
  date,
  text,
}: ReviewItemProps) {
  return (
    <div className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0">
      {/* Avatar */}
      <img
        src={avatar}
        alt={author}
        className="w-12 h-12 rounded-full object-cover flex-shrink-0 border border-gray-200"
      />

      {/* Review Content */}
      <div className="flex-1 min-w-0">
        {/* Name and Date Row */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-xs text-gray-500">{date}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
