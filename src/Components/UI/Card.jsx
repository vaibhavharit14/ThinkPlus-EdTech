import React from "react";

const Card = ({ title, description, children }) => {
  return (
    <div className="bg-white/80 dark:bg-gray-800 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 space-y-4 hover:shadow-xl transition hover:-translate-y-1">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      {children}
    </div>
  );
};

export default Card;