import { Card } from '../card';

export const Related = () => {
  return (
    <div className="pb-12">
      <h1 className="font-bebas md:text-8xl text-5xl">Parecido com:</h1>
      <div className="pt-12 grid gap-10 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
