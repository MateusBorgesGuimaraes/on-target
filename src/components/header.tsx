import { Menu, ShoppingBag } from 'lucide-react';
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
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from './ui/dialog';
import { LoginForm } from './loginForm';
import { RegisterForm } from './register-form';

export const Header = () => {
  return (
    <header className="containerCustom relative z-20">
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

        <div className="lg:flex hidden items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <button className="font-bebas bg-neon-purple py-1 px-4 hover:bg-neon-purple/80 duration-300 rounded-sm">
                entrar
              </button>
            </DialogTrigger>
            <DialogContent className="bg-neon-purple-gray-300 border-none">
              <DialogHeader>
                <DialogTitle className="font-bebas text-6xl text-neon-red tracking-wide">
                  LOGIN
                </DialogTitle>
                <DialogDescription>
                  Entre ja na sua conta e comece a comprar com os melhores
                  preços do mercado.
                </DialogDescription>
              </DialogHeader>
              <LoginForm />
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <button className="font-bebas bg-neon-red py-1 px-4 hover:bg-neon-red/80 duration-300 rounded-sm">
                registrar
              </button>
            </DialogTrigger>
            <DialogContent className="bg-neon-purple-gray-300 border-none">
              <DialogHeader>
                <DialogTitle className="font-bebas text-6xl text-neon-red tracking-wide">
                  REGISTRAR
                </DialogTitle>
                <DialogDescription>
                  Registre-se ja e comece a comprar com os melhores preços do
                  mercado.
                </DialogDescription>
              </DialogHeader>
              <RegisterForm />
            </DialogContent>
          </Dialog>

          <button className="flex items-center text-neon-red gap-1">
            <ShoppingBag height={32} width={32} />{' '}
            <p className="font-normal">0</p>
          </button>
        </div>

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
                <li>
                  <button className="flex items-center justify-center text-white gap-1 bg-neon-red w-full py-2 px-4 rounded-md hover:bg-neon-red/70 duration-300 max-w-max text-base">
                    <span className="flex items-center gap-2">
                      <ShoppingBag height={24} width={24} />{' '}
                      <p className="font-bold">0</p> | <span>abrir</span>
                    </span>
                  </button>
                </li>
                <li className="bg-neon-purple-gray-300 p-2 rounded-md w-full pl-5 hover:text-neon-red duration-300">
                  <Link href={'/'}>todos</Link>
                </li>
                <li className="bg-neon-purple-gray-300 p-2 rounded-md w-full pl-5 hover:text-neon-red duration-300">
                  <Link href={'/'}>mouse</Link>
                </li>
                <li className="bg-neon-purple-gray-300 p-2 rounded-md w-full pl-5 hover:text-neon-red duration-300">
                  <Link href={'/'}>teclado</Link>
                </li>
                <li className="bg-neon-purple-gray-300 p-2 rounded-md w-full pl-5 hover:text-neon-red duration-300">
                  <Link href={'/'}>headset</Link>
                </li>
                <li className="w-full">
                  <button className="flex items-center justify-center text-white gap-1 bg-neon-red w-full py-2 px-4 rounded-md hover:bg-neon-red/70 duration-300 text-2xl spacin font-bebas tracking-wider">
                    entrar
                  </button>
                </li>
                <li className="w-full">
                  <button className="flex items-center justify-center text-white gap-1 bg-neon-purple w-full py-2 px-4 rounded-md hover:bg-neon-purple/70 duration-300 text-2xl spacin font-bebas tracking-wider">
                    registrar
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
