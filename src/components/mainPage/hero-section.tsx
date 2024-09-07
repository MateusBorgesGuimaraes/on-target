import { ColorBallsDec } from '../color-ball-dec';
import { LinkButton } from '../link-button';

export const HeroSection = () => {
  return (
    <section className="bg-[url('/assets/images/hero.jpg')] h-screen bg-cover bg-center overflow-hidden overflow-x-hidden">
      <div className="containerCustom flex pt-28 items-center justify-center h-full w-full lg:flex-row flex-col">
        <ColorBallsDec
          color="neon-red"
          className="absolute xl:top-24 top-36 left-1/3 -translate-x-1/2 xl:w-40 xl:h-40 w-28 h-28 lg:block hidden"
        />
        <div className="font-bebas sm:text-9xl smallest:text-8xl text-[5rem] self-center justify-self-center">
          <h1 className="leading-tight">
            <span>Qualidade,</span>
            <br />
            <span className="text-neon-purple">Eficiência,</span>
            <br />
            <span className="text-neon-red">Variedade.</span>
          </h1>
        </div>

        <ColorBallsDec
          color="neon-purple"
          className="absolute bottom-1 left-1/5 xl:w-32 xl:h-32 w-24 h-24 lg:block hidden"
        />

        <div
          className="flex pr-4 flex-col gap-5 xl:max-w-[41.25rem] sm:max-w-[31.25rem] max-w-[21.25rem] w-full lg:ml-auto relative z-10 before:absolute xl:before:w-[50rem] xl:before:h-[50rem] before:w-[42rem] before:h-[42rem] before:bg-neon-purple-gray-500/60 before:rounded-full lg:before:block before:hidden before:z-[-10] xl:before:-top-44 
          before:-top-32
          before:-right-14 before:overflow-x-hidden "
        >
          <p className="xl:text-2xl text-xl lg:flex hidden">
            Descubra a maior variedade de produtos de tecnologia do mercado
            nacional e aproveite os melhores preços que você só encontra aqui.
            Nossa loja oferece uma ampla seleção de dispositivos e acessórios
            para atender todas as suas necessidades tecnológicas, desde os mais
            simples até os mais avançados. Além disso, ao comprar conosco, você
            garante benefícios exclusivos que tornarão sua experiência de compra
            ainda mais vantajosa. Não perca tempo, explore nossas ofertas e
            comece a comprar agora mesmo para aproveitar todas as vantagens
            imperdíveis que temos para você!
          </p>

          <div className="flex sm:gap-10 sm:flex-row flex-col gap-3">
            <LinkButton href={'/'} color="purple">
              CADASTRAR
            </LinkButton>
            <LinkButton href={'/'} color="red">
              ENTRAR
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};
