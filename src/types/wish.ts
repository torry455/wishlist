export interface Wish {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  createdAt: string;
}


export type WishContextType = {
  wishes: Wish[];
  fetchWishes: () => Promise<void> | void;
  addWish: (wish: Wish) => Promise<void> | void;
  updateWish: (wish: Wish) => Promise<void> | void;
  deleteWish: (id: string) => Promise<void> | void;
};