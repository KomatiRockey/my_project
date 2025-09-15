import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import TrainAllocation from './components/TrainAllocation';
import DataInsights from './components/DataInsights';
import Simulation from './components/Simulation';
import HistoricalPerformance from './components/HistoricalPerformance';
export function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/allocation" element={<TrainAllocation />} />
          <Route path="/insights" element={<DataInsights />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/historical" element={<HistoricalPerformance />} />
        </Route>
      </Routes>
    </BrowserRouter>;
}