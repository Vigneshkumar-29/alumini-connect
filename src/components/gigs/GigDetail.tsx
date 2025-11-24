import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import { gigs } from '../../data/gigs';
import { PricingPanel } from './PricingPanel';
import { SellerCard } from './SellerCard';
import { ReviewItem } from './ReviewItem';

export function GigDetail() {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);

  const gig = gigs.find((g) => g.id === id);

  if (!gig) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Gig not found</h1>
        <Link to="/gigs" className="text-blue-600 hover:text-blue-700">
          Back to Gigs
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Breadcrumb */}
      <Link
        to="/gigs"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Gigs
      </Link>

      {/* Main Layout: 60/40 Split */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Left Column - 60% (Col 1-2) */}
        <div className="md:col-span-2 space-y-8">
          {/* Image Gallery Stub */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative">
              <img
                src={gig.image}
                alt={gig.title}
                className="w-full aspect-video object-cover hover:scale-105 transition duration-300"
              />
              {/* Image Gallery Controls */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="px-3 py-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition text-sm font-medium">
                  Gallery
                </button>
              </div>
            </div>
          </div>

          {/* H1 and Meta */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {gig.title}
                </h1>
                <p className="text-gray-600">
                  Category: <span className="font-medium text-gray-900">{gig.category}</span>
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => setLiked(!liked)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <Heart
                    className={`w-6 h-6 ${
                      liked
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-600 hover:text-red-600'
                    }`}
                  />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition">
                  <Share2 className="w-6 h-6 text-gray-600 hover:text-blue-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">About This Gig</h2>
            <p className="text-gray-700 leading-relaxed">{gig.description}</p>
          </div>

          {/* Description Sections */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">What's Included</h2>
            <ul className="space-y-2">
              {[
                'Personalized attention to your needs',
                'Professional formatting and presentation',
                'Unlimited revisions until you\'re satisfied',
                'Fast turnaround time',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Reviews ({gig.reviews.length})
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-gray-900">
                  {(
                    gig.reviews.reduce((acc, r) => acc + r.rating, 0) /
                    gig.reviews.length
                  ).toFixed(1)}
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Stacked Review Items */}
            <div className="space-y-0">
              {gig.reviews.map((review) => (
                <ReviewItem key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - 40% (Sticky) */}
        <div className="md:col-span-1 space-y-6">
          {/* Pricing Panel */}
          <PricingPanel tiers={gig.pricingTiers} />

          {/* Seller Card */}
          <SellerCard seller={gig.seller} />
        </div>
      </div>
    </div>
  );
}
