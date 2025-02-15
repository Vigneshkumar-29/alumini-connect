import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Building2, ArrowRight } from 'lucide-react';

export function Jobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Google',
      location: 'Mountain View, CA',
      type: 'Full-time',
      salary: '$120,000 - $180,000',
      postedBy: 'Sarah Chen (Alumni)',
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'UX Design Intern',
      company: 'Apple',
      location: 'Cupertino, CA',
      type: 'Internship',
      salary: '$45/hour',
      postedBy: 'Michael Brown (Alumni)',
      logo: 'https://images.unsplash.com/photo-1611174743420-3d7df880ce32?auto=format&fit=crop&q=80',
      posted: '1 week ago'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">Find Your Dream Job</h1>
        <p className="mb-6">Exclusive opportunities posted by our alumni network</p>
        
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900"
            />
          </div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-4 py-3 rounded-lg text-gray-900"
          >
            <option value="all">All Types</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="internship">Internship</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="flex items-start gap-4">
              <img
                src={job.logo}
                alt={job.company}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold mb-1">{job.title}</h2>
                    <p className="text-gray-600 mb-2">{job.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                    {job.type}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {job.salary}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Building2 className="w-4 h-4" />
                    Posted by {job.postedBy} • {job.posted}
                  </div>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}