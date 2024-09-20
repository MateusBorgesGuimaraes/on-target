'use client';

import currency from '@/functions/currency';
import Image from 'next/image';
import React from 'react';
import { LinkButton } from './link-button';
import { CirclePlus } from 'lucide-react';
import { Product } from '@/types';
import { useChangeProds } from '@/hooks/useChangeProds';
import { useCartStore } from '@/store/cart-store';
import { useToast } from '@/hooks/use-toast';
import { useUserStore } from '@/store/user-store';

type ProductViewerProps = {
  products: Product[];
};

export const ProductViewer = ({ products }: ProductViewerProps) => {
  const { changeProduct, selectedProduct, prod } = useChangeProds(products);
  const { addToCart } = useCartStore();
  const { user } = useUserStore();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      ...prod,
      quantity: 1,
    });

    toast({
      title: 'Product added to cart',
    });
  };

  const handleWarning = () => {
    toast({
      title: 'Voce tem que estar logado para adicionar ao carrinho',
    });
  };

  return (
    <div className="w-full flex xl:flex-row flex-col sm:gap-14 gap-6">
      <div className="flex flex-col justify-center items-center xl:block">
        <h1 className="md:text-9xl smallest:text-8xl text-[5rem] leading-tight text-neon-red font-bebas mb-4 break-all">
          RECOMENDAÇÕES
        </h1>
        <ul className="flex pb-8 max-w-[560px] justify-between flex-wrap gap-2 supersmall:flex-nowrap smallest:gap-5 xl:gap-0">
          {products.map((product) => (
            <li
              onClick={() => changeProduct(product.id)}
              key={product.id}
              className="cursor-pointer group"
            >
              <Image
                className={`supersmall:w-[100px] supersmall:h-[100px] rounded-full supersmall:border-4 border-2 group-hover:scale-110 duration-300 w-[80px] h-[80px]
              ${
                selectedProduct === product.id
                  ? 'border-neon-purple scale-110'
                  : 'border-neon-red scale-100'
              }`}
                src={`http://localhost:1337${product.img}`}
                width={200}
                height={200}
                alt="teste"
              />
            </li>
          ))}
        </ul>
        <div>
          <Image
            className="supersmall:w-[35rem] supersmall:h-[25rem] w-[18.75rem] h-[13.375rem] object-cover"
            src={`http://localhost:1337${prod.img}`}
            width={560}
            height={400}
            alt="teste"
          />
        </div>
      </div>

      <div className="relative z-[8] before:absolute before:w-[42rem] before:h-[42rem] before:bg-neon-purple-gray-400/80 before:rounded-full lg:before:block before:hidden before:z-[-10] before:top-1 before:left-20 before:overflow-x-hidden">
        <h1 className="sm:text-9xl  smallest:text-8xl text-[5rem] leading-tight text-neon-purple font-bebas mb-4">
          ESPECIAIS
        </h1>

        <div>
          <h2 className="sm:text-8xl font-bebas text-5xl">{prod.name}</h2>
          <div className="mt-7 flex flex-col gap-7">
            <div className="flex justify-between items-center ">
              <p className="text-4xl font-bebas">PREÇO</p>
              <p className="text-xl text-neon-purple-gray-100">
                {currency(prod.price)}
              </p>
            </div>

            <div className="flex justify-between items-center ">
              <p className="text-4xl font-bebas">STOCK</p>
              <p className="text-xl text-neon-purple-gray-100">{prod.stock}</p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-4xl font-bebas">DESCRIÇÃO</p>
              <p className="text-xl text-neon-purple-gray-100 max-w-[600px]">
                {prod.description}
              </p>
            </div>

            <div className="flex gap-5 mt-20">
              <LinkButton color="red" href={`/product/${prod.id}`}>
                VER MAIS
              </LinkButton>

              {user ? (
                <button
                  onClick={handleAddToCart}
                  color="purple"
                  className="py-[6px] w-full text-4xl font-bebas text-white duration-300 flex items-center justify-center bg-neon-purple hover:bg-neon-purple/80"
                >
                  <p className="flex items-center gap-2">
                    <CirclePlus /> ADD
                  </p>
                </button>
              ) : (
                <button
                  onClick={handleWarning}
                  color="purple"
                  className="py-[6px] w-full text-4xl font-bebas text-white duration-300 flex items-center justify-center bg-neon-purple hover:bg-neon-purple/80"
                >
                  <p className="flex items-center gap-2">
                    <CirclePlus /> ADD
                  </p>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
