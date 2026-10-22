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
  Search,
  Store,
} from 'lucide-react';

/*
  CONCEPT — Costco Velocity page, v3.
  Built on Mark's Buck Fifty LinkedIn articles (the announcement
  series) and his structural definition:
  - Velocity is NOT the retail media program. It is the platform
    and engine that powers it: core data, consent & preferences,
    identity resolution, signal capture, audience & prediction,
    activation, closed-loop measurement.
  - Pillars: Convert (onsite) and Reach (offsite).
  - Purpose: amplify item discovery to drive sales — bring the
    Treasure Hunt upstream. An engine to move merchandise.
  - Principles: transparent foundation, member-first architecture
    (member data curates experiences; it is not rented out),
    incrementality over attribution, open/modular architecture.
  - No references to other retailers. Data language stays delicate:
    signals, purchases, understanding — never members as product.
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
    body: 'Members tell Costco how they want to be communicated with, and what they\u2019re comfortable with. This layer records those choices once and applies them across everything the platform does — onsite, offsite and in the warehouse — so a member\u2019s preferences are never a setting in one system and a surprise in another.',
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
    enables: 'Makes possible: decisions made on what is relevant right now, in real time.',
  },
  {
    id: 'prediction',
    icon: Sparkles,
    label: 'Audience & Prediction',
    title: 'Where understanding becomes discovery',
    body: 'This layer turns what Costco knows into what a member sees next: audiences of members with shared tastes, and predictions of which items — out of everything great on Costco\u2019s shelves — a member would be most interested in, right now. It is the engine of bringing the Treasure Hunt upstream.',
    enables: 'Makes possible: the right item in front of the right member, before the trip even starts.',
  },
  {
    id: 'activation',
    icon: Send,
    label: 'Activation',
    title: 'Modular, at every point of contact',
    body: 'Activation is where the platform goes to work, in two suites. Convert powers onsite media — Costco.com and the app. Reach powers offsite media — the open web, search, social and streaming, delivered directly and through partner platforms. The same foundation also reaches physical spaces, and new channels plug in as members discover items in new places.',
    enables: 'Makes possible: members reached wherever they are consuming content, from one foundation.',
  },
  {
    id: 'measurement',
    icon: LineChart,
    label: 'Closed-Loop Measurement',
    title: 'The engine that proves it',
    body: 'Because purchases are membership-linked, the platform measures results in actual sales — online and at the warehouse register — with incrementality in view: did this drive a new sale, or claim credit for an existing one? And increasingly, it measures in flight, while a campaign can still be improved — not in a post-mortem after it ends.',
    enables: 'Makes possible: honest results in sales, delivered while they can still change the outcome.',
  },
];

const PRINCIPLES = [
  {
    title: 'Open and modular, by design',
    body: 'Velocity is built in connected pieces, with thoughtful integrations upstream and downstream, to remove friction from activation. Brands can work managed or self-serve, and through the platforms they already use. No mandated way of buying, no single rigid system — the foundation stays the same while the pieces evolve.',
  },
  {
    title: 'A member-first foundation',
    body: 'The architecture starts with the member. Costco\u2019s understanding of its members is used to curate better experiences — it is not rented out. And it stays at Costco: the discipline behind the platform is to own that information and keep its movement and copying to a minimum, with members\u2019 choices honoured at every layer.',
  },
  {
    title: 'Built to move merchandise',
    body: 'In the warehouse, velocity is the metric that matters: how fast great merchandise moves. The platform carries the same discipline into media. Its success is counted in sales and in trust — suppliers, brands and agencies working from the same tools and the same truth Costco uses itself: learn, plan, activate, analyze.',
  },
];

const EXAMPLES = [
  {
    icon: MonitorSmartphone,
    tag: 'Convert — onsite, in real time',
    title: 'The digital endcap that knows its member',
    body: 'A member opens Costco.com. Everything the platform needs sits inside Costco\u2019s private cloud, so in the moment the page loads, verified purchase signals and member segmentation shape what they see. The endcap carries the item they are most likely to love — a discovery they might not have made until the warehouse, made before the trip. Convert\u2019s Performance Display works this way: personalised placements, optimised toward sales, visible in flight.',
  },
  {
    icon: Globe2,
    tag: 'Reach — offsite, through partners',
    title: 'Plugged into The Trade Desk',
    body: 'A brand\u2019s team plans its media in The Trade Desk, a platform it already uses. Velocity plugs into that activation layer: Costco audiences — more than 1,300 custom segments, built and governed inside Costco\u2019s own environment — become available there, and reach members across the open web. Costco\u2019s information never ships out. When members buy, Reach\u2019s in-flight dashboard shows the verified sales while the campaign is still live — so teams optimise, not just attribute.',
  },
  {
    icon: Search,
    tag: 'Reach — discovery starts with search',
    title: 'The Treasure Hunt, at the search bar',
    body: 'For millions of members, the journey doesn\u2019t start at Costco\u2019s front door — it starts in a search bar, researching and comparing long before a trip. Reach\u2019s Performance Ads extend the Costco shelf into that moment, placing the items members are hunting for directly in product search results and routing them to Costco — discovery captured at the point of intent, measured closed-loop like everything else on the platform.',
  },
  {
    icon: Store,
    tag: 'In real life — the warehouse',
    title: 'Discovery continues down the aisle',
    body: 'The same foundation reaches the floor: warehouse and fuel-station screens carry messaging aligned to the members who shop that location and what is stocked there. The item a member discovered on the couch shows up supported in the aisle — one connected experience, from first search to checkout.',
  },
];

const FAQS = [
  {
    q: 'Is Costco Velocity the same thing as Costco Retail Media?',
    a: 'No — and the distinction matters. Costco Retail Media is the program: the team, the partnerships, the media brands buy. Costco Velocity is the technology platform underneath it — data, consent, identity, signals, audiences and prediction, activation, and the measurement engine. When we say a campaign is \u201cpowered by Costco Velocity,\u201d this page is what we mean.',
  },
  {
    q: 'What are Convert and Reach?',
    a: 'They are the two media suites the platform powers. Convert is onsite: media on Costco.com and in the app, including Performance Display — personalised digital endcaps decided in real time. Reach is offsite: programmatic, search, social and streaming that meet members wherever they are consuming content, activated directly or through partner platforms like The Trade Desk.',
  },
  {
    q: 'Where does the information live?',
    a: 'Inside Costco\u2019s own private cloud environment. The platform was designed so Costco\u2019s information stays within Costco\u2019s boundary — partners and tools connect in and work there, rather than the information being distributed out to them.',
  },
  {
    q: 'How does the relevance actually work?',
    a: 'In plain terms: what a member buys, saves and browses — resolved to their membership, with their preferences applied — forms signals. The audience and prediction layer reads those signals in real time to decide which items that member would most likely want to discover next. Advertisers receive the benefit of that relevance; member information itself is never handed over.',
  },
  {
    q: 'Does it depend on third-party cookies?',
    a: 'No. Identity in Velocity comes from the membership itself — the card, the login, the transaction record. The platform was built on that foundation from the start.',
  },
  {
    q: 'What measurement will we actually receive?',
    a: 'Closed-loop sales reporting — online and warehouse, incrementality in view — and, for offsite programmatic, in-flight: a self-serve dashboard (delivered through a secure clean-room environment) that matches impressions to verified sales while the campaign is live, so you can optimise during the flight instead of reading about it afterward. Reach measurement rolled out first for campaigns run through The Trade Desk.',
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
              technology and the engine underneath it — a closed-loop
              platform built to amplify item discovery and drive sales,
              and to do it in a way that makes membership more valuable.
              In the warehouse, velocity means merchandise that moves.
              This platform brings the same discipline to media.
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
            Bringing the Treasure Hunt upstream.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              The warehouse treasure hunt is famous for a reason:
              members wander, and great items find them. That
              serendipity isn&rsquo;t an accident — it&rsquo;s the
              result of rigorous merchandising. But the hunt
              doesn&rsquo;t have to wait for the trip. Members research,
              compare and discover long before they reach a warehouse —
              starting, very often, in a search bar.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Velocity exists to meet them there. By understanding what
              members actually buy, Costco&rsquo;s communication — on
              the site, in the app, across the web, in the warehouse —
              can carry the items most likely to be right for each
              member, wherever they are consuming content. Discovery
              starts earlier, communication earns its attention, and
              brands are found by the members most likely to buy.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
              'Amplify discovery, drive sales',
              'Learn, plan, activate, analyze — one platform',
              'Managed or self-serve, through your own tools',
              'Counted in incremental sales, in flight',
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
            Costco Retail Media, organised in two media suites —
            Convert (onsite) and Reach (offsite). Integration and
            dashboard availability vary by partner and format and are
            confirmed by the Costco Retail Media team.
          </p>
        </div>
      </section>
    </div>
  );
}
