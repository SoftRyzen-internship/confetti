import { ErrorCatcher } from '@/components/base/ErrorCatcher';

const NotFound = async () => {
  return <ErrorCatcher error="not-found" />;
};

export default NotFound;
