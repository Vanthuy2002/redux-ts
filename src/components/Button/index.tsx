import React from 'react';

type ButtonProps = { children: React.ReactNode };

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500'>
      <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0'>
        {children}
      </span>
    </button>
  );
};

export default Button;
