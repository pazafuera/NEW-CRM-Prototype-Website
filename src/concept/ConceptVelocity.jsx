import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronDown,
  Database,
  Lock,
  LineChart,
  Server,
  Shield,
  Fingerprint,
  Users,
  Activity,
  Send,
  Home,
  RefreshCcw,
  CheckCircle2,
} from 'lucide-react';

/*
  CONCEPT — Costco Velocity page.
  This is the technical page, but the story is what the technology
  enables and why it is built the way it is — not how it is wired.
  Structure borrowed from the as-is prototype: three pillars, an
  interactive six-step flow, technical FAQs, CTA. Jargon translated:
  every technical idea is stated as the advantage it creates.
*/

const PRINCIPLES = [
  {
    icon: Database,
    title: 'The technology comes to the data',
    body: 'Most retail media ships member data out to a patchwork of vendors. Velocity runs inside Costco\u2019s own private cloud environment — the tools come to the data, not the other way around. Fewer copies of member data in the world means less risk for members, and one version of the truth for everyone planning and measuring.',
    enables: 'Why it matters: member data never leaves Costco\u2019s walls to be matched, modelled or measured.',
  },
  {
    icon: Fingerprint,
    title: 'Identity is a membership, not a guess',
    body: 'Velocity doesn\u2019t stitch together probabilistic profiles or lean on third-party cookies. It starts with the membership: a real card, a real household, real transactions. Targeting built on that foundation reaches the members you intend — and nobody has to estimate who saw what.',
    enables: 'Why it matters: precise reach and honest measurement, because identity is verified by the membership itself.',
  },
  {
    icon: LineChart,
    title: 'Measured where it counts: the register',
    body: 'Because every transaction is membership-linked, Velocity can follow a campaign all the way to the sale — online and at the warehouse register, down to the SKU. Advertisers don\u2019t have to settle for clicks and modelled lift when the actual answer is available.',
    enables: 'Why it matters: closed-loop measurement of real sales, including the growth that was incremental.',
  },
];

const FLOW = [
  {
    id: 'home',
    label: 'One home for the data',
    icon: Server,
    title: 'Everything starts in one place',
    body: 'Member transactions, online activity and campaign data live together in Costco\u2019s private cloud environment, organised the same way across every channel. One home means targeting, activation and measurement all work from the same data — no reconciling five vendors\u2019 versions of your campaign.',
    enables: 'Enables: consistency. The audience you planned is the audience that ran is the audience that got measured.',
  },
  {
    id: 'consent',
    label: 'Consent, built in',
    icon: Shield,
    title: 'Member choices travel with the data',
    body: 'Privacy settings and member preferences aren\u2019t an afterthought bolted on at the end — they are attached to the data as it moves through every step. If a member\u2019s permissions change, the change applies everywhere, automatically.',
    enables: 'Enables: trust you can demonstrate. Every use of member data respects the choices members actually made.',
  },
  {
    id: 'identity',
    label: 'Identity from membership',
    icon: Fingerprint,
    title: 'Real members, resolved once',
    body: 'Membership records, Costco.com logins and warehouse transactions resolve to the same households — deterministically, not by probability. That single identity is what every audience and every measurement is built from.',
    enables: 'Enables: reach without guesswork, and measurement without modelled identities filling the gaps.',
  },
  {
    id: 'audiences',
    label: 'Audiences & clean rooms',
    icon: Users,
    title: 'Build audiences, collaborate safely',
    body: 'Audiences are built from purchase history inside Velocity — and brands can bring their own first-party data into a secure clean room to see overlap and build together. The matching happens under strict controls; neither side receives the other\u2019s raw data.',
    enables: 'Enables: collaboration without exposure. Richer planning, zero lists changing hands.',
  },
  {
    id: 'signals',
    label: 'Signals come back',
    icon: Activity,
    title: 'Every response flows home',
    body: 'Ad views, clicks, streams and register transactions stream back into the same environment. That return loop is what makes closed-loop attribution and incrementality measurement possible — campaign by campaign, SKU by SKU.',
    enables: 'Enables: reporting based on what sold, while the campaign can still be improved — not after it ends.',
  },
  {
    id: 'activation',
    label: 'Activation, everywhere',
    icon: Send,
    title: 'One audience, every destination',
    body: 'From the same foundation, campaigns activate across Costco.com and the app, programmatic and streaming, social, and the screens in the warehouse. The destination changes; the audience definition and the measurement standard don\u2019t.',
    enables: 'Enables: a genuinely connected plan — members reached wherever they are, measured the same way everywhere.',
  },
];

