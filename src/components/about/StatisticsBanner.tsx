import React from 'react';

export const StatisticsBanner = () => {
  const stats = [
    { value: '100+', label: 'Unique Missions' },
    { value: '50+', label: 'Hours of Story' },
    { value: '1000+', label: 'Weapon Combinations' },
    { value: '5M+', label: 'Players Worldwide' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group">
          <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-red-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
            {stat.value}
          </div>
          <div className="text-gray-400 group-hover:text-white transition-colors">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};