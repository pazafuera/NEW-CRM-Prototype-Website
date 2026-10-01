import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? 'text-costco-blue font-bold'
      : 'hover:text-costco-blue';

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Banner */}
      <div className="bg-costco-darkBlue text-white py-2.5 px-8 text-center text-xs font-semibold tracking-wide w-full">
        <span>
          POWERED BY COSTCO VELOCITY — Our Privacy-Safe Commerce Media Engine.
        </span>
        <Link
          to="/velocity"
          className="underline ml-2 text-blue-200 hover:text-white inline-flex items-center"
        >
          Learn More <ChevronRight className="w-3 h-3 ml-0.5" />
        </Link>
      </div>

      {/* Main Enterprise Navigation */}
      <nav className="w-full px-8 sm:px-12 lg:px-16 h-20 flex items-center justify-between">
        {/* Left Side Group: Logo + Main Nav Links */}
        <div className="flex items-center space-x-12">
          <Link to="/" className="flex items-center">
            <img
              src="https://mintcdn.com/costcoretailmedia/oy_VSuglkrd9GOVm/images/RetailMedia_CMYK_H_7X.jpg?fit=max&auto=format&n=oy_VSuglkrd9GOVm&q=85"
              alt="Costco Retail Media Logo"
              className="h-10 sm:h-12 object-contain"
            />
          </Link>

          {/* Left-Aligned Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-gray-700">
            <Link
              to="/solutions"
              className={`transition-colors ${isActive('/solutions')}`}
            >
              Solutions
            </Link>
            <Link
              to="/velocity"
              className={`transition-colors ${isActive('/velocity')}`}
            >
              Velocity
            </Link>
            <Link
              to="/updates"
              className={`transition-colors ${isActive('/updates')}`}
            >
              What's New
            </Link>
            <a
              href="/#impact"
              className="hover:text-costco-blue transition-colors"
            >
              Case Studies
            </a>
          </div>
        </div>

        {/* Right Side: Contact Button (Desktop) */}
        <div className="hidden lg:flex items-center">
          <a
            href="/#contact"
            className="bg-costco-red hover:bg-red-700 text-white px-7 py-3 rounded-full font-bold shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-costco-blue focus:outline-none p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-8 pt-3 pb-6 space-y-4 text-base font-semibold text-gray-800 shadow-lg">
          <Link
            to="/solutions"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-1"
          >
            Solutions
          </Link>
          <Link
            to="/velocity"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-1"
          >
            Velocity
          </Link>
          <Link
            to="/updates"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-1"
          >
            What's New
          </Link>
          <a
            href="/#impact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-1"
          >
            Case Studies
          </a>
          <a
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block bg-costco-red text-white text-center py-3 rounded-full font-bold"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
