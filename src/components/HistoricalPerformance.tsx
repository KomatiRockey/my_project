import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Calendar, ChevronDown, Download, TrendingUp, TrendingDown, Activity } from 'lucide-react';
const HistoricalPerformance = () => {
  const [timeRange, setTimeRange] = useState('3months');
  const [metricType, setMetricType] = useState('serviceReadiness');
  // Mock historical data
  const historicalData = {
    '1month': [{
      month: 'Week 1',
      serviceReadiness: 92.1,
      punctuality: 98.5,
      mileageBalance: 85.2,
      brandingCompliance: 96.3
    }, {
      month: 'Week 2',
      serviceReadiness: 93.5,
      punctuality: 99.0,
      mileageBalance: 86.8,
      brandingCompliance: 97.1
    }, {
      month: 'Week 3',
      serviceReadiness: 93.8,
      punctuality: 99.2,
      mileageBalance: 87.5,
      brandingCompliance: 97.5
    }, {
      month: 'Week 4',
      serviceReadiness: 94.2,
      punctuality: 99.3,
      mileageBalance: 88.1,
      brandingCompliance: 97.8
    }],
    '3months': [{
      month: 'Jan',
      serviceReadiness: 91.2,
      punctuality: 98.1,
      mileageBalance: 84.5,
      brandingCompliance: 95.8
    }, {
      month: 'Feb',
      serviceReadiness: 92.8,
      punctuality: 98.7,
      mileageBalance: 86.3,
      brandingCompliance: 96.5
    }, {
      month: 'Mar',
      serviceReadiness: 94.5,
      punctuality: 99.2,
      mileageBalance: 88.0,
      brandingCompliance: 97.8
    }],
    '6months': [{
      month: 'Oct',
      serviceReadiness: 89.5,
      punctuality: 97.2,
      mileageBalance: 81.3,
      brandingCompliance: 94.1
    }, {
      month: 'Nov',
      serviceReadiness: 90.1,
      punctuality: 97.5,
      mileageBalance: 82.4,
      brandingCompliance: 94.8
    }, {
      month: 'Dec',
      serviceReadiness: 90.8,
      punctuality: 97.8,
      mileageBalance: 83.6,
      brandingCompliance: 95.2
    }, {
      month: 'Jan',
      serviceReadiness: 91.2,
      punctuality: 98.1,
      mileageBalance: 84.5,
      brandingCompliance: 95.8
    }, {
      month: 'Feb',
      serviceReadiness: 92.8,
      punctuality: 98.7,
      mileageBalance: 86.3,
      brandingCompliance: 96.5
    }, {
      month: 'Mar',
      serviceReadiness: 94.5,
      punctuality: 99.2,
      mileageBalance: 88.0,
      brandingCompliance: 97.8
    }],
    '1year': [{
      month: 'Apr',
      serviceReadiness: 86.2,
      punctuality: 96.4,
      mileageBalance: 78.1,
      brandingCompliance: 92.3
    }, {
      month: 'May',
      serviceReadiness: 86.8,
      punctuality: 96.7,
      mileageBalance: 78.9,
      brandingCompliance: 92.8
    }, {
      month: 'Jun',
      serviceReadiness: 87.5,
      punctuality: 96.9,
      mileageBalance: 79.4,
      brandingCompliance: 93.1
    }, {
      month: 'Jul',
      serviceReadiness: 88.2,
      punctuality: 97.0,
      mileageBalance: 80.1,
      brandingCompliance: 93.5
    }, {
      month: 'Aug',
      serviceReadiness: 88.9,
      punctuality: 97.1,
      mileageBalance: 80.8,
      brandingCompliance: 93.8
    }, {
      month: 'Sep',
      serviceReadiness: 89.2,
      punctuality: 97.2,
      mileageBalance: 81.2,
      brandingCompliance: 94.0
    }, {
      month: 'Oct',
      serviceReadiness: 89.5,
      punctuality: 97.2,
      mileageBalance: 81.3,
      brandingCompliance: 94.1
    }, {
      month: 'Nov',
      serviceReadiness: 90.1,
      punctuality: 97.5,
      mileageBalance: 82.4,
      brandingCompliance: 94.8
    }, {
      month: 'Dec',
      serviceReadiness: 90.8,
      punctuality: 97.8,
      mileageBalance: 83.6,
      brandingCompliance: 95.2
    }, {
      month: 'Jan',
      serviceReadiness: 91.2,
      punctuality: 98.1,
      mileageBalance: 84.5,
      brandingCompliance: 95.8
    }, {
      month: 'Feb',
      serviceReadiness: 92.8,
      punctuality: 98.7,
      mileageBalance: 86.3,
      brandingCompliance: 96.5
    }, {
      month: 'Mar',
      serviceReadiness: 94.5,
      punctuality: 99.2,
      mileageBalance: 88.0,
      brandingCompliance: 97.8
    }]
  };
  const currentData = historicalData[timeRange];
  // Calculate improvements
  const calculateImprovement = metric => {
    const data = currentData;
    if (data.length < 2) return 0;
    const firstValue = data[0][metric];
    const lastValue = data[data.length - 1][metric];
    return ((lastValue - firstValue) / firstValue * 100).toFixed(1);
  };
  const improvements = {
    serviceReadiness: calculateImprovement('serviceReadiness'),
    punctuality: calculateImprovement('punctuality'),
    mileageBalance: calculateImprovement('mileageBalance'),
    brandingCompliance: calculateImprovement('brandingCompliance')
  };
  // Mock milestone data
  const milestones = [{
    date: '2023-01-15',
    event: 'AI System Implementation',
    impact: 'Initial deployment of AI-driven decision support'
  }, {
    date: '2023-02-10',
    event: 'Fitness Certificate Integration',
    impact: 'Automated tracking of certification validity windows'
  }, {
    date: '2023-02-28',
    event: 'Maintenance Optimization Update',
    impact: 'Improved algorithm for maintenance scheduling'
  }, {
    date: '2023-03-12',
    event: 'Branding Priority Rules',
    impact: 'Enhanced compliance with advertiser SLAs'
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Historical Performance</h1>
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-gray-500" />
          <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm p-2" value={timeRange} onChange={e => setTimeRange(e.target.value)}>
            <option value="1month">Last Month</option>
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
          </select>
        </div>
      </div>
      {/* Improvement Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Service Readiness
            </p>
            <div className={`flex items-center ${parseFloat(improvements.serviceReadiness) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {parseFloat(improvements.serviceReadiness) >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
              <span>{improvements.serviceReadiness}%</span>
            </div>
          </div>
          <p className="text-2xl font-bold mt-2">
            {currentData[currentData.length - 1].serviceReadiness}%
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Current value
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Punctuality KPI
            </p>
            <div className={`flex items-center ${parseFloat(improvements.punctuality) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {parseFloat(improvements.punctuality) >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
              <span>{improvements.punctuality}%</span>
            </div>
          </div>
          <p className="text-2xl font-bold mt-2">
            {currentData[currentData.length - 1].punctuality}%
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Current value
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Mileage Balance
            </p>
            <div className={`flex items-center ${parseFloat(improvements.mileageBalance) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {parseFloat(improvements.mileageBalance) >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
              <span>{improvements.mileageBalance}%</span>
            </div>
          </div>
          <p className="text-2xl font-bold mt-2">
            {currentData[currentData.length - 1].mileageBalance}%
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Current value
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Branding Compliance
            </p>
            <div className={`flex items-center ${parseFloat(improvements.brandingCompliance) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {parseFloat(improvements.brandingCompliance) >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
              <span>{improvements.brandingCompliance}%</span>
            </div>
          </div>
          <p className="text-2xl font-bold mt-2">
            {currentData[currentData.length - 1].brandingCompliance}%
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Current value
          </p>
        </div>
      </div>
      {/* Historical Trend Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Historical Trends</h2>
          <div className="flex items-center space-x-2">
            <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm p-2" value={metricType} onChange={e => setMetricType(e.target.value)}>
              <option value="serviceReadiness">Service Readiness</option>
              <option value="punctuality">Punctuality</option>
              <option value="mileageBalance">Mileage Balance</option>
              <option value="brandingCompliance">Branding Compliance</option>
            </select>
            <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600">
              <Download className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={currentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[dataMin => Math.floor(dataMin * 0.95), dataMax => Math.min(100, Math.ceil(dataMax * 1.02))]} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey={metricType} name={metricType === 'serviceReadiness' ? 'Service Readiness' : metricType === 'punctuality' ? 'Punctuality' : metricType === 'mileageBalance' ? 'Mileage Balance' : 'Branding Compliance'} stroke={metricType === 'serviceReadiness' ? '#3B82F6' : metricType === 'punctuality' ? '#10B981' : metricType === 'mileageBalance' ? '#F59E0B' : '#8B5CF6'} strokeWidth={2} dot={{
              r: 4
            }} activeDot={{
              r: 6
            }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          {metricType === 'serviceReadiness' ? <p>
              Service readiness has improved by {improvements.serviceReadiness}%
              over this period, primarily due to more efficient maintenance
              scheduling and improved fitness certificate tracking.
            </p> : metricType === 'punctuality' ? <p>
              Punctuality KPI has shown consistent improvement, reaching 99.2%
              in the most recent period, exceeding the target of 99.0%.
            </p> : metricType === 'mileageBalance' ? <p>
              Mileage balancing has improved significantly by{' '}
              {improvements.mileageBalance}%, reducing component wear variance
              across the fleet.
            </p> : <p>
              Branding compliance has improved to 97.8%, ensuring contractual
              commitments for advertiser exposure are consistently met.
            </p>}
        </div>
      </div>
      {/* Key Metrics Comparison */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-6">Metric Comparison</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[currentData[0], currentData[currentData.length - 1]]} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="month" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="serviceReadiness" name="Service Readiness" fill="#3B82F6" />
              <Bar dataKey="punctuality" name="Punctuality" fill="#10B981" />
              <Bar dataKey="mileageBalance" name="Mileage Balance" fill="#F59E0B" />
              <Bar dataKey="brandingCompliance" name="Branding Compliance" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Comparison between the first and last period in the selected
          timeframe, showing improvements across all key metrics.
        </div>
      </div>
      {/* System Milestones */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4">
          System Milestones & Updates
        </h2>
        <div className="relative pl-8 space-y-8 before:absolute before:top-2 before:bottom-0 before:left-2 before:border-l-2 before:border-dashed before:border-gray-300 dark:before:border-gray-600">
          {milestones.map((milestone, index) => <div key={index} className="relative">
              <div className="absolute left-[-30px] top-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 border-2 border-blue-500 flex items-center justify-center">
                <Activity className="w-3 h-3 text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {milestone.date}
                </p>
                <h3 className="font-medium mt-1">{milestone.event}</h3>
                <p className="text-sm mt-1">{milestone.impact}</p>
              </div>
            </div>)}
        </div>
      </div>
      {/* Actions */}
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center hover:bg-gray-50 dark:hover:bg-gray-650">
          <Download className="w-5 h-5 mr-2" />
          Export Report
        </button>
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
          View Detailed Analytics
        </button>
      </div>
    </div>;
};
export default HistoricalPerformance;