import Link from 'next/link';
import Image from 'next/image';

export default function ResilienceWorkshopsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-purple-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Resilience Workshops</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Interactive workshops that provide practical tools for building resilience in various contexts
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Build Organizational Resilience Through Interactive Learning</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our resilience workshops provide organizations with practical tools and strategies to navigate uncertainty, adapt to change, and thrive in challenging environments.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Through a combination of experiential learning, group discussions, and practical exercises, participants develop the skills and mindset needed to build resilience at both individual and organizational levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-md hover:bg-purple-800 transition-colors text-center"
              >
                Schedule a Workshop
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
              [Resilience Workshop Image]
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Topics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Workshop Topics</h2>
            <div className="w-24 h-1 bg-purple-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Customizable workshops designed to address your organization's specific resilience challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshopTopics.map((topic, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{topic.title}</h3>
                <p className="text-gray-700 mb-4">{topic.description}</p>
                <ul className="space-y-2">
                  {topic.learningOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 text-purple-700">•</span>
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Format */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Workshop Format</h2>
            <div className="w-24 h-1 bg-purple-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Flexible delivery options to suit your organization's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <h2 className="text-3xl font-bold mb-6">Ready to Build Organizational Resilience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a resilience workshop today and equip your team with the tools and strategies needed to thrive in challenging environments.
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

const workshopTopics = [
  {
    title: "Building Individual Resilience",
    description: "Develop personal resilience strategies to navigate stress, uncertainty, and change.",
    learningOutcomes: [
      "Understand the science of resilience",
      "Identify personal resilience strengths and areas for growth",
      "Develop practical resilience strategies",
      "Create a personal resilience action plan"
    ]
  },
  {
    title: "Team Resilience Development",
    description: "Foster resilient teams that can adapt, innovate, and perform under pressure.",
    learningOutcomes: [
      "Build trust and psychological safety within teams",
      "Enhance team communication and collaboration",
      "Develop collective problem-solving skills",
      "Create team resilience protocols"
    ]
  },
  {
    title: "Organizational Resilience Strategy",
    description: "Design and implement organizational resilience strategies for sustainable success.",
    learningOutcomes: [
      "Assess organizational resilience capacity",
      "Identify resilience gaps and opportunities",
      "Develop organizational resilience frameworks",
      "Create implementation roadmaps"
    ]
  },
  {
    title: "Crisis Response & Recovery",
    description: "Prepare for, respond to, and recover from organizational crises effectively.",
    learningOutcomes: [
      "Develop crisis response protocols",
      "Enhance decision-making under pressure",
      "Build recovery and adaptation strategies",
      "Create crisis communication plans"
    ]
  }
];

const formats = [
  {
    title: "Half-Day Workshops",
    description: "Focused sessions for specific resilience topics.",
    details: [
      "3-4 hour sessions",
      "Interactive exercises",
      "Practical takeaways",
      "Follow-up resources"
    ]
  },
  {
    title: "Full-Day Workshops",
    description: "Comprehensive sessions for deeper learning and application.",
    details: [
      "6-8 hour sessions",
      "Extended exercises and role-playing",
      "Group projects and presentations",
      "Detailed action planning"
    ]
  },
  {
    title: "Multi-Day Programs",
    description: "In-depth programs for comprehensive resilience development.",
    details: [
      "2-5 day programs",
      "Progressive learning modules",
      "Individual and team coaching",
      "Long-term implementation support"
    ]
  }
]; 