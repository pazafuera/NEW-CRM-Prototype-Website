import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  Database,
  SlidersHorizontal,
  Fingerprint,
  Activity,
  Sparkles,
  Send,
  LineChart,
  MonitorSmartphone,
  Globe2,
  Search,
  Store,
} from 'lucide-react';

/*
  CONCEPT — Costco Velocity page, v4 (lean).
  Professional B2B register: short copy, visuals carry the
  structure. The platform's seven layers dimensionalise what
  "Costco Velocity" means; the story is the member experience it
  enhances — understanding and predicting what members need, want
  and prefer, so discovery happens sooner.
*/

const LAYERS = [
  {
    id: 'core-data', icon: Database, label: 'Core Data',
    line: 'Costco\u2019s businesses — warehouse, online, travel, fuel — connected in Costco\u2019s private cloud, organised around the member.',
  },
  {
    id: 'consent', icon: SlidersHorizontal, label: 'Consent & Preferences',
    line: 'Each member\u2019s choices, recorded once and honoured across every experience.',
  },
  {
    id: 'identity', icon: Fingerprint, label: 'Identity Resolution',
    line: 'Activity across Costco, resolved to the membership behind it — a household Costco knows.',
  },
  {
    id: 'signals', icon: Activity, label: 'Signal Capture',
    line: 'Purchases, browsing and responses flow back continuously. The picture is always current.',
  },
  {
    id: 'prediction', icon: Sparkles, label: 'Audience & Prediction',
    line: 'Audiences of shared taste — and a prediction of the item each member would most want to find next.',
  },
  {
    id: 'activation', icon: Send, label: 'Activation',
    line: 'Media delivered from one foundation: onsite, offsite, and in real life.',
  },
  {
    id: 'measurement', icon: LineChart, label: 'Closed-Loop Measurement',
    line: 'Results in actual, incremental sales — increasingly in flight, while campaigns can still improve.',
  },
];

const PRINCIPLES = [
  {
    title: 'Modular and open',
    line: 'New channels and partners plug into one foundation. Work managed, self-serve, or through the platforms you already use.',
  },
  {
    title: 'Member-first by design',
    line: 'Costco\u2019s understanding of its members curates their experience. It is never rented out — and it stays at Costco.',
  },
  {
    title: 'Judged on merchandise moved',
    line: 'Velocity is measured the way the warehouse is: in sales, in incrementality, and in member trust.',
  },
];

const EXAMPLES = [
  {
    icon: MonitorSmartphone, tag: 'Onsite — in real time',
    title: 'The endcap, decided in the moment',
    body: 'A member lands on Costco.com. Inside the private cloud, verified purchase signals and member segments shape the endcap as the page loads — the item they\u2019re most likely to love, discovered before the trip.',
  },
  {
    icon: Globe2, tag: 'Offsite — through partners',
    title: 'Activated in The Trade Desk',
    body: 'Brands activate Costco audiences — 1,300+ custom segments — within The Trade Desk. Costco\u2019s information stays home; verified sales stream back in flight.',
  },
  {
    icon: Search, tag: 'Offsite — at the search bar',
    title: 'Discovery starts with search',
    body: 'The journey often starts in a search bar. Performance Ads place Costco items in product search results at the moment of intent — the shelf, extended.',
  },
  {
    icon: Store, tag: 'In real life',
    title: 'Continued in the warehouse',
    body: 'Warehouse and fuel screens carry the same understanding to the floor — aligned to the members who shop there, and the stock they\u2019ll find.',
  },
];

const FAQS = [
  {
    q: 'Where does the data live?',
    a: 'Inside Costco\u2019s own private cloud. Partners and tools connect in and work there — the information is not distributed out to them.',
  },
  {
    q: 'How does the relevance work?',
    a: 'Signals from a member\u2019s shopping — resolved to their membership, preferences applied — inform what they see next. Advertisers receive the benefit of that relevance, never the member information behind it.',
  },
  {
    q: 'Does it rely on third-party cookies?',
    a: 'No. Identity comes from the membership itself: the card, the login, the transaction.',
  },
  {
    q: 'Can we use our own platforms, and see results in flight?',
    a: 'Yes. Audiences activate in partner platforms such as The Trade Desk, collaboration happens in a secure clean room, and offsite campaigns report verified sales in flight — while there is still time to optimise.',
  },
];

