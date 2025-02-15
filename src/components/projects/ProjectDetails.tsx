import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, MessageCircle, Share2, BookmarkPlus } from 'lucide-react';

export function ProjectDetails() {
  const { id } = useParams();

  // Mock project data (replace with API call)
  const project = {
    id,
    title: 'AI-Powered Study Assistant',
    description: 'An intelligent study companion that helps students organize their learning materials and create personalized study plans using advanced machine learning algorithms. The system adapts to individual learning patterns and provides tailored recommendations for optimal study efficiency.',
    author: 'Emily Chen',
    authorRole: 'Computer Science Student',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    tags: ['Python', 'Machine Learning', 'NLP', 'TensorFlow'],
    likes: 42,
    comments: 15,
    github: 'https://github.com/example/project',
    demo: 'https://demo.example.com',
    createdAt: '2024-03-15'
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Navigation */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      {/* Project Header */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-8">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[400px] object-cover"
        />
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
              <div className="flex items-center gap-4 text-gray-600">
                <span>Posted on {project.createdAt}</span>
                <span>•</span>
                <span>{project.category}</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition">
                <BookmarkPlus className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8">
            <img
              src={project.authorImage}
              alt={project.author}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold">{project.author}</h3>
              <p className="text-sm text-gray-600">{project.authorRole}</p>
            </div>
          </div>

          {/* Project Description */}
          <p className="text-gray-700 mb-8">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Links */}
          <div className="flex gap-4 mb-8">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              View on GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Live Demo
            </a>
          </div>

          {/* Engagement */}
          <div className="flex items-center gap-6 pt-6 border-t">
            <button className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition">
              <Heart className="w-5 h-5" />
              <span>{project.likes}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition">
              <MessageCircle className="w-5 h-5" />
              <span>{project.comments}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}