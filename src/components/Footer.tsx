import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github,
  Facebook 
} from 'lucide-react';
import logo from '../images/image.jpg';  // <-- your logo path

const Footer = () => {
  return (
    <footer className="bg-maroon-800 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logo} 
                alt="Logic Loop AI Logo" 
                className="h-10 w-auto object-contain" 
              />
              <span className="text-xl font-bold">Logic Loop AI</span>
            </div>
            <p className="text-cream-300 mb-6 leading-relaxed">
              Transforming businesses through AI automation, cutting-edge web design, 
              and enterprise-grade development solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-cream-300 hover:text-cream-100 transition-colors">AI Automation</Link></li>
              <li><Link to="/services" className="text-cream-300 hover:text-cream-100 transition-colors">Web Design</Link></li>
              <li><Link to="/services" className="text-cream-300 hover:text-cream-100 transition-colors">Custom Development</Link></li>
              <li><Link to="/services" className="text-cream-300 hover:text-cream-100 transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-cream-300 hover:text-cream-100 transition-colors">DevOps</Link></li>
              <li><Link to="/services" className="text-cream-300 hover:text-cream-100 transition-colors">Consulting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-cream-300 hover:text-cream-100 transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="text-cream-300 hover:text-cream-100 transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-cream-300 hover:text-cream-100 transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-cream-300 hover:text-cream-100 transition-colors">Careers</Link></li>
              <li><a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-cream-300 hover:text-cream-100 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-cream-200" />
                <span className="text-cream-300">logicloop.co@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-cream-200" />
                <span className="text-cream-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-cream-200" />
                <span className="text-cream-300">Indore,India</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-md font-medium mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-maroon-700 text-cream-100 placeholder-cream-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cream-200"
                />
                <button className="bg-cream-200 text-maroon-700 px-4 py-2 rounded-r-md hover:bg-cream-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-maroon-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-300 text-sm">
            © 2025 Logic Loop AI. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="text-cream-300 text-sm">Built with</span>
            <div className="flex items-center space-x-2">
              <span className="text-cream-200 font-semibold">React</span>
              <span className="text-cream-400">•</span>
              <span className="text-cream-200 font-semibold">TypeScript</span>
              <span className="text-cream-400">•</span>
              <span className="text-cream-200 font-semibold">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
