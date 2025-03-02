import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold">Clearify</h3>
            <p className="text-gray-400 text-sm">Advanced Image Enhancement Technology</p>
          </div>
        </div>
        
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Clearify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
