import React from 'react';

interface ConfirmModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  message?: string;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
  onConfirm,
  onCancel,
  message = 'Are you sure you want to delete this wish?',
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 sm:px-6">
      <div className="bg-midnight border border-cardGlass rounded-xl shadow-2xl w-full max-w-sm sm:max-w-md p-6 sm:p-8 text-center text-white overflow-y-auto">
        <p className="text-textSecondary mb-6 text-sm sm:text-base">{message}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors duration-200 text-sm w-full sm:w-auto"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-accentViolet text-white hover:bg-accentVioletHover transition-colors duration-200 text-sm w-full sm:w-auto"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};