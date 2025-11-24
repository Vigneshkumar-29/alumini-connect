import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Briefcase, Calendar, ArrowRight } from 'lucide-react';
import { ServiceCard } from './ui/ServiceCard';
import { gigs } from '../data/gigs';

export function Home() {
  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden -mx-4">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
            alt="Campus Background"
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white space-y-6 max-w-4xl mx-auto px-4">
          <GraduationCap className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold leading-tight">
            Empowering Future Leaders Through Connections
          </h1>
          <p className="text-xl">
            Connect with alumni, find mentorship, and unlock career opportunities
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Join Now
            </Link>
            <Link
              to="/about"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold transition backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Users className="w-8 h-8 text-blue-600" />}
            title="Connect with Alumni"
            description="Build meaningful relationships with industry professionals who've walked your path"
          />
          <FeatureCard
            icon={<Briefcase className="w-8 h-8 text-blue-600" />}
            title="Exclusive Opportunities"
            description="Access internships and job openings posted directly by alumni"
          />
          <FeatureCard
            icon={<Calendar className="w-8 h-8 text-blue-600" />}
            title="Events & Workshops"
            description="Participate in skill-building workshops and networking events"
          />
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Featured Services
              </h2>
              <p className="text-gray-600">
                Explore professional services from our community
              </p>
            </div>
            <Link
              to="/gigs"
              className="hidden sm:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition"
            >
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gigs.slice(0, 3).map((gig) => (
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
          <Link
            to="/gigs"
            className="sm:hidden flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition py-4"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-white py-16 rounded-2xl shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
              name="Sarah Chen"
              role="Software Engineer at Google"
              text="Through this platform, I connected with an amazing mentor who helped me land my dream job. The project feedback and mock interviews were invaluable!"
            />
            <TestimonialCard
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              name="James Wilson"
              role="Product Manager at Microsoft"
              text="As an alumnus, giving back to my alma mater through mentorship has been incredibly rewarding. I've hired three talented interns through the platform!"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ image, name, role, text }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">{text}</p>
    </div>
  );
}