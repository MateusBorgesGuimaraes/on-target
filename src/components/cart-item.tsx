import { MinusCircle, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

type CartItemProps = {
  bgClass: string;
};

export const CartItem = ({ bgClass }: CartItemProps) => {
  return (
    <div className={`grid grid-cols-4 ${bgClass} secondsmall:p-3 p-2`}>
      <Link href={'/'}>
        <Image
          className="sm:w-[90px] sm:h-[80px] w-[60px] h-[53px] rounded-lg object-cover"
          src={'/assets/images/teste.jpg'}
          width={90}
          height={80}
          alt={'teste'}
        />
      </Link>
      <div className="flex items-center sm:gap-3 gap-1">
        <button>
          <PlusCircle className="secondsmall:w-5 secondsmall:h-5 w-4 h-4" />
        </button>
        <p className="sm:text-xl secondsmall:text-base text-sm font-normal">
          0
        </p>
        <button>
          <MinusCircle className="secondsmall:w-5 secondsmall:h-5 w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center sm:text-xl secondsmall:text-base text-sm font-normal">
        <p>R$ 0,00</p>
      </div>

      <div className="flex items-center sm:text-xl secondsmall:text-base text-sm font-normal">
        <p>R$ 0,00</p>
      </div>
    </div>
  );
};
