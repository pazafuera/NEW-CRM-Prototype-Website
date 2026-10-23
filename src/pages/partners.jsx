import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/*
  Partners page. Deliberately simple: a showcase of the
  key partners connected into Costco Velocity, grouped by what
  they do. Name + one line each.
*/

const GROUPS = [
  {
    label: 'Activation — DSPs & Buying Platforms',
    partners: [
      ['The Trade Desk', 'Programmatic activation for Costco audiences. First platform enabled for in-flight measurement.'],
      ['Google DV360', 'Programmatic activation through Google\u2019s buying platform.'],
      ['Yahoo', 'Programmatic activation through the Yahoo DSP.'],
      ['StackAdapt', 'Programmatic activation.'],
      ['Epsilon', 'Programmatic activation.'],
    ],
  },
  {
    label: 'Onsite & Search Technology',
    partners: [
      ['Moloco', 'AI decisioning behind onsite display — personalised digital endcaps.'],
      ['Criteo', 'Sponsored product ads on Costco.com.'],
      ['Symbiosys', 'Performance Ads in Google Shopping.'],
    ],
  },
  {
    label: 'Data, Identity & Measurement',
    partners: [
      ['LiveRamp', 'Identity and clean-room collaboration. Powers the in-flight measurement dashboard.'],
      ['MetaRouter', 'The data and identity layer, operating inside Costco\u2019s environment.'],
      ['Habu', 'Clean room for audience collaboration and measurement.'],
      ['GrowthLoop', 'Audience building and activation.'],
      ['Transcend', 'Consent and preference management.'],
    ],
  },
  {
    label: 'Cloud & In-Store',
    partners: [
      ['Google Cloud', 'The private cloud foundation Costco Velocity runs on.'],
      ['STRATACache', 'Digital screens in the warehouse.'],
    ],
  },
];

export default function ConceptPartners() {
  return (
    <div className="w-full bg-white font-sans">
      {/* ---------- HERO ---------- */}
      <section className="bg-costco-darkBlue text-white py-20 lg:py-24 w-full">
        <div className="container-custom">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6">
            Partners
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
            Costco Velocity is an open platform. These are the key
            partners connected into it — chosen for performance and
            transparency, and integrated into one foundation.
          </p>
        </div>
      </section>

      {/* ---------- PARTNER GROUPS ---------- */}
      {GROUPS.map((group, gi) => (
        <section
          key={group.label}
          className={`py-14 lg:py-20 w-full ${
            gi % 2 === 1 ? 'bg-gray-50 border-y border-gray-200' : 'bg-white'
          }`}
        >
          <div className="container-custom">
            <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-costco-red mb-8">
              {group.label}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.partners.map(([name, role]) => (
                <div key={name} className="bg-white border border-gray-200 p-7">
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{name}</h3>
                  <p className="text-gray-600 leading-relaxed">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ---------- CLOSING ---------- */}
      <section className="py-14 lg:py-20 w-full bg-white">
        <div className="container-custom flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-lg text-gray-700 max-w-2xl">
            Many of these partners also offer managed service — planning,
            buying, and managing campaigns for you. And new partners
            integrate with Velocity&rsquo;s identity and data layer first.
          </p>
          <Link
            to="/"
            className="bg-costco-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all inline-flex items-center gap-2 shrink-0"
          >
            Talk to the Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
