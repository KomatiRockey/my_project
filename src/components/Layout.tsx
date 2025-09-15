import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, TrainFront, BarChart2, FlaskConical, Clock, Menu, X } from 'lucide-react';
const Layout = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [{
    path: '/',
    label: 'Dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />
  }, {
    path: '/allocation',
    label: 'Train Allocation',
    icon: <TrainFront className="w-5 h-5" />
  }, {
    path: '/insights',
    label: 'Data Insights',
    icon: <BarChart2 className="w-5 h-5" />
  }, {
    path: '/simulation',
    label: 'Simulation',
    icon: <FlaskConical className="w-5 h-5" />
  }, {
    path: '/historical',
    label: 'Historical',
    icon: <Clock className="w-5 h-5" />
  }];
  return <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Sidebar - desktop */}
      <div className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 shadow-lg">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold">KMRL Induction</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            AI Decision Support
          </p>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navItems.map(item => <li key={item.path}>
                <Link to={item.path} className={`flex items-center p-3 rounded-lg transition-colors ${location.pathname === item.path ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              </li>)}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2023 KMRL
          </p>
        </div>
      </div>
      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-10">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">KMRL Induction</h1>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-20">
          <div className="bg-white dark:bg-gray-800 w-64 h-full overflow-auto">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h1 className="text-xl font-bold">KMRL Induction</h1>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="p-4">
              <ul className="space-y-2">
                {navItems.map(item => <li key={item.path}>
                    <Link to={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center p-3 rounded-lg transition-colors ${location.pathname === item.path ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 'hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                      {item.icon}
                      <span className="ml-3">{item.label}</span>
                    </Link>
                  </li>)}
              </ul>
            </nav>
          </div>
        </div>}
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6 mt-16 md:mt-0">
          <Outlet />
        </main>
      </div>
    </div>;
};
export default Layout;