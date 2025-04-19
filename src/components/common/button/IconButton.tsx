import { PenIcon, PlusIcon } from '../Icons';

type IconType = 'plus' | 'pen';

type IconButtonProps = {
  icon: IconType;
  onClick?: () => void;
};

export const IconButton = ({ icon, onClick }: IconButtonProps) => {
  const icons = {
    plus: <PlusIcon color="gray" />,
    pen: <PenIcon />,
  };

  const variant = icon === 'plus' ? 'light' : 'dark';

  const base = 'rounded-full flex items-center justify-center w-16 h-16 ';
  const variants = {
    light: 'bg-slate-200  ',
    dark: 'bg-slate-900/50 border-2 border-slate-900',
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {icons[icon]}
    </button>
  );
};
