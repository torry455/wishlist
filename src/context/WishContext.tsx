import React, { createContext, useEffect, useState } from 'react';
import { Wish, WishContextType } from '../types/wish';
import { useApi } from '../hooks/useApi';

export const WishContext = createContext<WishContextType>({
  wishes: [],
  fetchWishes: () => {},
  addWish: () => {},
  updateWish: () => {},
  deleteWish: () => {},
});

export const WishProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const { getAll, create, update, remove } = useApi();

  const fetchWishes = async () => {
    try {
      const data = await getAll();
      setWishes(data);
    } catch (error) {
      console.error('Failed to fetch wishes:', error);
    }
  };

  const addWish = async (wish: Wish) => {
    try {
      const newWish = await create(wish);
      setWishes((prev) => [...prev, newWish]);
    } catch (error) {
      console.error('Failed to add wish:', error);
    }
  };

  const updateWish = async (wish: Wish) => {
    try {
      const updated = await update(wish.id, wish);
      setWishes((prev) => prev.map((w) => (w.id === wish.id ? updated : w)));
    } catch (error) {
      console.error('Failed to update wish:', error);
    }
  };

  const deleteWish = async (id: string) => {
    try {
      await remove(id);
      setWishes((prev) => prev.filter((w) => w.id !== id));
    } catch (error) {
      console.error('Failed to delete wish:', error);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  return (
    <WishContext.Provider value={{ wishes, fetchWishes, addWish, updateWish, deleteWish }}>
      {children}
    </WishContext.Provider>
  );
};