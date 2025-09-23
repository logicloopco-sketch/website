import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Palette, 
  Code2, 
  Cloud, 
  Shield, 
  Zap,
  ArrowRight,
  Quote,
  Star,
  Award,
  Users,
  TrendingUp
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import AnimatedCounter from '../components/AnimatedCounter';

const HomePage = () => {
  const services = [
    {
      icon: <Bot size={24} />,
      title: "AI Automation Solutions",
      description: "Streamline workflows and eliminate repetitive tasks with intelligent automation using Make.com, Zapier, and n8n.",
      features: [
        "Workflow automation design",
        "API integrations",
        "Process optimization",
        "Custom bot development",
        "Performance monitoring"
      ],
      technologies: ["Make.com", "Zapier", "n8n", "Python", "API Gateway"]
    },
    {
      icon: <Palette size={24} />,
      title: "Web Design & Development",
      description: "Create stunning, conversion-focused websites that captivate users and drive business growth.",
      features: [
        "Responsive web design",
        "E-commerce solutions",
        "UI/UX optimization",
        "Performance tuning",
        "SEO implementation"
      ],
      technologies: ["React", "Next.js", "Tailwind", "Shopify", "WordPress"]
    },
    {
      icon: <Code2 size={24} />,
      title: "Custom Software Development",
      description: "Build robust, scalable applications tailored to your specific business needs and requirements.",
      features: [
        "Full-stack development",
        "Mobile app development",
        "Database architecture",
        "API development",
        "Third-party integrations"
      ],
      technologies: ["TypeScript", "Node.js", "Python", "React Native", "PostgreSQL"]
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud & DevOps Services",
      description: "Scale your infrastructure with cloud-native solutions and automated deployment pipelines.",
      features: [
        "Cloud migration",
        "CI/CD pipelines",
        "Infrastructure as Code",
        "Container orchestration",
        "Monitoring & logging"
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"]
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Digital Transformation Consulting",
      description: "Strategic guidance to modernize your business processes and technology infrastructure.",
      features: [
        "Technology audits",
        "Digital strategy planning",
        "Change management",
        "Training programs",
        "Performance optimization"
      ],
      technologies: ["Agile", "Scrum", "ITIL", "Lean", "Six Sigma"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "Logic Loop AI transformed our entire workflow with their automation solutions. We've saved 40+ hours per week and improved accuracy by 95%.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      role: "Founder",
      content: "The web application they built for us is incredible. Modern design, blazing fast performance, and it perfectly captures our brand vision.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Emily Rodriguez",
      company: "Enterprise Solutions Ltd",
      role: "Operations Director",
      content: "Their cloud migration strategy reduced our infrastructure costs by 60% while improving performance and security significantly.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  const technologies = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" }
  ];

  return (
    <div className="pt-16">
      <HeroSection />
      
      {/* Services Section */}
      <section className="py-20 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-maroon-800 mb-4">
              Enterprise-Grade Solutions That Scale
            </h2>
            <p className="text-xl text-maroon-600 max-w-3xl mx-auto">
              From AI automation to cloud infrastructure, we deliver comprehensive 
              technology solutions that drive business growth and operational efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                technologies={service.technologies}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-maroon-600 text-cream-100 px-8 py-4 rounded-lg font-semibold hover:bg-maroon-700 transition-colors shadow-maroon hover:shadow-maroon-lg"
            >
              Explore All Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-maroon-800 mb-4">
              Powered by Industry-Leading Technologies
            </h2>
            <p className="text-lg text-maroon-600">
              We use the most advanced and reliable technologies to build your solutions
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-cream-200 rounded-lg hover:bg-maroon-100 transition-colors group"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-medium text-maroon-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-maroon-800 text-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-cream-300">
              Trusted by industry leaders and growing businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-maroon-700 p-8 rounded-xl hover:bg-maroon-600 transition-colors shadow-maroon"
              >
                <Quote className="text-cream-200 mb-4" size={32} />
                <p className="text-cream-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-cream-200 fill-current" size={16} />
                  ))}
                </div>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-cream-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-maroon-cream-gradient text-cream-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Award className="w-16 h-16 mx-auto mb-6 text-cream-200" />
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-cream-200">
            Join hundreds of companies that trust Logic Loop AI to deliver 
            exceptional technology solutions that drive real results.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-cream-100 text-maroon-600 px-8 py-4 rounded-lg font-semibold hover:bg-cream-200 transition-colors flex items-center shadow-maroon hover:shadow-maroon-lg"
            >
              Get Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/portfolio"
              className="border border-cream-200 text-cream-100 px-8 py-4 rounded-lg font-semibold hover:bg-cream-100 hover:text-maroon-600 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;