const OUTCOMES = [
  {
    title: 'Plan on purchases, not proxies',
    body: 'Media plans built from what members demonstrably buy — the strongest planning signal retail has.',
  },
  {
    title: 'Work the way you already work',
    body: 'Velocity is built to connect with the buying platforms, clean rooms and measurement tools your team already uses. Bring your stack; we\u2019ll meet it.',
  },
  {
    title: 'Optimise mid-flight',
    body: 'Sales signals return while campaigns run, so budgets can move toward what is actually selling.',
  },
  {
    title: 'Defend the spend',
    body: 'When finance asks what the media did, the answer is in units and dollars at the register — not engagement charts.',
  },
];

const FAQS = [
  {
    q: 'Where does the data live, exactly?',
    a: 'Inside Costco\u2019s own private cloud environment. Velocity was built to bring the advertising technology into that environment rather than export member data to outside platforms. Matching, audience building and measurement all happen inside Costco\u2019s boundary.',
  },
  {
    q: 'How is member privacy protected?',
    a: 'Members\u2019 personal details are never exposed to advertisers. Data is used in aggregated and tokenised form, preferences and opt-outs are enforced as the data moves, and any collaboration with a brand\u2019s own data happens inside a secured clean room. Advertisers receive audiences and results — never member lists or personal information.',
  },
  {
    q: 'How do you attribute warehouse sales to digital ads?',
    a: 'The membership card is presented on every warehouse transaction. Velocity matches campaign exposure to those membership-linked transactions, so a digital campaign\u2019s effect shows up in actual warehouse sales — at SKU level where applicable — alongside online results.',
  },
  {
    q: 'Does it work without third-party cookies?',
    a: 'Yes — it was built that way from the start. Identity comes from the membership: card, login and transaction records. There is no cookie-based identity to deprecate.',
  },
  {
    q: 'Can we use our own DSP, clean room or measurement partners?',
    a: 'That\u2019s the design. Velocity connects with major buying platforms and clean-room environments so your team can plan, buy and measure with familiar tools, with Costco audiences and sales data flowing through the connections. Your rep can walk through the current integrations for your stack.',
  },
  {
    q: 'What measurement will we actually receive?',
    a: 'Closed-loop sales reporting — online and warehouse, at SKU level where it applies — with incrementality in view: the growth the campaign created, not just the sales it touched. Depending on the format, that arrives as a live dashboard, clean-room outputs, or conversions sent back to your own platforms through the Conversion API.',
  },
];

