import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../../data/gigs';

interface ReviewItemProps {
  review: Review;
}

export function ReviewItem({ review }: ReviewItemProps) {
  return (
    <div className="flex gap-4 pb-6 border-b border-gray-200 last:border-b-0">
      <img
        src={review.avatar}
        alt={review.author}
        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-semibold text-gray-900">{review.author}</h4>
          <span className="text-sm text-gray-500">{review.date}</span>
        </div>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < review.rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">{review.rating}.0</span>
        </div>
        <p className="text-gray-700">{review.text}</p>
      </div>
    </div>
  );
}
