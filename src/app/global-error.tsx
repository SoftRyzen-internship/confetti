'use client';

import { useEffect } from 'react';

import { ErrorBoundaryView } from '@/components/base';

const GlobalError = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <ErrorBoundaryView error="server-error" />;
};

export default GlobalError;
