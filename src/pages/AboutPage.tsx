import React from 'react';
import { 
  Users, 
  Award, 
  Globe, 
  Heart, 
  Lightbulb, 
  Target,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Github,
  Twitter
} from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Lightbulb size={24} />,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex business challenges."
    },
    {
      icon: <Heart size={24} />,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering solutions that drive real business value."
    },
    {
      icon: <Target size={24} />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to client communication."
    },
    {
      icon: <Globe size={24} />,
      title: "Global Impact",
      description: "We work with clients worldwide to create technology solutions that make a positive difference."
    }
  ];

  
  const achievements = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Team Members" },
    { number: "50+", label: "Countries Served" },
    { number: "98%", label: "Client Retention Rate" }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Microsoft Azure Expert",
    "Google Cloud Professional",
    "Certified Scrum Master",
    "ISO 27001 Certified",
    "SOC 2 Type II Compliant"
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 text-cream-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Logic Loop AI
          </h1>
          <p className="text-xl md:text-2xl text-cream-200 max-w-4xl mx-auto leading-relaxed">
            We're a team of passionate technologists dedicated to transforming businesses 
            through innovative AI automation, cutting-edge web solutions, and enterprise-grade development.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-maroon-800 mb-8">Our Mission</h2>
            <p className="text-xl text-maroon-600 leading-relaxed mb-12">
              To empower businesses worldwide with intelligent automation and cutting-edge technology 
              solutions that drive growth, efficiency, and innovation. We believe that every organization, 
              regardless of size, deserves access to enterprise-grade technology that transforms their operations 
              and unlocks their full potential.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-maroon-600 mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-maroon-700">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-maroon-800 mb-4">Our Values</h2>
            <p className="text-xl text-maroon-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-cream-100 p-8 rounded-xl shadow-maroon hover:shadow-maroon-lg transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-maroon-100 rounded-full flex items-center justify-center text-maroon-600 mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-maroon-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-maroon-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

   
      {/* Certifications Section */}
      <section className="py-20 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-maroon-800 mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-maroon-600 max-w-3xl mx-auto">
              We maintain the highest industry standards and certifications to ensure 
              the quality and security of our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-cream-100 p-6 rounded-lg shadow-maroon flex items-center"
              >
                <Award className="text-maroon-600 mr-3 flex-shrink-0" size={24} />
                <span className="text-maroon-800 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-maroon-800 text-cream-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 text-cream-200">
            Let's discuss how our team can help transform your business with 
            innovative technology solutions tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-cream-100 text-maroon-600 px-8 py-4 rounded-lg font-semibold hover:bg-cream-200 transition-colors flex items-center shadow-maroon">
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border border-cream-200 text-cream-100 px-8 py-4 rounded-lg font-semibold hover:bg-cream-100 hover:text-maroon-600 transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
