import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-purple-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
            <div className="text-center sm:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                Thrive Happens
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl">
                Building Resilient Organizations Through Strategic Leadership Development
              </p>
            </div>
            <div className="relative">
              <div className="relative h-64 md:h-96 w-full">
                <div className="absolute inset-0 bg-purple-500 rounded-lg opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  [Corporate Leadership Image]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Thrive Happens</h2>
            <div className="w-24 h-1 bg-purple-700 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-64 md:h-80 w-full">
                <div className="absolute inset-0 bg-purple-100 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center text-purple-700">
                  [Corporate Training Session]
                </div>
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Excellence in Leadership Development</h3>
              <p className="text-gray-700 mb-6">
                Thrive Happens is a premier leadership development consultancy specializing in building resilient organizations. We transform businesses through strategic coaching, workshops, and organizational development programs.
              </p>
              <p className="text-gray-700 mb-6">
                Our proven methodologies and evidence-based approaches help organizations develop robust leadership capabilities, enhance team performance, and create sustainable success in challenging business environments.
              </p>
              <div className="flex justify-center sm:justify-start">
                <Link 
                  href="/services" 
                  className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800 transition-colors"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-purple-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive solutions to enhance organizational resilience and leadership excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-purple-100"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-purple-700">
                    [{service.title} Image]
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <Link 
                    href={service.link}
                    className="inline-block px-6 py-2 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Service data
const services = [
  {
    title: "Platform Speaker",
    description: "Engaging and impactful keynote presentations on resilience, leadership, and personal growth.",
    link: "/services/platform-speaker"
  },
  {
    title: "Executive Coaching",
    description: "Personalized coaching to help leaders develop resilience strategies and overcome challenges.",
    link: "/services/executive-coaching"
  },
  {
    title: "Resilience Workshops",
    description: "Interactive workshops that provide practical tools for building resilience in various contexts.",
    link: "/services/resilience-workshops"
  },
  {
    title: "Media",
    description: "Expert commentary, interviews, and content creation on topics related to resilience and leadership.",
    link: "/services/media"
  }
];
