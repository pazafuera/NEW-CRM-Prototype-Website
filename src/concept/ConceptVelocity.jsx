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
  CheckCircle2,
  MonitorSmartphone,
  Globe2,
  Store,
} from 'lucide-react';

/*
  CONCEPT — Costco Velocity page, v2.
  Framing (per Mark):
  - Costco Velocity is NOT the retail media program. It is the
    technology platform and engine that powers it — and the page
    must dimensionalise what that platform is.
  - No references to other retailers or vendors-as-comparisons.
  - The narrative wrapper is member benefit: more relevant Costco
    communication, and discovery brought upstream — predicting which
    of Costco's great items a member would most love to find.
  - Language about Costco's knowledge is deliberately delicate:
    signals, purchases, understanding — never members-as-product.
*/

const LAYERS = [
  {
    id: 'core-data',
    icon: Database,
    label: 'Core Data',
    title: 'The foundation everything stands on',
    body: 'Costco is really several businesses in one — the warehouse, Costco.com, same-day delivery, travel, fuel and more — and each historically kept its own view of the member. Velocity\u2019s core data layer brings that together in Costco\u2019s own private cloud, organised around the member. It is the single foundation every other part of the platform works from.',
    enables: 'Makes possible: one understanding of the member, everywhere Costco serves them.',
  },
  {
    id: 'consent',
    icon: SlidersHorizontal,
    label: 'Consent & Preferences',
    title: 'Member choices, honoured everywhere',
    body: 'Members tell Costco how they want to be communicated with, and what they\u2019re comfortable with. That layer records those choices once and applies them across everything the platform does — onsite, offsite and in the warehouse — so a member\u2019s preferences are never a setting in one system and a surprise in another.',
    enables: 'Makes possible: relevance with permission — the member\u2019s choices, enforced by design.',
  },
  {
    id: 'identity',
    icon: Fingerprint,
    label: 'Identity Resolution',
    title: 'A real membership, recognised',
    body: 'A Costco membership is a household Costco actually knows. Identity resolution connects a member\u2019s activity — browsing Costco.com, building a list in the app, buying in the warehouse — back to that membership. Relevance built on a verified relationship, not on estimated profiles.',
    enables: 'Makes possible: communication addressed to the right member, and measurement that doesn\u2019t have to guess.',
  },
  {
    id: 'signals',
    icon: Activity,
    label: 'Signal Capture',
    title: 'Always current',
    body: 'As members shop and respond, those signals flow back into the platform: what was seen, what was saved, what was bought, and where. The picture stays current — which is what allows the platform to respond in the moment instead of working from last month\u2019s snapshot.',
    enables: 'Makes possible: decisions made on what is happening now, not what used to be true.',
  },
  {
    id: 'prediction',
    icon: Sparkles,
    label: 'Audience & Prediction',
    title: 'Where understanding becomes discovery',
    body: 'This is the layer that turns what Costco knows into what a member sees next: audiences of members with shared tastes, and predictions of which items — out of everything great on Costco\u2019s shelves — a member would be most interested in. It is the engine of bringing discovery upstream.',
    enables: 'Makes possible: the right item in front of the right member, before the trip even starts.',
  },
  {
    id: 'activation',
    icon: Send,
    label: 'Activation',
    title: 'Modular, at every point of contact',
    body: 'Activation is where the platform goes to work — and it is deliberately modular. The same foundation powers placements on Costco.com and the app, media beyond Costco through partner platforms, and screens and experiences in the warehouse. New channels plug into the foundation as members discover items in new places.',
    enables: 'Makes possible: members reached wherever they are consuming content, from one foundation.',
  },
  {
    id: 'measurement',
    icon: LineChart,
    label: 'Closed-Loop Measurement',
    title: 'The engine that proves it',
    body: 'Because purchases are membership-linked, the platform measures results in actual sales — online and at the warehouse register — and feeds what it learns back into the next decision. Measurement is not a report bolted on at the end; it is the part of the machine that makes every cycle smarter than the last.',
    enables: 'Makes possible: honest results in sales, and a platform that learns.',
  },
];

