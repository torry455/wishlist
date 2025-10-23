import React, { useState, useEffect } from 'react';
import { Wish } from '../../types/wish';
import { useLockBodyScroll } from '../../hooks/useLockScroll';

interface WishFormModalProps {
  initialData?: Wish | null;
  onClose: () => void;
  onSubmit: (wish: Wish) => void;
}

export const WishModalForm: React.FC<WishFormModalProps> = ({
  
  initialData,
  onClose,
  onSubmit,
}) => {
    useLockBodyScroll();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setImage(initialData.image);
      setPrice(initialData.price.toString());
    }
  }, [initialData]);

  const handleSubmit = () => {
    if (!title || !description || !image || !price) {
      setError('All fields are required');
      return;
    }

    const newWish: Wish = {
      id: initialData?.id || crypto.randomUUID(),
      title,
      description,
      image,
      price: parseFloat(price),
      createdAt: initialData?.createdAt || new Date().toISOString(),
    };

    onSubmit(newWish);
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wish-form-title"
    >
      <div className="bg-midnight border border-borderMuted rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto p-4 sm:p-6 text-white">
        <h2 id="wish-form-title" className="text-xl font-semibold mb-4">
          {initialData ? 'Update Wish' : 'Add New Wish'}
        </h2>

        {error && (
          <p className="text-errorBg text-sm mb-2" role="alert">
            {error}
          </p>
        )}

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-surface text-white border border-borderMuted rounded px-3 py-2 mb-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accentViolet"
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full bg-surface text-white border border-borderMuted rounded px-3 py-2 mb-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accentViolet resize-none"
          rows={4}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full bg-surface text-white border border-borderMuted rounded px-3 py-2 mb-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accentViolet"
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full bg-surface text-white border border-borderMuted rounded px-3 py-2 mb-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accentViolet"
        />

        <div className="flex flex-col sm:flex-row justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-sm bg-gray-700 text-gray-200 rounded hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="w-full sm:w-auto px-4 py-2 text-sm bg-accentViolet text-white rounded hover:bg-accentVioletHover transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};