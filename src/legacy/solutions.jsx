// LEGACY 2014 pre-refresh version of this page, kept for reference. Live version: src/pages/
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Laptop,
  Tv,
  Store,
  CheckCircle2,
  Monitor,
  PlaySquare,
  Share2,
  Mail,
  Smartphone,
  BookOpen,
  Fuel,
  Users,
  ShoppingBag,
  Layout,
  Truck,
  Zap,
  Briefcase,
  BarChart3,
  LayoutDashboard,
  Search,
  LayoutTemplate,
  MonitorSpeaker,
  Target,
  ArrowRight,
  X
} from 'lucide-react';

const PLACEMENTS = [
  // --- ONSITE & APP ---
  {
    id: 'performance-product',
    title: 'Performance Product Ads',
    category: 'Onsite & App',
    pillar: 'onsite',
    icon: Search,
    placementPills: ['Costco.com', 'Costco App'],
    objective: 'Drive High-Volume Sales & Win the Digital Shelf',
    stats: [
      { value: '5x+', label: 'Average ROAS' },
      { value: '+18%', label: 'Sales Lift vs. Baseline' }
    ],
    targeting: 'High-intent search keywords, active category browsing, and competitor SKU conquests.',
    images: [
      { label: 'In Grid Placement', url: '/images/performance-product-ingrid.png' },
      { label: 'Homepage', url: '/images/performance-product-homepage.png' },
      { label: 'Category & Search', url: '/images/performance-product-category.png' },
      { label: 'Product Details Page', url: '/images/performance-product-pdp.png' }
    ],
    features: [
      'Secure premium top-of-search and category grid positioning across Costco.com and the mobile app.',
      'Leverage predictive bidding powered by real-time member purchase signals.',
      'Sync directly with warehouse inventory to automatically pause out-of-stock items.',
      'Measure success with 100% deterministic, SKU-level closed-loop attribution.',
    ],
    mockupType: 'search',
    poweredBy: 'Criteo',
    service: 'Managed & Self',
    measurement: 'Online Sales',
    dashboard: 'Yes',
  },
  {
    id: 'performance-display',
    title: 'Performance Display',
    category: 'Onsite & App',
    pillar: 'onsite',
    icon: LayoutTemplate,
    placementPills: ['Costco.com', 'Costco App'],
    objective: 'Maximize Targeted Consideration & Capture Active Shoppers',
    stats: [
      { value: '5x+', label: 'Average ROAS' },
      { value: '+18%', label: 'Sales Lift vs. Baseline' }
    ],
    targeting: 'High-intent search keywords, active category browsing, and competitor SKU conquests.',
    images: [
      { label: 'Category & Search - Premium', url: '/images/performance-display-category.png' },
      { label: 'Category & Search - Left Rail', url: '/images/performance-display-search.png' },
      { label: 'Homepage', url: '/images/performance-display-homepage.png' }
    ],
    features: [
      'Intercept high-intent members seamlessly within organic browsing grids.',
      'Target dynamically using deterministic behavioral and contextual purchase history.',
      'Optimize creatives in real-time based on live cart additions and browsing data.',
      'Connect online ad exposure directly to omnichannel sales lift.',
    ],
    mockupType: 'banner',
    poweredBy: 'Costco Velocity',
    service: 'Managed & Self',
    measurement: 'Omnichannel Sales',
    dashboard: 'Yes',
  },
  {
    id: 'reserved-display',
    title: 'Reserved Display',
    category: 'Onsite & App',
    pillar: 'onsite',
    icon: Monitor,
    placementPills: ['Costco.com', 'Costco App'],
    objective: 'Command Mass Brand Awareness & Premium Visibility',
    targeting: 'High-intent search keywords, active category browsing, and competitor SKU conquests.',
    stats: [
      { value: '5x+', label: 'Average ROAS' },
      { value: '+18%', label: 'Sales Lift vs. Baseline' }
    ],
    images: [
      { label: 'Homepage & Category - Skinny Banner', url: '/images/reserved-display-skinny.png' },
      { label: 'Homepage - Hero Banner', url: '/images/reserved-display-homepage-hero.png' },
      { label: 'Homepage - Banner', url: '/images/reserved-display-homepage-banner.png' },
      { label: 'Category - Hero', url: '/images/reserved-display-category-hero.png' },
      { label: 'Product Details Page - Banner', url: '/images/reserved-display-pdp-banner.png' }
    ],
    features: [
      'Guarantee high-impact, premium placements across Costco.com homepage and category hubs.',
      'Target precise member profiles using verified Costco Velocity demographic and behavioral segments.',
      'Drive high-volume traffic directly to Brand Showcases or custom Product Detail Pages.',
      'Amplify brand reach during peak seasonal buying and Multi-Vendor Mailer (MVM) events.',
    ],
    mockupType: 'banner',
    poweredBy: 'Costco Velocity',
    service: 'Managed',
    measurement: 'Omnichannel Sales',
    dashboard: 'Yes',
  },
  {
    id: 'native-ads',
    title: 'Native Site Placements',
    category: 'Onsite & App',
    pillar: 'onsite',
    icon: Layout,
    placementPills: ['Costco.com', 'Costco App'],
    objective: 'Integrate Seamlessly with the Trusted Costco Merchandising Experience',
    images: [
      { label: 'Homepage - Branded Banner + Carousel', url: '/images/native-banner-carousel.png' },
      { label: 'Homepage - Branded / Themed Carousel', url: '/images/native-themed-carousel.png' },
      { label: 'Homepage - Hero Banner', url: '/images/native-hero-banner.png' },
      { label: 'Homepage - Rotating Hero Banner', url: '/images/native-rotating-hero.png' },
      { label: 'Homepage - Half Hero', url: '/images/native-half-hero.png' },
      { label: 'Homepage - Half Banner', url: '/images/native-half-banner.png' },
      { label: 'Homepage - One Third Hero', url: '/images/native-half-hero.png' },
      { label: 'Category - Banner', url: '/images/native-category-banner.png' },
      { label: 'Search - Banner', url: '/images/native-search-banner.png' }
    ],
    features: [
      'Leverage the Costco "Halo Effect" with ads that mirror native editorial and merchandising content.',
      'Engage members through highly curated, non-disruptive homepage and category features.',
      'Route high-intent traffic to customized brand collections and rich-media destinations.',
      'Measure 1:1 omnichannel sales impact from premium brand-building placements.',
    ],
    mockupType: 'native',
    poweredBy: 'Costco Velocity',
    service: 'Managed',
    measurement: 'Omnichannel Sales',
    dashboard: 'Yes (measurement only)',
  },
  {
    id: 'brand-showcases',
    title: 'Brand Showcases',
    category: 'Onsite & App',
    pillar: 'onsite',
    icon: Store,
    placementPills: ['Costco.com', 'Costco App'],
    objective: 'Deliver Immersive Brand Storytelling for High-Value Baskets',
    images: [
      { label: 'Enhanced Brand Showcase', url: '/images/brand-showcase.png' }
    ],
    features: [
      'Build a dedicated, interactive storefront hosted natively on Costco.com.',
      'Consolidate your brand portfolio to drive cross-category discovery and multi-item baskets.',
      'Capture traffic seamlessly from Reserved Display, Email, and Offsite programmatic campaigns.',
      'Gain deep insights into member dwell time, engagement, and direct-to-cart conversion.',
    ],
    mockupType: 'showcase',
    poweredBy: 'Costco',
    service: 'Managed',
    measurement: 'Omnichannel Sales',
    dashboard: 'No',
  },
  {
    id: 'same-day-ads',
    title: 'Costco Same-Day Ads',
    category: 'Onsite & App',
    pillar: 'onsite',
    icon: Truck,
    placementPills: ['Costco.com', 'Costco App'],
    objective: 'Capture Immediate Demand & Drive Same-Day Delivery Sales',
    images: [
      { label: '', url: 'https://bfasset.costco-static.com/56O3HXZ9/at/tj75vs9wx5str27pvk7g3/26w07335_same_day_marketing-opps.png?auto=webp&format=png' }
    ],
    features: [
      'Reach high-urgency members actively building baskets on the Costco Same-Day platform.',
      'Secure prominent sponsored placements across search results and digital grocery aisles.',
      'Match ads precisely with real-time, localized warehouse inventory availability.',
      'Accelerate immediate conversion and maximize share-of-basket for everyday essentials.',
    ],
    mockupType: 'sameday',
    poweredBy: 'Instacart',
    service: 'Managed',
    measurement: 'Omnichannel Sales (media KPIs not available)',
    dashboard: 'No',
  },
  {
    id: 'app',
    title: 'App Specific Placements',
    category: 'Onsite & App',
    pillar: 'onsite',
    icon: Smartphone,
    placementPills: ['Costco App'],
    objective: 'Engage Mobile-First Shoppers & Influence In-Warehouse Trips',
    images: [
      { label: '', url: 'https://bfasset.costco-static.com/56O3HXZ9/at/6hcn2mx3tsxf7jggvvm7m778/26w07335_costco_app_marketing-opps.png?auto=webp&format=png' }
    ],
    features: [
      'Prominent positioning in the native Costco iOS & Android apps.',
      'Reach members building shopping lists prior to warehouse trips.',
      'Direct integration with digital Warehouse Savings offers.',
      'Drive omnichannel conversion among Costco\'s most digitally engaged member cohort.',
    ],
    mockupType: 'push',
    poweredBy: 'Costco Velocity',
    service: 'Managed',
    measurement: 'Omnichannel Sales',
    dashboard: 'No',
  },

  // --- OFFSITE & PROGRAMMATIC ---
  {
    id: 'managed-service-programmatic',
    title: 'Managed Service Programmatic',
    category: 'Offsite',
    pillar: 'offsite',
    icon: Users,
    placementPills: ['The Trade Desk', 'Yahoo! DSP'],
    objective: 'Extend Brand Reach Using Verified Costco Purchase Data',
    images: [
      { label: '', url: 'https://bfasset.costco-static.com/56O3HXZ9/at/vzpknnmf83b6bmgm87xjjwrt/26w07335-offsite-marketing-opps.png?auto=webp&format=png' }
    ],
    features: [
      'Activate campaigns using 100+ pre-built, deterministic Costco buyer segments.',
      'Execute seamlessly across premium display and video inventory via expert managed service.',
      'Ensure absolute brand safety and privacy through secure Clean Room architecture.',
      'Prove ROAS by linking offsite ad exposure directly to verified warehouse and digital rings.',
    ],
    mockupType: 'audiences',
    poweredBy: 'Costco Velocity + Select DSPs',
    service: 'Managed & Self',
    measurement: 'Omnichannel Sales',
    dashboard: 'Yes (Measurement)',
  },
  {
    id: 'self-serve-programmatic',
    title: 'Self Service Programmatic',
    category: 'Offsite',
    pillar: 'offsite',
    icon: Users,
    placementPills: ['The Trade Desk', 'Yahoo! DSP', 'DV360 / YouTube', 'Epsilon', 'Criteo', 'Perion'],
    objective: 'Empower Agency Control with Costco\'s Deterministic Audience Graph',
    images: [
      { label: '', url: 'https://bfasset.costco-static.com/56O3HXZ9/at/vzpknnmf83b6bmgm87xjjwrt/26w07335-offsite-marketing-opps.png?auto=webp&format=png' }
    ],
    features: [
      'Export highly accurate, first-party Costco member segments directly to your preferred DSP.',
      'Maintain full campaign control and agility using your in-house trading teams.',
      'Protect member privacy utilizing zero-data-leakage Clean Room ID synchronization.',
      'Validate media investments with deterministic, closed-loop Costco sales reporting.',
    ],
    mockupType: 'audiences',
    poweredBy: 'Costco Velocity + Select DSPs',
    service: 'Managed & Self',
    measurement: 'Omnichannel Sales',
    dashboard: 'Yes (Measurement)',
  },
  {
    id: 'ctv-programmatic',
    title: 'Connected TV (CTV)',
    category: 'Offsite',
    pillar: 'offsite',
    icon: Tv,
    placementPills: ['DSP Partners'],
    objective: 'Connect Premium Streaming Audiences to Verified Warehouse Sales',
    images: [],
    features: [
      'Deliver high-impact, unskippable video ads on top-tier streaming networks and apps.',
      'Target deterministic Costco households rather than relying on probabilistic IP matching.',
      'Control frequency capping precisely to ensure a premium, non-intrusive member experience.',
      'Measure the direct impact of big-screen storytelling on physical warehouse foot traffic and sales.',
    ],
    mockupType: 'ctv',
    poweredBy: 'Costco Velocity + Select DSPs',
    service: 'Managed & Self',
    measurement: 'Omnichannel Sales',
    dashboard: 'Yes (Measurement)',
  },
  {
    id: 'social',
    title: 'Social Media',
    category: 'Offsite Precision',
    pillar: 'offsite',
    icon: Share2,
    placementPills: ['TikTok', 'YouTube','Instagram','Facebook','Pinterest'],
    objective: 'Supercharge Social ROAS with Verified Purchase Signals',
    images: [],
    features: [
      'Layer verified Costco purchase history over algorithms on Meta, TikTok, and Pinterest.',
      'Leverage co-branded creative formats that borrow equity from the trusted Costco brand.',
      'Drive qualified, high-intent traffic directly to Costco.com product pages.',
      'Measure incremental omnichannel lift via secure social clean room integrations.',
    ],
    mockupType: 'social',
    poweredBy: 'Social Network',
    service: 'Managed',
    measurement: 'Standard Engagement',
    dashboard: 'Yes',
  },
  {
    id: 'performance-shopping-ads',
    title: 'Performance Shopping Ads',
    category: 'Offsite Precision',
    pillar: 'offsite',
    icon: ShoppingBag,
    placementPills: ['Placeholder 1', 'Placeholder 2'],
    objective: 'Capture Active Product Search Intent Across the Open Web',
    images: [
      { label: '', url: 'https://mintcdn.com/costcoretailmedia/o2jErB8gO-t7CLzI/images/image-4.png?w=1650&fit=max&auto=format&n=o2jErB8gO-t7CLzI&q=85&s=8adc3b6acefc89bb8cbfb833d08b9eb2' }
    ],
    features: [
      'Intercept ready-to-buy shoppers actively searching external engines like Google Shopping.',
      'Promote Costco\'s catalog natively with real-time price and localized stock updates.',
      'Acquire net-new digital traffic and route it directly to Costco.com checkouts.',
      'Optimize ad spend automatically based on highest-converting omnichannel SKUs.',
    ],
    mockupType: 'shopping',
    poweredBy: 'Costco Velocity + Symbiosys',
    service: 'Managed & Self',
    measurement: 'Omnichannel Sales',
    dashboard: 'Yes',
  },
  {
    id: 'email',
    title: 'Email Ads',
    category: 'Offsite Precision',
    pillar: 'offsite',
    icon: Mail,
    placementPills: ['Placeholder 1', 'Placeholder 2'],
    objective: 'Drive Traffic & Sales Through Costco\'s Most Trusted Digital Channel',
    images: [
      { label: '', url: 'https://bfasset.costco-static.com/56O3HXZ9/at/qjrm55f7gkgtr3zktqc23xv/26w07335_email_marketing-opps-v3.png?auto=webp&format=jpg' }
    ],
    features: [
      'Access millions of highly engaged, opted-in Costco Executive and Gold Star members.',
      'Target tailored brand messaging based on deterministic category affinity and past purchases.',
      'Benefit from industry-leading open rates driven by the Costco "Treasure Hunt" expectation.',
      'Generate immediate spikes in online traffic and measurable in-warehouse sales lift.',
    ],
    mockupType: 'email',
    poweredBy: 'Costco Velocity',
    service: 'Managed',
    measurement: 'Omnichannel Sales',
    dashboard: 'No',
  },
  {
    id: 'push',
    title: 'App Push Notifications',
    category: 'Offsite Precision',
    pillar: 'offsite',
    icon: Smartphone,
    placementPills: ['Placeholder 1', 'Placeholder 2'],
    objective: 'Command Instant Attention & Drive High-Urgency Action',
    images: [],
    features: [
      'Deliver rich media alerts directly to the lock screens of highly engaged app users.',
      'Trigger contextual notifications based on proximity, behavior, and seasonal relevance.',
      'Spark immediate list creation and digital shopping trips with exclusive value messaging.',
      'Launch new brand innovations or Kirkland Signature partnerships with maximum visibility.',
    ],
    mockupType: 'push',
    poweredBy: 'Costco Velocity',
    service: 'Managed',
    measurement: 'Omnichannel Sales',
    dashboard: 'Yes',
  },

  // --- WAREHOUSE & IRL ---
  {
    id: 'warehouse-digital',
    title: 'In-Warehouse Digital Display',
    category: 'Physical Touchpoints',
    pillar: 'irl',
    icon: MonitorSpeaker,
    placementPills: ['Placeholder 1', 'Placeholder 2'],
    objective: 'Intercept High-Intent Shoppers During the Physical "Treasure Hunt"',
    images: [],
    features: [
      'Command attention on high-definition screens strategically placed at high-traffic warehouse entrances.',
      'Deploy localized, day-parted messaging tailored to specific regional warehouse footprints.',
      'Amplify physical endcap promotions and live product demonstrations with digital motion.',
      'Measure campaign success deterministically through immediate register ring lift.',
    ],
    mockupType: 'store',
    poweredBy: 'Costco Velocity',
    service: 'Managed',
    measurement: 'Omnichannel Sales',
    dashboard: 'Yes',
  },
  {
    id: 'fuel-ads',
    title: 'Fuel Station Digital Screens',
    category: 'Physical Touchpoints',
    pillar: 'irl',
    icon: Fuel,
    placementPills: ['Placeholder 1', 'Placeholder 2'],
    objective: 'Drive Immediate Warehouse Foot Traffic from the Pump',
    images: [],
    features: [
      'Engage a captive audience with 3–5 minutes of guaranteed dwell time at the fuel pump.',
      'Deliver full-motion video and audio to members immediately before they enter the warehouse.',
      'Geofence messaging to align perfectly with specific local warehouse inventory and promotions.',
      'Connect fuel station ad exposure directly to subsequent same-day warehouse purchases.',
    ],
    mockupType: 'fuel',
    poweredBy: 'Costco Velocity',
    service: 'Managed',
    measurement: 'Omnichannel Sales',
    dashboard: 'Yes',
  },
  {
    id: 'magazine',
    title: 'Costco Connection Magazine',
    category: 'Physical Touchpoints',
    pillar: 'irl',
    icon: BookOpen,
    placementPills: ['Placeholder 1', 'Placeholder 2'],
    objective: 'Deliver Premium Brand Storytelling to Costco\'s Highest-Value Tier',
    images: [],
    features: [
      'Secure placement in the largest-circulation print publication in North America.',
      'Reach millions of highly loyal Executive Members directly in their homes.',
      'Benefit from prolonged household shelf-life and deep, dedicated reader engagement.',
      'Bridge physical and digital with interactive online editions featuring direct-to-buy links.',
    ],
    mockupType: 'magazine',
    poweredBy: 'Costco Print Media',
    service: 'Managed',
    measurement: 'Standard Media KPIs',
    dashboard: 'No',
  },
  {
    id: 'direct-mail',
    title: 'Direct Mail & Member Mailers',
    category: 'Physical Touchpoints',
    pillar: 'irl',
    icon: Mail,
    placementPills: ['Placeholder 1', 'Placeholder 2'],
    objective: 'Achieve 1:1 Household Penetration with Measurable Register Lift',
    images: [],
    features: [
      'Deliver physical branded inserts directly to deterministically verified member households.',
      'Align your brand with the highly anticipated Monthly Savings Booklets and category mailers.',
      'Capitalize on unmatched physical open rates and long-term household retention.',
      'Track exact coupon redemptions to prove direct offline sales attribution.',
    ],
    mockupType: 'directmail',
    poweredBy: 'Costco Velocity',
    service: 'Managed',
    measurement: 'Omnichannel Sales',
    dashboard: 'Yes',
  },

   // --- MEASUREMENT ---
   {
    id: 'Conversion API',
    title: 'Conversion API',
    category: 'Physical Touchpoints',
    pillar: 'measurement',
    icon: MonitorSpeaker,
    placementPills: ['Placeholder 1', 'Placeholder 2'],
    objective: 'Empower Real-Time Optimization with Deterministic Closed-Loop Attribution',
    images: [],
    features: [
      'Establish a secure, server-to-server connection to transmit offline and online sales data.',
      'Enable real-time campaign optimization within your preferred ad platforms and DSPs.',
      'Protect member privacy completely with zero reliance on third-party cookies or browser pixels.',
      'Unify your measurement strategy by tying ad spend directly to verified Costco register rings.',
    ],
    mockupType: 'store',
    poweredBy: 'Costco Velocity',
    service: 'Managed',
    measurement: 'Omnichannel Sales',
    dashboard: 'Yes',
  },
];

