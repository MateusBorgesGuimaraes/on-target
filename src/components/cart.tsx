import { X } from 'lucide-react';
import { CartItem } from './cart-item';
import { useCartStore } from '@/store/cart-store';
import currency from '@/functions/currency';

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Cart = ({ onClose }: CartProps) => {
  // const cartItems = [1, 2, 3, 4, 5, 6, 7];
  const { products, total } = useCartStore();

  return (
    <div className="fixed inset-0 z-[999] bg-black/80">
      <div className="flex flex-col bg-neon-purple-gray-500 absolute top-10  lg:left-auto lg:-translate-x-0 left-1/2 transform -translate-x-1/2 z-40 sm:w-[31.125rem] secondsmall:w-[380px] w-[300px] py-5 rounded-lg max-h-[80vh] lg:right-[10%]">
        <div className="flex itens-center justify-between px-5">
          <h2 className="secondsmall:text-4xl text-3xl font-bebas text-neon-red tracking-wider ">
            CARRINHO
          </h2>

          <button onClick={onClose}>
            <X size={32} />
          </button>
        </div>
        <div className="grid grid-cols-4 font-bebas sm:text-4xl text-2xl px-5 secondsmall:my-6 my-4">
          <h3>PROD</h3>
          <h3>QUANT</h3>
          <h3>PREÇO</h3>
          <h3>TOTAL</h3>
        </div>
        <div
          className="overflow-y-auto px-5 custom-scrollbar"
          style={{ maxHeight: '50vh' }}
        >
          {products.map((prod, index) => (
            <CartItem
              product={prod}
              quantity={prod.quantity}
              key={prod.id}
              bgClass={
                index % 2 === 0
                  ? 'bg-neon-purple-gray-400'
                  : 'bg-neon-purple-gray-300'
              }
            />
          ))}
        </div>
        <div className="border-t-2 border-neon-purple-gray-400">
          <div className="flex items-end justify-end px-5 secondsmall:py-5 py-4">
            <p className="sm:text-4xl text-2xl font-bebas text-neon-red tracking-wider ">
              {currency(total)}
            </p>
          </div>
          <div className="flexw-full px-5">
            <button className="sm:text-3xl text-2xl font-bebas bg-neon-purple tracking-wider w-full sm:p-4 py-3 hover:bg-neon-purple/80 duration-300">
              FINALIZAR COMPRA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
