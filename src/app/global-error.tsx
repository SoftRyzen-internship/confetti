'use client';

import { ErrorCatcher } from '@/components/base/ErrorCatcher';

const GlobalError = ({ error }: { error: Error & { digest?: string } }) => {
  return (
    <>
      <ErrorCatcher error="server-error" />
      {error}
    </>
  );
};
export default GlobalError;
