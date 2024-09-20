import { create } from 'zustand';
import { Product } from '@/types';

type CartProduct = Product & {
  quantity: number;
};

type CartStore = {
  products: CartProduct[];
  totalQuantity: number;
  total: number;
  addToCart: (product: CartProduct) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  products: [],
  totalQuantity: 0,
  total: 0,
  addToCart: (product) =>
    set((state) => {
      const existingProduct = state.products.find((p) => p.id === product.id);
      if (existingProduct) {
        return {
          products: state.products.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
          total: state.total + product.price,
          totalQuantity: state.totalQuantity + 1,
        };
      } else {
        return {
          products: [...state.products, { ...product, quantity: 1 }],
          total: state.total + product.price,
          totalQuantity: state.totalQuantity + 1,
        };
      }
    }),
  removeFromCart: (id) =>
    set((state) => {
      const product = state.products.find((item) => item.id === id);
      if (!product) return state;
      if (product.quantity > 1) {
        return {
          products: state.products.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
          ),
          total: state.total - product.price,
          totalQuantity: state.totalQuantity - 1,
        };
      } else {
        return {
          products: state.products.filter((item) => item.id !== id),
          total: state.total - product.price * product.quantity,
          totalQuantity: state.totalQuantity - product.quantity,
        };
      }
    }),
  clearCart: () => set({ products: [], total: 0, totalQuantity: 0 }),
}));
