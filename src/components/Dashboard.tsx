import React from 'react';
import { AlertTriangle, CheckCircle, Clock, BarChart4, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mockTrainData } from '../data/mockData';
const Dashboard = () => {
  // Calculate summary statistics
  const totalTrains = mockTrainData.length;
  const inService = mockTrainData.filter(train => train.status === 'In Service').length;
  const onStandby = mockTrainData.filter(train => train.status === 'Standby').length;
  const inMaintenance = mockTrainData.filter(train => train.status === 'Maintenance').length;
  const criticalAlerts = mockTrainData.filter(train => train.fitnessCertificate < 7 || train.jobCardStatus === 'Urgent' || train.cleaningStatus === 'Overdue').length;
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Operations Dashboard</h1>
        <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-3 rounded-full text-sm font-medium flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          21:45 IST
        </div>
      </div>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              Fleet Status
            </h3>
            <BarChart4 className="w-5 h-5 text-blue-500" />
          </div>
          <p className="mt-2 text-3xl font-bold">{totalTrains}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total Trainsets
          </p>
          <div className="mt-4 flex justify-between text-sm">
            <span className="text-green-500">{inService} Active</span>
            <span className="text-yellow-500">{onStandby} Standby</span>
            <span className="text-red-500">{inMaintenance} Maintenance</span>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              Service Readiness
            </h3>
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
          <p className="mt-2 text-3xl font-bold">94.5%</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Fleet Availability
          </p>
          <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{
            width: '94.5%'
          }}></div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              Maintenance
            </h3>
            <Wrench className="w-5 h-5 text-blue-500" />
          </div>
          <p className="mt-2 text-3xl font-bold">5</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Scheduled Today
          </p>
          <div className="mt-4 flex justify-between text-sm">
            <span className="text-blue-500">3 Routine</span>
            <span className="text-yellow-500">1 Inspection</span>
            <span className="text-red-500">1 Repair</span>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              Alerts
            </h3>
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          </div>
          <p className="mt-2 text-3xl font-bold">{criticalAlerts}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Critical Issues
          </p>
          <div className="mt-4 text-sm text-yellow-500">
            Requires immediate attention
          </div>
        </div>
      </div>
      {/* Upcoming Allocations */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">
            Recommended Allocations for Tomorrow
          </h2>
          <Link to="/allocation" className="text-blue-500 flex items-center text-sm">
            View Details <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Train ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Recommendation
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Fitness
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Job Card
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Mileage
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Cleaning
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {mockTrainData.slice(0, 5).map(train => <tr key={train.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                    {train.id}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${train.recommendation === 'Service' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : train.recommendation === 'Standby' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                      {train.recommendation}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-2 ${train.fitnessCertificate > 20 ? 'bg-green-500' : train.fitnessCertificate > 7 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                      {train.fitnessCertificate} days
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className={`${train.jobCardStatus === 'None' ? 'text-green-500' : train.jobCardStatus === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>
                      {train.jobCardStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    {train.mileage.toLocaleString()} km
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm">
                    <span className={`${train.cleaningStatus === 'Complete' ? 'text-green-500' : train.cleaningStatus === 'Scheduled' ? 'text-yellow-500' : 'text-red-500'}`}>
                      {train.cleaningStatus}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">System Performance</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Punctuality KPI</span>
                <span className="font-medium">99.5%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{
                width: '99.5%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Mileage Balancing</span>
                <span className="font-medium">87.2%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{
                width: '87.2%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Branding Compliance</span>
                <span className="font-medium">94.8%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{
                width: '94.8%'
              }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Energy Efficiency</span>
                <span className="font-medium">92.3%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{
                width: '92.3%'
              }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Critical Insights</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500 mr-3">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium">
                  Trains KM-08 and KM-14 are approaching maintenance thresholds
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Schedule maintenance within next 72 hours
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-500 mr-3">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium">
                  Optimized stabling plan reduced night shunting by 18%
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Energy savings of approximately 240 kWh
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center text-yellow-500 mr-3">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium">
                  Fitness certificate for KM-03 expires in 5 days
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Schedule signaling inspection by Friday
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-500 mr-3">
                <BarChart4 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-medium">
                  Sponsored branding for Festival Week requires KM-10 and KM-12
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Priority allocation for high-traffic routes
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>;
};
export default Dashboard;