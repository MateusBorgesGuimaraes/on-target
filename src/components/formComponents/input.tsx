import { useFormContext } from 'react-hook-form';

type InputProps = {
  name: string;
  label: string;
  type: string;
};

export const Input = ({ name, label, type }: InputProps) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col">
      <label className="font-bebas text-2xl" htmlFor="">
        {label}
      </label>
      <input
        className="bg-neon-purple-gray-200 h-10 rounded-sm px-2"
        type={type}
        {...register(name)}
      />
    </div>
  );
};
