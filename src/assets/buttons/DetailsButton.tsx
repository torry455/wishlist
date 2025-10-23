import React from 'react';

interface DetailsButtonProps {
  onClick: () => void;
}

export const DetailsButton: React.FC<DetailsButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col sm:flex-row items-center sm:gap-1 text-accentViolet hover:text-accentVioletHover transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mb-1 sm:mb-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>Details</span>
  </button>
);