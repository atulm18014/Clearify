import React from 'react';

const Header = () => (
  <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
    <div className="container-responsive py-4 sm:py-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" 
               className="h-6 w-6 sm:h-8 sm:w-8" 
               fill="none" 
               viewBox="0 0 24 24" 
               stroke="currentColor">
            <path strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <h1 className="text-xl sm:text-2xl font-bold">Clearify</h1>
        </div>
        <h2 className="text-sm sm:text-lg font-semibold text-center sm:text-right">
          Image De-hazing & De-Smoking Solution
        </h2>
      </div>
    </div>
  </header>
);

export default Header;
