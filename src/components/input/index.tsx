import React from 'react';

interface InputProps {
  type?: 'text' | 'email';
  name: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  placeholder = '',
}) => {
  return (
    <input
      type={type}
      id={name}
      name={name}
      className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
      placeholder={placeholder}
    />
  );
};

export default Input;
