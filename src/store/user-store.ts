import { User } from '@/types/index';
import { create } from 'zustand';

type UserStore = {
  user?: User;
  setUser: (user: User) => void;
  removeUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: undefined,
  setUser: (user: User) => set({ user }),
  removeUser: () => set({ user: undefined }),
}));
