import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin } from 'lucide-react';
import { gigs } from '../../data/gigs';
import { PricingPanel } from '../ui/PricingPanel';
import { ReviewItem } from '../ui/ReviewItem';

export function GigDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const gig = gigs.find((g) => g.id === id);

  if (!gig) {
    return (
      <div className="page-container">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <div className="text-center py-12">
          <p className="text-gray-600">Gig not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src={gig.image}
              alt={gig.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Title and Seller Info */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">{gig.title}</h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-4 border-y border-gray-200">
              <div className="flex items-center gap-4">
                <img
                  src={gig.seller.avatar}
                  alt={gig.seller.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {gig.seller.name}
                  </p>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(gig.seller.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-sm font-medium text-gray-700">
                      {gig.seller.rating}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-right sm:text-left text-sm text-gray-600">
                <p className="flex items-center gap-2 justify-end sm:justify-start">
                  <MapPin className="w-4 h-4" />
                  Available for work
                </p>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">About this gig</h2>
            <p className="text-gray-700 leading-relaxed">
              {gig.title} - Providing top-quality services with professional
              expertise and attention to detail. Each package is customizable to
              meet your specific needs.
            </p>
          </div>

          {/* Reviews Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
            <div className="space-y-6">
              {gig.reviews.map((review) => (
                <ReviewItem
                  key={review.id}
                  author={review.author}
                  avatar={review.avatar}
                  rating={review.rating}
                  date={review.date}
                  text={review.text}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Pricing Panel */}
        <div className="lg:col-span-1">
          <PricingPanel tiers={gig.pricingTiers} />
        </div>
      </div>
    </div>
  );
}
