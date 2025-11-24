import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Filter } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { useAuth } from '../../contexts/AuthContext';

export function ProjectShowcase() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'Web Development', 'Mobile Apps', 'AI/ML', 'Data Science', 'Design'];

  // Mock projects data (replace with actual API call)
  const projects = [
    {
      id: '1',
      title: 'AI-Powered Study Assistant',
      description: 'An intelligent study companion that helps students organize their learning materials and create personalized study plans.',
      author: 'Emily Chen',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
      tags: ['Python', 'Machine Learning', 'NLP'],
      likes: 42,
      comments: 15
    },
    {
      id: '2',
      title: 'EcoTrack Mobile App',
      description: 'A mobile application that helps users track and reduce their carbon footprint through daily activities.',
      author: 'Marcus Johnson',
      category: 'Mobile Apps',
      image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=80',
      tags: ['React Native', 'Firebase', 'Maps API'],
      likes: 38,
      comments: 12
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Project Showcase</h1>
        {user && (
          <Link
            to="/projects/create"
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5" />
            Share Project
          </Link>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start">
        {/* Search and Filter */}
        <div className="w-full md:w-64 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-5 h-5 text-gray-500" />
              <h3 className="font-semibold">Categories</h3>
            </div>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category.toLowerCase())}
                  className={`w-full text-left px-3 py-2 rounded-lg transition ${
                    selectedCategory === category.toLowerCase()
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="flex-1">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}