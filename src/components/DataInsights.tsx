import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { BarChart4, PieChart as PieChartIcon, Activity, Calendar, ArrowRight, Filter } from 'lucide-react';
import { mockTrainData } from '../data/mockData';
const DataInsights = () => {
  const [timeframe, setTimeframe] = useState('weekly');
  const [dataType, setDataType] = useState('mileage');
  // Calculate data for charts
  const statusData = [{
    name: 'In Service',
    value: mockTrainData.filter(t => t.status === 'In Service').length
  }, {
    name: 'Standby',
    value: mockTrainData.filter(t => t.status === 'Standby').length
  }, {
    name: 'Maintenance',
    value: mockTrainData.filter(t => t.status === 'Maintenance').length
  }];
  const COLORS = ['#10B981', '#F59E0B', '#EF4444'];
  const mileageData = mockTrainData.map(train => ({
    name: train.id,
    mileage: train.mileage,
    target: 50000
  })).slice(0, 10);
  const maintenanceData = [{
    name: 'Rolling Stock',
    scheduled: 12,
    completed: 10
  }, {
    name: 'Signaling',
    scheduled: 8,
    completed: 7
  }, {
    name: 'Telecom',
    scheduled: 5,
    completed: 5
  }, {
    name: 'HVAC',
    scheduled: 7,
    completed: 6
  }, {
    name: 'Braking',
    scheduled: 9,
    completed: 8
  }, {
    name: 'Electrical',
    scheduled: 6,
    completed: 4
  }];
  const cleaningData = [{
    name: 'Complete',
    value: mockTrainData.filter(t => t.cleaningStatus === 'Complete').length
  }, {
    name: 'Scheduled',
    value: mockTrainData.filter(t => t.cleaningStatus === 'Scheduled').length
  }, {
    name: 'Overdue',
    value: mockTrainData.filter(t => t.cleaningStatus === 'Overdue').length
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Data Insights</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Timeframe:
          </span>
          <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm p-2" value={timeframe} onChange={e => setTimeframe(e.target.value)}>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
          </select>
        </div>
      </div>
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
              <BarChart4 className="w-5 h-5" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Fleet Utilization
              </p>
              <p className="text-xl font-semibold">87.4%</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-green-500 flex items-center">
            <span>↑ 2.1% from last {timeframe}</span>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
              <Activity className="w-5 h-5" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Maintenance Compliance
              </p>
              <p className="text-xl font-semibold">94.2%</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-red-500 flex items-center">
            <span>↓ 0.8% from last {timeframe}</span>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300">
              <PieChartIcon className="w-5 h-5" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Mileage Balance Index
              </p>
              <p className="text-xl font-semibold">92.8%</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-green-500 flex items-center">
            <span>↑ 3.5% from last {timeframe}</span>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex items-center">
            <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Branding Compliance
              </p>
              <p className="text-xl font-semibold">97.1%</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-green-500 flex items-center">
            <span>↑ 1.2% from last {timeframe}</span>
          </div>
        </div>
      </div>
      {/* Fleet Status Chart */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 col-span-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Fleet Status</h2>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              25 Trainsets
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={statusData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                  {statusData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
            {statusData.map((entry, index) => <div key={entry.name} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{
              backgroundColor: COLORS[index % COLORS.length]
            }}></div>
                <span>
                  {entry.name}: {entry.value}
                </span>
              </div>)}
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Key Metrics Analysis</h2>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm p-1" value={dataType} onChange={e => setDataType(e.target.value)}>
                <option value="mileage">Mileage Distribution</option>
                <option value="maintenance">Maintenance Compliance</option>
                <option value="cleaning">Cleaning Status</option>
              </select>
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              {dataType === 'mileage' ? <BarChart data={mileageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="mileage" name="Current Mileage" fill="#3B82F6" />
                  <Bar dataKey="target" name="Target Balance" fill="#9333EA" />
                </BarChart> : dataType === 'maintenance' ? <BarChart data={maintenanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="scheduled" name="Scheduled" fill="#8B5CF6" />
                  <Bar dataKey="completed" name="Completed" fill="#10B981" />
                </BarChart> : <PieChart>
                  <Pie data={cleaningData} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value" label={({
                name,
                percent
              }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                    <Cell fill="#10B981" />
                    <Cell fill="#F59E0B" />
                    <Cell fill="#EF4444" />
                  </Pie>
                  <Tooltip />
                </PieChart>}
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            {dataType === 'mileage' ? <p>
                Train mileage distribution showing current kilometers vs. target
                balanced allocation.
              </p> : dataType === 'maintenance' ? <p>
                Maintenance tasks scheduled vs. completed across different
                systems.
              </p> : <p>Current cleaning status distribution across the fleet.</p>}
          </div>
        </div>
      </div>
      {/* Key Insights */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Key Insights</h2>
          <button className="text-blue-500 text-sm flex items-center">
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 py-1">
            <h3 className="font-medium">Mileage Balancing Improving</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              The standard deviation in fleet mileage has decreased by 18% since
              implementing AI-driven allocation, indicating more balanced usage
              across trainsets.
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 py-1">
            <h3 className="font-medium">Maintenance Efficiency</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Predictive maintenance scheduling has reduced unplanned downtime
              by 24% compared to the previous quarter.
            </p>
          </div>
          <div className="border-l-4 border-yellow-500 pl-4 py-1">
            <h3 className="font-medium">Branding Exposure</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Optimized allocation has increased contracted branding exposure by
              12.5 hours per week, exceeding SLA requirements by 8%.
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-1">
            <h3 className="font-medium">Energy Consumption</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Reduced night-time shunting operations have decreased energy
              consumption by approximately 240 kWh per week.
            </p>
          </div>
        </div>
      </div>
      {/* Anomaly Detection */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Anomaly Detection</h2>
        <div className="space-y-3">
          <div className="flex items-start p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-800 flex items-center justify-center">
                <span className="text-red-600 dark:text-red-300 font-bold">
                  !
                </span>
              </div>
            </div>
            <div className="ml-3">
              <h3 className="font-medium text-red-800 dark:text-red-200">
                Abnormal Brake Wear Pattern
              </h3>
              <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                KM-17 shows 32% faster brake pad wear than fleet average.
                Recommend inspection before next service.
              </p>
              <div className="mt-2">
                <button className="text-xs bg-white dark:bg-gray-700 text-red-700 dark:text-red-300 px-2 py-1 rounded border border-red-200 dark:border-red-700">
                  Schedule Inspection
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-start p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-800 flex items-center justify-center">
                <span className="text-yellow-600 dark:text-yellow-300 font-bold">
                  !
                </span>
              </div>
            </div>
            <div className="ml-3">
              <h3 className="font-medium text-yellow-800 dark:text-yellow-200">
                HVAC Performance Deviation
              </h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                KM-09 HVAC system showing 18% higher power consumption in the
                last 72 hours. Possible filter clogging or refrigerant issue.
              </p>
              <div className="mt-2">
                <button className="text-xs bg-white dark:bg-gray-700 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded border border-yellow-200 dark:border-yellow-700">
                  Monitor Trend
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default DataInsights;