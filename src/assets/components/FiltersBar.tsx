import React from 'react';

interface FiltersBarProps {
  sortByDate: 'newest' | 'oldest';
  sortByPrice: 'priceHigh' | 'priceLow';
  onSortChange: (type: 'date' | 'price', value: string) => void;
  onAddWish: () => void;
}

export const FiltersBar: React.FC<FiltersBarProps> = ({
  sortByDate,
  sortByPrice,
  onSortChange,
  onAddWish,
}) => {
  return (
<div className="bg-midnight border border-borderMuted backdrop-blur-sm rounded-xl p-4 flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 shadow-md">
  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
    <select
      value={sortByDate}
      onChange={(e) => onSortChange('date', e.target.value)}
      className="w-full sm:w-auto bg-surface text-white border border-borderMuted rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accentViolet"
    >
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
    </select>

    <select
      value={sortByPrice}
      onChange={(e) => onSortChange('price', e.target.value)}
      className="w-full sm:w-auto bg-surface text-white border border-borderMuted rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accentViolet"
    >
      <option value="priceHigh">Price: High to Low</option>
      <option value="priceLow">Price: Low to High</option>
    </select>
  </div>

  <button
    onClick={onAddWish}
    className="w-full sm:w-auto justify-center bg-accentViolet text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-accentVioletHover transition-colors duration-200 text-sm"
  >
    <span>+</span> Add New Wish
  </button>
</div>
  );
};
