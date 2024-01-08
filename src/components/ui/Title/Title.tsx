import { TitleProps } from './type';

export const Title: React.FC<TitleProps> = ({ text, accentColor }) => {
  const fontColor = accentColor
    ? 'text-color-accent-primary'
    : 'text-color-accent-main';

  return <h2 className={fontColor}>{text}</h2>;
};
