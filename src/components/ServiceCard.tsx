import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  technologies,
  className = ''
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`group bg-cream-100 rounded-xl shadow-maroon hover:shadow-maroon-lg transition-all duration-300 transform hover:-translate-y-2 ${className}`}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-maroon-100 rounded-lg flex items-center justify-center text-maroon-600 group-hover:bg-maroon-600 group-hover:text-cream-100 transition-colors">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-maroon-800 ml-4">{title}</h3>
        </div>
        
        <p className="text-maroon-600 mb-4 leading-relaxed">{description}</p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-maroon-600 hover:text-maroon-700 font-medium transition-colors"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
          {isExpanded ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
        </button>
        
        <div className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-maroon-800 mb-2">Key Features:</h4>
              <ul className="space-y-1">
                {features.map((feature, index) => (
                  <li key={index} className="text-sm text-maroon-600 flex items-center">
                    <div className="w-1.5 h-1.5 bg-maroon-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-maroon-800 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-maroon-100 text-maroon-700 text-xs rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;