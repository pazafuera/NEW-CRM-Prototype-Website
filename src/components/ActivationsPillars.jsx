import React, { useState } from 'react';
import { Laptop, Tv, Store, Check } from 'lucide-react';

export default function ActivationPillars() {
  const [activeTab, setActiveTab] = useState('onsite');

  return (
    <section
      id="solutions"
      className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6"
    >
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-xs font-bold uppercase tracking-widest text-costco-red mb-3">
          Omnichannel Activation
        </h2>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
          Engage Members Everywhere They Shop
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
        <button
          onClick={() => setActiveTab('onsite')}
          className={`flex items-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition ${
            activeTab === 'onsite'
              ? 'bg-costco-blue text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Laptop className="w-4 h-4 mr-2" /> On-Site & App
        </button>
        <button
          onClick={() => setActiveTab('offsite')}
          className={`flex items-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition ${
            activeTab === 'offsite'
              ? 'bg-costco-blue text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Tv className="w-4 h-4 mr-2" /> Offsite Media
        </button>
        <button
          onClick={() => setActiveTab('irl')}
          className={`flex items-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition ${
            activeTab === 'irl'
              ? 'bg-costco-blue text-white shadow-md'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <Store className="w-4 h-4 mr-2" /> In Real Life (IRL)
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
        {activeTab === 'onsite' && (
          <div>
            <h4 className="text-xl font-bold mb-3 text-gray-900">
              On-Site & App Ad Solutions
            </h4>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Reach members actively browsing and searching on Costco.com and
              the Costco Mobile App.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium text-gray-700">
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <Check className="w-4 h-4 text-green-600 mr-2" /> Sponsored
                Search Listings
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <Check className="w-4 h-4 text-green-600 mr-2" /> Homepage
                Feature Banners
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <Check className="w-4 h-4 text-green-600 mr-2" /> Category
                Carousel Ads
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <Check className="w-4 h-4 text-green-600 mr-2" /> Digital
                Savings Placement
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'offsite' && (
          <div>
            <h4 className="text-xl font-bold mb-3 text-gray-900">
              Offsite Velocity Loop
            </h4>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Target verified Costco shoppers across the web, social media, and
              Connected TV (CTV) using first-party member data.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium text-gray-700">
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <Check className="w-4 h-4 text-green-600 mr-2" /> Connected TV
                (CTV) Audience Targeting
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <Check className="w-4 h-4 text-green-600 mr-2" /> Programmatic
                Display & Video
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <Check className="w-4 h-4 text-green-600 mr-2" /> Performance
                Shopping Ads
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <Check className="w-4 h-4 text-green-600 mr-2" /> Custom Clean
                Room Modeling
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'irl' && (
          <div>
            <h4 className="text-xl font-bold mb-3 text-gray-900">
              In-Warehouse Touchpoints
            </h4>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Influence buying decisions at physical warehouse locations with
              high-foot-traffic placements.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium text-gray-700">
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <Check className="w-4 h-4 text-green-600 mr-2" /> Digital
                Signage Network
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <Check className="w-4 h-4 text-green-600 mr-2" /> Demo &
                Sampling Integration
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <Check className="w-4 h-4 text-green-600 mr-2" /> Register Tape
                Messaging
              </li>
              <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                <Check className="w-4 h-4 text-green-600 mr-2" /> In-Warehouse
                Audio Network
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
