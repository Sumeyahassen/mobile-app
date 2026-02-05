// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Gemini AI Clone</h1>
            <p className="text-sm text-gray-500">Powered by Google AI</p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 text-sm">
            New Chat
          </button>
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;