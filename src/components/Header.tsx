import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, Zap } from 'lucide-react';
import logo from '../images/image.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-maroon-800/95 backdrop-blur-md ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
  <img 
    src={logo} 
    alt="Logic Loop AI Logo" 
    className="h-10 w-auto object-contain" 
  />
  <span className="text-xl font-bold text-cream-100 group-hover:text-cream-50 transition-colors">
    Logic Loop AI
  </span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-cream-100 ${
                  location.pathname === item.path
                    ? 'text-cream-100 border-b-2 border-cream-200'
                    : 'text-cream-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-cream-200 text-maroon-800 px-6 py-2 rounded-lg font-medium hover:bg-cream-100 hover:text-maroon-900 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-cream-300 hover:text-cream-100 hover:bg-maroon-700 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-maroon-800 shadow-lg border-t border-maroon-700">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-cream-100 hover:bg-maroon-700 rounded-md ${
                    location.pathname === item.path
                      ? 'text-cream-100 bg-maroon-700'
                      : 'text-cream-300'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full mt-4 bg-cream-200 text-maroon-800 px-6 py-3 rounded-lg font-medium hover:bg-cream-100 hover:text-maroon-900 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
