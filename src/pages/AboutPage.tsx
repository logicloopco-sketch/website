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

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "15+ years in enterprise software development and AI automation. Former tech lead at Google.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      skills: ["AI Strategy", "Business Development", "Team Leadership"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Expert in cloud architecture and DevOps with experience scaling systems to millions of users.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      skills: ["Cloud Architecture", "DevOps", "System Design"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Michael Rodriguez",
      role: "Lead AI Engineer",
      bio: "PhD in Machine Learning with 10+ years building AI solutions for Fortune 500 companies.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
      skills: ["Machine Learning", "AI Automation", "Python"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Emily Davis",
      role: "Head of Design",
      bio: "Award-winning UX/UI designer with a passion for creating intuitive, beautiful user experiences.",
      image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=300",
      skills: ["UI/UX Design", "Design Systems", "User Research"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "Full-stack expert specializing in React, Node.js, and modern web technologies.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300",
      skills: ["Full-Stack Development", "React", "Node.js"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Lisa Wang",
      role: "Cybersecurity Specialist",
      bio: "Certified security expert focused on protecting enterprise systems and ensuring compliance.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      skills: ["Cybersecurity", "Compliance", "Risk Assessment"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
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

      {/* Team Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-maroon-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-maroon-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, 
              design, and business strategy to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-cream-200 rounded-xl overflow-hidden hover:shadow-maroon transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-maroon-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-maroon-600 font-medium mb-3">{member.role}</p>
                  <p className="text-maroon-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-maroon-100 text-maroon-800 text-xs rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="text-maroon-400 hover:text-maroon-600 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-maroon-400 hover:text-maroon-600 transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href={member.social.github}
                      className="text-maroon-400 hover:text-maroon-600 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
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