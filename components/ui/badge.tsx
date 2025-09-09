import React from 'react';

interface BadgeProps {
  label: string;
  variant: 'orange' | 'green' | 'gray';
}

export const Badge: React.FC<BadgeProps> = ({ label, variant }) => {
  const variantClasses = {
    orange: 'bg-orange-50 text-orange-600 border border-orange-600',
    green: 'bg-green-50 text-green-600 border border-green-600',
    gray: 'bg-gray-100 text-gray-600 border border-gray-600',
  };

  return (
    <span
      className={`text-[11px] font-bold px-2 py-0.5 rounded-full ml-2 ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
};
