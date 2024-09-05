import { ExternalLink, Menu, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export const Header = () => {
  return (
    <header className="containerCustom relative">
      <nav className="flex items-center justify-between pt-10 text-2xl ">
        <Link href={'/'}>
          <Image
            priority
            className="sm:w-[200px] sm:h-[54.18px] smallest:w-[140px] smallest:h-[37.92px] w-[100px] h-[27.09px] "
            src={'/assets/icons/logo.svg'}
            width={200}
            height={54.18}
            alt="logo do site On target"
          />
        </Link>

        <ul className="font-bold lg:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2 hidden">
          <li className="hover:text-neon-purple duration-300">
            <Link href={'/'}>todos</Link>
          </li>
          <li className="hover:text-neon-purple duration-300">
            <Link href={'/'}>mouse</Link>
          </li>
          <li className="hover:text-neon-purple duration-300">
            <Link href={'/'}>teclado</Link>
          </li>
          <li className="hover:text-neon-purple duration-300">
            <Link href={'/'}>headseat</Link>
          </li>
        </ul>

        <button className="lg:flex hidden items-center text-neon-red gap-1">
          <ShoppingBag height={32} width={32} />{' '}
          <p className="font-normal">0</p>
        </button>

        <div className="lg:hidden flex">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <Menu height={32} width={32} className="text-neon-red" />
              </button>
            </SheetTrigger>
            <SheetContent>
              <VisuallyHidden>
                <SheetHeader>
                  <SheetTitle>Menu para navegação.</SheetTitle>
                  <SheetDescription>
                    Menu para a navegação em telas menores.
                  </SheetDescription>
                </SheetHeader>
              </VisuallyHidden>
              <ul className="font-bold flex flex-col items-start justify-center w-full h-full gap-4">
                <li className="bg-neon-purple-gray-500/50 p-2 rounded-md w-full pl-5 hover:text-neon-red duration-300">
                  <Link href={'/'}>todos</Link>
                </li>
                <li className="bg-neon-purple-gray-500/50 p-2 rounded-md w-full pl-5 hover:text-neon-red duration-300">
                  <Link href={'/'}>mouse</Link>
                </li>
                <li className="bg-neon-purple-gray-500/50 p-2 rounded-md w-full pl-5 hover:text-neon-red duration-300">
                  <Link href={'/'}>teclado</Link>
                </li>
                <li className="bg-neon-purple-gray-500/50 p-2 rounded-md w-full pl-5 hover:text-neon-red duration-300">
                  <Link href={'/'}>headset</Link>
                </li>
                <li className="w-full">
                  <button className="flex items-center justify-between text-white gap-1 bg-neon-red w-full py-2 px-4 rounded-md text-xl hover:bg-neon-red/70 duration-300">
                    <span className="flex items-center gap-2">
                      <ShoppingBag height={24} width={24} />{' '}
                      <p className="font-bold">0</p>
                    </span>
                    <span className="flex items-center gap-2 text-base font-normal">
                      abrir carrinho <ExternalLink height={24} width={24} />
                    </span>
                  </button>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};
