import React from 'react';

interface UpdateButtonProps {
  onClick: () => void;
}

export const UpdateButton: React.FC<UpdateButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col sm:flex-row items-center sm:gap-1 text-accentPink hover:text-pink-500 transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mb-1 sm:mb-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5h2M12 7v10m0 0h-2m2 0h2" />
    </svg>
    <span>Update</span>
  </button>
);