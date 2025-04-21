import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero Section */}
        <section className="bg-purple-700 text-white pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                Get in Touch
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Have a question or want to learn more about our services? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <div className="w-24 h-1 bg-purple-700 mx-auto"></div>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Additional Contact Info */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Additional Ways to Reach Us</h3>
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">scott@thrivehappens.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 