type ColorBallDecProps = {
  color: 'neon-red' | 'neon-purple';
  className?: string;
};

export const ColorBallsDec = ({ color, className }: ColorBallDecProps) => {
  return <div className={` bg-${color} rounded-full ${className}`}></div>;
};
