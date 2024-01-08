import { ReactNode } from 'react';

export type SectionTitleProps = {
  children: ReactNode;
  ariaLabelledbyId: string;
  accentColor?: true;
  center?: true;
  className?: string;
};
