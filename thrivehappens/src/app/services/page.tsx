import Link from 'next/link';
import ServicesCTA from '@/components/ServicesCTA';

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-purple-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive solutions for organizational excellence and leadership development
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-purple-100"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-purple-700">
                    [{service.title} Image]
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 text-purple-700">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.link}
                    className="inline-block px-6 py-3 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <div className="w-24 h-1 bg-purple-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A systematic approach to organizational transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-bold mb-6 mx-auto">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{step.title}</h3>
                <p className="text-gray-700 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesCTA />
    </main>
  );
}

const services = [
  {
    title: "Executive Leadership Development",
    description: "Comprehensive programs designed to enhance leadership capabilities at the executive level.",
    features: [
      "Strategic decision-making frameworks",
      "Change management expertise",
      "High-performance team building",
      "Crisis leadership preparation"
    ],
    link: "/contact"
  },
  {
    title: "Organizational Resilience",
    description: "Build adaptive capacity and strengthen your organization's ability to thrive in challenging environments.",
    features: [
      "Organizational assessment",
      "Culture transformation",
      "Risk management strategies",
      "Sustainable growth planning"
    ],
    link: "/contact"
  },
  {
    title: "Team Performance Enhancement",
    description: "Develop high-performing teams that consistently deliver exceptional results.",
    features: [
      "Team dynamics optimization",
      "Communication enhancement",
      "Conflict resolution skills",
      "Performance metrics implementation"
    ],
    link: "/contact"
  }
];

const process = [
  {
    title: "Assessment & Analysis",
    description: "Comprehensive evaluation of organizational needs and opportunities for growth"
  },
  {
    title: "Strategy Development",
    description: "Custom-tailored solutions designed to meet your specific organizational goals"
  },
  {
    title: "Implementation & Support",
    description: "Systematic execution with ongoing guidance and measurable outcomes"
  }
]; 