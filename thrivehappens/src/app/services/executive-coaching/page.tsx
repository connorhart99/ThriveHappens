import Link from 'next/link';

export default function ExecutiveCoachingPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-purple-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Executive Coaching</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Personalized coaching to help leaders develop resilience strategies and overcome challenges in their professional and personal lives.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">Executive Coaching</h1>
            <div className="w-16 h-1 bg-purple-700 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Personalized coaching to help leaders develop resilience strategies and overcome challenges in their professional and personal lives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Elevate Your Leadership</h2>
              <p className="text-lg text-gray-700 mb-6">
                In today's complex and rapidly changing environment, leaders face unprecedented challenges. Scott Hanley's executive coaching provides personalized support to help you navigate these challenges while building the resilience needed to thrive under pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800 transition-colors text-center"
                >
                  Book a Consultation
                </Link>
                <Link 
                  href="/services" 
                  className="px-6 py-3 bg-gray-200 text-gray-900 font-semibold rounded-md hover:bg-gray-300 transition-colors text-center"
                >
                  View All Services
                </Link>
              </div>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 bg-purple-100 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center text-purple-700">
                [Executive Coaching Image]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefits of Executive Coaching</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              How Scott's coaching approach can transform your leadership capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xl mx-auto mb-6">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                    {benefit.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Coaching Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A structured approach designed to deliver tangible results
            </p>
          </div>

          <div className="space-y-12">
            {process.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="relative h-64 w-full">
                    <div className="absolute inset-0 bg-purple-100 rounded-lg"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-purple-700">
                      [{step.title} Illustration]
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-700 text-white flex items-center justify-center text-xl font-bold mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mr-3">
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hear from leaders who have transformed their approach through Scott's coaching
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-purple-700 text-4xl mb-4">❝</div>
                <blockquote className="text-lg text-gray-700 mb-6">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Leadership?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact Scott today to schedule a free initial consultation and discuss how executive coaching can help you achieve your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-purple-700 font-semibold rounded-md hover:bg-gray-100 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Common questions about Scott's executive coaching services
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Benefits data
const benefits = [
  {
    title: "Enhanced Resilience",
    description: "Develop the mental toughness and adaptability needed to navigate challenges and recover from setbacks quickly.",
    icon: <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
  },
  {
    title: "Improved Decision-Making",
    description: "Gain clarity in complex situations and develop a framework for making confident decisions under pressure.",
    icon: <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  },
  {
    title: "Authentic Leadership",
    description: "Develop your unique leadership style that aligns with your values and strengths for greater impact and influence.",
    icon: <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
  }
];

// Process data
const process = [
  {
    title: "Assessment & Discovery",
    description: "We begin with a comprehensive assessment of your current leadership approach, challenges, and aspirations.",
    features: [
      "360-degree feedback from key stakeholders",
      "Leadership style assessment",
      "Resilience quotient evaluation",
      "Goal setting and priority identification"
    ]
  },
  {
    title: "Strategy Development",
    description: "Based on the assessment, we create a personalized coaching plan focused on building resilience and enhancing your leadership capabilities.",
    features: [
      "Customized resilience-building framework",
      "Leadership development roadmap",
      "Specific, measurable objectives",
      "Timeline and milestone establishment"
    ]
  },
  {
    title: "Implementation & Practice",
    description: "Through regular coaching sessions, we implement the strategies, practice new approaches, and refine your leadership toolkit.",
    features: [
      "Biweekly one-on-one coaching sessions",
      "Real-world application of new skills",
      "Feedback and adjustment cycles",
      "Practical tools and techniques"
    ]
  },
  {
    title: "Evaluation & Growth",
    description: "We continuously evaluate progress, celebrate successes, and identify opportunities for further growth and development.",
    features: [
      "Progress tracking against established goals",
      "Stakeholder feedback integration",
      "Success celebration and reinforcement",
      "Long-term sustainability planning"
    ]
  }
];

// Testimonials data
const testimonials = [
  {
    quote: "Working with Scott transformed not just my leadership approach but my entire perspective on challenges. I've developed a resilience that allows me to navigate complex situations with confidence and clarity.",
    name: "Sarah Johnson",
    title: "CEO, Tech Innovations Inc."
  },
  {
    quote: "The executive coaching program with Scott helped me identify patterns that were limiting my effectiveness as a leader. The practical strategies I learned have been invaluable in building a more resilient and high-performing team.",
    name: "Michael Chen",
    title: "Senior VP, Global Finance Group"
  }
];

// FAQs data
const faqs = [
  {
    question: "How long does the executive coaching program typically last?",
    answer: "While each program is customized to meet individual needs, most clients engage in a 6-12 month coaching relationship. This timeframe allows for meaningful assessment, implementation of new strategies, and evaluation of results."
  },
  {
    question: "How are coaching sessions conducted?",
    answer: "Coaching sessions can be conducted in-person or virtually, depending on your location and preference. Each session typically lasts 60-90 minutes and is scheduled at intervals that work best for your schedule, usually bi-weekly or monthly."
  },
  {
    question: "What makes Scott's approach to executive coaching unique?",
    answer: "Scott's approach uniquely combines evidence-based resilience building techniques with practical leadership development strategies. His background in both organizational psychology and real-world leadership positions allows him to bridge theory and practice effectively."
  },
  {
    question: "How do we measure the success of the coaching program?",
    answer: "Success is measured against the specific goals established at the beginning of the program. This may include quantitative metrics (team performance, business results) and qualitative assessments (360-degree feedback, self-assessment of leadership confidence and resilience)."
  },
  {
    question: "Is executive coaching confidential?",
    answer: "Absolutely. Confidentiality is a cornerstone of Scott's coaching practice. All discussions, assessments, and personal information shared during coaching sessions remain strictly confidential."
  }
]; 