import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CreditCard,
  TrendingUp,
  ShoppingBag,
  Award,
  Search,
  ShoppingCart,
  MapPin,
  ChevronDown,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export default function MemberDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="w-full bg-gray-100 text-gray-800 min-h-screen font-sans">
      {/* 1. MOCK COSTCO E-COMMERCE TOP BAR & SEARCH HEADER */}
      <div className="w-full bg-costco-darkBlue text-white text-xs py-1.5 px-4">
        <div className="container-custom flex justify-between items-center font-medium">
          <div className="flex space-x-6">
            <span className="flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5 text-blue-300 mr-1" />
              <span>Warehouse: </span>
              <strong className="text-white ml-1">Issaquah, WA (#110)</strong>
            </span>
            <span className="hidden md:inline">
              Delivery: <strong>98027</strong>
            </span>
          </div>
          <div className="flex space-x-6 text-gray-300">
            <span className="hover:text-white cursor-pointer">
              Savings & Offers
            </span>
            <span className="hover:text-white cursor-pointer">
              Executive Rewards
            </span>
            <span className="hover:text-white cursor-pointer">
              Customer Service
            </span>
          </div>
        </div>
      </div>

      {/* Main Retail Nav Header */}
      <header className="w-full bg-white border-b border-gray-200 py-4 shadow-sm">
        <div className="container-custom flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="https://mintcdn.com/costcoretailmedia/oy_VSuglkrd9GOVm/images/RetailMedia_CMYK_H_7X.jpg?fit=max&auto=format&n=oy_VSuglkrd9GOVm&q=85"
              alt="Costco Logo"
              className="h-9 sm:h-11 object-contain"
            />
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl relative">
            <input
              type="text"
              placeholder="Search Costco.com or enter item number..."
              className="w-full border-2 border-costco-blue rounded-full py-2.5 pl-5 pr-12 text-sm focus:outline-none shadow-inner"
            />
            <button className="absolute right-1 top-1 bottom-1 bg-costco-blue hover:bg-blue-700 text-white px-5 rounded-full flex items-center justify-center transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Cart & Account Quick Actions */}
          <div className="flex items-center space-x-6 text-xs font-bold text-gray-700">
            <div className="flex items-center space-x-2 bg-blue-50 text-costco-blue px-3.5 py-2 rounded-full border border-blue-200">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Executive Member</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-costco-blue">
              <ShoppingCart className="w-5 h-5" />
              <span>Cart (3)</span>
            </div>
          </div>
        </div>
      </header>

      {/* Sub Category Nav */}
      <div className="w-full bg-costco-blue text-white text-xs font-bold uppercase tracking-wider py-2.5 border-b border-blue-900">
        <div className="container-custom flex space-x-8 overflow-x-auto">
          <span className="hover:text-blue-200 cursor-pointer flex items-center">
            Shop All Departments <ChevronDown className="w-3 h-3 ml-1" />
          </span>
          <span className="hover:text-blue-200 cursor-pointer">
            Grocery & Household
          </span>
          <span className="hover:text-blue-200 cursor-pointer">
            Electronics
          </span>
          <span className="hover:text-blue-200 cursor-pointer">
            Warehouse Savings
          </span>
          <span className="hover:text-blue-200 cursor-pointer text-yellow-300">
            Member Value Month
          </span>
          <span className="hover:text-blue-200 cursor-pointer">
            Same-Day Delivery
          </span>
        </div>
      </div>

      {/* 2. TOP MEMBER LOYALTY MODULE */}
      <section className="w-full bg-gradient-to-r from-gray-900 via-costco-darkBlue to-blue-950 text-white py-8 border-b-4 border-costco-red shadow-xl">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700/80 pb-4 mb-6 gap-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-tr from-amber-400 to-yellow-300 p-2.5 rounded-2xl shadow-md text-gray-900 font-extrabold text-xs flex items-center">
                <CreditCard className="w-5 h-5 mr-1.5 text-gray-950" />
                EXECUTIVE
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center">
                  Welcome Back, Jane Doe
                  <ShieldCheck className="w-4 h-4 text-blue-400 ml-2" />
                </h2>
                <p className="text-xs text-gray-300">
                  Member #984021948210 • Issaquah Warehouse Shopper
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/15 p-1.5 rounded-2xl">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'overview'
                    ? 'bg-costco-blue text-white shadow'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Loyalty Snapshot
              </button>
              <button
                onClick={() => setActiveTab('recommendations')}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'recommendations'
                    ? 'bg-costco-blue text-white shadow'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Personalized Perks (3)
              </button>
            </div>
          </div>

          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-300">
                    2% Reward Progress
                  </span>
                  <Award className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight">
                  $184.20
                </div>
                <p className="text-xs text-gray-300 mt-1">
                  Earned for 2026 Reward Check
                </p>
                <div className="w-full bg-gray-700/60 h-2 rounded-full mt-3 overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full w-[72%]"></div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-green-300">
                    YTD Member Savings
                  </span>
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-3xl font-extrabold text-white tracking-tight">
                  $412.50
                </div>
                <p className="text-xs text-gray-300 mt-1">
                  Saved via Warehouse & Online Deals
                </p>
                <span className="inline-flex items-center text-[10px] text-green-300 font-semibold mt-2">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Top 10% Savings
                  Shopper
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-300">
                    Last Trip Purchase
                  </span>
                  <ShoppingBag className="w-4 h-4 text-blue-300" />
                </div>
                <div className="text-xl font-extrabold text-white truncate">
                  Issaquah Warehouse
                </div>
                <p className="text-xs text-gray-300 mt-1">
                  Aug 28 • 12 Items • $142.18
                </p>
                <a
                  href="#receipt"
                  className="inline-flex items-center text-[10px] text-blue-300 font-bold mt-3 hover:underline"
                >
                  View Digital Register Receipt{' '}
                  <ArrowRight className="w-3 h-3 ml-1" />
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-300">
                    Renewal Status
                  </span>
                  <Clock className="w-4 h-4 text-gray-300" />
                </div>
                <div className="text-xl font-extrabold text-white">
                  Auto-Renew Active
                </div>
                <p className="text-xs text-gray-300 mt-1">
                  Renews Nov 2026 via Visa ****4092
                </p>
                <span className="inline-flex items-center text-[10px] text-blue-200 font-semibold mt-3 bg-white/10 px-2 py-0.5 rounded">
                  Citi Costco Anywhere Visa Linked
                </span>
              </div>
            </div>
          )}

          {activeTab === 'recommendations' && (
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-1 max-w-xl">
                <span className="bg-amber-400 text-gray-900 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded">
                  Personalized Member Offer
                </span>
                <h3 className="text-lg font-extrabold text-white">
                  Save $10 Off Your Next Organic Pantry Restock
                </h3>
                <p className="text-xs text-gray-300">
                  Based on your frequent Kirkland Organic Coffee & Almond Milk
                  purchases. Valid online and in-warehouse.
                </p>
              </div>
              <button className="bg-costco-red hover:bg-red-700 text-white text-xs font-bold px-6 py-3 rounded-full shadow-lg flex-shrink-0">
                Activate Offer to Card
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 3. MOCK E-COMMERCE SHOPPING GRID */}
      <section className="py-12 w-full">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Recommended For Your Household
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Curated based on your Executive membership shopping affinity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <span className="bg-red-100 text-costco-red text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                $4.00 OFF
              </span>
              <div className="w-full h-40 bg-gray-100 rounded-xl my-4 flex items-center justify-center font-bold text-gray-400 text-xs">
                [KIRKLAND ORGANIC COFFEE]
              </div>
              <h4 className="text-sm font-bold text-gray-900 leading-snug">
                Kirkland Signature Organic Dark Roast Coffee Beans, 2.5 lbs
              </h4>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-baseline">
                <span className="text-xl font-extrabold text-gray-900">
                  $14.99
                </span>
                <span className="text-xs text-gray-400 line-through">
                  $18.99
                </span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <span className="bg-blue-100 text-costco-blue text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                NEW AT COSTCO
              </span>
              <div className="w-full h-40 bg-gray-100 rounded-xl my-4 flex items-center justify-center font-bold text-gray-400 text-xs">
                [DYSON VACUUM]
              </div>
              <h4 className="text-sm font-bold text-gray-900 leading-snug">
                Dyson V15 Detect Cordless Vacuum Cleaner
              </h4>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xl font-extrabold text-gray-900">
                  $499.99
                </span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <span className="bg-green-100 text-green-800 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                SAME-DAY ELIGIBLE
              </span>
              <div className="w-full h-40 bg-gray-100 rounded-xl my-4 flex items-center justify-center font-bold text-gray-400 text-xs">
                [PROTEIN POWDER]
              </div>
              <h4 className="text-sm font-bold text-gray-900 leading-snug">
                Orgain Organic Plant-Based Protein Powder, 2.7 lbs
              </h4>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xl font-extrabold text-gray-900">
                  $29.99
                </span>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase">
                EXECUTIVE COUPON
              </span>
              <div className="w-full h-40 bg-gray-100 rounded-xl my-4 flex items-center justify-center font-bold text-gray-400 text-xs">
                [PAPER TOWELS]
              </div>
              <h4 className="text-sm font-bold text-gray-900 leading-snug">
                Kirkland Signature Create-a-Size Paper Towels, 12 Rolls
              </h4>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-xl font-extrabold text-gray-900">
                  $22.99
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}