const CATEGORIES = [
  { id: 'onsite', label: 'Onsite & App', icon: Laptop },
  { id: 'offsite', label: 'Offsite & Programmatic', icon: Tv },
  { id: 'irl', label: 'Warehouse & IRL', icon: Store },
  { id: 'measurement', label: 'Measurement', icon: BarChart3 }
];

export default function Solutions() {
  const [activeTab, setActiveTab] = useState('onsite');
  const [selectedSolution, setSelectedSolution] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const foundSolution = PLACEMENTS.find(p => p.id === targetId);
      if (foundSolution) {
        setActiveTab(foundSolution.pillar);
        setSelectedSolution(foundSolution);
      }
    }
  }, [location.hash]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedSolution) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedSolution]);

  const filteredPlacements = PLACEMENTS.filter(p => p.pillar === activeTab);

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-20 font-sans">
      
      {/* 1. Hero Header Section */}
      <section className="bg-gradient-to-br from-costco-darkBlue via-costco-blue to-blue-950 text-white py-20 lg:py-28 relative overflow-hidden w-full border-b border-blue-900">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-6">
              Solutions Built to Drive Growth
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl leading-relaxed mb-8">
              Drive measurable sales lift across digital and physical
              touchpoints with transparent reporting and closed-loop
              attribution. Connect with high-intent Costco members everywhere
              they shop.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#placements"
                className="bg-costco-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 text-sm uppercase tracking-wider"
              >
                Explore Placements
              </a>
              <a
                href="/#contact"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-4 rounded-full backdrop-blur-md transition-all text-sm"
              >
                Request Media Kit
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-white">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-blue-200 mb-6">
              Omnichannel Capabilities
            </h3>
            <div className="space-y-5 text-sm font-semibold">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Costco.com and the Costco mobile app</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Offsite Programmatic & CTV Streaming</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>In-Warehouse Digital Signage & Fuel Ads</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>1:1 Closed-Loop SKU-Level Attribution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Simplified Main Content Area */}
      <div id="placements" className="container-custom mt-12 lg:mt-16 max-w-7xl mx-auto">
        
        {/* Horizontal Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gray-200 pb-2">
          {CATEGORIES.map(cat => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center px-6 py-3 rounded-t-xl font-bold text-sm transition-all border-b-4 ${
                  isActive 
                    ? 'border-costco-red text-costco-darkBlue bg-white shadow-sm' 
                    : 'border-transparent text-gray-500 hover:text-costco-blue hover:bg-gray-100'
                }`}
              >
                <Icon className={`w-4 h-4 mr-2 ${isActive ? 'text-costco-red' : 'text-gray-400'}`} />
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Scannable Grid of Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
          {filteredPlacements.map((item) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.id} 
                onClick={() => setSelectedSolution(item)}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-costco-blue hover:shadow-xl transition-all cursor-pointer flex flex-col h-full"
              >
                {/* Card Header */}
                <div className="flex items-center space-x-4 mb-5">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-costco-blue group-hover:text-white transition-colors text-costco-blue">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-gray-900 leading-tight group-hover:text-costco-blue transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Placement Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.placementPills?.slice(0, 3).map((pill, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                      {pill}
                    </span>
                  ))}
                  {item.placementPills?.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                      +{item.placementPills.length - 3}
                    </span>
                  )}
                </div>

                {/* Card Objective */}
                <p className="text-sm text-gray-600 font-medium leading-relaxed flex-grow">
                  {item.objective}
                </p>

                {/* Card Action */}
                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center text-sm font-bold text-costco-blue group-hover:text-costco-red transition-colors">
                  Explore Capabilities <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* 3. Deep Dive Details Modal */}
      {selectedSolution && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6 py-6 sm:py-12">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedSolution(null)}
          ></div>

          {/* Modal Content Window */}
          <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
            
            {/* Modal Sticky Header */}
            <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center space-x-3">
                <span className="bg-costco-red text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                  {selectedSolution.category}
                </span>
                <span className="text-sm font-semibold text-gray-500 hidden sm:block">
                  Solution Details
                </span>
              </div>
              <button 
                onClick={() => setSelectedSolution(null)}
                className="p-2 hover:bg-gray-100 rounded-full text-gray-500 hover:text-gray-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable Modal Body */}
            <div className="overflow-y-auto p-6 sm:p-10 hide-scrollbar">
              
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
                {selectedSolution.title}
              </h2>

              <div className="flex flex-wrap items-center gap-2 mb-8">
                {selectedSolution.placementPills?.map((pill, idx) => (
                  <span key={idx} className="bg-gray-100 border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {pill}
                  </span>
                ))}
              </div>

              {/* Clean Typography Layout (Objective & Features) */}
              <div className="mb-10 mt-8">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Campaign Objective
                </p>
                <p className="text-xl md:text-2xl font-extrabold text-costco-darkBlue leading-tight max-w-3xl mb-8">
                  {selectedSolution.objective}
                </p>

                <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400 mb-4">
                  Key Capabilities
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl">
                  {selectedSolution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm font-medium text-gray-700">
                      <span className="text-costco-red mr-3 font-bold text-lg leading-none">•</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clean Typography Layout (Metadata, Stats & Targeting) */}
              <div className="border-t border-b border-gray-200 py-8 mb-10 w-full space-y-8">
                {/* Top Row: Specs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Powered By</p>
                    <p className="font-extrabold text-gray-900 text-sm">{selectedSolution.poweredBy}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Service Model</p>
                    <p className="font-extrabold text-gray-900 text-sm">{selectedSolution.service}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Measurement</p>
                    <p className="font-extrabold text-gray-900 text-sm line-clamp-1" title={selectedSolution.measurement}>
                      {selectedSolution.measurement}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Online Dashboard</p>
                    <p className="font-extrabold text-gray-900 text-sm">{selectedSolution.dashboard}</p>
                  </div>
                </div>

                {/* Bottom Row: Stats & Targeting */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                  <div>
                    <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">
                      {selectedSolution.stats?.[0]?.label || 'Performance Stat'}
                    </p>
                    <p className="text-3xl font-extrabold text-costco-darkBlue">
                      {selectedSolution.stats?.[0]?.value || 'TBD'}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">
                      {selectedSolution.stats?.[1]?.label || 'Performance Stat'}
                    </p>
                    <p className="text-3xl font-extrabold text-costco-darkBlue">
                      {selectedSolution.stats?.[1]?.value || 'TBD'}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-2 flex items-center">
                      <Target className="w-3 h-3 mr-1.5 text-costco-red" /> Targeting
                    </p>
                    <p className="text-sm font-medium text-gray-700 leading-relaxed">
                      {selectedSolution.targeting || 'Deterministic audiences based on past purchases, category affinity, and demographic data.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Visual Previews */}
              <div className="w-full space-y-8">
                {selectedSolution.images && selectedSolution.images.length > 0 ? (
                  selectedSolution.images.map((img, idx) => (
                    <div key={idx} className="w-full rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white">
                      {img.label && (
                        <div className="bg-gray-100/80 px-6 py-4 border-b border-gray-200">
                          <h4 className="text-sm md:text-base font-extrabold text-gray-900 uppercase tracking-widest">
                            {img.label}
                          </h4>
                        </div>
                      )}
                      <img
                        src={img.url}
                        alt={`${selectedSolution.title} - ${img.label || 'Example'}`}
                        className="w-full h-auto object-contain bg-white"
                      />
                    </div>
                  ))
                ) : (
                  <div className="w-full max-w-2xl mx-auto">
                    {/* Fallbacks */}
                    {selectedSolution.mockupType === 'ctv' && (
                      <div className="bg-black text-white rounded-3xl p-10 border border-gray-800 flex flex-col items-center justify-center min-h-[300px] space-y-4">
                        <PlaySquare className="w-16 h-16 text-costco-red animate-pulse" />
                        <p className="text-lg font-bold text-gray-300">15s/30s CTV Ad Streaming on Premium Apps</p>
                        <span className="text-xs bg-gray-800 text-gray-400 px-4 py-1.5 rounded-full">
                          Matched to Verified Costco Profiles
                        </span>
                      </div>
                    )}
                    {selectedSolution.mockupType === 'social' && (
                      <div className="bg-white text-gray-900 rounded-3xl p-8 border border-gray-200 flex flex-col justify-center min-h-[300px] shadow-lg">
                        <div className="flex items-center space-x-3 mb-6">
                          <Share2 className="w-6 h-6 text-costco-blue" />
                          <span className="text-sm font-bold text-gray-700">Meta / Pinterest Sponsored Post</span>
                        </div>
                        <div>
                          <p className="text-lg font-bold text-gray-900">Costco Wholesale &times; Brand Partner</p>
                          <p className="text-sm text-gray-600 mt-2">Exclusive savings available now in-warehouse and online.</p>
                        </div>
                        <span className="mt-8 text-xs bg-gray-100 text-gray-500 font-mono px-3 py-2 rounded w-max border border-gray-200">
                          Targeting: Verified Costco Buyers
                        </span>
                      </div>
                    )}
                    {selectedSolution.mockupType === 'push' && (
                      <div className="bg-gray-800 text-white rounded-3xl p-10 border border-gray-700 flex flex-col items-center justify-center min-h-[300px] space-y-6 text-center">
                        <Smartphone className="w-14 h-14 text-costco-blue" />
                        <div className="bg-gray-900 p-5 rounded-2xl border border-gray-600 text-left w-full max-w-sm shadow-xl">
                          <p className="text-[11px] text-costco-blue font-bold tracking-wider">COSTCO APP &bull; NOW</p>
                          <p className="text-base font-bold text-gray-100 mt-1">Warehouse Deal Alert</p>
                          <p className="text-xs text-gray-400 mt-2 leading-relaxed">Save $5 on featured brands at your local warehouse today.</p>
                        </div>
                      </div>
                    )}
                    {selectedSolution.mockupType === 'store' && (
                      <div className="bg-gray-800 text-white rounded-3xl p-10 border border-gray-700 flex flex-col items-center justify-center min-h-[300px] space-y-4">
                        <Monitor className="w-16 h-16 text-costco-blue" />
                        <p className="text-lg font-bold text-gray-200">Entrance Digital Signage Loop</p>
                        <span className="text-xs bg-blue-900/60 text-blue-200 px-4 py-1.5 rounded-full border border-blue-400/30">
                          Active in Warehouses Nationwide
                        </span>
                      </div>
                    )}
                    {selectedSolution.mockupType === 'fuel' && (
                      <div className="bg-gray-800 text-white rounded-3xl p-10 border border-gray-700 flex flex-col items-center justify-center min-h-[300px] space-y-4 text-center">
                        <Fuel className="w-16 h-16 text-yellow-400" />
                        <p className="text-lg font-bold text-gray-200">Fuel Station Pump Video Screen</p>
                        <span className="text-xs bg-yellow-900/40 text-yellow-200 px-4 py-1.5 rounded-full border border-yellow-400/30">
                          Captive Audience &bull; 3&ndash;5 Min Dwell Time
                        </span>
                      </div>
                    )}
                    {selectedSolution.mockupType === 'magazine' && (
                      <div className="bg-white text-gray-900 rounded-3xl p-10 border border-gray-200 flex flex-col justify-between min-h-[300px] shadow-lg">
                        <div className="flex items-center space-x-3 border-b border-gray-100 pb-4">
                          <BookOpen className="w-6 h-6 text-costco-red" />
                          <span className="text-sm font-bold text-gray-700">Costco Connection Magazine</span>
                        </div>
                        <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl text-center my-6">
                          <p className="text-lg font-extrabold text-costco-darkBlue">Full Page Print Spread</p>
                          <p className="text-xs text-gray-500 mt-2">Mailed to Executive Members</p>
                        </div>
                        <span className="text-xs font-semibold text-gray-400 text-center">Largest Print Circulation in North America</span>
                      </div>
                    )}
                    {['search', 'banner', 'native', 'showcase', 'sameday', 'audiences', 'shopping', 'email', 'directmail'].includes(selectedSolution.mockupType) && (!selectedSolution.images || selectedSolution.images.length === 0) && (
                       <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200 flex flex-col items-center justify-center min-h-[300px] text-center">
                          <LayoutTemplate className="w-12 h-12 text-gray-300 mb-4" />
                          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Visual preview in development</p>
                       </div>
                    )}
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}