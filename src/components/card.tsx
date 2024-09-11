'use client';

import Image from 'next/image';
import StarsRating from './star-rating';
import { CirclePlus } from 'lucide-react';
import Link from 'next/link';
import { Product } from '@/types';
import currency from '@/functions/currency';

export const Card = ({ product }: { product: Product }) => {
  return (
    <div className="relative bg-neon-purple-gray-300 p-5 rounded-2xl h-[17.8125rem] flex flex-col justify-between group overflow-hidden">
      <div className="w-full h-full group-hover:h-2/4 duration-300 ease-in-out">
        <Image
          src={`http://localhost:1337${product.img}`}
          alt="hgfh"
          width={500}
          height={500}
          className="object-cover w-full h-full rounded-2xl duration-300 ease-in-out"
        />
      </div>

      <div className="absolute top-1/2 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 group-hover:delay-300 duration-300 ease-in-out">
        <div className="flex justify-between items-center mt-2">
          <h2 className="font-bebas text-xl leading-none">{product.name}</h2>
          <h2 className="font-bebas text-xl leading-none">
            {currency(product.price)}
          </h2>
        </div>
        <div className="mt-2">
          <StarsRating type="pointed" percent="90" color="#FABC3F" size="20" />
        </div>

        <div className="flex mt-4 font-bebas text-xl leading-none justify-between gap-5">
          <Link
            href={`/product/${product.id}}`}
            className="py-1 bg-neon-purple w-full hover:bg-neon-purple/80 duration-300 flex items-center justify-center"
          >
            VER MAIS
          </Link>
          <button className="py-1 bg-neon-red w-full flex items-center gap-1 justify-center hover:bg-neon-red/80 duration-300">
            <CirclePlus /> ADD
          </button>
        </div>
      </div>
    </div>
  );
};