const PRINCIPLES = [
  {
    title: 'Modular and flexible, on purpose',
    body: 'Velocity is built in connected pieces, not one rigid system. A new format, a new channel, a new partner — each plugs into the same foundation of data, identity and measurement. As the ways members discover items keep changing, the platform is designed to change with them.',
  },
  {
    title: 'Costco\u2019s knowledge stays at Costco',
    body: 'The platform was designed under a simple discipline: Costco owns its information, and movement and copying of it are kept to a minimum. Partners and tools connect into Costco\u2019s environment and work there — the understanding Costco has built with its members does not ship out the door.',
  },
  {
    title: 'The member test comes first',
    body: 'Every part of the platform has to pass one test: does this make a member\u2019s experience with Costco better — more relevant, more useful, more worth renewing? Technology that can\u2019t answer that question doesn\u2019t ship, however clever it is.',
  },
];

const EXAMPLES = [
  {
    icon: MonitorSmartphone,
    tag: 'Onsite — in real time',
    title: 'The digital endcap that knows its member',
    body: 'A member opens Costco.com. Everything the platform needs is already inside Costco\u2019s private cloud — so in the moment the page loads, verified purchase signals and the member\u2019s segment shape what they see. The homepage endcap carries the item they are most likely to love: a discovery they might not have made until the warehouse, made before the trip. For the brand, that is being discovered by exactly the member most likely to buy — and the result is measured in actual sales.',
  },
  {
    icon: Globe2,
    tag: 'Offsite — through partners',
    title: 'Plugged into the platforms brands already use',
    body: 'A brand\u2019s team plans its media in The Trade Desk. Velocity plugs into that activation layer: Costco audiences — built and governed inside Costco\u2019s own environment — are made available there, so the campaign reaches Costco members wherever they are consuming content. Costco\u2019s information never ships out; the audiences go to work, and when members buy, the outcome is measured closed-loop at Costco.',
  },
  {
    icon: Store,
    tag: 'In real life — the warehouse',
    title: 'Discovery continues down the aisle',
    body: 'The same foundation reaches the floor: warehouse and fuel-station screens carry messaging aligned to the members who shop that location and what is stocked there. The item a member discovered online shows up supported in the aisle — one connected experience, from the couch to the checkout.',
  },
];

const FAQS = [
  {
    q: 'Is Costco Velocity the same thing as Costco Retail Media?',
    a: 'No — and the distinction matters. Costco Retail Media is the program: the team, the partnerships, the media brands buy. Costco Velocity is the technology platform underneath it: the data, identity, activation and measurement engine that makes the program work. When we say a campaign is \u201cpowered by Costco Velocity,\u201d this page is what we mean.',
  },
  {
    q: 'Where does the information live?',
    a: 'Inside Costco\u2019s own private cloud environment. The platform was designed so Costco\u2019s information stays within Costco\u2019s boundary — partners and tools connect in and work there, rather than the information being distributed out to them.',
  },
  {
    q: 'How does the relevance actually work?',
    a: 'In plain terms: what a member buys, saves and browses — resolved to their membership, with their preferences applied — forms signals. The audience and prediction layer reads those signals to decide which items that member would most likely want to discover next. No member information is handed to advertisers in the process; they receive the benefit of the relevance, not the information behind it.',
  },
  {
    q: 'Does it depend on third-party cookies?',
    a: 'No. Identity in Velocity comes from the membership itself — the card, the login, the transaction record. The platform was built on that foundation from the start.',
  },
  {
    q: 'Can we activate through our own platforms?',
    a: 'Yes — modularity is the design. Velocity connects into partner activation platforms (The Trade Desk is one example), clean-room environments for collaboration, and measurement flows back into your own tools, including through the Conversion API. Your team keeps working the way it works; Velocity supplies the Costco understanding.',
  },
  {
    q: 'How are warehouse sales connected to all this?',
    a: 'The membership card is presented on every warehouse transaction. That link is what lets the platform\u2019s measurement layer close the loop: a member sees something relevant, discovers an item, buys it in the warehouse — and the result is recorded as a sale, at SKU level where applicable.',
  },
];

