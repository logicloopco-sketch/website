import React from 'react';
import { 
  Bot, 
  Palette, 
  Code2, 
  Cloud, 
  Shield, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Award
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Bot size={32} />,
      title: "AI Automation Solutions",
      description: "Transform your business processes with intelligent automation that works 24/7.",
      fullDescription: "Our AI automation solutions eliminate manual tasks, reduce errors, and free up your team to focus on strategic initiatives. We specialize in creating custom workflows that integrate seamlessly with your existing systems.",
      features: [
        "Workflow automation design and implementation",
        "API integrations and data synchronization",
        "Process optimization and efficiency analysis",
        "Custom chatbot and AI assistant development",
        "Real-time monitoring and performance analytics",
        "Automated reporting and notifications",
        "Legacy system integration",
        "Scalable automation architecture"
      ],
      technologies: ["Make.com", "Zapier", "n8n", "Python", "OpenAI API", "Microsoft Power Automate"],
      benefits: [
        "80% reduction in manual work",
        "99% accuracy in automated processes",
        "24/7 operation capability",
        "Rapid ROI within 3-6 months"
      ],
      pricing: "Starting at $2,500/month",
      timeline: "2-4 weeks implementation"
    },
    {
      icon: <Palette size={32} />,
      title: "Web Design & Development",
      description: "Create stunning, high-converting websites that captivate your audience.",
      fullDescription: "We design and develop modern, responsive websites that not only look amazing but also drive conversions and business growth. Every website is optimized for performance, SEO, and user experience.",
      features: [
        "Custom responsive web design",
        "E-commerce platform development",
        "UI/UX design and optimization",
        "Performance optimization and caching",
        "SEO implementation and analytics",
        "Content management systems",
        "Progressive web app development",
        "Cross-browser compatibility"
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "Shopify", "WordPress", "Headless CMS"],
      benefits: [
        "Mobile-first responsive design",
        "Lightning-fast load times",
        "SEO-optimized for better rankings",
        "Conversion-focused layouts"
      ],
      pricing: "Starting at $5,000",
      timeline: "4-8 weeks delivery"
    },
    {
      icon: <Code2 size={32} />,
      title: "Custom Software Development",
      description: "Build powerful, scalable applications tailored to your unique business needs.",
      fullDescription: "From enterprise web applications to mobile apps, we develop custom software solutions that solve complex business challenges and scale with your growth.",
      features: [
        "Full-stack web application development",
        "Mobile app development (iOS & Android)",
        "Database design and optimization",
        "RESTful API development and integration",
        "Microservices architecture",
        "Third-party service integrations",
        "Real-time applications with WebSockets",
        "Legacy system modernization"
      ],
      technologies: ["TypeScript", "Node.js", "Python", "React Native", "PostgreSQL", "MongoDB"],
      benefits: [
        "Scalable architecture design",
        "99.9% uptime guarantee",
        "Enterprise-grade security",
        "Agile development methodology"
      ],
      pricing: "Starting at $15,000",
      timeline: "8-16 weeks development"
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud & DevOps Services",
      description: "Scale your infrastructure with modern cloud solutions and automation.",
      fullDescription: "Migrate to the cloud, automate your deployment processes, and scale your infrastructure efficiently with our comprehensive DevOps and cloud engineering services.",
      features: [
        "Cloud migration and architecture design",
        "CI/CD pipeline implementation",
        "Infrastructure as Code (IaC)",
        "Container orchestration with Kubernetes",
        "Automated monitoring and logging",
        "Security and compliance implementation",
        "Cost optimization strategies",
        "Disaster recovery planning"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
      benefits: [
        "60% reduction in infrastructure costs",
        "10x faster deployment cycles",
        "Automatic scaling and monitoring",
        "99.99% availability"
      ],
      pricing: "Starting at $3,000/month",
      timeline: "2-6 weeks migration"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Digital Transformation Consulting",
      description: "Strategic guidance to modernize your business and technology landscape.",
      fullDescription: "Navigate your digital transformation journey with expert guidance on technology strategy, process optimization, and organizational change management.",
      features: [
        "Digital strategy development",
        "Technology assessment and roadmapping",
        "Business process optimization",
        "Change management and training",
        "Vendor selection and evaluation",
        "Performance measurement and KPIs",
        "Innovation workshops and ideation",
        "Technology adoption planning"
      ],
      technologies: ["Agile", "Scrum", "ITIL", "Lean Six Sigma", "Design Thinking"],
      benefits: [
        "Clear digital transformation roadmap",
        "Improved operational efficiency",
        "Enhanced competitive advantage",
        "Measurable business outcomes"
      ],
      pricing: "Starting at $5,000",
      timeline: "2-8 weeks engagement"
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 text-cream-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Enterprise-Grade Technology Services
          </h1>
          <p className="text-xl md:text-2xl text-cream-200 max-w-4xl mx-auto leading-relaxed">
            From AI automation to cloud infrastructure, we deliver comprehensive solutions 
            that transform businesses and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-maroon-100 rounded-xl flex items-center justify-center text-maroon-600 mr-6">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-maroon-800">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-maroon-600 mb-6 leading-relaxed">
                    {service.fullDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-lg font-semibold text-maroon-800 mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="text-maroon-500 mt-1 mr-2 flex-shrink-0" size={16} />
                            <span className="text-maroon-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-maroon-800 mb-3">Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <Award className="text-maroon-500 mt-1 mr-2 flex-shrink-0" size={16} />
                            <span className="text-maroon-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-maroon-100 text-maroon-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-maroon-600 mb-6">
                    <div className="flex items-center">
                      <Users className="text-maroon-500 mr-2" size={16} />
                      {service.pricing}
                    </div>
                    <div className="flex items-center">
                      <Clock className="text-maroon-500 mr-2" size={16} />
                      {service.timeline}
                    </div>
                  </div>
                  
                  <button className="bg-maroon-600 text-cream-100 px-8 py-3 rounded-lg font-semibold hover:bg-maroon-700 transition-colors flex items-center shadow-maroon hover:shadow-maroon-lg">
                    Get Started
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
                
                {/* Visual */}
                <div className="flex-1">
                  <div className="bg-cream-100 p-8 rounded-2xl shadow-maroon">
                    <div className="bg-gradient-to-br from-cream-200 to-maroon-100 p-8 rounded-xl">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-maroon-100 rounded-full flex items-center justify-center text-maroon-600 mx-auto mb-6">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-maroon-800 mb-4">
                          Enterprise Solution
                        </h3>
                        <div className="space-y-3">
                          {service.features.slice(4, 8).map((feature, idx) => (
                            <div key={idx} className="flex items-center justify-center">
                              <CheckCircle className="text-maroon-500 mr-2" size={14} />
                              <span className="text-sm text-maroon-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-cream-200">
            Let's discuss how our services can transform your business. 
            Get a free consultation and custom proposal.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-cream-100 text-maroon-600 px-8 py-4 rounded-lg font-semibold hover:bg-cream-200 transition-colors shadow-maroon">
              Schedule Free Consultation
            </button>
            <button className="border border-cream-200 text-cream-100 px-8 py-4 rounded-lg font-semibold hover:bg-cream-100 hover:text-maroon-600 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;