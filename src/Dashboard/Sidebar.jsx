import React from 'react';
import { X, LayoutDashboard, Settings, LogOut } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      <div className={`fixed top-0 left-0 z-50 h-screen w-64 bg-[#04153F] text-gray-100 transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:z-auto`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold">Futsal Admin</h1>
          <button onClick={onClose} className="lg:hidden">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-green-600 text-white text-sm md:text-base">
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-600 transition duration-150 ease-in-out text-sm md:text-base">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-600 transition duration-150 ease-in-out w-full text-sm md:text-base">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

