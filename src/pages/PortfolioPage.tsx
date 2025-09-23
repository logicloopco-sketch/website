import React, { useState } from 'react';
import { 
  Filter, 
  ExternalLink, 
  Github, 
  Calendar, 
  Users, 
  TrendingUp,
  Code,
  Globe,
  Smartphone,
  Database
} from 'lucide-react';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'automation', name: 'AI Automation' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'cloud', name: 'Cloud Solutions' }
  ];

  const projects = [
    {
      id: 1,
      title: "Global E-commerce Automation Platform",
      category: "automation",
      description: "Comprehensive automation solution that processes 10,000+ orders daily across multiple channels.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Make.com", "Shopify API", "Python", "AWS Lambda"],
      client: "RetailCorp Global",
      duration: "3 months",
      team: "5 specialists",
      results: [
        "95% reduction in manual processing",
        "40% increase in order accuracy",
        "$500K annual cost savings"
      ],
      liveUrl: "#",
      githubUrl: "#",
      type: "Enterprise Automation"
    },
    {
      id: 2,
      title: "FinTech Mobile Banking App",
      category: "mobile",
      description: "Secure, user-friendly mobile banking application with AI-powered financial insights.",
      image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS"],
      client: "SecureBank Solutions",
      duration: "6 months",
      team: "8 developers",
      results: [
        "1M+ downloads in first year",
        "4.8/5 app store rating",
        "30% increase in mobile transactions"
      ],
      liveUrl: "#",
      githubUrl: "#",
      type: "Mobile Application"
    },
    {
      id: 3,
      title: "Healthcare Management System",
      category: "web",
      description: "Comprehensive healthcare management platform with patient records and appointment scheduling.",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "PostgreSQL", "HIPAA Compliant"],
      client: "MedTech Innovations",
      duration: "4 months",
      team: "6 developers",
      results: [
        "500+ healthcare providers using",
        "99.9% uptime maintained",
        "HIPAA compliance achieved"
      ],
      liveUrl: "#",
      githubUrl: "#",
      type: "Web Application"
    },
    {
      id: 4,
      title: "Cloud Infrastructure Migration",
      category: "cloud",
      description: "Complete cloud migration for enterprise client from on-premise to AWS with 99.9% uptime.",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      client: "Enterprise Corp",
      duration: "2 months",
      team: "4 cloud engineers",
      results: [
        "60% reduction in infrastructure costs",
        "300% improvement in scalability",
        "Zero downtime migration"
      ],
      liveUrl: "#",
      githubUrl: "#",
      type: "Cloud Migration"
    },
    {
      id: 5,
      title: "AI-Powered Content Management",
      category: "automation",
      description: "Intelligent content management system with automated categorization and SEO optimization.",
      image: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "OpenAI API", "Django", "Redis"],
      client: "ContentMax Media",
      duration: "3 months",
      team: "4 AI specialists",
      results: [
        "80% faster content processing",
        "50% improvement in SEO rankings",
        "90% accuracy in auto-categorization"
      ],
      liveUrl: "#",
      githubUrl: "#",
      type: "AI Solution"
    },
    {
      id: 6,
      title: "Real Estate Platform",
      category: "web",
      description: "Modern real estate platform with virtual tours, advanced search, and CRM integration.",
      image: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      client: "PropertyPro Realty",
      duration: "5 months",
      team: "7 developers",
      results: [
        "300% increase in lead generation",
        "45% reduction in time to sale",
        "25,000+ active listings"
      ],
      liveUrl: "#",
      githubUrl: "#",
      type: "Web Platform"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'automation':
        return <Code className="text-maroon-500" size={20} />;
      case 'web':
        return <Globe className="text-maroon-600" size={20} />;
      case 'mobile':
        return <Smartphone className="text-maroon-700" size={20} />;
      case 'cloud':
        return <Database className="text-maroon-400" size={20} />;
      default:
        return <Code className="text-maroon-500" size={20} />;
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 text-cream-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-cream-200 max-w-4xl mx-auto leading-relaxed">
            Explore our successful projects and see how we've helped businesses 
            transform their operations with cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-maroon-600 mb-2">500+</div>
              <p className="text-maroon-700">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-maroon-600 mb-2">98%</div>
              <p className="text-maroon-700">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-maroon-600 mb-2">50+</div>
              <p className="text-maroon-700">Industries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-maroon-600 mb-2">24/7</div>
              <p className="text-maroon-700">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-4 bg-cream-100 rounded-lg p-2 shadow-maroon">
              <Filter className="text-maroon-400" size={20} />
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    activeFilter === filter.id
                      ? 'bg-maroon-600 text-cream-100'
                      : 'text-maroon-600 hover:text-maroon-700 hover:bg-cream-200'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-cream-100 rounded-2xl shadow-maroon overflow-hidden hover:shadow-maroon-lg transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-cream-100/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-maroon-700">
                      {project.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    {getCategoryIcon(project.category)}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-maroon-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-maroon-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="text-maroon-500 mr-1" size={14} />
                      <span className="text-maroon-600">{project.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="text-maroon-500 mr-1" size={14} />
                      <span className="text-maroon-600">{project.team}</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="text-maroon-500 mr-1" size={14} />
                      <span className="text-maroon-600">{project.client}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-maroon-800 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-maroon-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-maroon-500 rounded-full mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-cream-200 text-maroon-700 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        className="flex items-center text-maroon-600 hover:text-maroon-700 font-medium text-sm"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        View Live
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center text-maroon-600 hover:text-maroon-700 font-medium text-sm"
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                    </div>
                    <button className="bg-maroon-600 text-cream-100 px-4 py-2 rounded-lg text-sm font-medium hover:bg-maroon-700 transition-colors">
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-maroon-800 text-cream-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-cream-200">
            Join our portfolio of successful clients and transform your business 
            with our expert technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-cream-100 text-maroon-600 px-8 py-4 rounded-lg font-semibold hover:bg-cream-200 transition-colors">
              Start Your Project
            </button>
            <button className="border border-cream-200 text-cream-100 px-8 py-4 rounded-lg font-semibold hover:bg-cream-100 hover:text-maroon-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;