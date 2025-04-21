import Link from 'next/link';
import Image from 'next/image';

export default function MediaPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-purple-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Media & Public Speaking</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Professional media presence and public speaking expertise for organizational leaders
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Enhance Your Media Presence and Public Speaking Skills</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our media and public speaking services help organizational leaders develop the skills and confidence needed to effectively communicate their message in various media formats and public settings.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              From media interview preparation to keynote speech development, we provide comprehensive support to ensure your message is delivered with clarity, impact, and authenticity.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <div className="relative h-96">
              <div className="absolute inset-0 bg-purple-100 rounded-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center text-purple-700">
                [Media & Public Speaking Image]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <div className="w-24 h-1 bg-purple-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive media and public speaking support for organizational leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-700 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-purple-700">•</span>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Formats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Formats</h2>
            <div className="w-24 h-1 bg-purple-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Support for various media formats and public speaking opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaFormats.map((format, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{format.title}</h3>
                <p className="text-gray-700 mb-4">{format.description}</p>
                <ul className="space-y-2">
                  {format.preparation.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-purple-700">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Media Presence?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book a consultation today and develop the skills and confidence needed to effectively communicate your message in various media formats and public settings.
          </p>
          <Link 
            href="/contact" 
            className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-md hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

const serviceAreas = [
  {
    title: "Media Interview Preparation",
    description: "Comprehensive preparation for various media interviews to ensure your message is delivered effectively.",
    services: [
      "Interview strategy development",
      "Message crafting and refinement",
      "Question preparation and response techniques",
      "Media training and practice sessions"
    ]
  },
  {
    title: "Public Speaking Coaching",
    description: "One-on-one coaching to enhance your public speaking skills and confidence.",
    services: [
      "Speech development and refinement",
      "Delivery technique improvement",
      "Audience engagement strategies",
      "Stage presence and body language coaching"
    ]
  },
  {
    title: "Message Development",
    description: "Strategic messaging support to ensure your communication is clear, compelling, and aligned with your goals.",
    services: [
      "Key message identification",
      "Story development and structuring",
      "Language and tone refinement",
      "Visual aid and presentation support"
    ]
  },
  {
    title: "Crisis Communication Training",
    description: "Preparation for effective communication during organizational crises.",
    services: [
      "Crisis communication planning",
      "Response strategy development",
      "Stakeholder communication frameworks",
      "Media management during crises"
    ]
  }
];

const mediaFormats = [
  {
    title: "Television & Video",
    description: "Preparation for television appearances and video content.",
    preparation: [
      "On-camera presence techniques",
      "Visual presentation optimization",
      "Sound bite development",
      "Technical considerations"
    ]
  },
  {
    title: "Radio & Podcasts",
    description: "Support for audio-based media appearances.",
    preparation: [
      "Voice modulation techniques",
      "Audio-only communication strategies",
      "Interview pacing and timing",
      "Technical preparation"
    ]
  },
  {
    title: "Print & Digital Media",
    description: "Guidance for written and digital media interactions.",
    preparation: [
      "Written statement development",
      "Email and social media communication",
      "Interview question preparation",
      "Follow-up strategies"
    ]
  }
]; 