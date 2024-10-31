import React from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 5500 },
];

const categoryData = [
  { name: 'Electronics', value: 400 },
  { name: 'Clothing', value: 300 },
  { name: 'Books', value: 200 },
  { name: 'Home', value: 278 },
];

const COLORS = ['#FF45A6', '#FF85C0', '#FFB6D9', '#FFE6F2'];

export function RevenueChart() {
  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-6">Revenue Trend</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF45A6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#FF45A6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#fff',
              }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#FF45A6"
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function CategoryDistribution() {
  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-6">Sales by Category</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#fff',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const customerData = [
  { month: 'Jan', new: 400, returning: 240 },
  { month: 'Feb', new: 300, returning: 139 },
  { month: 'Mar', new: 500, returning: 380 },
  { month: 'Apr', new: 450, returning: 430 },
  { month: 'May', new: 600, returning: 520 },
  { month: 'Jun', new: 550, returning: 490 },
];

export function CustomerComparisonChart() {
  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-6">New vs Returning Customers</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={customerData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#fff',
              }}
            />
            <Bar dataKey="new" fill="#FF45A6" />
            <Bar dataKey="returning" fill="#FF85C0" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const conversionData = [
  { day: '1', rate: 65 },
  { day: '2', rate: 68 },
  { day: '3', rate: 62 },
  { day: '4', rate: 72 },
  { day: '5', rate: 66 },
  { day: '6', rate: 70 },
  { day: '7', rate: 75 },
];

export function ConversionRateChart() {
  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h3 className="text-xl font-bold mb-6">Conversion Rate</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={conversionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="day" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '0.5rem',
                color: '#fff',
              }}
            />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#FF45A6"
              strokeWidth={2}
              dot={{ fill: '#FF45A6' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}