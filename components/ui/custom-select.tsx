'use client';

import React, { useState } from 'react';
import { INTERACTIVE_STYLES, TEXT_STYLES } from '@/lib/constants/styles';

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  label: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ 
  value, 
  onChange, 
  options, 
  label 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    const newIsOpen = !isOpen;
    console.log(`📋 [DROPDOWN] ${label} dropdown ${newIsOpen ? 'opened' : 'closed'}`);
    setIsOpen(newIsOpen);
  };

  const handleOptionSelect = (option: string) => {
    console.log(`✅ [DROPDOWN] ${label} option selected:`, option);
    onChange(option);
    setIsOpen(false);
  };
  
  return (
    <div className="relative">
      <button
        onClick={handleToggleDropdown}
        className={INTERACTIVE_STYLES.dropdownButton}
        aria-label={label}
      >
        <span className="font-normal">{value}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 6l4 4 4-4" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => {
              console.log(`📋 [DROPDOWN] ${label} dropdown closed by clicking outside`);
              setIsOpen(false);
            }} 
          />
          <div className={INTERACTIVE_STYLES.dropdownContainer}>
            {options.map((option: string) => (
              <button
                key={option}
                onClick={() => handleOptionSelect(option)}
                className={INTERACTIVE_STYLES.dropdownOption}
              >
                <span className="font-normal">{option}</span>
                {option === value && (
                  <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                    <path d="M13 4L6 11L3 8" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
