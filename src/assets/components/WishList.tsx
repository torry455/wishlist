import React from 'react';
import { WishCard } from './WishCard';
import { Wish } from '../../types/wish';

interface WishGridProps {
  wishes: Wish[];
  onDelete: (id: string) => void;
  onUpdate: (wish: Wish) => void;
  onDetails: (id: string) => void;
}

export const WishList: React.FC<WishGridProps> = ({ wishes, onDelete, onUpdate, onDetails }) => {
  if (wishes.length === 0) {
    return (
<p className="text-center text-textSecondary mt-12 text-sm sm:text-base min-h-[200px] flex items-center justify-center">
  No wishes found.
</p>

    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 ">
      {wishes.map((wish) => (
        <WishCard
          key={wish.id}
          wish={wish}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onDetails={onDetails}
        />
      ))}
    </div>
  );
};
