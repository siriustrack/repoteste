import React, { useState } from 'react';
import {
  BarChart3,
  Bell,
  Box,
  CreditCard,
  DollarSign,
  Download,
  FileText,
  PlusCircle,
  Settings,
  ShoppingBag,
  Users,
  UserX,
} from 'lucide-react';
import { NewAnalysisModal } from './components/NewAnalysisModal';
import {
  RevenueChart,
  CategoryDistribution,
  CustomerComparisonChart,
  ConversionRateChart,
} from './components/Charts';

function MetricCard({ icon: Icon, title, value, subValue }: { icon: any, title: string, value: string, subValue?: string }) {
  return (
    <div className="bg-gray-900 rounded-xl p-6 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="text-pink-500" size={24} />
        <h3 className="text-gray-400 font-medium">{title}</h3>
      </div>
      <p className="text-3xl font-bold text-white mb-1">{value}</p>
      {subValue && <p className="text-gray-400 text-sm">{subValue}</p>}
    </div>
  );
}

function App() {
  const [isAnalysisModalOpen, setIsAnalysisModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold">Analytics</h1>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">Projects</a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">Support</a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition">Latest Pages</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-pink-500 transition">
              <Bell size={20} />
            </button>
            <button className="p-2 text-gray-400 hover:text-pink-500 transition">
              <Settings size={20} />
            </button>
            <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        {/* Welcome Section */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="col-span-2 bg-gray-900 rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Welcome to your Business</h2>
            <p className="text-gray-400 mb-6">Track your business metrics and analyze customer behavior</p>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-pink-500 rounded-lg hover:bg-pink-600 transition">
                View Details
              </button>
              <button className="px-4 py-2 border border-gray-700 rounded-lg hover:border-pink-500 transition">
                Settings
              </button>
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Products Under Analysis</h3>
            <div className="flex flex-col gap-4">
              <button className="w-full px-4 py-2 bg-pink-500 rounded-lg hover:bg-pink-600 transition flex items-center justify-center gap-2">
                <Download size={20} />
                Export Analysis (CSV)
              </button>
              <button
                onClick={() => setIsAnalysisModalOpen(true)}
                className="w-full px-4 py-2 border border-gray-700 rounded-lg hover:border-pink-500 transition flex items-center justify-center gap-2"
              >
                <PlusCircle size={20} />
                New Analysis
              </button>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <MetricCard
            icon={DollarSign}
            title="Total Revenue"
            value="$2,456,789"
            subValue="+12.3% from last month"
          />
          <MetricCard
            icon={CreditCard}
            title="First Purchase Revenue"
            value="$892,345"
          />
          <MetricCard
            icon={ShoppingBag}
            title="Recurring Purchase Revenue"
            value="$1,564,444"
          />
          <MetricCard
            icon={Users}
            title="Total Buyers"
            value="24,589"
            subValue="+2,345 this month"
          />
          <MetricCard
            icon={UserX}
            title="Inactive Buyers"
            value="3,456"
          />
          <MetricCard
            icon={Box}
            title="Total Transactions"
            value="89,766"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <RevenueChart />
          <CategoryDistribution />
          <CustomerComparisonChart />
          <ConversionRateChart />
        </div>

        {/* Sales History */}
        <div className="bg-gray-900 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Sales History</h2>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-pink-500 rounded-lg hover:bg-pink-600 transition flex items-center gap-2">
                <FileText size={20} />
                Export Report
              </button>
              <button className="px-4 py-2 border border-gray-700 rounded-lg hover:border-pink-500 transition flex items-center gap-2">
                <BarChart3 size={20} />
                View Analytics
              </button>
            </div>
          </div>
          
          {/* Sample Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-4 px-4">Client</th>
                  <th className="text-left py-4 px-4">LTV</th>
                  <th className="text-left py-4 px-4">Avg. Ticket</th>
                  <th className="text-left py-4 px-4">Days Active</th>
                  <th className="text-left py-4 px-4">Last Purchase</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                    <td className="py-4 px-4">Client {i}</td>
                    <td className="py-4 px-4">${(Math.random() * 10000).toFixed(2)}</td>
                    <td className="py-4 px-4">${(Math.random() * 1000).toFixed(2)}</td>
                    <td className="py-4 px-4">{Math.floor(Math.random() * 365)}</td>
                    <td className="py-4 px-4">{new Date().toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <NewAnalysisModal
        isOpen={isAnalysisModalOpen}
        onClose={() => setIsAnalysisModalOpen(false)}
      />
    </div>
  );
}

export default App;