import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="containerCustom py-12 flex flex-col">
        <div>
          <Image
            className="sm:w-[200px] sm:h-[54.18px] w-[140px] h-[37.92px] "
            src={'/assets/icons/logo.svg'}
            width={200}
            height={54.18}
            alt="logo do site On target"
          />
        </div>
        <div className="flex justify-between md:flex-nowrap flex-wrap w-full mt-8 smallest:gap-0 gap-4">
          <div className="flex flex-col gap-2 text-xl">
            <h3 className="font-bebas text-neon-purple text-3xl">sobre nós</h3>
            <p>politicas</p>
            <p>objetivos</p>
            <p>social</p>
          </div>

          <div className="flex flex-col gap-2 text-xl">
            <h3 className="font-bebas text-neon-purple text-3xl">contato</h3>
            <p className="underline">ontaret@gmail.com</p>
            <p className="underline">@facebook</p>
            <p className="underline">@instagram</p>
            <p className="underline">@Twitter</p>
          </div>

          <div className="flex flex-col gap-2 text-xl">
            <h3 className="font-bebas text-neon-purple text-3xl">parceiros</h3>
            <p className="underline">@entregasexpress</p>
            <p className="underline">@lgenterprise</p>
            <p className="underline">@mundodosteclados</p>
          </div>
        </div>

        <div className="font-bebas text-2xl mt-12">
          ontarget©todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};
