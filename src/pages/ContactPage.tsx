import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Clock,
  CheckCircle,
  ArrowRight,
  User,
  Building,
  DollarSign,
  Calendar
} from 'lucide-react';

const ContactPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    name: '',
    email: '',
    company: '',
    phone: '',
    
    // Step 2: Project Details
    service: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    
    // Step 3: Additional Info
    goals: '',
    challenges: '',
    hasTeam: '',
    additionalInfo: ''
  });

  const totalSteps = 3;

  const services = [
    'AI Automation Solutions',
    'Web Design & Development',
    'Custom Software Development',
    'Cloud & DevOps Services',
    'Cybersecurity Solutions',
    'Digital Transformation Consulting',
    'Multiple Services',
    'Not Sure / Need Consultation'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000+',
    'Need consultation to determine'
  ];

  const timelines = [
    'ASAP (Rush project)',
    '1-2 months',
    '3-6 months',
    '6-12 months',
    '12+ months',
    'Flexible timeline'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Log form data for debugging
    console.log('Form data being sent:', formData);
    
    try {
      const payload = {
        // Basic Information
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        
        // Project Details
        service: formData.service,
        projectDescription: formData.projectDescription,
        timeline: formData.timeline,
        budget: formData.budget,
        
        // Additional Information
        goals: formData.goals,
        challenges: formData.challenges,
        hasTeam: formData.hasTeam,
        additionalInfo: formData.additionalInfo,
        
        // Metadata
        submissionDate: new Date().toISOString(),
        formSource: 'Contact Page - Multi-Step Form',
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'Direct'
      };

      console.log('Payload being sent:', payload);
      
      // Send form data to Make.com webhook
      const response = await fetch('https://hook.eu2.make.com/u29nnwprpsk7c3zujr4aih8pbj32ntuj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      const responseText = await response.text();
      console.log('Response body:', responseText);

      if (response.ok) {
        // Show success message
        alert('Thank you for your submission! We will get back to you within 24 hours.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          projectDescription: '',
          timeline: '',
          budget: '',
          goals: '',
          challenges: '',
          hasTeam: '',
          additionalInfo: ''
        });
        
        // Reset to first step
        setCurrentStep(1);
        
      } else {
        throw new Error(`Server responded with status: ${response.status} - ${responseText}`);
      }
      
    } catch (error: unknown) {
      console.error('Full error details:', error);
      
      let errorMessage = 'There was an error submitting your form. ';
      
      if (error instanceof Error) {
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
          errorMessage += 'Network connection failed. Please check your internet connection and try again.';
        } else if (error.message.includes('CORS')) {
          errorMessage += 'CORS error detected. The webhook may need CORS configuration.';
        } else {
          errorMessage += `Error: ${error.message}`;
        }
      } else {
        console.error('Unknown error type:', typeof error);
        errorMessage += 'An unexpected error occurred.';
      }
      
      errorMessage += ' Please contact us directly at logicloop.co@gmail.com if the problem persists.';
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.company;
      case 2:
        return formData.service && formData.projectDescription && formData.timeline && formData.budget;
      case 3:
        return formData.goals;
      default:
        return false;
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: "logicloop.co@gmail.com",
      description: "Get in touch for project inquiries"
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 9am-6pm PST"
    },
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details: "Indore,India",
      description: "Schedule an in-person meeting"
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Live Chat",
      details: "Available 24/7",
      description: "Instant support and answers"
    }
  ];

  const faqData = [
    {
      question: "How quickly can you start my project?",
      answer: "We typically begin new projects within 1-2 weeks of contract signing, depending on project complexity and our current capacity."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive support packages including maintenance, updates, monitoring, and technical assistance for all our solutions."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We excel at collaborating with internal teams and can integrate seamlessly with your existing development processes."
    },
    {
      question: "What's included in the free consultation?",
      answer: "Our free consultation includes project assessment, technology recommendations, timeline estimation, and a detailed proposal with transparent pricing."
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      {/* Header Section */}
      <section className="bg-maroon-800/95 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? 
            Start your project with a free consultation and custom proposal.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step <= currentStep 
                      ? 'bg-red-800 text-white' 
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {step < currentStep ? <CheckCircle size={20} /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step < currentStep ? 'bg-red-800' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-gray-600">
                Step {currentStep} of {totalSteps}: {
                  currentStep === 1 ? 'Basic Information' :
                  currentStep === 2 ? 'Project Details' :
                  'Additional Information'
                }
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-red-100">
            <div>
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <User className="w-12 h-12 text-red-800 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900">Tell us about yourself</h2>
                    <p className="text-gray-600">Basic information to get started</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        placeholder="Your Company Inc."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <Building className="w-12 h-12 text-red-800 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900">Project Details</h2>
                    <p className="text-gray-600">Help us understand your project requirements</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => handleInputChange('service', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      required
                    >
                      <option value="">Select a service...</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      value={formData.projectDescription}
                      onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      placeholder="Describe your project, goals, and any specific requirements..."
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline *
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        required
                      >
                        <option value="">Select timeline...</option>
                        {timelines.map((timeline, index) => (
                          <option key={index} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range *
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        required
                      >
                        <option value="">Select budget range...</option>
                        {budgetRanges.map((budget, index) => (
                          <option key={index} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Additional Information */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <CheckCircle className="w-12 h-12 text-red-800 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900">Final Details</h2>
                    <p className="text-gray-600">Help us prepare the best solution for you</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What are your main goals? *
                    </label>
                    <textarea
                      value={formData.goals}
                      onChange={(e) => handleInputChange('goals', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      placeholder="What do you hope to achieve with this project?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Challenges
                    </label>
                    <textarea
                      value={formData.challenges}
                      onChange={(e) => handleInputChange('challenges', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      placeholder="What challenges are you currently facing?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Do you have an existing technical team?
                    </label>
                    <select
                      value={formData.hasTeam}
                      onChange={(e) => handleInputChange('hasTeam', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                    >
                      <option value="">Select an option...</option>
                      <option value="yes">Yes, we have a technical team</option>
                      <option value="partial">We have some technical resources</option>
                      <option value="no">No, we need full support</option>
                      <option value="unsure">Not sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-800 focus:border-transparent"
                      placeholder="Any other details you'd like to share?"
                    />
                  </div>
                </div>
              )}

              {/* Form Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    currentStep === 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Previous
                </button>

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    disabled={!isStepValid()}
                    className={`px-8 py-3 rounded-lg font-medium transition-colors flex items-center ${
                      isStepValid()
                        ? 'bg-red-800 text-white hover:bg-red-900'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Next Step
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!isStepValid() || isSubmitting}
                    className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                      isStepValid() && !isSubmitting
                        ? 'bg-red-800 text-white hover:bg-red-900'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Other Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-yellow-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow border border-red-100"
              >
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-800 mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-900 font-medium mb-1">
                  {info.details}
                </p>
                <p className="text-sm text-gray-600">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;