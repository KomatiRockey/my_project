import React, { useState } from 'react';
import { PlayCircle, RefreshCw, Save, ChevronDown, ChevronUp, CheckCircle, AlertTriangle } from 'lucide-react';
import { mockTrainData } from '../data/mockData';
const Simulation = () => {
  const [simRunning, setSimRunning] = useState(false);
  const [simCompleted, setSimCompleted] = useState(false);
  const [expandedScenario, setExpandedScenario] = useState(null);
  const [selectedScenario, setSelectedScenario] = useState('standard');
  const [simulationResults, setSimulationResults] = useState(null);
  const scenarios = [{
    id: 'standard',
    name: 'Standard Operations',
    description: 'Baseline scenario with current fleet size and normal operating conditions.',
    parameters: {
      fleetSize: 25,
      peakTrains: 18,
      maintenanceBays: 5,
      weatherConditions: 'Normal'
    }
  }, {
    id: 'festival',
    name: 'Festival Week',
    description: 'Increased service frequency during the festival week with special branding requirements.',
    parameters: {
      fleetSize: 25,
      peakTrains: 22,
      maintenanceBays: 3,
      weatherConditions: 'Normal',
      brandingRequirements: 'High'
    }
  }, {
    id: 'maintenance',
    name: 'Heavy Maintenance Period',
    description: 'Scenario with multiple trainsets requiring simultaneous major maintenance.',
    parameters: {
      fleetSize: 25,
      peakTrains: 16,
      maintenanceBays: 7,
      weatherConditions: 'Normal'
    }
  }, {
    id: 'weather',
    name: 'Adverse Weather',
    description: 'Operations during monsoon season with increased cleaning requirements and potential delays.',
    parameters: {
      fleetSize: 25,
      peakTrains: 18,
      maintenanceBays: 5,
      weatherConditions: 'Monsoon'
    }
  }, {
    id: 'expansion',
    name: 'Fleet Expansion',
    description: 'Simulation with expanded fleet of 40 trainsets and additional depot.',
    parameters: {
      fleetSize: 40,
      peakTrains: 28,
      maintenanceBays: 8,
      weatherConditions: 'Normal',
      depots: 2
    }
  }];
  const toggleScenario = id => {
    setExpandedScenario(expandedScenario === id ? null : id);
  };
  const runSimulation = () => {
    setSimRunning(true);
    // Simulate API call delay
    setTimeout(() => {
      const results = generateMockResults(selectedScenario);
      setSimulationResults(results);
      setSimRunning(false);
      setSimCompleted(true);
    }, 2000);
  };
  const generateMockResults = scenarioId => {
    // Mock simulation results based on scenario
    switch (scenarioId) {
      case 'standard':
        return {
          serviceReadiness: 94.5,
          punctualityKPI: 99.2,
          energyEfficiency: 92.3,
          brandingCompliance: 97.8,
          maintenanceCompliance: 95.1,
          conflicts: 2,
          recommendations: ['Swap KM-03 and KM-12 to optimize maintenance schedule', 'Allocate KM-08 and KM-15 to high-traffic routes to balance mileage', 'Schedule deep cleaning for KM-05 during off-peak hours']
        };
      case 'festival':
        return {
          serviceReadiness: 88.2,
          punctualityKPI: 97.5,
          energyEfficiency: 89.6,
          brandingCompliance: 99.5,
          maintenanceCompliance: 91.8,
          conflicts: 5,
          recommendations: ['Defer non-critical maintenance for 4 trainsets until after festival week', 'Prioritize branded trainsets KM-02, KM-07, KM-14 for high-visibility routes', 'Implement accelerated cleaning cycles for high-frequency services', 'Consider temporary adjustment to maintenance thresholds']
        };
      case 'maintenance':
        return {
          serviceReadiness: 84.5,
          punctualityKPI: 98.1,
          energyEfficiency: 94.2,
          brandingCompliance: 92.3,
          maintenanceCompliance: 99.8,
          conflicts: 3,
          recommendations: ['Stagger major maintenance over 14-day period instead of 10 days', 'Temporarily reduce service frequency on low-traffic routes', 'Prioritize trainsets with branding commitments for service', 'Implement 24-hour maintenance shifts for critical systems']
        };
      case 'weather':
        return {
          serviceReadiness: 91.3,
          punctualityKPI: 95.8,
          energyEfficiency: 87.9,
          brandingCompliance: 96.4,
          maintenanceCompliance: 93.2,
          conflicts: 4,
          recommendations: ['Increase cleaning frequency for all trainsets by 25%', 'Allocate 2 additional standby trainsets during peak hours', 'Prioritize trainsets with newer HVAC systems for service', 'Schedule additional brake inspections for all trainsets']
        };
      case 'expansion':
        return {
          serviceReadiness: 96.8,
          punctualityKPI: 99.7,
          energyEfficiency: 95.3,
          brandingCompliance: 98.9,
          maintenanceCompliance: 97.5,
          conflicts: 1,
          recommendations: ['Balance maintenance between both depots based on geographic proximity', 'Implement cross-depot optimization for specialized maintenance', 'Establish dedicated branding bays at each depot', 'Implement automated cleaning systems to handle increased capacity']
        };
      default:
        return {
          serviceReadiness: 90,
          punctualityKPI: 95,
          energyEfficiency: 90,
          brandingCompliance: 95,
          maintenanceCompliance: 90,
          conflicts: 3,
          recommendations: ['No specific recommendations']
        };
    }
  };
  const resetSimulation = () => {
    setSimulationResults(null);
    setSimCompleted(false);
  };
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">What-If Simulation</h1>
        <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 py-1 px-3 rounded-full text-sm font-medium">
          Planning Tool
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Scenario Selection */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 lg:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Simulation Scenarios</h2>
          <div className="space-y-3">
            {scenarios.map(scenario => <div key={scenario.id} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div className={`p-3 flex items-center justify-between cursor-pointer ${selectedScenario === scenario.id ? 'bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500' : 'hover:bg-gray-50 dark:hover:bg-gray-750'}`} onClick={() => setSelectedScenario(scenario.id)}>
                  <div className="flex items-center">
                    <input type="radio" name="scenario" checked={selectedScenario === scenario.id} onChange={() => setSelectedScenario(scenario.id)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
                    <span className="ml-2 font-medium">{scenario.name}</span>
                  </div>
                  <button onClick={e => {
                e.stopPropagation();
                toggleScenario(scenario.id);
              }}>
                    {expandedScenario === scenario.id ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                  </button>
                </div>
                {expandedScenario === scenario.id && <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {scenario.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {Object.entries(scenario.parameters).map(([key, value]) => <div key={key} className="flex justify-between">
                            <span className="text-gray-500 dark:text-gray-400">
                              {key}:
                            </span>
                            <span className="font-medium">{value}</span>
                          </div>)}
                    </div>
                  </div>}
              </div>)}
          </div>
          <div className="mt-6 space-y-3">
            <button onClick={runSimulation} disabled={simRunning} className={`w-full py-2 px-4 rounded-lg flex items-center justify-center ${simRunning ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
              {simRunning ? <>
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Running Simulation...
                </> : <>
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Run Simulation
                </>}
            </button>
            {simCompleted && <button onClick={resetSimulation} className="w-full py-2 px-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-650">
                <RefreshCw className="w-5 h-5 mr-2" />
                Reset Simulation
              </button>}
          </div>
        </div>
        {/* Simulation Results */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Simulation Results</h2>
          {!simulationResults ? <div className="flex flex-col items-center justify-center h-64 text-gray-500 dark:text-gray-400">
              {simRunning ? <>
                  <RefreshCw className="w-10 h-10 animate-spin mb-4" />
                  <p>
                    Running simulation for{' '}
                    {scenarios.find(s => s.id === selectedScenario)?.name}...
                  </p>
                  <p className="text-sm mt-2">This may take a few moments</p>
                </> : <>
                  <PlayCircle className="w-10 h-10 mb-4" />
                  <p>Select a scenario and run the simulation to see results</p>
                </>}
            </div> : <div className="space-y-6">
              {/* KPI Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 dark:bg-gray-750 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Service Readiness
                  </p>
                  <p className="text-xl font-semibold mt-1">
                    {simulationResults.serviceReadiness}%
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{
                  width: `${simulationResults.serviceReadiness}%`
                }}></div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-750 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Punctuality KPI
                  </p>
                  <p className="text-xl font-semibold mt-1">
                    {simulationResults.punctualityKPI}%
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
                    <div className="bg-green-500 h-1.5 rounded-full" style={{
                  width: `${simulationResults.punctualityKPI}%`
                }}></div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-750 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Energy Efficiency
                  </p>
                  <p className="text-xl font-semibold mt-1">
                    {simulationResults.energyEfficiency}%
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
                    <div className="bg-yellow-500 h-1.5 rounded-full" style={{
                  width: `${simulationResults.energyEfficiency}%`
                }}></div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-750 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Branding Compliance
                  </p>
                  <p className="text-xl font-semibold mt-1">
                    {simulationResults.brandingCompliance}%
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
                    <div className="bg-purple-500 h-1.5 rounded-full" style={{
                  width: `${simulationResults.brandingCompliance}%`
                }}></div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-750 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Maintenance Compliance
                  </p>
                  <p className="text-xl font-semibold mt-1">
                    {simulationResults.maintenanceCompliance}%
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-2">
                    <div className="bg-red-500 h-1.5 rounded-full" style={{
                  width: `${simulationResults.maintenanceCompliance}%`
                }}></div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-750 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Conflicts Detected
                  </p>
                  <p className="text-xl font-semibold mt-1">
                    {simulationResults.conflicts}
                  </p>
                  <div className="flex items-center mt-2">
                    <span className={`text-xs ${simulationResults.conflicts === 0 ? 'text-green-500' : simulationResults.conflicts <= 2 ? 'text-yellow-500' : 'text-red-500'}`}>
                      {simulationResults.conflicts === 0 ? 'No conflicts' : simulationResults.conflicts === 1 ? '1 conflict requires attention' : `${simulationResults.conflicts} conflicts require attention`}
                    </span>
                  </div>
                </div>
              </div>
              {/* Recommendations */}
              <div>
                <h3 className="font-medium mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  AI Recommendations
                </h3>
                <ul className="space-y-2">
                  {simulationResults.recommendations.map((rec, index) => <li key={index} className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900 rounded-lg p-2 text-sm text-green-800 dark:text-green-200">
                      {rec}
                    </li>)}
                </ul>
              </div>
              {/* Potential Conflicts */}
              {simulationResults.conflicts > 0 && <div>
                  <h3 className="font-medium mb-3 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                    Potential Conflicts
                  </h3>
                  <div className="space-y-2">
                    {simulationResults.conflicts >= 1 && <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900 rounded-lg p-2 text-sm text-yellow-800 dark:text-yellow-200">
                        {selectedScenario === 'festival' ? 'Branding requirements conflict with maintenance schedule for KM-07 and KM-14.' : 'Bay allocation conflict detected in maintenance schedule.'}
                      </div>}
                    {simulationResults.conflicts >= 2 && <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-900 rounded-lg p-2 text-sm text-yellow-800 dark:text-yellow-200">
                        {selectedScenario === 'festival' ? 'Insufficient cleaning capacity for increased service frequency.' : 'Fitness certificate expiry coincides with peak service demand.'}
                      </div>}
                    {simulationResults.conflicts >= 3 && <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900 rounded-lg p-2 text-sm text-red-800 dark:text-red-200">
                        {selectedScenario === 'maintenance' ? 'Critical safety inspection deadline will be missed for KM-12.' : 'Mileage balancing objectives cannot be met with current allocation.'}
                      </div>}
                  </div>
                </div>}
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button className="flex-1 py-2 px-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-650">
                  Export Results
                </button>
                <button className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center">
                  <Save className="w-5 h-5 mr-2" />
                  Apply to Planning
                </button>
              </div>
            </div>}
        </div>
      </div>
      {/* Train Allocation Preview */}
      {simulationResults && <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">
            Simulated Allocation Preview
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-750">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Train ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Allocation
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Fitness
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Mileage
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Bay
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status Change
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {mockTrainData.slice(0, 8).map((train, index) => {
              // Simulate changes based on scenario
              const statusChange = selectedScenario === 'maintenance' && index < 3 ? 'Maintenance → Service' : selectedScenario === 'festival' && index === 5 ? 'Standby → Service' : selectedScenario === 'weather' && index === 2 ? 'Service → Standby' : 'No change';
              const statusChangeClass = statusChange.includes('→ Service') ? 'text-green-500' : statusChange.includes('→ Standby') ? 'text-yellow-500' : statusChange.includes('→ Maintenance') ? 'text-red-500' : 'text-gray-500';
              return <tr key={train.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                        {train.id}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${train.recommendation === 'Service' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : train.recommendation === 'Standby' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
                          {train.recommendation}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        {train.fitnessCertificate} days
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        {train.mileage.toLocaleString()} km
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        {train.bayPosition || 'N/A'}
                      </td>
                      <td className={`px-4 py-3 whitespace-nowrap text-sm ${statusChangeClass}`}>
                        {statusChange}
                      </td>
                    </tr>;
            })}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Showing 8 of 25 trainsets. The simulation indicates{' '}
            {simulationResults.conflicts} potential conflicts that may require
            manual resolution.
          </div>
        </div>}
    </div>;
};
export default Simulation;