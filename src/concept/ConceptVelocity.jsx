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
  Search,
  Play,
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
    detail: 'Warehouse, online, app, same-day, travel, and fuel — information that once lived in separate systems, connected in one environment.',
    example: 'A member who buys coffee in the warehouse and browses grinders online is one member, with one history.',
  },
  {
    id: 'consent', icon: SlidersHorizontal, label: 'Consent & Preferences',
    line: 'Each member\u2019s choices, recorded once and honoured across every experience.',
    detail: 'Choices captured at any touchpoint propagate across the platform, so every activation respects them automatically.',
    example: 'A member who turns down promotional email is not chased with the same campaign somewhere else.',
  },
  {
    id: 'identity', icon: Fingerprint, label: 'Identity Resolution',
    line: 'Activity across Costco, resolved to the membership behind it — a household Costco knows.',
    detail: 'Membership records, verified logins, and transaction history resolve to a single household view — deterministic, and maintained by Costco.',
    example: 'The member researching TVs on a phone is recognised as the household that buys its paper goods in the warehouse.',
  },
  {
    id: 'signals', icon: Activity, label: 'Signal Capture',
    line: 'Purchases, browsing and responses flow back continuously. The picture is always current.',
    detail: 'Impressions, streams, clicks, list adds, and register transactions stream back continuously — including the warehouse, where most Costco sales happen.',
    example: 'A live campaign can respond to this morning’s warehouse sales — not last quarter’s report.',
  },
  {
    id: 'prediction', icon: Sparkles, label: 'Audience & Prediction',
    line: 'Audiences of shared taste — and a prediction of the item each member would most want to find next.',
    detail: '1,300+ pre-built and custom audiences, plus learned relevance for each member — refreshed from live signals, not static segments.',
    example: 'The member most likely to love the new trail mix is identified before it ever reaches an endcap.',
  },
  {
    id: 'activation', icon: Send, label: 'Activation',
    line: 'Media delivered from one foundation: onsite, offsite, and in real life.',
    detail: 'The same audiences activate everywhere — Costco.com, the app, partner platforms, search, streaming, social, and warehouse media.',
    example: 'One audience, planned once, follows the member’s whole journey — and is measured the same way at every step.',
  },
  {
    id: 'measurement', icon: LineChart, label: 'Closed-Loop Measurement',
    line: 'Results in actual, incremental sales — increasingly in flight, while campaigns can still improve.',
    detail: 'Exposure matched to membership-linked transactions: sales, new-to-brand, and incrementality — via dashboards, clean-room outputs, in-flight views, or the Conversion API.',
    example: 'A streaming campaign can be credited with the warehouse sales it actually created — while it is still running.',
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
    format: 'Onsite',
    mock: 'banner',
    title: 'Homepage Banner — Reserved Display',
    story: 'A member browsing Costco.com sees a homepage banner. Behind it, Velocity’s decision engine weighs that member’s purchase history, browsing behavior, and other preference signals to select the next best message for that member specifically. Verified exposure is then tied to verified purchases — online and in the warehouse — for closed-loop performance measurement.',
    layers: ['Decision engine', 'Preference signals', 'Closed-loop measurement'],
  },
  {
    format: 'Onsite',
    mock: 'spa',
    title: 'Sponsored Product Ads',
    story: 'A member searches Costco.com. Sponsored placements are ranked using Velocity’s understanding of that member — past purchases, category behavior, and propensity to buy — and checked against live inventory, so the sponsored item is relevant and actually available. Clicks and conversions resolve to the same membership, giving the brand a complete, verified view of performance.',
    layers: ['Propensity', 'Live inventory', 'Verified conversion'],
  },
  {
    format: 'Offsite',
    mock: 'shopping',
    title: 'Performance Shopping Ads — Google',
    story: 'A shopper searches Google for a product Costco carries. Performance Ads, connected to Velocity, match that intent to the right Costco item and route the click to Costco.com. The resulting purchase is captured as a verified conversion — so discovery that starts outside Costco is measured to the same closed-loop standard as media inside it.',
    layers: ['Intent matching', 'Verified conversion', 'Closed-loop measurement'],
  },
  {
    format: 'Offsite',
    mock: 'ctv',
    title: 'Connected TV',
    story: 'A household streams TV. The ad is selected because Velocity audiences — built from verified membership and purchase behavior — have been activated through a partner platform, with frequency managed at the household level. When that household later buys in the warehouse, the verified transaction connects the big screen to the register.',
    layers: ['Verified audiences', 'Household frequency', 'Closed-loop measurement'],
  },
];

