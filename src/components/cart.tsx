import { X } from 'lucide-react';
import { CartItem } from './cart-item';

type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Cart = ({ onClose }: CartProps) => {
  const cartItems = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="fixed inset-0 z-[999] bg-black/80">
      <div className="flex flex-col bg-neon-purple-gray-500 absolute top-10 right-[10%] z-40 w-[31.125rem] py-5 rounded-lg max-h-[80vh]">
        <div className="flex itens-center justify-between px-5">
          <h2 className="text-4xl font-bebas text-neon-red tracking-wider ">
            CARRINHO
          </h2>

          <button onClick={onClose}>
            <X size={32} />
          </button>
        </div>
        <div className="grid grid-cols-4 font-bebas text-4xl px-5 my-6">
          <h3>PROD</h3>
          <h3>QUANT</h3>
          <h3>PREÇO</h3>
          <h3>TOTAL</h3>
        </div>
        <div
          className="overflow-y-auto px-5 custom-scrollbar"
          style={{ maxHeight: '50vh' }}
        >
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              bgClass={
                index % 2 === 0
                  ? 'bg-neon-purple-gray-400'
                  : 'bg-neon-purple-gray-300'
              }
            />
          ))}
        </div>
        <div className="border-t-2 border-neon-purple-gray-400">
          <div className="flex items-end justify-end px-5 py-5">
            <p className="text-4xl font-bebas text-neon-red tracking-wider ">
              R$ 0,00
            </p>
          </div>
          <div className="flexw-full px-5">
            <button className="text-3xl font-bebas bg-neon-purple tracking-wider w-full py-4 hover:bg-neon-purple/80 duration-300">
              FINALIZAR COMPRA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
