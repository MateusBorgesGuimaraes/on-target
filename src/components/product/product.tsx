'use client';

import Image from 'next/image';
import React from 'react';
import { LinkButton } from '../link-button';
import { CirclePlus } from 'lucide-react';
import currency from '@/functions/currency';
import { ColorBallsDec } from '../color-ball-dec';
import { useChangeImages } from '@/hooks/useChangeImages';
import { FullProduct } from '@/types';

type ProductProps = {
  product: FullProduct;
};

export const Product = ({ product }: ProductProps) => {
  const images = [
    {
      id: 1,
      image:
        product.mainImage?.large?.url ||
        product.mainImage?.medium?.url ||
        product.mainImage?.small?.url ||
        product.mainImage?.thumbnail?.url ||
        '',
    },
    {
      id: 2,
      image:
        product.secondImage?.large?.url ||
        product.secondImage?.medium?.url ||
        product.secondImage?.small?.url ||
        product.secondImage?.thumbnail?.url ||
        '',
    },
    {
      id: 3,
      image:
        product.thirdImage?.large?.url ||
        product.thirdImage?.medium?.url ||
        product.thirdImage?.small?.url ||
        product.thirdImage?.thumbnail?.url ||
        '',
    },
  ];
  const { changeImage, selectedImage } = useChangeImages(images);

  return (
    <div className="flex lg:gap-32 gap-10 lg:flex-row flex-col">
      <div className="flex gap-4 supersmall:flex-row flex-col">
        <ul className="flex supersmall:flex-col flex-row gap-4">
          {images.map((img) => (
            <li
              onClick={() => changeImage(img.id)}
              key={img.id}
              className="cursor-pointer group"
            >
              {
                <Image
                  className={`w-[130px] supersmall:h-[130px] h-[100px] object-cover rounded-[8px] ${
                    selectedImage === img.id ? 'border-neon-red border-2' : ''
                  }`}
                  src={`http://localhost:1337${img.image}`}
                  width={130}
                  height={130}
                  alt={product.description || 'teste'}
                />
              }
            </li>
          ))}
        </ul>
        <div className="supersmall:h-[430px] h-[300px]">
          <Image
            className="h-full object-cover rounded-[8px]"
            src={`http://localhost:1337${
              product.mainImage?.large?.url || product.mainImage?.medium?.url
            }`}
            width={440}
            height={430}
            alt={product.description || 'teste'}
          />
        </div>
      </div>

      <div className="relative z-10 before:absolute before:w-[42rem] before:h-[42rem] before:bg-neon-purple-gray-400/80 before:rounded-full lg:before:block before:hidden before:z-[-10] before:-top-40 before:left-20 before:overflow-x-hidden">
        <ColorBallsDec
          color="neon-red"
          className="w-[100px] h-[100px] absolute -top-36 right-0 hidden lg:block"
        />
        <h2 className="sm:text-8xl font-bebas text-5xl">{product.name}</h2>
        <div className="mt-7 flex flex-col gap-7">
          <div className="flex justify-between items-center ">
            <p className="text-4xl font-bebas">PREÇO</p>
            <p className="text-xl text-neon-purple-gray-100">
              {currency(product.price)}
            </p>
          </div>

          <div className="flex justify-between items-center ">
            <p className="text-4xl font-bebas">STOCK</p>
            <p className="text-xl text-neon-purple-gray-100">{product.stock}</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-4xl font-bebas">DESCRIÇÃO</p>
            <p className="text-xl text-neon-purple-gray-100 max-w-[600px]">
              {product.description}
            </p>
          </div>

          <div className="flex max-w-36 ">
            <LinkButton color="red" href={`/product/${product.id}`}>
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
