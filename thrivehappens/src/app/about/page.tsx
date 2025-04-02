import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-purple-700 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-8">About Scott Hanley</h1>
              <p className="text-xl mb-8">
                Resilience coach, platform speaker, and leadership development expert dedicated to helping individuals and organizations thrive in challenging environments.
              </p>
            </div>
            <div className="relative">
              <div className="relative h-64 md:h-96 w-full">
                <div className="absolute inset-0 bg-purple-500 rounded-lg opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl">
                  [Scott Hanley Portrait]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">My Story</h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                For over 15 years, I've been dedicated to helping individuals and organizations build resilience and thrive in challenging environments. My journey into resilience coaching began from my own experiences navigating professional setbacks and personal challenges.
              </p>
              
              <p>
                After a successful career in corporate leadership, where I held executive positions at several Fortune 500 companies, I experienced firsthand how resilience can be the deciding factor between success and burnout. This realization led me to pursue advanced training in resilience psychology, leadership development, and coaching methodologies.
              </p>
              
              <p>
                Today, I combine my practical business experience with evidence-based resilience strategies to provide a unique coaching approach that delivers tangible results. Whether I'm coaching executives one-on-one, leading workshops for organizations, or speaking to large audiences, my mission remains the same: to equip people with the tools they need to not just survive challenges, but to truly thrive through them.
              </p>
              
              <p>
                I believe that resilience is not just about "bouncing back" from adversity but about growing through challenges to become stronger, more adaptable, and more aligned with your core values and purpose. This philosophy underpins all of my work.
              </p>
              
              <p>
                When I'm not coaching or speaking, you'll find me hiking in the mountains, practicing mindfulness, or enjoying time with my family. These activities help me maintain my own resilience practice and bring fresh perspectives to my work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Credentials & Expertise</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Professional background and qualifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {credentials.map((credential, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xl mx-auto mb-6">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                    {credential.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">{credential.title}</h3>
                <ul className="space-y-2">
                  {credential.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center mr-3">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Approach</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The core principles that guide my work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {approach.map((item, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Clients</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Organizations I've had the privilege to work with
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
                <div className="text-center">
                  <div className="h-20 flex items-center justify-center">
                    <span className="text-gray-400 text-lg">[{client} Logo]</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact me today to discuss how I can help you or your organization build resilience and thrive.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-white text-purple-700 font-semibold rounded-md hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

// Credentials data
const credentials = [
  {
    title: "Education & Certifications",
    items: [
      "Ph.D. in Organizational Psychology, Stanford University",
      "Certified Executive Coach (ICF)",
      "Resilience Training Specialist (American Psychological Association)",
      "Master's in Business Administration, Harvard Business School"
    ],
    icon: <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
  },
  {
    title: "Professional Experience",
    items: [
      "Executive Leadership at Fortune 500 Companies (15+ years)",
      "Management Consulting with McKinsey & Company",
      "Board Member for Non-Profit Organizations",
      "Guest Lecturer at Leading Business Schools"
    ],
    icon: <>
      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
    </>
  },
  {
    title: "Specializations",
    items: [
      "Resilience Development in High-Pressure Environments",
      "Leadership Communication and Influence",
      "Crisis Management and Decision-Making",
      "Building High-Performance Teams"
    ],
    icon: <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
  }
];

// Approach data
const approach = [
  {
    title: "Evidence-Based Strategies",
    description: "I draw from the latest research in psychology, neuroscience, and leadership development to ensure all strategies are grounded in science and proven to be effective."
  },
  {
    title: "Personalized Solutions",
    description: "I recognize that every individual and organization is unique. My approach is tailored to your specific challenges, goals, and context."
  },
  {
    title: "Holistic Perspective",
    description: "True resilience encompasses all aspects of life - professional, personal, physical, and emotional. My approach addresses the whole person or organization."
  },
  {
    title: "Practical Application",
    description: "Theory is valuable, but application is essential. I focus on practical tools and techniques that can be immediately implemented in real-world situations."
  },
  {
    title: "Growth Mindset",
    description: "I believe that resilience is a skill that can be developed, not a fixed trait. My work cultivates a growth mindset that embraces challenges as opportunities."
  },
  {
    title: "Measurable Outcomes",
    description: "Success should be tangible. I establish clear metrics at the outset and regularly assess progress to ensure we're achieving meaningful results."
  }
];

// Clients data
const clients = [
  "Google",
  "Microsoft",
  "Goldman Sachs",
  "Johnson & Johnson",
  "Harvard University",
  "American Red Cross",
  "Pfizer",
  "Deloitte"
]; 