import React from 'react';

const StatisticsCard = ({ title, value }) => {
  return (
    <div className="shine-hover bg-gradient-to-r from-slate-300 to-indigo-600 p-6 rounded-lg shadow-md   opacity-300 group-hover:animate-shine">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default StatisticsCard;