import { useCallback } from 'react';
import { Wish } from '../types/wish';

export const useApi = () => {
  const baseUrl = 'http://localhost:3001/wishes';

  const getAll = useCallback(async (): Promise<Wish[]> => {
    try {
      const res = await fetch(baseUrl);
      if (!res.ok) throw new Error('Failed to fetch wishes');
      return await res.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  }, []);

  const getById = useCallback(async (id: string): Promise<Wish | null> => {
    try {
      const res = await fetch(`${baseUrl}/${id}`);
      if (!res.ok) throw new Error('Wish not found');
      return await res.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }, []);

const create = useCallback(async (wish: Wish): Promise<Wish> => {
  const payload = { ...wish, createdAt: new Date().toISOString() };
  try {
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error('Failed to create wish');
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}, []);

  const update = useCallback(async (id: string, wish: Wish): Promise<Wish> => {
    try {
      const res = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(wish),
      });
      if (!res.ok) throw new Error('Failed to update wish');
      return await res.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, []);

  const remove = useCallback(async (id: string): Promise<void> => {
    try {
      const res = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete wish');
    } catch (error) {
      console.error(error);
      throw error;
    }
  }, []);

  return { getAll, getById, create, update, remove };
};