export default function ConceptVelocity() {
  const [activeLayer, setActiveLayer] = useState(LAYERS[0]);
  const [openFaq, setOpenFaq] = useState(0);

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
              The platform that powers Costco Retail Media.
            </p>
            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
              Costco Retail Media is the program. Velocity is the
              technology and the engine underneath it — built for a
              member reason first: so that what Costco shows a member
              is worth their attention, and the next great item finds
              them sooner.
            </p>
          </div>

          {/* The platform, at a glance */}
          <div className="lg:col-span-5">
            <div className="bg-white text-gray-900 p-7 lg:p-8 shadow-2xl">
              <p className="text-xs font-extrabold uppercase tracking-widest text-costco-blue mb-4">
                The platform, at a glance
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
                Seven connected layers — one platform. Details below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY: THE MEMBER STORY ---------- */}
      <section className="py-16 lg:py-24 w-full bg-white">
        <div className="container-custom">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-costco-red mb-3">
            Why it exists
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
            Discovery, brought upstream.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              The warehouse treasure hunt is famous for a reason:
              members wander, and great items find them. But Costco
              carries a deliberately small assortment, and the next
              item a member would love is already sitting on a shelf
              somewhere — or on Costco.com — whether or not they happen
              to walk past it this trip.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Velocity exists to start that discovery earlier. By
              understanding what members actually buy, Costco&rsquo;s
              communication — on the site, in the app, in email, across
              the web, in the warehouse — can carry the items most
              likely to be right for each member, wherever they are
              consuming content. Members find more of what they love.
              Brands are discovered by the members most likely to buy.
              And the membership becomes more valuable because of it.
              That is the work the platform does.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- WHAT VELOCITY IS: THE PLATFORM MAP ---------- */}
      <section className="py-16 lg:py-24 w-full bg-gray-50 border-y border-gray-200">
        <div className="container-custom">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-costco-red mb-3">
            What Costco Velocity is
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            One platform, seven layers.
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-12">
            When we say &ldquo;Costco Velocity,&rdquo; this is the
            shape of what we mean. Select a layer — each is stated by
            what it makes possible.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
            {LAYERS.map((layer, i) => {
              const Icon = layer.icon;
              const active = activeLayer.id === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setActiveLayer(layer)}
                  className={`flex flex-col items-start p-4 border-2 text-left transition-all ${
                    active
                      ? 'bg-costco-darkBlue border-costco-darkBlue text-white shadow-lg'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-costco-blue'
                  }`}
                >
                  <Icon className={`w-5 h-5 mb-2 ${active ? 'text-blue-200' : 'text-costco-blue'}`} />
                  <span className="text-[11px] font-extrabold uppercase tracking-wide opacity-70 mb-1">
                    Layer {i + 1}
                  </span>
                  <span className="font-bold text-sm leading-tight">{layer.label}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-white border border-gray-200 p-8 lg:p-10 max-w-5xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              {activeLayer.title}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-5 max-w-3xl">{activeLayer.body}</p>
            <p className="text-sm font-semibold text-gray-900 bg-gray-50 border-l-4 border-costco-red p-3 max-w-3xl">
              {activeLayer.enables}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- DESIGN PRINCIPLES ---------- */}
      <section className="py-16 lg:py-24 w-full bg-white">
        <div className="container-custom">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-costco-red mb-3">
            How it&rsquo;s designed
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-14">
            Three principles run through it.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="border-t-4 border-costco-darkBlue pt-6">
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VELOCITY AT WORK ---------- */}
      <section className="py-16 lg:py-24 w-full bg-costco-darkBlue text-white">
        <div className="container-custom">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-blue-300 mb-3">
            Velocity at work
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-14">
            What it looks like in practice.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {EXAMPLES.map((e) => {
              const Icon = e.icon;
              return (
                <div key={e.title} className="bg-white text-gray-900 p-8 flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="bg-blue-100 text-costco-blue p-3">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-widest text-costco-red">
                      {e.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold leading-snug mb-3">{e.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{e.body}</p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-3 mt-12">
            {[
              'Get discovered upstream, by the members most likely to buy',
              'Activate anywhere from one foundation',
              'Work through the platforms your team already uses',
              'Count results in sales, not proxies',
            ].map((t) => (
              <p key={t} className="flex items-center gap-2 font-semibold text-blue-100">
                <CheckCircle2 className="w-5 h-5 text-blue-300 shrink-0" /> {t}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TECHNICAL FAQS ---------- */}
      <section className="py-16 lg:py-24 w-full bg-white">
        <div className="container-custom">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-costco-red mb-3">
            Technical questions
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-12">
            Asked by the technical teams.
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
              Want the deeper technical conversation?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl">
              We&rsquo;ll walk your team through the platform,
              integrations and a clean-room demo — as technical as you
              want it.
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
            Costco Retail Media. Integration availability varies by
            partner and format and is confirmed by the Costco Retail
            Media team. Measurement descriptions reflect standard
            reporting capabilities.
          </p>
        </div>
      </section>
    </div>
  );
}
