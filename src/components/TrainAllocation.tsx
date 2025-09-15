import React, { useState } from 'react';
import { ArrowDownUp, Filter, CheckCircle, AlertTriangle, X, Info } from 'lucide-react';
import { mockTrainData } from '../data/mockData';
const TrainAllocation = () => {
  const [allocations, setAllocations] = useState(mockTrainData);
  const [sortField, setSortField] = useState('id');
  const [sortDirection, setSortDirection] = useState('asc');
  const [filterStatus, setFilterStatus] = useState('all');
  const handleSort = field => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
    const sortedData = [...allocations].sort((a, b) => {
      if (sortDirection === 'asc') {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });
    setAllocations(sortedData);
  };
  const handleFilter = status => {
    setFilterStatus(status);
    if (status === 'all') {
      setAllocations(mockTrainData);
    } else {
      const filteredData = mockTrainData.filter(train => train.recommendation.toLowerCase() === status.toLowerCase());
      setAllocations(filteredData);
    }
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Train Allocation Planning</h1>
        <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-3 rounded-full text-sm font-medium">
          Tomorrow's Schedule
        </div>
      </div>
      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center">
            <Filter className="w-5 h-5 mr-2 text-gray-500" />
            <span className="text-sm font-medium mr-3">Filter:</span>
            <div className="flex space-x-2">
              <button onClick={() => handleFilter('all')} className={`px-3 py-1 text-sm rounded-full ${filterStatus === 'all' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
                All
              </button>
              <button onClick={() => handleFilter('service')} className={`px-3 py-1 text-sm rounded-full ${filterStatus === 'service' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
                Service
              </button>
              <button onClick={() => handleFilter('standby')} className={`px-3 py-1 text-sm rounded-full ${filterStatus === 'standby' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
                Standby
              </button>
              <button onClick={() => handleFilter('maintenance')} className={`px-3 py-1 text-sm rounded-full ${filterStatus === 'maintenance' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}>
                Maintenance
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <ArrowDownUp className="w-5 h-5 mr-2 text-gray-500" />
            <span className="text-sm font-medium mr-3">Sort by:</span>
            <select className="bg-gray-100 dark:bg-gray-700 border-0 text-gray-600 dark:text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2" value={sortField} onChange={e => handleSort(e.target.value)}>
              <option value="id">Train ID</option>
              <option value="fitnessCertificate">Fitness Certificate</option>
              <option value="mileage">Mileage</option>
              <option value="recommendation">Recommendation</option>
            </select>
          </div>
        </div>
      </div>
      {/* Allocation Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-750">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Train ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Recommendation
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Fitness Certificate
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Job Card
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Branding
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Mileage
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Cleaning
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Bay Position
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Reasoning
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {allocations.map(train => <tr key={train.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {train.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${train.recommendation === 'Service' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : train.recommendation === 'Standby' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                      {train.recommendation}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-2 ${train.fitnessCertificate > 20 ? 'bg-green-500' : train.fitnessCertificate > 7 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                      {train.fitnessCertificate} days
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`${train.jobCardStatus === 'None' ? 'text-green-500' : train.jobCardStatus === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>
                      {train.jobCardStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {train.branding ? <span className="text-purple-600 dark:text-purple-400 font-medium">
                        {train.branding}
                      </span> : <span className="text-gray-400">None</span>}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {train.mileage.toLocaleString()} km
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`${train.cleaningStatus === 'Complete' ? 'text-green-500' : train.cleaningStatus === 'Scheduled' ? 'text-yellow-500' : 'text-red-500'}`}>
                      {train.cleaningStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {train.bayPosition || 'N/A'}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button className="text-blue-500 hover:text-blue-700 flex items-center">
                      <Info className="w-4 h-4 mr-1" />
                      Details
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Conflict Alerts */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
          Conflict Alerts
        </h2>
        <div className="space-y-3">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900 rounded-lg p-3 flex items-start">
            <div className="flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-yellow-500" />
            </div>
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                Bay Position Conflict
              </h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                Trains KM-05 and KM-12 are both assigned to Bay 3. Recommend
                relocating KM-12 to Bay 6.
              </p>
            </div>
            <button className="flex-shrink-0 ml-3">
              <X className="w-5 h-5 text-yellow-500 hover:text-yellow-700" />
            </button>
          </div>
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900 rounded-lg p-3 flex items-start">
            <div className="flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-red-500" />
            </div>
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-medium text-red-800 dark:text-red-200">
                Maintenance Priority Conflict
              </h3>
              <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                KM-08 is scheduled for both branding application and brake
                inspection. Maintenance should take priority due to safety
                implications.
              </p>
            </div>
            <button className="flex-shrink-0 ml-3">
              <X className="w-5 h-5 text-red-500 hover:text-red-700" />
            </button>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900 rounded-lg p-3 flex items-start">
            <div className="flex-shrink-0">
              <Info className="w-5 h-5 text-blue-500" />
            </div>
            <div className="ml-3 flex-1">
              <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">
                Branding Allocation Notice
              </h3>
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                Festival Week branding requires minimum 8 hours of exposure on
                high-traffic routes. Current allocation provides 7.5 hours.
                Consider swapping KM-04 and KM-10 routes.
              </p>
            </div>
            <button className="flex-shrink-0 ml-3">
              <X className="w-5 h-5 text-blue-500 hover:text-blue-700" />
            </button>
          </div>
        </div>
      </div>
      {/* Actions */}
      <div className="flex flex-col md:flex-row gap-4 justify-end">
        <button className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-750 flex items-center justify-center">
          Export to Excel
        </button>
        <button className="px-4 py-2 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-800 rounded-lg shadow-sm hover:bg-blue-100 dark:hover:bg-blue-800 flex items-center justify-center">
          Run What-If Simulation
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-sm hover:bg-green-700 flex items-center justify-center">
          <CheckCircle className="w-5 h-5 mr-2" />
          Confirm Allocation Plan
        </button>
      </div>
    </div>;
};
export default TrainAllocation;