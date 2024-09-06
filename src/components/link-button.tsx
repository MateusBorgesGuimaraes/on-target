import { cn } from '@/lib/utils';
import Link from 'next/link';

type LinkButtonProps = {
  children: React.ReactNode;
  color: 'red' | 'purple';
  href: string;
};

export const LinkButton = ({ children, color, href }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'py-[6px] w-full text-4xl font-bebas text-white duration-300 flex items-center justify-center',
        {
          'bg-neon-red hover:bg-neon-red/80': color === 'red',
          'bg-neon-purple hover:bg-neon-purple/80': color === 'purple',
        },
      )}
    >
      {children}
    </Link>
  );
};
