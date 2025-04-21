'use client';

import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="py-16 bg-purple-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Contact us today to discuss how we can help your organization build resilience and achieve excellence.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-purple-700 font-semibold rounded-md hover:bg-gray-100 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
} 