export default function ConceptVelocity() {
  const [activeLayer, setActiveLayer] = useState(LAYERS[0]);
  const [openFaq, setOpenFaq] = useState(0);
  const ActiveIcon = activeLayer.icon;

  return (
    <div className="w-full bg-white font-sans">
      {/* ---------- HERO ---------- */}
      <section className="bg-costco-darkBlue text-white py-20 lg:py-24 w-full">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.95] mb-6">
              Costco Velocity
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-white mb-4">
              The technology platform behind Costco Retail Media.
            </p>
            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
              Velocity connects what Costco understands about its
              members to every moment of discovery — onsite, offsite,
              and in the warehouse — so members find more of what they
              love, and brands grow with them.
            </p>
          </div>

          {/* Platform stack visual */}
          <div className="lg:col-span-5">
            <div className="bg-white text-gray-900 p-7 lg:p-8 shadow-2xl">
              <p className="text-xs font-extrabold uppercase tracking-widest text-costco-blue mb-4">
                The platform
              </p>
              <div className="space-y-2">
                {LAYERS.map((l, i) => (
                  <div
                    key={l.id}
                    className={`flex items-center gap-3 px-3 py-2 ${
                      i === LAYERS.length - 1
                        ? 'bg-costco-red text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <l.icon className="w-4 h-4 shrink-0" />
                    <span className="text-sm font-bold">{l.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">
                One platform. Seven connected layers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY ---------- */}
      <section className="py-16 lg:py-24 w-full bg-white">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            Built to enhance the Costco experience.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-14">
            Discovery is the heart of Costco — the great item you
            didn&rsquo;t know you needed. Velocity expands that
            experience beyond the warehouse walls, striving to
            understand and predict what each member needs, wants, and
            prefers — so the right items surface sooner, wherever the
            member is.
          </p>

          {/* Understand → Predict → Discover visual */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {[
              ['Understand', 'What members buy, save, and look for — across every part of Costco.'],
              ['Predict', 'Which of Costco\u2019s great items each member would most want to find next.'],
              ['Discover', 'Those items, surfaced earlier — online, offsite, and in the aisle.'],
            ].map(([t, s], i) => (
              <div key={t} className="relative border-t-4 border-costco-darkBlue pt-5">
                <p className="text-sm font-extrabold text-costco-red mb-1">0{i + 1}</p>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{t}</h3>
                <p className="text-gray-600 leading-relaxed">{s}</p>
                {i < 2 && (
                  <ArrowRight className="hidden md:block w-6 h-6 text-gray-300 absolute top-8 -right-5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- THE PLATFORM ---------- */}
      <section className="py-16 lg:py-24 w-full bg-gray-50 border-y border-gray-200">
        <div className="container-custom">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-costco-red mb-3">
            The platform
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-12">
            Seven layers. One foundation.
          </h2>

          {/* Stack visual + selector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-2">
              {LAYERS.map((l) => {
                const Icon = l.icon;
                const active = activeLayer.id === l.id;
                return (
                  <button
                    key={l.id}
                    onClick={() => setActiveLayer(l)}
                    className={`w-full flex items-center gap-4 px-5 py-4 border-2 text-left transition-all ${
                      active
                        ? 'bg-costco-darkBlue border-costco-darkBlue text-white shadow-lg'
                        : 'bg-white border-gray-200 text-gray-800 hover:border-costco-blue'
                    }`}
                  >
                    <Icon className={`w-5 h-5 shrink-0 ${active ? 'text-blue-200' : 'text-costco-blue'}`} />
                    <span className="font-extrabold">{l.label}</span>
                    {active && <ArrowRight className="w-4 h-4 ml-auto text-blue-200" />}
                  </button>
                );
              })}
            </div>
            <div className="lg:col-span-5 bg-white border border-gray-200 p-8 lg:sticky lg:top-40">
              <div className="bg-blue-100 text-costco-blue p-3 w-max mb-5">
                <ActiveIcon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-3">{activeLayer.label}</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{activeLayer.line}</p>
            </div>
          </div>

          {/* Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="border-t-4 border-costco-red pt-5">
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- AT WORK ---------- */}
      <section className="py-16 lg:py-24 w-full bg-costco-darkBlue text-white">
        <div className="container-custom">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-blue-300 mb-3">
            Velocity at work
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-14">
            In practice.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {EXAMPLES.map((e) => {
              const Icon = e.icon;
              return (
                <div key={e.title} className="bg-white text-gray-900 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 text-costco-blue p-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-costco-red">
                      {e.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold leading-snug mb-2">{e.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{e.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- FAQS ---------- */}
      <section className="py-16 lg:py-24 w-full bg-white">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-12">
            Technical questions.
          </h2>
          <div className="max-w-4xl">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="border-t border-gray-300">
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg sm:text-xl font-extrabold text-gray-900">{f.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-costco-blue shrink-0 transition-transform ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {open && (
                    <p className="text-gray-700 leading-relaxed pb-7 pr-10 max-w-3xl">{f.a}</p>
                  )}
                </div>
              );
            })}
            <div className="border-t border-gray-300" />
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-16 lg:py-24 w-full bg-gray-950 text-white">
        <div className="container-custom flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              See it with your team.
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl">
              A walkthrough of the platform, the integrations, and a
              clean-room demo — as technical as you want it.
            </p>
          </div>
          <Link
            to="/concept"
            className="bg-costco-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all inline-flex items-center gap-2 shrink-0"
          >
            Talk to the Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ---------- SMALL PRINT ---------- */}
      <section className="py-10 w-full bg-white">
        <div className="container-custom">
          <p className="text-[11px] leading-relaxed text-gray-400 max-w-5xl">
            Notes: Costco Velocity is the technology platform powering
            Costco Retail Media. Integration and dashboard availability
            vary by partner and format and are confirmed by the Costco
            Retail Media team.
          </p>
        </div>
      </section>
    </div>
  );
}
