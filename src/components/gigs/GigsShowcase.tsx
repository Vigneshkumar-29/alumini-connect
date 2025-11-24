import React, { useState, useRef, useEffect } from 'react';
import { Search, Filter, X, Menu } from 'lucide-react';
import { gigs } from '../../data/gigs';
import { ServiceCard } from '../ui/ServiceCard';

export function GigsShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const categories = [
    'All',
    'Web Development',
    'Mobile Apps',
    'Design',
  ];

  const filteredGigs = gigs.filter((gig) => {
    const matchesSearch =
      gig.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gig.seller.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || gig.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar on selection
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category.toLowerCase());
    if (isSmallScreen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="page-container space-y-8">
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-3xl font-bold">Browse Services</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start relative">
        {/* Mobile Drawer Trigger */}
        {isSmallScreen && (
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="flex items-center gap-2 md:hidden px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            {isSidebarOpen ? (
              <>
                <X className="w-5 h-5" />
                Close Filters
              </>
            ) : (
              <>
                <Menu className="w-5 h-5" />
                Filters
              </>
            )}
          </button>
        )}

        {/* Sidebar / Drawer */}
        {(!isSmallScreen || isSidebarOpen) && (
          <div
            ref={sidebarRef}
            className={`${
              isSmallScreen
                ? 'fixed inset-0 top-16 left-0 z-40 w-64 bg-white overflow-y-auto'
                : 'w-full md:w-64 flex-shrink-0'
            }`}
          >
            <div className="space-y-4 p-4 md:p-0">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Categories */}
              <div className="bg-white md:p-4 md:rounded-lg md:shadow-sm md:border md:border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <Filter className="w-5 h-5 text-gray-500" />
                  <h3 className="font-semibold text-gray-900">Categories</h3>
                </div>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition ${
                        selectedCategory === category.toLowerCase()
                          ? 'bg-blue-50 text-blue-600 font-medium'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Overlay */}
        {isSmallScreen && isSidebarOpen && (
          <div
            className="fixed inset-0 top-16 z-30 bg-black/20"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Services Grid */}
        <div className="flex-1 w-full">
          {filteredGigs.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGigs.map((gig) => (
                <ServiceCard
                  key={gig.id}
                  id={gig.id}
                  title={gig.title}
                  image={gig.image}
                  seller={gig.seller}
                  startingPrice={gig.startingPrice}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-2">No services found</p>
              <p className="text-sm text-gray-500">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
