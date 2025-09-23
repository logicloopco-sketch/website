import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const phrases = ['AI Automation', 'Web Design', 'Cloud Solutions', 'Digital Transformation'];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && typedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setTypedText(prev => 
          isDeleting 
            ? prev.slice(0, -1)
            : currentPhrase.slice(0, prev.length + 1)
        );
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentPhraseIndex, phrases]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-maroon-gradient">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-maroon-800/95"></div>
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-cream-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-cream-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cream-100 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-cream-pattern opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cream-100/10 backdrop-blur-sm border border-cream-200/20 text-cream-100 text-sm font-medium mb-8">
            <CheckCircle size={16} className="mr-2 text-cream-200" />
            Trusted by 500+ Enterprise Clients
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-cream-100 mb-6 leading-tight text-shadow-maroon">
            Transform Your Business with{' '}
            <span className="text-transparent bg-clip-text bg-cream-gradient">
              {typedText}
              <span className="animate-blink">|</span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-cream-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            From intelligent automation to stunning web experiences, we deliver 
            enterprise-grade solutions that scale with your ambitions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="group bg-cream-100 hover:bg-cream-200 text-maroon-600 hover:text-maroon-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-maroon hover:shadow-maroon-lg flex items-center">
              Start Your Transformation
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="group bg-cream-100/10 backdrop-blur-sm border border-cream-200/20 text-cream-100 px-8 py-4 rounded-lg font-semibold hover:bg-cream-100/20 transition-all duration-300 flex items-center">
              <Play className="mr-2" size={20} />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-cream-100/10 backdrop-blur-sm rounded-lg p-6 border border-cream-200/20 shadow-maroon">
              <div className="text-3xl font-bold text-cream-100 mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <p className="text-cream-200 text-sm">Projects Delivered</p>
            </div>
            <div className="bg-cream-100/10 backdrop-blur-sm rounded-lg p-6 border border-cream-200/20 shadow-maroon">
              <div className="text-3xl font-bold text-cream-100 mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <p className="text-cream-200 text-sm">Client Satisfaction</p>
            </div>
            <div className="bg-cream-100/10 backdrop-blur-sm rounded-lg p-6 border border-cream-200/20 shadow-maroon">
              <div className="text-3xl font-bold text-cream-100 mb-2">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <p className="text-cream-200 text-sm">Team Experts</p>
            </div>
            <div className="bg-cream-100/10 backdrop-blur-sm rounded-lg p-6 border border-cream-200/20 shadow-maroon">
              <div className="text-3xl font-bold text-cream-100 mb-2">
                <AnimatedCounter end={24} suffix="/7" />
              </div>
              <p className="text-cream-200 text-sm">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cream-200/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream-200/60 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;