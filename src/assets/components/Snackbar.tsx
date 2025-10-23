import React, { useEffect } from 'react';

interface SnackbarProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
}

export const Snackbar: React.FC<SnackbarProps> = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor =
    type === 'success'
      ? 'bg-successBg border-successBorder'
      : 'bg-errorBg border-errorBorder';

  return (
<div
  className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 py-3 text-white rounded-xl shadow-xl border ${bgColor} backdrop-blur-sm z-50 transition-opacity duration-300 max-w-sm w-[90%] text-center`}
>
  {message}
</div>

  );
};
