'use client';
import { useEffect } from 'react';

import { ErrorCatcher } from '@/sections/ErrorCatcher';

const GlobalError = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <html>
      <body>
        <ErrorCatcher error="server-error" />
      </body>
    </html>
  );
};
export default GlobalError;
