'use client';
import { useEffect } from 'react';

import { ErrorCatcher } from '@/sections/ErrorCatcher';

const Error = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <ErrorCatcher error="server-error" />;
};
export default Error;
