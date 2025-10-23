import React from 'react';
import { Wish } from '../../types/wish';
import { DeleteButton } from '../buttons/DeleteButton';
import { UpdateButton } from '../buttons/UpdateButton';
import { DetailsButton } from '../buttons/DetailsButton';


interface WishCardProps {
  wish: Wish;
  onDelete: (id: string) => void;
  onUpdate: (wish: Wish) => void;
  onDetails: (id: string) => void;
}

export const WishCard: React.FC<WishCardProps> = ({ wish, onDelete, onUpdate, onDetails }) => {
  return (
    <div className="bg-midnight border border-borderMuted rounded-xl shadow-lg overflow-hidden flex flex-col h-full transition-transform hover:scale-[1.02] duration-300 backdrop-blur-sm">
<div className="relative w-full h-48">
  <img
    src={wish.image}
    alt={wish.title}
    onError={(e) => {
      e.currentTarget.onerror = null; 
      e.currentTarget.src = 'https://i.pinimg.com/736x/4e/0e/04/4e0e047182b54c9f4fd6436971b8efe6.jpg';
    }}
    className="absolute inset-0 w-full h-full object-cover"
    loading="lazy"
  />
</div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <h2 className="text-lg font-semibold mb-2 text-white line-clamp-1">{wish.title}</h2>
        <p className="text-textSecondary text-sm mb-3 line-clamp-3">{wish.description}</p>
        <p className="text-accentViolet font-bold text-lg">${wish.price}</p>
      </div>

<div className="flex justify-between items-center px-4 py-3 border-t border-borderMuted bg-surface text-white text-sm gap-2">
  <DeleteButton onClick={() => onDelete(wish.id)} />
  <UpdateButton onClick={() => onUpdate(wish)} />
  <DetailsButton onClick={() => onDetails(wish.id)} />

</div>
    </div>
  );
};
