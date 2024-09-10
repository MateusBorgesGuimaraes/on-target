'use client';

import Image from 'next/image';
import React from 'react';
import { LinkButton } from '../link-button';
import { CirclePlus } from 'lucide-react';
import currency from '@/functions/currency';
import { ColorBallsDec } from '../color-ball-dec';

const testeArray = [
  {
    id: 1,
    name: 'Fone h2k pro',
    price: 200,
    stock: 10,
    description:
      'Headset gamer com som surround, microfone destacável e almofadas confortáveis.',
    img: '/assets/images/teste.jpg',
  },
  {
    id: 2,
    name: 'Fone h2k Sound',
    price: 234,
    stock: 13,
    description:
      'Headset gamer com som surround, microfone destacável e almofadas confortáveis.',
    img: '/assets/images/teste2.jpg',
  },
  {
    id: 3,
    name: 'Fone h2k zion',
    price: 277,
    stock: 20,
    description:
      'Headset gamer com som surround, microfone destacável e almofadas confortáveis.',
    img: '/assets/images/teste3.jpg',
  },
];

export const Product = () => {
  const [selectedProduct, setSelectedProduct] = React.useState(1);
  const [prod, setProd] = React.useState(testeArray[0]);

  const changeProduct = (id: number) => {
    setSelectedProduct(id);
    const find = testeArray.find((product) => product.id === id);
    if (find) setProd(find);
  };

  return (
    <div className="flex lg:gap-32 gap-10 lg:flex-row flex-col">
      <div className="flex gap-4 supersmall:flex-row flex-col">
        <ul className="flex supersmall:flex-col flex-row gap-4">
          {testeArray.map((product) => (
            <li
              onClick={() => changeProduct(product.id)}
              key={product.id}
              className="cursor-pointer group"
            >
              {
                <Image
                  className={`w-[130px] supersmall:h-[130px] h-[100px] object-cover rounded-[8px] ${
                    selectedProduct === product.id
                      ? 'border-neon-red border-2'
                      : ''
                  }`}
                  src={product.img}
                  width={130}
                  height={130}
                  alt={product.description}
                />
              }
            </li>
          ))}
        </ul>
        <div className="supersmall:h-[430px] h-[300px]">
          <Image
            className="h-full object-cover rounded-[8px]"
            src={prod.img}
            width={440}
            height={430}
            alt={prod.description}
          />
        </div>
      </div>

      <div className="relative z-10 before:absolute before:w-[42rem] before:h-[42rem] before:bg-neon-purple-gray-400/80 before:rounded-full lg:before:block before:hidden before:z-[-10] before:-top-40 before:left-20 before:overflow-x-hidden">
        <ColorBallsDec
          color="neon-red"
          className="w-[100px] h-[100px] absolute -top-36 right-0 hidden lg:block"
        />
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

          <div className="flex max-w-36 ">
            <LinkButton color="red" href={`/product/${prod.id}`}>
              <p className="flex items-center gap-2">
                <CirclePlus /> ADD
              </p>
            </LinkButton>
          </div>
          <ColorBallsDec
            color="neon-purple"
            className="w-[120px] h-[120px] absolute -bottom-32 right-0 hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};
