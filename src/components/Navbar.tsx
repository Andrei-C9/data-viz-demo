'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const tabs = [
    { id: '/', label: 'Analysis' },
    { id: '/select-video', label: 'Select Video' },
    { id: '/upload-sensor-data', label: 'Upload Sensor Data' },
  ];

  return (
    <nav className="bg-next-gray-900 border-b border-next-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-next-blue font-bold text-xl">Tennis Analysis</Link>
          </div>
          <div className="flex">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                href={tab.id}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  pathname === tab.id
                    ? 'bg-next-blue text-white'
                    : 'text-next-gray-300 hover:bg-next-gray-800 hover:text-white'
                } transition duration-150 ease-in-out`}
              >
                {tab.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;