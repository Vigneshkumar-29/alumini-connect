import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Globe,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Send,
  ExternalLink,
} from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <span className="font-bold text-xl text-white">AlumniConnect</span>
            </Link>
            <p className="text-gray-400">
              Empowering future leaders through meaningful connections between students and alumni.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Github className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/jobs">Jobs</FooterLink>
              <FooterLink to="/mentorship">Mentorship</FooterLink>
              <FooterLink to="/events">Events</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
                <a href="mailto:support@alumniconnect.com">support@alumniconnect.com</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 mt-1" />
                <span>123 University Ave,<br />Silicon Valley, CA 94025</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest opportunities and events.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-4 pr-12 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Recent Blog Posts */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="font-semibold text-white mb-6">Latest Updates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'How to Make the Most of Alumni Mentorship',
                date: 'March 15, 2024',
                image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80'
              },
              {
                title: 'Success Stories: From Student to Silicon Valley',
                date: 'March 12, 2024',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80'
              },
              {
                title: 'Upcoming Tech Career Fair: What to Expect',
                date: 'March 10, 2024',
                image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&q=80'
              }
            ].map((post, i) => (
              <Link
                key={i}
                to="/blog"
                className="group block bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              <span>•</span>
              <Link to="/support" className="hover:text-blue-400 transition-colors">Support</Link>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
                <span>English (US)</span>
              </button>
              <p className="text-sm text-gray-400">
                © 2024 AlumniConnect. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
    >
      {icon}
    </a>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        to={to}
        className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1 group"
      >
        {children}
        <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </Link>
    </li>
  );
}