export default function ConceptVelocity() {
  const [activeStep, setActiveStep] = useState(FLOW[0]);
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
              The technology behind Costco Retail Media.
            </p>
            <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
              Every Costco transaction is tied to a membership. Velocity
              is the system built on that simple fact — it turns real
              purchases into precise audiences and honest measurement,
              without member data ever leaving Costco. This page is what
              that makes possible, and why we built it this way.
            </p>
          </div>

          {/* The loop, in one picture */}
          <div className="lg:col-span-5">
            <div className="bg-white text-gray-900 p-7 lg:p-8 shadow-2xl">
              <div className="space-y-3">
                {[
                  ['Members buy', 'Every sale tied to a membership'],
                  ['Velocity learns', 'Audiences built on real purchases'],
                  ['Media runs', 'Onsite, offsite, in the warehouse'],
                  ['Sales are measured', 'Back at the register — and the loop repeats'],
                ].map(([t, s], i) => (
                  <div key={t} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span
                        className={`w-9 h-9 flex items-center justify-center font-extrabold text-white shrink-0 ${
                          i === 3 ? 'bg-costco-red' : 'bg-costco-blue'
                        }`}
                      >
                        {i + 1}
                      </span>
                      {i < 3 && <span className="w-0.5 flex-1 bg-gray-200 my-1" />}
                    </div>
                    <div className="pb-3">
                      <p className="font-extrabold leading-tight">{t}</p>
                      <p className="text-sm text-gray-600">{s}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="flex items-center gap-2 text-xs font-bold text-gray-500 border-t border-gray-200 pt-4 mt-1">
                <RefreshCcw className="w-4 h-4 text-costco-blue" />
                One loop, one system — that&rsquo;s the whole architecture
                story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- WHY IT'S BUILT THIS WAY ---------- */}
      <section className="py-16 lg:py-24 w-full bg-white">
        <div className="container-custom">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-costco-red mb-3">
            Why it&rsquo;s built this way
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-14">
            Three decisions explain the whole system.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PRINCIPLES.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="border-t-4 border-costco-darkBlue pt-6">
                  <div className="bg-blue-100 text-costco-blue p-3 w-max mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{p.body}</p>
                  <p className="text-sm font-semibold text-gray-900 bg-gray-50 border-l-4 border-costco-red p-3">
                    {p.enables}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- THE FLOW (interactive, plain language) ---------- */}
      <section className="py-16 lg:py-24 w-full bg-gray-50 border-y border-gray-200">
        <div className="container-custom">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-costco-red mb-3">
            How a campaign flows
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Six steps, membership to measurement.
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-12">
            Select a step. Each one is stated the way it matters to
            you: what it does for a campaign, not how it&rsquo;s wired.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {FLOW.map((step, i) => {
              const Icon = step.icon;
              const active = activeStep.id === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step)}
                  className={`flex flex-col items-start p-4 border-2 text-left transition-all ${
                    active
                      ? 'bg-costco-darkBlue border-costco-darkBlue text-white shadow-lg'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-costco-blue'
                  }`}
                >
                  <Icon className={`w-5 h-5 mb-2 ${active ? 'text-blue-200' : 'text-costco-blue'}`} />
                  <span className="text-[11px] font-extrabold uppercase tracking-wide opacity-70 mb-1">
                    Step {i + 1}
                  </span>
                  <span className="font-bold text-sm leading-tight">{step.label}</span>
                </button>
              );
            })}
          </div>

          <div className="bg-white border border-gray-200 p-8 lg:p-10 max-w-5xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              {activeStep.title}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-5 max-w-3xl">{activeStep.body}</p>
            <p className="text-sm font-semibold text-gray-900 bg-gray-50 border-l-4 border-costco-red p-3 max-w-3xl">
              {activeStep.enables}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- WHAT IT MEANS FOR YOU ---------- */}
      <section className="py-16 lg:py-24 w-full bg-white">
        <div className="container-custom">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-costco-red mb-3">
            What this means for you
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-14">
            Technology you&rsquo;ll feel in the results.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl">
            {OUTCOMES.map((o) => (
              <div key={o.title} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-costco-blue shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-1.5">{o.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{o.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-3 bg-gray-50 border border-gray-200 p-5 max-w-5xl mt-14">
            <Lock className="w-5 h-5 text-costco-blue shrink-0 mt-0.5" />
            <p className="text-gray-700 leading-relaxed">
              <strong>The short version:</strong> Costco members trust
              Costco with their business. Velocity is built so that
              trust is never the price of a campaign — the data stays
              home, the identity is real, and the measurement goes all
              the way to the register.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- TECHNICAL FAQS ---------- */}
      <section className="py-16 lg:py-24 w-full bg-gray-50 border-t border-gray-200">
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
      <section className="py-16 lg:py-24 w-full bg-costco-darkBlue text-white">
        <div className="container-custom flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Want the deeper technical conversation?
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl">
              We&rsquo;ll walk your team through the architecture,
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
            Notes: Costco Velocity is Costco&rsquo;s retail media
            technology platform. Integration availability varies by
            partner and format and is confirmed by the Costco Retail
            Media team. Measurement descriptions reflect standard
            reporting capabilities.
          </p>
        </div>
      </section>
    </div>
  );
}
