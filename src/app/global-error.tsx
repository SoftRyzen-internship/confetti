'use client';
import { useEffect } from 'react';

import { ErrorCatcher } from '@/components/base/ErrorCatcher';

const GlobalError = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <ErrorCatcher error="server-error" />;
};
export default GlobalError;
