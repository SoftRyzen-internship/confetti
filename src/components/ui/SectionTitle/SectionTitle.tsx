import { SectionTitleProps } from './type';

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  accentColor,
  center,
  className = '',
}) => {
  const fontColor = accentColor
    ? 'text-color-accent-primary'
    : 'text-color-primary';
  const isCenteredText = center ? 'text-center' : 'text-left';

  return (
    <h2
      className={`${fontColor} ${isCenteredText} text-[36px] font-extrabold leading-[1.1] 
      tracking-[-0.36px] md:text-[48px] md:tracking-[-0.48px] xl:text-[56px]
      xl:tracking-[-0.56px] ${className}`}
    >
      {children}
    </h2>
  );
};
