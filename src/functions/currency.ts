export default function currency(value: number) {
  const brl = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    useGrouping: false,
  });

  return brl.format(value);
}
