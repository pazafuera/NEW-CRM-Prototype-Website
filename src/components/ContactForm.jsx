import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      'Thank you! A Costco Retail Media representative will be in touch shortly.'
    );
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6"
    >
      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-12 shadow-xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Partner With Costco Retail Media
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Ready to connect with Costco cardholders? Request a custom media kit
            and media specs.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                required
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-costco-blue"
                placeholder="Jane"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                required
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-costco-blue"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                Work Email
              </label>
              <input
                type="email"
                required
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-costco-blue"
                placeholder="jane@brand.com"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                Company / Brand Name
              </label>
              <input
                type="text"
                required
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-costco-blue"
                placeholder="Acme Foods"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
              Primary Interest
            </label>
            <select className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-costco-blue font-medium">
              <option>Omnichannel Strategy</option>
              <option>On-Site & Search Ads</option>
              <option>Offsite Programmatic & CTV</option>
              <option>In-Warehouse Digital & Sampling</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-costco-red hover:bg-red-700 text-white font-bold py-4 rounded-lg shadow-md transition text-sm uppercase tracking-wider flex items-center justify-center space-x-2"
          >
            <span>Submit Request</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
