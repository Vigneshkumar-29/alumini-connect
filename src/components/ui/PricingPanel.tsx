import React, { useState } from 'react';
import { Check, ShoppingCart } from 'lucide-react';

interface PricingTier {
  name: 'Basic' | 'Standard' | 'Premium';
  price: number;
  features: string[];
  deliveryDays: number;
}

interface PricingPanelProps {
  tiers: PricingTier[];
  onSelectTier?: (tier: PricingTier) => void;
}

export function PricingPanel({ tiers, onSelectTier }: PricingPanelProps) {
  const [selectedTier, setSelectedTier] = useState<'Basic' | 'Standard' | 'Premium'>('Standard');

  const current = tiers.find((t) => t.name === selectedTier) || tiers[1];

  const handleSelect = (tier: PricingTier) => {
    setSelectedTier(tier.name);
    onSelectTier?.(tier);
  };

  return (
    <div className="sticky top-24 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Tab Switcher */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h3 className="font-semibold text-gray-900">Select Package</h3>
        <div className="flex gap-2">
          {tiers.map((tier) => (
            <button
              key={tier.name}
              onClick={() => handleSelect(tier)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedTier === tier.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tier.name}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Content */}
      <div className="p-6 space-y-4">
        {/* Price Display */}
        <div className="space-y-1">
          <p className="text-sm text-gray-600">Price</p>
          <p className="text-4xl font-bold text-gray-900">
            ${current.price}
          </p>
          <p className="text-xs text-gray-500">
            Delivery: {current.deliveryDays} days
          </p>
        </div>

        {/* Feature Checklist */}
        <div className="space-y-3 py-6 border-t border-b border-gray-200">
          {current.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
          <ShoppingCart className="w-5 h-5" />
          Order Now
        </button>

        {/* Info Text */}
        <p className="text-xs text-gray-500 text-center">
          You'll be able to review and communicate before any payments are made.
        </p>
      </div>
    </div>
  );
}
