import React from 'react';
import { GiGoalKeeper } from "react-icons/gi";
import { BsCurrencyBitcoin, BsBootstrap } from "react-icons/bs";
import { CheckCircle } from 'lucide-react';

const StatsCard = ({ title, value, type }) => {
  const icons = {
    futsal: GiGoalKeeper,
    booking: BsCurrencyBitcoin,
    today: BsBootstrap,
    active: CheckCircle,
  };
  const Icon = icons[type];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 flex items-center justify-between transition-all duration-300 ease-in-out hover:shadow-lg">
      <div>
        <p className="text-sm md:text-base font-medium text-gray-600">{title}</p>
        <p className="text-xl md:text-2xl font-bold text-gray-900">{value}</p>
      </div>
      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
        <Icon className="h-6 w-6" />
      </div>
    </div>
  );
};

export default StatsCard;

