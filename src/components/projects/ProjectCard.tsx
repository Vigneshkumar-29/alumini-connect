import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    author: string;
    category: string;
    image: string;
    tags: string[];
    likes: number;
    comments: number;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.id}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>By {project.author}</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>{project.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span>{project.comments}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}