import React from "react";

const Button = ({ text = "Click Me", href = "#", gradient = "from-indigo-500 to-purple-600" }) => {
  return (
    <a
      href={href}
      className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${gradient} text-white font-semibold shadow-md hover:shadow-lg transition duration-300`}
    >
      {text}
    </a>
  );
};

export default Button;