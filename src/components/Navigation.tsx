import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <GraduationCap className="w-8 h-8 text-blue-600 transition-transform duration-200 group-hover:scale-110" />
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                AlumniConnect
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/projects" active={location.pathname.startsWith('/projects')}>
              Projects
            </NavLink>
            <NavLink to="/gigs" active={location.pathname.startsWith('/gigs')}>
              Services
            </NavLink>
            <NavLink to="/jobs" active={location.pathname === '/jobs'}>
              Jobs
            </NavLink>
            <NavLink to="/mentorship" active={location.pathname === '/mentorship'}>
              Mentorship
            </NavLink>
            <NavLink to="/events" active={location.pathname === '/events'}>
              Events
            </NavLink>
            {user ? (
              <>
                <NavLink to="/profile" active={location.pathname === '/profile'}>
                  Profile
                </NavLink>
                <button
                  onClick={logout}
                  className="btn-secondary"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="nav-link"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn-primary"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
       <div className="md:hidden absolute top-16 left-0 right-0 glass-nav shadow-lg">
         <div className="px-4 py-2 space-y-1">
           <MobileNavLink to="/projects" onClick={toggleMenu}>
             Projects
           </MobileNavLink>
           <MobileNavLink to="/gigs" onClick={toggleMenu}>
             Services
           </MobileNavLink>
           <MobileNavLink to="/jobs" onClick={toggleMenu}>
             Jobs
           </MobileNavLink>
           <MobileNavLink to="/mentorship" onClick={toggleMenu}>
             Mentorship
           </MobileNavLink>
           <MobileNavLink to="/events" onClick={toggleMenu}>
             Events
           </MobileNavLink>
            {user ? (
              <>
                <MobileNavLink to="/profile" onClick={toggleMenu}>
                  Profile
                </MobileNavLink>
                <button
                  onClick={() => {
                    logout();
                    toggleMenu();
                  }}
                  className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="grid gap-2 p-4">
                <Link
                  to="/login"
                  onClick={toggleMenu}
                  className="btn-secondary w-full text-center"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={toggleMenu}
                  className="btn-primary w-full text-center"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, active, children }: { to: string; active?: boolean; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className={`nav-link ${active ? 'active' : ''}`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to || location.pathname.startsWith(`${to}/`);

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
        isActive 
          ? 'text-blue-600 bg-blue-50' 
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      {children}
    </Link>
  );
}