/* ---- Story visuals: familiar ad formats, drawn in code ---- */
function StoryVisual({ type }) {
  if (type === 'banner') {
    return (
      <div className="border border-gray-300 bg-white w-full">
        <div className="flex items-center gap-2 bg-gray-100 border-b border-gray-200 px-3 py-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <span className="ml-2 text-[10px] text-gray-500 bg-white border border-gray-200 rounded-full px-3 py-0.5">costco.com</span>
        </div>
        <div className="p-3">
          <div className="bg-costco-darkBlue text-white p-4 mb-2.5">
            <p className="text-[13px] font-extrabold leading-tight">YOUR ITEM.<br />CHOSEN FOR THIS MEMBER.</p>
            <p className="text-[9px] text-blue-200 mt-1">Reserved Display — decided in real time</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="border border-gray-200 p-2"><div className="bg-gray-100 h-9 mb-1.5 flex items-center justify-center"><div className="w-6 h-7 bg-costco-blue/60" /></div><p className="text-[8px] text-gray-500">$24.99</p></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (type === 'spa') {
    return (
      <div className="border border-gray-300 bg-white w-full">
        <div className="flex items-center gap-2 bg-gray-100 border-b border-gray-200 px-3 py-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <span className="ml-2 text-[10px] text-gray-500 bg-white border border-gray-200 rounded-full px-3 py-0.5">costco.com — search</span>
        </div>
        <div className="p-3">
          <div className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1.5 mb-3">
            <Search className="w-3.5 h-3.5 text-gray-400" /><span className="text-[10px] text-gray-600">coffee, whole bean</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="border-2 border-costco-red bg-red-50 p-2">
              <div className="bg-gray-100 h-9 mb-1.5 flex items-center justify-center"><div className="w-6 h-7 bg-costco-blue/70" /></div>
              <p className="text-[8px] font-bold text-gray-800">YOUR COFFEE</p>
              <p className="text-[8px] font-extrabold text-costco-red uppercase">Sponsored · In stock near them</p>
            </div>
            {[0, 1].map((i) => (
              <div key={i} className="border border-gray-200 p-2"><div className="bg-gray-100 h-9 mb-1.5 flex items-center justify-center"><div className="w-6 h-7 bg-costco-blue/40" /></div><p className="text-[8px] text-gray-500">$18.99</p></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (type === 'shopping') {
    return (
      <div className="border border-gray-300 bg-white w-full">
        <div className="flex items-center gap-2 bg-gray-100 border-b border-gray-200 px-3 py-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <span className="ml-2 text-[10px] text-gray-500 bg-white border border-gray-200 rounded-full px-3 py-0.5">google.com — shopping</span>
        </div>
        <div className="p-3">
          <div className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1.5 mb-3">
            <Search className="w-3.5 h-3.5 text-gray-400" /><span className="text-[10px] text-gray-600">best coffee maker under $200</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="border-2 border-costco-blue bg-blue-50 p-2">
              <div className="bg-white h-9 mb-1.5 flex items-center justify-center border border-gray-100"><div className="w-6 h-7 bg-costco-blue/70" /></div>
              <p className="text-[8px] font-bold text-gray-800">YOUR MODEL</p>
              <p className="text-[8px] font-bold text-costco-blue">at Costco.com</p>
            </div>
            {[0, 1].map((i) => (
              <div key={i} className="border border-gray-200 p-2"><div className="bg-gray-100 h-9 mb-1.5" /><p className="text-[8px] text-gray-500">Similar model</p></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="bg-gray-950 rounded-lg aspect-video flex flex-col items-center justify-center relative overflow-hidden">
        <Play className="w-10 h-10 text-white/90" />
        <div className="absolute top-2 left-3 text-[9px] font-bold text-white/70 uppercase tracking-wider">Streaming · Living room</div>
        <div className="absolute bottom-0 inset-x-0 bg-costco-red text-white text-[10px] font-extrabold px-3 py-1.5">YOUR BRAND — FOR COSTCO HOUSEHOLDS</div>
      </div>
      <p className="text-[9px] text-gray-400 mt-2 text-center">Verified member audience · Household frequency managed</p>
    </div>
  );
}

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
            didn&rsquo;t know you needed. Velocity extends that
            experience beyond the warehouse, working to understand
            and predict what each member needs, wants, and prefers —
            so the right items surface sooner, wherever they are.
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
            The whole journey, in one platform.
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
              <p className="text-gray-900 leading-relaxed text-lg font-semibold mb-4">{activeLayer.line}</p>
              <p className="text-gray-700 leading-relaxed mb-5">{activeLayer.detail}</p>
              <p className="text-sm text-gray-900 bg-gray-50 border-l-4 border-costco-red p-3">
                <span className="font-extrabold">In practice:</span> {activeLayer.example}
              </p>
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
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Familiar formats. A different engine.
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mb-14">
            Four familiar formats — the product, its connection to
            Velocity, and what that enables.
          </p>
          <div className="space-y-6">
            {EXAMPLES.map((e, i) => (
              <div
                key={e.title}
                className={`bg-white text-gray-900 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
              >
                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <StoryVisual type={e.mock} />
                </div>
                <div className="lg:col-span-7">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-costco-red mb-2">
                    {e.format}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug mb-3">{e.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-5">{e.story}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wide text-gray-500 mr-1">
                      Powered by
                    </span>
                    {e.layers.map((l) => (
                      <span key={l} className="text-[11px] font-bold bg-blue-50 text-costco-blue border border-blue-200 rounded-full px-2.5 py-1">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
