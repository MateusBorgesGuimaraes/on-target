import { MinusCircle, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type CartItemProps = {
  bgClass: string;
};

export const CartItem = ({ bgClass }: CartItemProps) => {
  return (
    <div className={`grid grid-cols-4 ${bgClass} p-3`}>
      <Link href={'/'}>
        <Image
          className="w-[90px] h-[80px] rounded-lg object-cover"
          src={'/assets/images/teste.jpg'}
          width={90}
          height={80}
          alt={'teste'}
        />
      </Link>
      <div className="flex items-center gap-3">
        <button>
          <PlusCircle size={20} />
        </button>
        <p className="text-xl">0</p>
        <button>
          <MinusCircle size={20} />
        </button>
      </div>

      <div className="flex items-center text-xl">
        <p>R$ 0,00</p>
      </div>

      <div className="flex items-center text-xl">
        <p>R$ 0,00</p>
      </div>
    </div>
  );
};
