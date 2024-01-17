import { ErrorCatcher } from '@/sections/ErrorCatcher';

const NotFound = async () => {
  return <ErrorCatcher error="not-found" />;
};

export default NotFound;
