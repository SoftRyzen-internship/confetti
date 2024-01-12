import { useState, useEffect } from 'react';

import { getCurrentScreenWidth } from '../helpers';

export const useCurrentScreenWidth = () => {
  const [currentScreenWidth, setCurrentScreenWidth] = useState<number>();

  const resizeHandler = () => {
    setCurrentScreenWidth(getCurrentScreenWidth());
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    setCurrentScreenWidth(getCurrentScreenWidth());

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return { currentScreenWidth };
};
