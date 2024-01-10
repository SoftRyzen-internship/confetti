import { Dispatch, SetStateAction } from 'react';

export type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};
