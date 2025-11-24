import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../../data/gigs';

interface PricingPanelProps {
  tiers: PricingTier[];
}

export function PricingPanel({ tiers }: PricingPanelProps) {
  const [selectedTier, setSelectedTier] = useState<'Basic' | 'Standard' | 'Premium'>('Standard');

  const tier = tiers.find((t) => t.name === selectedTier);

  if (!tier) return null;

  return (
    <div className="sticky top-24 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Tier Tabs */}
      <div className="flex border-b border-gray-200">
        {tiers.map((t) => (
          <button
            key={t.name}
            onClick={() => setSelectedTier(t.name)}
            className={`flex-1 py-3 px-4 text-sm font-medium transition ${
              selectedTier === t.name
                ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Pricing Content */}
      <div className="p-6 space-y-6">
        {/* Price Display */}
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
            <span className="text-gray-600">USD</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Delivery in {tier.deliveryDays} day{tier.deliveryDays > 1 ? 's' : ''}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-3">
          {tier.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-sm hover:shadow-md">
          Continue ({selectedTier})
        </button>

        {/* Description */}
        <p className="text-xs text-gray-500 text-center">
          All packages include unlimited revisions and 100% satisfaction guarantee
        </p>
      </div>
    </div>
  );
}
