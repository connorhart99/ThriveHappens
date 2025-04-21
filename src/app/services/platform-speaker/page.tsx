import Link from 'next/link';
import Image from 'next/image';

export default function PlatformSpeakerPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-purple-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Platform Speaker</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Engaging and impactful keynote presentations on resilience, leadership, and personal growth
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Organization Through Powerful Speaking</h2>
            <p className="text-lg text-gray-700 mb-6">
              As a platform speaker, I deliver compelling presentations that inspire, educate, and motivate audiences to achieve excellence in leadership and organizational resilience.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My keynote speeches combine research-backed insights with practical strategies that leaders can implement immediately to drive organizational success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800 transition-colors text-center"
              >
                Book a Speaking Engagement
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
                [Platform Speaker Image]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Speaking Topics</h2>
            <div className="w-24 h-1 bg-purple-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Customized presentations tailored to your organization's specific needs and challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{topic.title}</h3>
                <p className="text-gray-700">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Format */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Speaking Formats</h2>
            <div className="w-24 h-1 bg-purple-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Flexible presentation options to suit your event and audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {formats.map((format, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{format.title}</h3>
                <p className="text-gray-700 mb-4">{format.description}</p>
                <ul className="space-y-2">
                  {format.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-purple-700">•</span>
                      <span className="text-gray-700">{detail}</span>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book a speaking engagement today and inspire your team to achieve excellence in leadership and organizational resilience.
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

const topics = [
  {
    title: "Building Resilient Leadership",
    description: "Learn how to develop the resilience needed to navigate uncertainty and lead with confidence in challenging times."
  },
  {
    title: "Strategic Decision-Making",
    description: "Master frameworks for making effective decisions under pressure and with limited information."
  },
  {
    title: "Change Management Excellence",
    description: "Discover strategies for leading organizational change with minimal disruption and maximum buy-in."
  },
  {
    title: "High-Performance Team Building",
    description: "Learn how to create and sustain teams that consistently deliver exceptional results."
  },
  {
    title: "Crisis Leadership",
    description: "Develop the skills and mindset needed to lead effectively during organizational crises."
  },
  {
    title: "Personal Growth & Development",
    description: "Explore strategies for continuous personal growth and professional development."
  }
];

const formats = [
  {
    title: "Keynote Presentations",
    description: "Inspiring and informative presentations for conferences, annual meetings, and special events.",
    details: [
      "30-60 minute presentations",
      "Q&A sessions",
      "Customized content for your audience",
      "Pre-event consultation"
    ]
  },
  {
    title: "Workshop Sessions",
    description: "Interactive learning experiences that combine presentation with practical exercises.",
    details: [
      "Half-day or full-day sessions",
      "Small group activities",
      "Practical application exercises",
      "Takeaway materials and resources"
    ]
  }
]; 