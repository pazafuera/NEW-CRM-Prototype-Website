import React from 'react';
import {
  Database,
  Lock,
  LineChart,
  Server,
  Shield,
  Fingerprint,
  Users,
  Activity,
  Send,
} from 'lucide-react';

export default function VelocityArchitecture() {
  return (
    <section
      id="velocity"
      className="bg-gray-100 py-16 sm:py-20 border-y border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-costco-blue/10 text-costco-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <span>The Tech Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              Powered by Costco Velocity
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Costco Velocity is our next-generation adtech and data
              infrastructure. Built on Google Cloud Platform, Velocity
              orchestrates deterministic data directly within our private
              environment—eliminating data movement, reducing risk, and removing
              black-box reporting.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-white p-2.5 rounded-lg border border-gray-200 text-costco-blue mt-1 shadow-sm">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">
                    Unified Data Platform
                  </h5>
                  <p className="text-sm text-gray-600">
                    Bringing tech into our private data environment rather than
                    shipping member data out.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-2.5 rounded-lg border border-gray-200 text-costco-blue mt-1 shadow-sm">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">
                    Privacy-First Clean Rooms
                  </h5>
                  <p className="text-sm text-gray-600">
                    Safely match brand 1st-party data with Costco’s membership
                    purchase history.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white p-2.5 rounded-lg border border-gray-200 text-costco-blue mt-1 shadow-sm">
                  <LineChart className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">
                    Granular Measurement & Lift
                  </h5>
                  <p className="text-sm text-gray-600">
                    Impression-level visibility validating media investments
                    with true incremental sales lift.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-md">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">
              Costco Velocity Infrastructure Stack
            </h4>
            <div className="space-y-3 text-sm font-semibold">
              <div className="bg-blue-50 border border-blue-200 text-costco-darkBlue p-3.5 rounded-lg flex justify-between items-center">
                <span>1. Unified Data Platform (Google Cloud)</span>
                <Server className="w-4 h-4 text-costco-blue" />
              </div>
              <div className="bg-blue-50 border border-blue-200 text-costco-darkBlue p-3.5 rounded-lg flex justify-between items-center">
                <span>2. Consent & Preference Layer</span>
                <Shield className="w-4 h-4 text-costco-blue" />
              </div>
              <div className="bg-blue-50 border border-blue-200 text-costco-darkBlue p-3.5 rounded-lg flex justify-between items-center">
                <span>3. 1:1 Identity Resolution</span>
                <Fingerprint className="w-4 h-4 text-costco-blue" />
              </div>
              <div className="bg-blue-50 border border-blue-200 text-costco-darkBlue p-3.5 rounded-lg flex justify-between items-center">
                <span>4. Audience Builder & Clean Rooms</span>
                <Users className="w-4 h-4 text-costco-blue" />
              </div>
              <div className="bg-blue-50 border border-blue-200 text-costco-darkBlue p-3.5 rounded-lg flex justify-between items-center">
                <span>5. Signal Capture & Attribution</span>
                <Activity className="w-4 h-4 text-costco-blue" />
              </div>
              <div className="bg-costco-blue text-white p-3.5 rounded-lg flex justify-between items-center shadow-sm">
                <span>6. Activation: Onsite, Offsite, In-Warehouse</span>
                <Send className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
