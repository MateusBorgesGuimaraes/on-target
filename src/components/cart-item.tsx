import { MinusCircle, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import currency from '@/functions/currency';
import { Product } from '@/types';
import { useCartStore } from '@/store/cart-store';

type CartItemProps = {
  bgClass: string;
  quantity: number;
  product: Product;
};

export const CartItem = ({ bgClass, quantity, product }: CartItemProps) => {
  const { removeFromCart, addToCart } = useCartStore();
  return (
    <div className={`grid grid-cols-4 ${bgClass} secondsmall:p-3 p-2`}>
      <Link href={'/'}>
        <Image
          className="sm:w-[90px] sm:h-[80px] w-[60px] h-[53px] rounded-lg object-cover"
          src={`http://localhost:1337${product.img}`}
          width={90}
          height={80}
          alt={'teste'}
        />
      </Link>
      <div className="flex items-center sm:gap-3 gap-1">
        <button
          onClick={() =>
            addToCart({
              ...product,
              quantity: 1,
            })
          }
        >
          <PlusCircle className="secondsmall:w-5 secondsmall:h-5 w-4 h-4" />
        </button>
        <p className="sm:text-xl secondsmall:text-base text-sm font-normal">
          {quantity}
        </p>
        <button onClick={() => removeFromCart(product.id)}>
          <MinusCircle className="secondsmall:w-5 secondsmall:h-5 w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center sm:text-xl secondsmall:text-base text-sm font-normal">
        <p>{product.price}</p>
      </div>

      <div className="flex items-center sm:text-xl secondsmall:text-base text-sm font-normal">
        <p>{currency(product.price * quantity)}</p>
      </div>
    </div>
  );
};
