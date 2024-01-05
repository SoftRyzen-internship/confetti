import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '@/sanity/env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false,
});
