import React, { useState } from 'react';
import {
  Laptop,
  Tv,
  Store,
  Sparkles,
  CheckCircle2,
  Monitor,
  PlaySquare,
  Share2,
  Mail,
  Smartphone,
  BookOpen,
  Fuel,
  Users,
  Settings,
  ShoppingBag,
  Layout,
  Layers,
  Truck,
  Zap,
  Briefcase,
  BarChart3,
  LayoutDashboard,
} from 'lucide-react';

export default function Solutions() {
  const [activeCategory, setActiveCategory] = useState('onsite');

  const placements = [
    // --- ONSITE & APP ---
    {
      id: 'performance-product',
      title: 'Performance Product Ads',
      category: 'Onsite & App',
      pillar: 'onsite',
      format: 'Costco.com & Costco App',
      objective: 'High-Intent Conversion & Category Dominance',
      specs: 'Natively rendered from product catalog',
      imageUrl:
        'https://mintcdn.com/costcoretailmedia/o2jErB8gO-t7CLzI/images/image-9.png?w=1650&fit=max&auto=format&n=o2jErB8gO-t7CLzI&q=85&s=9f66c6384c141af75fe696c9f8350272',
      features: [
        'Top-of-search grid positioning and carousels on home, category, search, and product pages',
        'Automatic bid optimization based on member purchase propensity',
        'Real-time inventory sync to pause ads when out-of-stock',
        'Closed-loop ROAS tracking down to the item SKU level',
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
      format: 'Costco.com & Costco App',
      objective: 'Targeted Consideration & Category Shopping Capture',
      specs:
        'Natively rendered from product catalog with support for static or video brand asset',
      imageUrl:
        'https://mintcdn.com/costcoretailmedia/o2jErB8gO-t7CLzI/images/image-10.png?w=1650&fit=max&auto=format&n=o2jErB8gO-t7CLzI&q=85&s=b035268a776a9c6247c08c5e6e48af3d',
      features: [
        'Behavioral and Contextual targeting throughout the site',
        'Dynamic optimization powered by real-time cart data',
        'Seamless integration within organic browsing grids',
        'Closed-loop performance tracking across online and warehouse sales',
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
      format: 'Costco.com & Costco App',
      objective: 'Mass Brand Awareness & High-Volume Engagement',
      specs: 'IAB standard sizing',
      imageUrl:
        'https://bfasset.costco-static.com/56O3HXZ9/at/vggqpznx894h6bwcknqfx3n/26w07335_search_banner_marketing-opps_update.png?auto=webp&format=png',
      features: [
        'Guaranteed high-impact placement on Costco digital properties',
        'Audience targeting using Costco Velocity member segments',
        'Direct linking to custom Brand Showcase or PDPs',
        'High CTR performance during MVM and holiday promo periods',
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
      format: 'Costco.com & Costco App',
      objective:
        'High-impact merchandising placements that drive topline sales',
      specs: 'Unique sizes and formats',
      imageUrl:
        'https://bfasset.costco-static.com/56O3HXZ9/at/8k4npcfrwf82f46h43cxg/26w07335_homepage_carousel_marketing-opps.png?auto=webp&format=png',
      features: [
        'Blends seamlessly into home and category pages with native look and feel',
        'High engagement media that looks like merchandising features',
        'Links directly to brand showcases, curated collections pages, or PDPs',
        'Mass awareness, 1:1 sales measurement',
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
      format: 'Dedicated Brand Landing Pages & Customized Hubs',
      objective: 'Full Brand Immersion & Cross-Category Upsell',
      specs:
        'Custom Brand Hub Layout, Multi-SKU Showcase Grid, Responsive Video',
      imageUrl:
        'https://bfasset.costco-static.com//56O3HXZ9/at/rf7x5vpkhp88ww7hrz5s3t5m/26w07335_brand_showcase_marketing-opps.png?auto=webp&format=png',
      features: [
        'Custom interactive brand storefront hosted directly on Costco.com',
        'Curate your entire product portfolio in a premium branded environment',
        'Direct destination for Reserved Display and Offsite media traffic',
        'In-depth analytics on member interaction, page dwell, and cart additions',
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
      format: 'sameday.costco.com Sponsored Listings & Banners',
      objective: 'Immediate Demand Capture & Same-Day Sales',
      specs: '[Specs]',
      imageUrl:
        'https://bfasset.costco-static.com/56O3HXZ9/at/tj75vs9wx5str27pvk7g3/26w07335_same_day_marketing-opps.png?auto=webp&format=png',
      features: [
        'Reach high-urgency members ordering for Same-Day delivery',
        'Sponsored placement on Costco Same-Day grocery, search, and aisle pages',
        'Real-time local warehouse inventory availability matching',
        'Drives immediate Same-Day conversion and basket building',
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
      format:
        'Costco Mobile App - Push Notifications, App Tile, App Inbox, Warehouse Mode Product Ads',
      objective: 'Mobile-First Engagement & In-Warehouse Prep',
      specs: '[specs]',
      imageUrl:
        'https://bfasset.costco-static.com/56O3HXZ9/at/6hcn2mx3tsxf7jggvvm7m778/26w07335_costco_app_marketing-opps.png?auto=webp&format=png',
      features: [
        'Prominent positioning in the native Costco iOS & Android apps',
        'Reach members building shopping lists prior to warehouse trips',
        'Direct integration with digital Warehouse Savings offers',
        'High engagement rates from loyal app-first Costco shoppers',
      ],
      mockupType: 'push',
      poweredBy: 'Costco Velocity',
      service: 'Managed',
      measurement: 'Omnichannel Sales',
      dashboard: 'No',
    },

    // --- OFFSITE & PROGRAMMATIC ---
    {
      id: 'self-serve-audiences',
      title: 'Programmatic Media',
      category: 'Offsite',
      pillar: 'offsite',
      format: 'Exportable First-Party Segments to Preferred DSPs',
      objective:
        'Enable advertisers to target media to Costco audiences and measure against omnichannel sales',
      specs: 'Clean Room ID Sync (The Trade Desk, DV360, LiveRamp)',
      imageUrl:
        'https://bfasset.costco-static.com/56O3HXZ9/at/vzpknnmf83b6bmgm87xjjwrt/26w07335-offsite-marketing-opps.png?auto=webp&format=png',
      features: [
        'Access 100+ pre-built deterministic Costco buyer segments',
        'Activate directly through your agency or brand’s DSP of choice',
        'Privacy-first identity resolution with zero raw data exposure',
        'Closed-loop measurement back to Costco sales',
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
      format: 'Video ads on CTV',
      objective: 'Full-Funnel Brand Building & Costco Sales Lift',
      specs: '[specs]',
      imageUrl: '',
      features: [
        'Target verified Costco audiences on premium CTV apps',
        'Deterministic matching using privacy-safe Google Clean Rooms',
        'Measure direct lift on warehouse and online transactions',
        'Frequency capping to protect member ad experience',
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
      format: 'Meta and Pinterest Dark Posts',
      objective: 'Social Engagement & High-Intent Traffic Drive',
      specs: '[specs]',
      imageUrl: '',
      features: [
        'Target Costco followers directly within social feeds',
        'Co-branded ad creative leveraging trusted Costco signals',
        'Drive direct online traffic or warehouse visit intent',
        'TBD',
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
      format: 'Google Shopping Ads',
      objective: 'Capture Off-Platform Product Searches',
      specs: 'Natively rendered from product catalog',
      imageUrl:
        'https://mintcdn.com/costcoretailmedia/o2jErB8gO-t7CLzI/images/image-4.png?w=1650&fit=max&auto=format&n=o2jErB8gO-t7CLzI&q=85&s=8adc3b6acefc89bb8cbfb833d08b9eb2',
      features: [
        'Capture active product search intent across external search engines',
        'Promote Costco inventory directly on Google Shopping results',
        'Automated real-time price and stock availability updates',
        'High conversion rates from ready-to-buy shoppers',
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
      format: 'Banners Email Campaigns',
      objective: 'Broad or Segmented Reach to Drive Traffic & Sales',
      specs: '[specs]',
      imageUrl:
        'https://bfasset.costco-static.com/56O3HXZ9/at/qjrm55f7gkgtr3zktqc23xv/26w07335_email_marketing-opps-v3.png?auto=webp&format=jpg',
      features: [
        'Reach millions of opted-in, highly engaged Costco members',
        'Segment email sends by purchasing history and category affinity',
        'Direct links to Costco.com product listings or promotional landing pages',
        'Industry-leading open and conversion rates',
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
      format: 'Mobile App Rich Push Notifications',
      objective: 'Instant Attention & High-Urgency Promotion',
      specs: 'Native iOS/Android Rich Push, Max 120 Characters + Image',
      imageUrl: '',
      features: [
        'Deliver real-time updates directly to member mobile lock screens',
        'Trigger notifications based on geographic warehouse proximity',
        'High open rates driving immediate app traffic and list creation',
        'Perfect for launching new Kirkland Signature or brand innovations',
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
      format: 'High-Definition Screen Displays at Warehouse Entrances',
      objective: 'Physical Point-of-Purchase Influence & Foot Traffic Drive',
      specs: '1080x1920 Vertical Video/Static, 10s Motion Loop',
      imageUrl: '',
      features: [
        'Reach members physically walking into high-volume warehouses',
        'Dayparting and regional localization capabilities',
        'Complements in-warehouse product placement and demos',
        'Measured via register ring lift during campaign flights',
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
      format: 'Digital Video Screens at Costco Gas Station Pumps',
      objective: 'High-Dwell-Time Impression Capture',
      specs: '1080x1920 Full-Motion Video with Audio, 15s Loop',
      imageUrl: '',
      features: [
        'Captive audience with 3–5 minutes of average pump dwell time',
        'Drive immediate foot traffic from fuel station to the warehouse floor',
        'High-impact audio and full-motion video execution',
        'Geofenced targeting aligned with specific warehouse locations',
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
      format: 'Print & Digital Magazine High-Impact Placements',
      objective: 'Broad Brand Storytelling & Premium Credibility',
      specs: 'Full Page / Double Page Spread Print Specs (CMYK, 300 DPI)',
      imageUrl: '',
      features: [
        'The largest circulation print publication in North America',
        'Delivered directly to millions of Executive Costco members',
        'High shelf life and deep engagement from loyal cardholders',
        'Integrated digital edition with clickable direct-to-buy links',
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
      format: 'Physical Coupon Books & Targeted Household Mailings',
      objective: 'Tangible Household Penetration & Savings Drive',
      specs: 'Physical Print Insert, Custom Coupon Specs',
      imageUrl: '',
      features: [
        'In-home physical placement delivered directly to verified households',
        'Includes Monthly Savings Booklets and specialized category mailers',
        'Unmatched physical open rates and long-term household retention',
        'Direct tracking of redeemed coupons and associated register lift',
      ],
      mockupType: 'directmail',
      poweredBy: 'Costco Velocity',
      service: 'Managed',
      measurement: 'Omnichannel Sales',
      dashboard: 'Yes',
    },
  ];

  const activePlacements = placements.filter(
    (item) => item.pillar === activeCategory
  );

  return (
    <div className="w-full bg-gray-50 text-gray-800 min-h-screen">
      {/* 1. Hero Header Section (Identical Structure & Sizing to VelocityPage) */}
      <section className="bg-gradient-to-br from-costco-darkBlue via-costco-blue to-blue-950 text-white py-20 lg:py-28 relative overflow-hidden w-full border-b border-blue-900">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-400/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-200 mb-6">
              <Zap className="w-4 h-4 text-yellow-300" />
              <span>Omnichannel Retail Media</span>
            </div>

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
                <span>Onsite, App & Same-Day Search Ads</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Offsite Programmatic & CTV Streaming</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>In-Warehouse Digital Kiosks & Fuel Screens</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>1:1 Closed-Loop SKU-Level Attribution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Section */}
      <section id="placements" className="w-full py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button
              onClick={() => setActiveCategory('onsite')}
              className={`flex items-center px-7 py-4 rounded-full font-bold text-sm transition-all shadow-sm ${
                activeCategory === 'onsite'
                  ? 'bg-costco-blue text-white shadow-md scale-105'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Laptop className="w-4 h-4 mr-2.5" /> Onsite & App
            </button>
            <button
              onClick={() => setActiveCategory('offsite')}
              className={`flex items-center px-7 py-4 rounded-full font-bold text-sm transition-all shadow-sm ${
                activeCategory === 'offsite'
                  ? 'bg-costco-blue text-white shadow-md scale-105'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Tv className="w-4 h-4 mr-2.5" /> Offsite & Email
            </button>
            <button
              onClick={() => setActiveCategory('irl')}
              className={`flex items-center px-7 py-4 rounded-full font-bold text-sm transition-all shadow-sm ${
                activeCategory === 'irl'
                  ? 'bg-costco-blue text-white shadow-md scale-105'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Store className="w-4 h-4 mr-2.5" /> Warehouse & IRL
            </button>
          </div>

          {/* Stacked Full Channel Cards */}
          <div className="space-y-12">
            {activePlacements.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch"
              >
                {/* Left Column: Specs, Capabilities & Metadata Characteristics */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-costco-red">
                        {item.category}
                      </span>
                      <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-3">
                        {item.title}
                      </h2>
                      <p className="text-sm font-semibold text-gray-500">
                        Placement:{' '}
                        <span className="text-gray-800">{item.format}</span>
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Campaign Objective
                      </p>
                      <p className="text-sm font-bold text-costco-darkBlue">
                        {item.objective}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                        Key Capabilities
                      </h3>
                      <div className="space-y-3">
                        {item.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-3 text-sm font-semibold text-gray-700"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Solution Characteristics Grid (Left Column) */}
                  <div className="pt-6 border-t border-gray-100 space-y-4">
                    <div className="grid grid-cols-2 gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-200/80 text-xs">
                      <div className="flex items-center space-x-2">
                        <Zap className="w-4 h-4 text-costco-blue flex-shrink-0" />
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase">
                            Powered By
                          </p>
                          <p className="font-extrabold text-gray-900">
                            {item.poweredBy}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4 text-costco-blue flex-shrink-0" />
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase">
                            Service Model
                          </p>
                          <p className="font-extrabold text-gray-900">
                            {item.service}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <BarChart3 className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase">
                            Measurement
                          </p>
                          <p className="font-extrabold text-gray-900">
                            {item.measurement}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <LayoutDashboard className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase">
                            Online Dashboard
                          </p>
                          <p className="font-extrabold text-gray-900">
                            {item.dashboard}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 font-medium">
                      Specs: <span className="text-gray-700">{item.specs}</span>
                    </p>
                  </div>
                </div>

                {/* Right Column: Clean Example Image / Visual Preview Container (Light Background) */}
                <div className="lg:col-span-6 bg-gray-100/80 rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md flex flex-col justify-between min-h-[440px] overflow-hidden relative">
                  <div className="flex items-center justify-between text-xs text-gray-600 border-b border-gray-200/80 pb-4 mb-6 z-10">
                    <span className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                      {item.title} Example
                    </span>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                      Solution Preview
                    </span>
                  </div>

                  {/* Image Display or Fallback Mockup Renderer */}
                  <div className="my-auto w-full flex items-center justify-center p-2">
                    {item.imageUrl ? (
                      <div className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white p-2">
                        <img
                          src={item.imageUrl}
                          alt={`${item.title} Example`}
                          className="w-full h-auto max-h-[420px] object-contain mx-auto hover:scale-102 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="w-full">
                        {item.mockupType === 'search' && (
                          <div className="bg-white rounded-2xl p-6 shadow-md text-gray-900 space-y-4">
                            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                              <span className="text-xs font-bold text-gray-400 uppercase">
                                Search: "Kirkland Organic Coffee"
                              </span>
                              <span className="bg-costco-blue text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                SPONSORED
                              </span>
                            </div>
                            <div className="flex items-center space-x-4">
                              <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-gray-400 text-xs">
                                [PRODUCT]
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm font-bold text-gray-900">
                                  Kirkland Signature Organic Whole Bean Coffee,
                                  2.5 lbs
                                </p>
                                <p className="text-xs font-bold text-costco-blue">
                                  $18.99
                                </p>
                                <p className="text-[10px] text-green-700 font-semibold">
                                  In Stock at Your Warehouse & Online
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {item.mockupType === 'banner' && (
                          <div className="bg-gradient-to-r from-costco-blue to-blue-900 text-white rounded-2xl p-8 shadow-md flex flex-col justify-between h-52">
                            <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 w-max px-2 py-0.5 rounded">
                              FEATURED BRAND RESERVE
                            </span>
                            <div>
                              <p className="text-xl font-extrabold">
                                Exclusive Member Value Event
                              </p>
                              <p className="text-xs text-blue-100 mt-1">
                                Featured Brand Showcase • Limited Time Warehouse
                                Savings
                              </p>
                            </div>
                            <button className="bg-costco-red text-white text-xs font-bold px-4 py-2 rounded-full w-max">
                              Shop Deals
                            </button>
                          </div>
                        )}

                        {item.mockupType === 'native' && (
                          <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-md border border-gray-100 space-y-3">
                            <div className="flex items-center space-x-2">
                              <Layout className="w-4 h-4 text-costco-blue" />
                              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                SPONSORED NATIVE FEATURE
                              </span>
                            </div>
                            <div className="flex gap-4 items-center">
                              <div className="w-24 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-[10px] text-gray-400 font-bold">
                                [IMAGE]
                              </div>
                              <div className="space-y-1">
                                <h4 className="text-sm font-extrabold text-gray-900">
                                  Upgrade Your Home Coffee Experience
                                </h4>
                                <p className="text-xs text-gray-600 line-clamp-2">
                                  Discover premium organic roasts roasted fresh
                                  weekly and delivered straight to your door.
                                </p>
                                <span className="text-[10px] font-bold text-costco-blue inline-block pt-1">
                                  Explore Story & Shop &rarr;
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        {item.mockupType === 'showcase' && (
                          <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200 shadow-md space-y-3">
                            <div className="bg-costco-darkBlue text-white p-3 rounded-xl flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Layers className="w-4 h-4 text-blue-300" />
                                <span className="text-xs font-bold">
                                  OFFICIAL BRAND HUB
                                </span>
                              </div>
                              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">
                                Costco.com Showcase
                              </span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 pt-1">
                              <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                                <div className="w-full h-8 bg-gray-100 rounded mb-1 flex items-center justify-center text-[8px] text-gray-400">
                                  [SKU 1]
                                </div>
                                <p className="text-[10px] font-bold">
                                  Product A
                                </p>
                              </div>
                              <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                                <div className="w-full h-8 bg-gray-100 rounded mb-1 flex items-center justify-center text-[8px] text-gray-400">
                                  [SKU 2]
                                </div>
                                <p className="text-[10px] font-bold">
                                  Product B
                                </p>
                              </div>
                              <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                                <div className="w-full h-8 bg-gray-100 rounded mb-1 flex items-center justify-center text-[8px] text-gray-400">
                                  [SKU 3]
                                </div>
                                <p className="text-[10px] font-bold">
                                  Product C
                                </p>
                              </div>
                            </div>
                          </div>
                        )}

                        {item.mockupType === 'sameday' && (
                          <div className="bg-white text-gray-900 rounded-2xl p-6 shadow-md border border-gray-200 space-y-3">
                            <div className="flex items-center justify-between border-b pb-2">
                              <div className="flex items-center space-x-2">
                                <Truck className="w-4 h-4 text-costco-red" />
                                <span className="text-xs font-extrabold text-costco-darkBlue">
                                  COSTCO SAME-DAY DELIVERY
                                </span>
                              </div>
                              <span className="text-[10px] bg-red-100 text-costco-red font-bold px-2 py-0.5 rounded">
                                EXPRESS
                              </span>
                            </div>
                            <div className="flex items-center space-x-4 pt-1">
                              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-[10px] text-gray-400 font-bold">
                                [ITEM]
                              </div>
                              <div>
                                <p className="text-xs font-bold text-gray-900">
                                  Fresh Organic Bakery Bundle
                                </p>
                                <p className="text-xs text-costco-blue font-bold">
                                  $14.99 • Delivered in 2 Hours
                                </p>
                                <span className="text-[10px] text-green-700 font-semibold">
                                  Fulfilled by Local Warehouse
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        {item.mockupType === 'ctv' && (
                          <div className="bg-black text-white rounded-2xl p-6 border border-gray-800 flex flex-col items-center justify-center h-52 space-y-3">
                            <PlaySquare className="w-12 h-12 text-costco-red animate-pulse" />
                            <p className="text-xs font-bold text-gray-300">
                              15s CTV Ad Streaming on Hulu / Roku
                            </p>
                            <span className="text-[10px] bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
                              Matched to Verified Costco Household Profile
                            </span>
                          </div>
                        )}

                        {item.mockupType === 'audiences' && (
                          <div className="bg-gray-800 text-white rounded-2xl p-6 border border-gray-700 flex flex-col items-center justify-center h-52 space-y-3 text-center">
                            <Users className="w-12 h-12 text-costco-blue" />
                            <p className="text-xs font-bold text-gray-200">
                              1st-Party Costco Velocity Audience Segment
                            </p>
                            <span className="text-[10px] bg-blue-900/60 text-blue-200 px-3 py-1 rounded-full border border-blue-400/30">
                              Pushed via Clean Room to The Trade Desk / DV360
                            </span>
                          </div>
                        )}

                        {item.mockupType === 'social' && (
                          <div className="bg-white text-gray-900 rounded-2xl p-6 border border-gray-200 flex flex-col justify-between h-52 shadow-md">
                            <div className="flex items-center space-x-2">
                              <Share2 className="w-4 h-4 text-costco-blue" />
                              <span className="text-xs font-bold text-gray-700">
                                Meta / TikTok Sponsored Post
                              </span>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-gray-900">
                                Costco Wholesale × Brand Partner
                              </p>
                              <p className="text-[11px] text-gray-600">
                                Exclusive savings available now in-warehouse and
                                online.
                              </p>
                            </div>
                            <span className="text-[10px] bg-gray-100 text-gray-500 font-mono px-2 py-1 rounded w-max">
                              Targeting: Verified Costco Buyers
                            </span>
                          </div>
                        )}

                        {item.mockupType === 'shopping' && (
                          <div className="bg-white text-gray-900 rounded-2xl p-6 border border-gray-200 flex flex-col justify-between h-52 shadow-md">
                            <div className="flex items-center space-x-2">
                              <ShoppingBag className="w-4 h-4 text-green-600" />
                              <span className="text-xs font-bold text-gray-700">
                                Google Shopping Feed Ad
                              </span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-[10px] text-gray-400 font-bold">
                                [ITEM]
                              </div>
                              <div>
                                <p className="text-xs font-bold">
                                  Kirkland Signature Product
                                </p>
                                <p className="text-xs text-costco-blue font-bold">
                                  $24.99 at Costco.com
                                </p>
                              </div>
                            </div>
                            <span className="text-[10px] text-gray-400">
                              Real-Time Inventory Synced
                            </span>
                          </div>
                        )}

                        {item.mockupType === 'email' && (
                          <div className="bg-white text-gray-900 rounded-2xl p-6 border border-gray-200 flex flex-col justify-between h-52 shadow-md">
                            <div className="flex items-center space-x-2 border-b pb-2">
                              <Mail className="w-4 h-4 text-costco-blue" />
                              <span className="text-xs font-bold text-gray-700">
                                Costco Member Savings Email
                              </span>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-costco-darkBlue">
                                Member-Exclusive Savings Inside
                              </p>
                              <p className="text-[11px] text-gray-600 mt-1">
                                Special value on top brand picks for your next
                                warehouse trip.
                              </p>
                            </div>
                            <span className="text-[10px] bg-blue-50 text-costco-blue font-bold px-2 py-0.5 rounded w-max">
                              Opted-In Member Send
                            </span>
                          </div>
                        )}

                        {item.mockupType === 'push' && (
                          <div className="bg-gray-800 text-white rounded-2xl p-6 border border-gray-700 flex flex-col items-center justify-center h-52 space-y-3 text-center">
                            <Smartphone className="w-10 h-10 text-costco-blue" />
                            <div className="bg-gray-900 p-3 rounded-xl border border-gray-700 text-left max-w-xs">
                              <p className="text-[10px] text-costco-blue font-bold">
                                COSTCO APP • NOW
                              </p>
                              <p className="text-xs font-bold text-gray-100">
                                Warehouse Deal Alert
                              </p>
                              <p className="text-[10px] text-gray-400">
                                Save $5 on featured brands at your local
                                warehouse today.
                              </p>
                            </div>
                          </div>
                        )}

                        {item.mockupType === 'store' && (
                          <div className="bg-gray-800 text-white rounded-2xl p-6 border border-gray-700 flex flex-col items-center justify-center h-52 space-y-3">
                            <Monitor className="w-12 h-12 text-costco-blue" />
                            <p className="text-xs font-bold text-gray-200">
                              Entrance Digital Kiosk Loop
                            </p>
                            <span className="text-[10px] bg-blue-900/60 text-blue-200 px-3 py-1 rounded-full border border-blue-400/30">
                              Active in 800+ Warehouses
                            </span>
                          </div>
                        )}

                        {item.mockupType === 'fuel' && (
                          <div className="bg-gray-800 text-white rounded-2xl p-6 border border-gray-700 flex flex-col items-center justify-center h-52 space-y-3 text-center">
                            <Fuel className="w-12 h-12 text-yellow-400" />
                            <p className="text-xs font-bold text-gray-200">
                              Fuel Station Pump Video Screen
                            </p>
                            <span className="text-[10px] bg-yellow-900/40 text-yellow-200 px-3 py-1 rounded-full border border-yellow-400/30">
                              Captive Audience • 3–5 Min Dwell Time
                            </span>
                          </div>
                        )}

                        {item.mockupType === 'magazine' && (
                          <div className="bg-white text-gray-900 rounded-2xl p-6 border border-gray-200 flex flex-col justify-between h-52 shadow-md">
                            <div className="flex items-center space-x-2 border-b pb-2">
                              <BookOpen className="w-4 h-4 text-costco-red" />
                              <span className="text-xs font-bold text-gray-700">
                                Costco Connection Magazine
                              </span>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-lg text-center">
                              <p className="text-xs font-extrabold text-costco-darkBlue">
                                Full Page Print Spread
                              </p>
                              <p className="text-[10px] text-gray-500">
                                Mailed to Executive Members
                              </p>
                            </div>
                            <span className="text-[10px] text-gray-400">
                              Largest Print Circulation in North America
                            </span>
                          </div>
                        )}

                        {item.mockupType === 'directmail' && (
                          <div className="bg-white text-gray-900 rounded-2xl p-6 border border-gray-200 flex flex-col justify-between h-52 shadow-md">
                            <div className="flex items-center space-x-2 border-b pb-2">
                              <Mail className="w-4 h-4 text-costco-blue" />
                              <span className="text-xs font-bold text-gray-700">
                                Direct Household Coupon Mailer
                              </span>
                            </div>
                            <div>
                              <p className="text-xs font-bold text-gray-900">
                                Monthly Member Savings Booklet
                              </p>
                              <p className="text-[11px] text-gray-600">
                                Physical mailer delivered to verified cardholder
                                homes.
                              </p>
                            </div>
                            <span className="text-[10px] bg-green-50 text-green-700 font-bold px-2 py-0.5 rounded w-max">
                              Redeemable In-Warehouse
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
